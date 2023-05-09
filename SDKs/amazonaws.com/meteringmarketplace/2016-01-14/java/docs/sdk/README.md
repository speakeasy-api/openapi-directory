# SDK

## Overview

<fullname>AWS Marketplace Metering Service</fullname> <p>This reference provides descriptions of the low-level AWS Marketplace Metering Service API.</p> <p>AWS Marketplace sellers can use this API to submit usage data for custom usage dimensions.</p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">AWS Marketplace metering and entitlement API permissions</a> in the <i>AWS Marketplace Seller Guide.</i> </p> <p> <b>Submitting Metering Records</b> </p> <ul> <li> <p> <i>MeterUsage</i> - Submits the metering record for an AWS Marketplace product. <code>MeterUsage</code> is called from an EC2 instance or a container running on EKS or ECS.</p> </li> <li> <p> <i>BatchMeterUsage</i> - Submits the metering record for a set of customers. <code>BatchMeterUsage</code> is called from a software-as-a-service (SaaS) application.</p> </li> </ul> <p> <b>Accepting New Customers</b> </p> <ul> <li> <p> <i>ResolveCustomer</i> - Called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a Registration Token through the browser. The Registration Token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> </li> </ul> <p> <b>Entitlement and Metering for Paid Container Products</b> </p> <ul> <li> <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you can do so if you want to receive usage data in your seller reports. For more information on using the <code>RegisterUsage</code> operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p> </li> </ul> <p> <code>BatchMeterUsage</code> API calls are captured by AWS CloudTrail. You can use Cloudtrail to verify that the SaaS metering records that you sent are accurate by searching for records with the <code>eventName</code> of <code>BatchMeterUsage</code>. You can also use CloudTrail to audit records over time. For more information, see the <i> <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>.</i> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplace/>
### Available Operations

* [batchMeterUsage](#batchmeterusage) - <p> <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter usage for multiple products, you must make multiple calls to <code>BatchMeterUsage</code>.</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p> <p> <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a time.</p> <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p> <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects, showing the result for each <code>UsageRecord</code>, as well as a list of <code>UnprocessedRecords</code>, indicating errors in the service side that you should retry.</p> <p> <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p> <note> <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
* [meterUsage](#meterusage) - <p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p> <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p> <code>MeterUsage</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p>
* [registerUsage](#registerusage) - <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: <code>RegisterUsage</code> allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with <code>RegisterUsage</code> is only required to guard against unauthorized use at container startup, as such a <code>CustomerNotSubscribedException</code> or <code>PlatformNotSupportedException</code> will only be thrown on the initial call to <code>RegisterUsage</code>. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a <code>CustomerNotSubscribedException</code>, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: <code>RegisterUsage</code> meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call <code>RegisterUsage</code> once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>
* [resolveCustomer](#resolvecustomer) - <p> <code>ResolveCustomer</code> is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> <note> <p>The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token.</p> <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>

## batchMeterUsage

<p> <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter usage for multiple products, you must make multiple calls to <code>BatchMeterUsage</code>.</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p> <p> <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a time.</p> <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p> <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects, showing the result for each <code>UsageRecord</code>, as well as a list of <code>UnprocessedRecords</code>, indicating errors in the service side that you should retry.</p> <p> <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p> <note> <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchMeterUsageRequest;
import org.openapis.openapi.models.operations.BatchMeterUsageResponse;
import org.openapis.openapi.models.operations.BatchMeterUsageXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchMeterUsageRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UsageAllocation;
import org.openapis.openapi.models.shared.UsageRecord;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchMeterUsageRequest req = new BatchMeterUsageRequest(                new BatchMeterUsageRequest("commodi",                 new org.openapis.openapi.models.shared.UsageRecord[]{{
                                                add(new UsageRecord("quasi", "reiciendis", OffsetDateTime.parse("2020-05-14T09:04:32.205Z")) {{
                                                    customerIdentifier = "molestiae";
                                                    dimension = "velit";
                                                    quantity = 623510L;
                                                    timestamp = OffsetDateTime.parse("2022-08-30T15:03:11.112Z");
                                                    usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                                        add(new UsageAllocation(673660L) {{
                                                            allocatedUsageQuantity = 674752L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("quo", "sequi") {{
                                                                    key = "enim";
                                                                    value = "odit";
                                                                }}),
                                                                add(new Tag("id", "possimus") {{
                                                                    key = "tenetur";
                                                                    value = "ipsam";
                                                                }}),
                                                                add(new Tag("error", "temporibus") {{
                                                                    key = "aut";
                                                                    value = "quasi";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new UsageRecord("quidem", "molestias", OffsetDateTime.parse("2021-04-09T11:24:10.949Z")) {{
                                                    customerIdentifier = "nihil";
                                                    dimension = "praesentium";
                                                    quantity = 976762L;
                                                    timestamp = OffsetDateTime.parse("2022-05-25T05:33:11.349Z");
                                                    usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                                        add(new UsageAllocation(120196L) {{
                                                            allocatedUsageQuantity = 739264L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("ut", "maiores") {{
                                                                    key = "doloremque";
                                                                    value = "reprehenderit";
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new UsageAllocation(216822L) {{
                                                            allocatedUsageQuantity = 359444L;
                                                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                                add(new Tag("harum", "enim") {{
                                                                    key = "iusto";
                                                                    value = "dicta";
                                                                }}),
                                                                add(new Tag("repudiandae", "quae") {{
                                                                    key = "accusamus";
                                                                    value = "commodi";
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }});, BatchMeterUsageXAmzTargetEnum.AWSMP_METERING_SERVICE_BATCH_METER_USAGE) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            BatchMeterUsageResponse res = sdk.sdk.batchMeterUsage(req);

            if (res.batchMeterUsageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## meterUsage

<p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p> <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p> <code>MeterUsage</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeterUsageRequest;
import org.openapis.openapi.models.operations.MeterUsageResponse;
import org.openapis.openapi.models.operations.MeterUsageXAmzTargetEnum;
import org.openapis.openapi.models.shared.MeterUsageRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UsageAllocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MeterUsageRequest req = new MeterUsageRequest(                new MeterUsageRequest("itaque", OffsetDateTime.parse("2022-09-06T17:20:08.756Z"), "consequatur") {{
                                dryRun = false;
                                usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                    add(new UsageAllocation(264730L) {{
                                        allocatedUsageQuantity = 842342L;
                                        tags = new org.openapis.openapi.models.shared.Tag[]{{
                                            add(new Tag("quibusdam", "labore") {{
                                                key = "deserunt";
                                                value = "distinctio";
                                            }}),
                                        }};
                                    }}),
                                    add(new UsageAllocation(677817L) {{
                                        allocatedUsageQuantity = 183191L;
                                        tags = new org.openapis.openapi.models.shared.Tag[]{{
                                            add(new Tag("perferendis", "magni") {{
                                                key = "cupiditate";
                                                value = "quos";
                                            }}),
                                            add(new Tag("alias", "fugit") {{
                                                key = "assumenda";
                                                value = "ipsam";
                                            }}),
                                        }};
                                    }}),
                                    add(new UsageAllocation(396098L) {{
                                        allocatedUsageQuantity = 569618L;
                                        tags = new org.openapis.openapi.models.shared.Tag[]{{
                                            add(new Tag("labore", "delectus") {{
                                                key = "facilis";
                                                value = "tempore";
                                            }}),
                                            add(new Tag("eligendi", "sint") {{
                                                key = "eum";
                                                value = "non";
                                            }}),
                                        }};
                                    }}),
                                }};
                                usageQuantity = 592042L;
                            }};, MeterUsageXAmzTargetEnum.AWSMP_METERING_SERVICE_METER_USAGE) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            MeterUsageResponse res = sdk.sdk.meterUsage(req);

            if (res.meterUsageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerUsage

<p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: <code>RegisterUsage</code> allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with <code>RegisterUsage</code> is only required to guard against unauthorized use at container startup, as such a <code>CustomerNotSubscribedException</code> or <code>PlatformNotSupportedException</code> will only be thrown on the initial call to <code>RegisterUsage</code>. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a <code>CustomerNotSubscribedException</code>, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: <code>RegisterUsage</code> meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call <code>RegisterUsage</code> once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterUsageRequest;
import org.openapis.openapi.models.operations.RegisterUsageResponse;
import org.openapis.openapi.models.operations.RegisterUsageXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterUsageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterUsageRequest req = new RegisterUsageRequest(                new RegisterUsageRequest("in", 846409L) {{
                                nonce = "maiores";
                            }};, RegisterUsageXAmzTargetEnum.AWSMP_METERING_SERVICE_REGISTER_USAGE) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "magnam";
                xAmzDate = "cumque";
                xAmzSecurityToken = "facere";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aliquid";
            }};            

            RegisterUsageResponse res = sdk.sdk.registerUsage(req);

            if (res.registerUsageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resolveCustomer

<p> <code>ResolveCustomer</code> is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> <note> <p>The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token.</p> <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResolveCustomerRequest;
import org.openapis.openapi.models.operations.ResolveCustomerResponse;
import org.openapis.openapi.models.operations.ResolveCustomerXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResolveCustomerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResolveCustomerRequest req = new ResolveCustomerRequest(                new ResolveCustomerRequest("accusamus");, ResolveCustomerXAmzTargetEnum.AWSMP_METERING_SERVICE_RESOLVE_CUSTOMER) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "provident";
            }};            

            ResolveCustomerResponse res = sdk.sdk.resolveCustomer(req);

            if (res.resolveCustomerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

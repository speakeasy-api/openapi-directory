# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchMeterUsageXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchMeterUsageHeaders;
import org.openapis.openapi.models.operations.BatchMeterUsageRequest;
import org.openapis.openapi.models.operations.BatchMeterUsageResponse;
import org.openapis.openapi.models.shared.BatchMeterUsageRequest;
import org.openapis.openapi.models.shared.UsageRecord;
import org.openapis.openapi.models.shared.UsageAllocation;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchMeterUsageRequest req = new BatchMeterUsageRequest() {{
                headers = new BatchMeterUsageHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSMPMeteringService.BatchMeterUsage";
                }};
                request = new BatchMeterUsageRequest() {{
                    productCode = "illum";
                    usageRecords = new org.openapis.openapi.models.shared.UsageRecord[]{{
                        add(new UsageRecord() {{
                            customerIdentifier = "error";
                            dimension = "deserunt";
                            quantity = 384382;
                            timestamp = "2022-09-14T09:35:47.986Z";
                            usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 56713;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "tempora";
                                            value = "suscipit";
                                        }}),
                                        add(new Tag() {{
                                            key = "molestiae";
                                            value = "minus";
                                        }}),
                                        add(new Tag() {{
                                            key = "placeat";
                                            value = "voluptatum";
                                        }}),
                                        add(new Tag() {{
                                            key = "iusto";
                                            value = "excepturi";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 392785;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "temporibus";
                                            value = "ab";
                                        }}),
                                        add(new Tag() {{
                                            key = "quis";
                                            value = "veritatis";
                                        }}),
                                        add(new Tag() {{
                                            key = "deserunt";
                                            value = "perferendis";
                                        }}),
                                        add(new Tag() {{
                                            key = "ipsam";
                                            value = "repellendus";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 957156;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "odit";
                                            value = "at";
                                        }}),
                                        add(new Tag() {{
                                            key = "at";
                                            value = "maiores";
                                        }}),
                                        add(new Tag() {{
                                            key = "molestiae";
                                            value = "quod";
                                        }}),
                                        add(new Tag() {{
                                            key = "quod";
                                            value = "esse";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 520478;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "dolorum";
                                            value = "dicta";
                                        }}),
                                        add(new Tag() {{
                                            key = "nam";
                                            value = "officia";
                                        }}),
                                        add(new Tag() {{
                                            key = "occaecati";
                                            value = "fugit";
                                        }}),
                                        add(new Tag() {{
                                            key = "deleniti";
                                            value = "hic";
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UsageRecord() {{
                            customerIdentifier = "optio";
                            dimension = "totam";
                            quantity = 105907;
                            timestamp = "2022-07-12T03:15:36.542Z";
                            usageAllocations = new org.openapis.openapi.models.shared.UsageAllocation[]{{
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 186332;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "cum";
                                            value = "esse";
                                        }}),
                                        add(new Tag() {{
                                            key = "ipsum";
                                            value = "excepturi";
                                        }}),
                                        add(new Tag() {{
                                            key = "aspernatur";
                                            value = "perferendis";
                                        }}),
                                        add(new Tag() {{
                                            key = "ad";
                                            value = "natus";
                                        }}),
                                    }};
                                }}),
                                add(new UsageAllocation() {{
                                    allocatedUsageQuantity = 149675;
                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag() {{
                                            key = "dolor";
                                            value = "natus";
                                        }}),
                                        add(new Tag() {{
                                            key = "laboriosam";
                                            value = "hic";
                                        }}),
                                        add(new Tag() {{
                                            key = "saepe";
                                            value = "fuga";
                                        }}),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};            

            BatchMeterUsageResponse res = sdk.batchMeterUsage(req);

            if (res.batchMeterUsageResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchMeterUsage` - <p> <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter usage for multiple products, you must make multiple calls to <code>BatchMeterUsage</code>.</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p> <p> <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a time.</p> <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p> <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects, showing the result for each <code>UsageRecord</code>, as well as a list of <code>UnprocessedRecords</code>, indicating errors in the service side that you should retry.</p> <p> <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p> <note> <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
* `meterUsage` - <p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p> <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p> <code>MeterUsage</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p>
* `registerUsage` - <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: <code>RegisterUsage</code> allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with <code>RegisterUsage</code> is only required to guard against unauthorized use at container startup, as such a <code>CustomerNotSubscribedException</code> or <code>PlatformNotSupportedException</code> will only be thrown on the initial call to <code>RegisterUsage</code>. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a <code>CustomerNotSubscribedException</code>, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: <code>RegisterUsage</code> meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call <code>RegisterUsage</code> once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>
* `resolveCustomer` - <p> <code>ResolveCustomer</code> is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> <note> <p>The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token.</p> <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

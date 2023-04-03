# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/meteringmarketplace/2016-01-14/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchMeterUsageRequest{
        BatchMeterUsageRequest: shared.BatchMeterUsageRequest{
            ProductCode: "corrupti",
            UsageRecords: []shared.UsageRecord{
                shared.UsageRecord{
                    CustomerIdentifier: "distinctio",
                    Dimension: "quibusdam",
                    Quantity: 602763,
                    Timestamp: "2021-05-14T08:28:11.899Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 423655,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "deserunt",
                                    Value: "suscipit",
                                },
                                shared.Tag{
                                    Key: "iure",
                                    Value: "magnam",
                                },
                                shared.Tag{
                                    Key: "debitis",
                                    Value: "ipsa",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 963663,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "suscipit",
                                    Value: "molestiae",
                                },
                                shared.Tag{
                                    Key: "minus",
                                    Value: "placeat",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 528895,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "excepturi",
                                    Value: "nisi",
                                },
                                shared.Tag{
                                    Key: "recusandae",
                                    Value: "temporibus",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 71036,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "veritatis",
                                    Value: "deserunt",
                                },
                                shared.Tag{
                                    Key: "perferendis",
                                    Value: "ipsam",
                                },
                            },
                        },
                    },
                },
                shared.UsageRecord{
                    CustomerIdentifier: "repellendus",
                    Dimension: "sapiente",
                    Quantity: 778157,
                    Timestamp: "2022-02-17T10:41:36.857Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 978619,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "quod",
                                    Value: "quod",
                                },
                                shared.Tag{
                                    Key: "esse",
                                    Value: "totam",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 780529,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "dicta",
                                    Value: "nam",
                                },
                                shared.Tag{
                                    Key: "officia",
                                    Value: "occaecati",
                                },
                                shared.Tag{
                                    Key: "fugit",
                                    Value: "deleniti",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 944669,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "totam",
                                    Value: "beatae",
                                },
                                shared.Tag{
                                    Key: "commodi",
                                    Value: "molestiae",
                                },
                                shared.Tag{
                                    Key: "modi",
                                    Value: "qui",
                                },
                                shared.Tag{
                                    Key: "impedit",
                                    Value: "cum",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 456150,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "excepturi",
                                    Value: "aspernatur",
                                },
                            },
                        },
                    },
                },
                shared.UsageRecord{
                    CustomerIdentifier: "perferendis",
                    Dimension: "ad",
                    Quantity: 617636,
                    Timestamp: "2022-05-22T14:02:28.908Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 616934,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "hic",
                                    Value: "saepe",
                                },
                                shared.Tag{
                                    Key: "fuga",
                                    Value: "in",
                                },
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: "corporis",
        XAmzContentSha256: "iste",
        XAmzCredential: "iure",
        XAmzDate: "saepe",
        XAmzSecurityToken: "quidem",
        XAmzSignature: "architecto",
        XAmzSignedHeaders: "ipsa",
        XAmzTarget: "AWSMPMeteringService.BatchMeterUsage",
    }

    ctx := context.Background()
    res, err := s.BatchMeterUsage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchMeterUsageResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchMeterUsage` - <p> <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter usage for multiple products, you must make multiple calls to <code>BatchMeterUsage</code>.</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p> <p> <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a time.</p> <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p> <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects, showing the result for each <code>UsageRecord</code>, as well as a list of <code>UnprocessedRecords</code>, indicating errors in the service side that you should retry.</p> <p> <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p> <note> <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
* `MeterUsage` - <p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p> <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p> <code>MeterUsage</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p>
* `RegisterUsage` - <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: <code>RegisterUsage</code> allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with <code>RegisterUsage</code> is only required to guard against unauthorized use at container startup, as such a <code>CustomerNotSubscribedException</code> or <code>PlatformNotSupportedException</code> will only be thrown on the initial call to <code>RegisterUsage</code>. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a <code>CustomerNotSubscribedException</code>, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: <code>RegisterUsage</code> meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call <code>RegisterUsage</code> once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>
* `ResolveCustomer` - <p> <code>ResolveCustomer</code> is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> <note> <p>The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token.</p> <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

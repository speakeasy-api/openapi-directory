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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchMeterUsageRequest{
        Headers: operations.BatchMeterUsageHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSMPMeteringService.BatchMeterUsage",
        },
        Request: shared.BatchMeterUsageRequest{
            ProductCode: "nihil",
            UsageRecords: []shared.UsageRecord{
                shared.UsageRecord{
                    CustomerIdentifier: "facilis",
                    Dimension: "eum",
                    Quantity: 437587,
                    Timestamp: "2022-12-10T22:07:57.076Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 56713,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "enim",
                                    Value: "eum",
                                },
                                shared.Tag{
                                    Key: "voluptatum",
                                    Value: "autem",
                                },
                                shared.Tag{
                                    Key: "vel",
                                    Value: "non",
                                },
                                shared.Tag{
                                    Key: "deleniti",
                                    Value: "similique",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 392785,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "quo",
                                    Value: "quasi",
                                },
                                shared.Tag{
                                    Key: "laboriosam",
                                    Value: "dicta",
                                },
                                shared.Tag{
                                    Key: "est",
                                    Value: "voluptatem",
                                },
                                shared.Tag{
                                    Key: "consequatur",
                                    Value: "fugiat",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 957156,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "eos",
                                    Value: "accusamus",
                                },
                                shared.Tag{
                                    Key: "accusamus",
                                    Value: "reiciendis",
                                },
                                shared.Tag{
                                    Key: "rem",
                                    Value: "quibusdam",
                                },
                                shared.Tag{
                                    Key: "et",
                                    Value: "praesentium",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 520478,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "soluta",
                                    Value: "sed",
                                },
                                shared.Tag{
                                    Key: "quisquam",
                                    Value: "rerum",
                                },
                                shared.Tag{
                                    Key: "culpa",
                                    Value: "qui",
                                },
                                shared.Tag{
                                    Key: "sed",
                                    Value: "rerum",
                                },
                            },
                        },
                    },
                },
                shared.UsageRecord{
                    CustomerIdentifier: "possimus",
                    Dimension: "occaecati",
                    Quantity: 105907,
                    Timestamp: "2022-10-29T04:05:49.539Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 264555,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "est",
                                    Value: "id",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 456150,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "similique",
                                    Value: "dolores",
                                },
                            },
                        },
                    },
                },
                shared.UsageRecord{
                    CustomerIdentifier: "sit",
                    Dimension: "quia",
                    Quantity: 617636,
                    Timestamp: "2023-02-02T21:23:01.747Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 222321,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "iure",
                                    Value: "earum",
                                },
                                shared.Tag{
                                    Key: "ut",
                                    Value: "soluta",
                                },
                                shared.Tag{
                                    Key: "qui",
                                    Value: "ea",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 613064,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "ut",
                                    Value: "optio",
                                },
                                shared.Tag{
                                    Key: "aspernatur",
                                    Value: "inventore",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 969810,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "et",
                                    Value: "libero",
                                },
                                shared.Tag{
                                    Key: "ipsum",
                                    Value: "non",
                                },
                                shared.Tag{
                                    Key: "ea",
                                    Value: "magni",
                                },
                            },
                        },
                    },
                },
            },
        },
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
## SDK Available Operations

### SDK SDK

* `BatchMeterUsage` - <p> <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter usage for multiple products, you must make multiple calls to <code>BatchMeterUsage</code>.</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p> <p> <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a time.</p> <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p> <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects, showing the result for each <code>UsageRecord</code>, as well as a list of <code>UnprocessedRecords</code>, indicating errors in the service side that you should retry.</p> <p> <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p> <note> <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
* `MeterUsage` - <p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p> <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p> <code>MeterUsage</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p>
* `RegisterUsage` - <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: <code>RegisterUsage</code> allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with <code>RegisterUsage</code> is only required to guard against unauthorized use at container startup, as such a <code>CustomerNotSubscribedException</code> or <code>PlatformNotSupportedException</code> will only be thrown on the initial call to <code>RegisterUsage</code>. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a <code>CustomerNotSubscribedException</code>, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: <code>RegisterUsage</code> meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call <code>RegisterUsage</code> once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>
* `ResolveCustomer` - <p> <code>ResolveCustomer</code> is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> <note> <p>The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token.</p> <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

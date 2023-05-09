<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchMeterUsage(ctx, operations.BatchMeterUsageRequest{
        BatchMeterUsageRequest: shared.BatchMeterUsageRequest{
            ProductCode: "corrupti",
            UsageRecords: []shared.UsageRecord{
                shared.UsageRecord{
                    CustomerIdentifier: "distinctio",
                    Dimension: "quibusdam",
                    Quantity: sdk.Int64(602763),
                    Timestamp: types.MustTimeFromString("2021-05-14T08:28:11.899Z"),
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
                    Quantity: sdk.Int64(778157),
                    Timestamp: types.MustTimeFromString("2022-02-17T10:41:36.857Z"),
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
                    Quantity: sdk.Int64(617636),
                    Timestamp: types.MustTimeFromString("2022-05-22T14:02:28.908Z"),
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
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.BatchMeterUsageXAmzTargetEnumAwsmpMeteringServiceBatchMeterUsage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchMeterUsageResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
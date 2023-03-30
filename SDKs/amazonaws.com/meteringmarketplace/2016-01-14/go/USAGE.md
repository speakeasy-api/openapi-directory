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
                    Timestamp: "2022-12-11T09:34:38.330Z",
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
                    Timestamp: "2022-10-29T15:32:30.787Z",
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
                    Timestamp: "2023-02-03T08:49:42.994Z",
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
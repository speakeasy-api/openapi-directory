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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSMPMeteringService.BatchMeterUsage",
        },
        Request: shared.BatchMeterUsageRequest{
            ProductCode: "illum",
            UsageRecords: []shared.UsageRecord{
                shared.UsageRecord{
                    CustomerIdentifier: "error",
                    Dimension: "deserunt",
                    Quantity: 384382,
                    Timestamp: "2022-09-14T09:35:47.986Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 56713,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "tempora",
                                    Value: "suscipit",
                                },
                                shared.Tag{
                                    Key: "molestiae",
                                    Value: "minus",
                                },
                                shared.Tag{
                                    Key: "placeat",
                                    Value: "voluptatum",
                                },
                                shared.Tag{
                                    Key: "iusto",
                                    Value: "excepturi",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 392785,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "temporibus",
                                    Value: "ab",
                                },
                                shared.Tag{
                                    Key: "quis",
                                    Value: "veritatis",
                                },
                                shared.Tag{
                                    Key: "deserunt",
                                    Value: "perferendis",
                                },
                                shared.Tag{
                                    Key: "ipsam",
                                    Value: "repellendus",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 957156,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "odit",
                                    Value: "at",
                                },
                                shared.Tag{
                                    Key: "at",
                                    Value: "maiores",
                                },
                                shared.Tag{
                                    Key: "molestiae",
                                    Value: "quod",
                                },
                                shared.Tag{
                                    Key: "quod",
                                    Value: "esse",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 520478,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "dolorum",
                                    Value: "dicta",
                                },
                                shared.Tag{
                                    Key: "nam",
                                    Value: "officia",
                                },
                                shared.Tag{
                                    Key: "occaecati",
                                    Value: "fugit",
                                },
                                shared.Tag{
                                    Key: "deleniti",
                                    Value: "hic",
                                },
                            },
                        },
                    },
                },
                shared.UsageRecord{
                    CustomerIdentifier: "optio",
                    Dimension: "totam",
                    Quantity: 105907,
                    Timestamp: "2022-07-12T03:15:36.542Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 186332,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "cum",
                                    Value: "esse",
                                },
                                shared.Tag{
                                    Key: "ipsum",
                                    Value: "excepturi",
                                },
                                shared.Tag{
                                    Key: "aspernatur",
                                    Value: "perferendis",
                                },
                                shared.Tag{
                                    Key: "ad",
                                    Value: "natus",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 149675,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "dolor",
                                    Value: "natus",
                                },
                                shared.Tag{
                                    Key: "laboriosam",
                                    Value: "hic",
                                },
                                shared.Tag{
                                    Key: "saepe",
                                    Value: "fuga",
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
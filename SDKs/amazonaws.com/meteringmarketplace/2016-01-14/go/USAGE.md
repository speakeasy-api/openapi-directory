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
                    Timestamp: "2022-10-21T09:07:59.721Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 891773,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "delectus",
                                    Value: "tempora",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 383441,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "minus",
                                    Value: "placeat",
                                },
                                shared.Tag{
                                    Key: "voluptatum",
                                    Value: "iusto",
                                },
                            },
                        },
                    },
                },
                shared.UsageRecord{
                    CustomerIdentifier: "excepturi",
                    Dimension: "nisi",
                    Quantity: 925597,
                    Timestamp: "2022-05-28T22:20:50.323Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 337396,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "deserunt",
                                    Value: "perferendis",
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
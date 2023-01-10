<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchMeterUsageRequest{
        Headers: operations.BatchMeterUsageHeaders{
            XAmzAlgorithm: "nihil",
            XAmzContentSha256: "dolorem",
            XAmzCredential: "impedit",
            XAmzDate: "laboriosam",
            XAmzSecurityToken: "iste",
            XAmzSignature: "soluta",
            XAmzSignedHeaders: "ut",
            XAmzTarget: "AWSMPMeteringService.BatchMeterUsage",
        },
        Request: shared.BatchMeterUsageRequest{
            ProductCode: "vel",
            UsageRecords: []shared.UsageRecord{
                shared.UsageRecord{
                    CustomerIdentifier: "soluta",
                    Dimension: "alias",
                    Quantity: 3089778739814785022,
                    Timestamp: "1984-04-21T17:27:21Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 4453435121235553912,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "dolore",
                                    Value: "quidem",
                                },
                                shared.Tag{
                                    Key: "doloribus",
                                    Value: "at",
                                },
                                shared.Tag{
                                    Key: "dolore",
                                    Value: "et",
                                },
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.BatchMeterUsage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchMeterUsageResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->
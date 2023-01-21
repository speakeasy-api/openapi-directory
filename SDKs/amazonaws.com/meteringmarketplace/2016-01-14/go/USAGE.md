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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSMPMeteringService.BatchMeterUsage",
        },
        Request: shared.BatchMeterUsageRequest{
            ProductCode: "fugit",
            UsageRecords: []shared.UsageRecord{
                shared.UsageRecord{
                    CustomerIdentifier: "nihil",
                    Dimension: "rerum",
                    Quantity: 7837839688282259259,
                    Timestamp: "2004-06-02T10:14:12Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 2339563716805116249,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "dolorem",
                                    Value: "et",
                                },
                                shared.Tag{
                                    Key: "voluptate",
                                    Value: "iste",
                                },
                                shared.Tag{
                                    Key: "vitae",
                                    Value: "totam",
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
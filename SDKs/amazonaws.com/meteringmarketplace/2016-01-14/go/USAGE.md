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
            XAmzAlgorithm: "mollitia",
            XAmzContentSha256: "minima",
            XAmzCredential: "et",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "non",
            XAmzSignature: "officia",
            XAmzSignedHeaders: "quidem",
            XAmzTarget: "AWSMPMeteringService.BatchMeterUsage",
        },
        Request: shared.BatchMeterUsageRequest{
            ProductCode: "odit",
            UsageRecords: []shared.UsageRecord{
                shared.UsageRecord{
                    CustomerIdentifier: "aperiam",
                    Dimension: "omnis",
                    Quantity: 8709626029223311392,
                    Timestamp: "1975-10-23T09:49:22Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 984466220948338528,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "autem",
                                    Value: "ut",
                                },
                                shared.Tag{
                                    Key: "labore",
                                    Value: "amet",
                                },
                                shared.Tag{
                                    Key: "in",
                                    Value: "provident",
                                },
                            },
                        },
                    },
                },
                shared.UsageRecord{
                    CustomerIdentifier: "doloribus",
                    Dimension: "ratione",
                    Quantity: 8395307332568674012,
                    Timestamp: "2002-07-24T23:48:49Z",
                    UsageAllocations: []shared.UsageAllocation{
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 26915580055560406,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "odio",
                                    Value: "eos",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 4641840259416019331,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "exercitationem",
                                    Value: "debitis",
                                },
                                shared.Tag{
                                    Key: "ut",
                                    Value: "tenetur",
                                },
                                shared.Tag{
                                    Key: "aspernatur",
                                    Value: "minus",
                                },
                            },
                        },
                        shared.UsageAllocation{
                            AllocatedUsageQuantity: 3028825199818953796,
                            Tags: []shared.Tag{
                                shared.Tag{
                                    Key: "eum",
                                    Value: "ducimus",
                                },
                                shared.Tag{
                                    Key: "illo",
                                    Value: "quas",
                                },
                                shared.Tag{
                                    Key: "in",
                                    Value: "ipsum",
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
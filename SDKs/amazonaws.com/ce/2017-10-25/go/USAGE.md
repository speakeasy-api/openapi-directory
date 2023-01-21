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
    
    req := operations.CreateAnomalyMonitorRequest{
        Headers: operations.CreateAnomalyMonitorHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSInsightsIndexService.CreateAnomalyMonitor",
        },
        Request: shared.CreateAnomalyMonitorRequest{
            AnomalyMonitor: shared.AnomalyMonitor{
                CreationDate: "fugit",
                DimensionalValueCount: 1543572285742637646,
                LastEvaluatedDate: "nihil",
                LastUpdatedDate: "rerum",
                MonitorArn: "dicta",
                MonitorDimension: "SERVICE",
                MonitorName: "voluptatum",
                MonitorSpecification: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{
                        
                        },
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: "ut",
                        MatchOptions: []shared.MatchOptionEnum{
                            "ABSENT",
                            "ABSENT",
                            "ENDS_WITH",
                        },
                        Values: []string{
                            "totam",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: "RECORD_TYPE",
                        MatchOptions: []shared.MatchOptionEnum{
                            "ENDS_WITH",
                            "ABSENT",
                            "CASE_INSENSITIVE",
                        },
                        Values: []string{
                            "id",
                            "aspernatur",
                        },
                    },
                    Not: &shared.Expression{
                    
                    },
                    Or: []shared.Expression{
                        shared.Expression{
                        
                        },
                        shared.Expression{
                        
                        },
                        shared.Expression{
                        
                        },
                    },
                    Tags: &shared.TagValues{
                        Key: "totam",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CASE_INSENSITIVE",
                            "STARTS_WITH",
                        },
                        Values: []string{
                            "odit",
                            "non",
                            "voluptas",
                        },
                    },
                },
                MonitorType: "CUSTOM",
            },
        },
    }
    
    res, err := s.CreateAnomalyMonitor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnomalyMonitorResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->
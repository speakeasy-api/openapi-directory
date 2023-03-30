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

    req := operations.CreateAnomalyMonitorRequest{
        Headers: operations.CreateAnomalyMonitorHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSInsightsIndexService.CreateAnomalyMonitor",
        },
        Request: shared.CreateAnomalyMonitorRequest{
            AnomalyMonitor: shared.AnomalyMonitor{
                CreationDate: "illum",
                DimensionalValueCount: 423655,
                LastEvaluatedDate: "error",
                LastUpdatedDate: "deserunt",
                MonitorArn: "suscipit",
                MonitorDimension: "SERVICE",
                MonitorName: "iure",
                MonitorSpecification: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: "debitis",
                        MatchOptions: []shared.MatchOptionEnum{
                            "GREATER_THAN_OR_EQUAL",
                        },
                        Values: []string{
                            "suscipit",
                            "molestiae",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: "SAVINGS_PLANS_TYPE",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CONTAINS",
                            "ENDS_WITH",
                            "CONTAINS",
                            "ENDS_WITH",
                        },
                        Values: []string{
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        },
                    },
                    Not: &shared.Expression{},
                    Or: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                        shared.Expression{},
                    },
                    Tags: &shared.TagValues{
                        Key: "perferendis",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CASE_INSENSITIVE",
                            "GREATER_THAN_OR_EQUAL",
                        },
                        Values: []string{
                            "odit",
                            "at",
                            "at",
                            "maiores",
                        },
                    },
                },
                MonitorType: "DIMENSIONAL",
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "quod",
                    Value: "esse",
                },
                shared.ResourceTag{
                    Key: "totam",
                    Value: "porro",
                },
                shared.ResourceTag{
                    Key: "dolorum",
                    Value: "dicta",
                },
                shared.ResourceTag{
                    Key: "nam",
                    Value: "officia",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateAnomalyMonitor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnomalyMonitorResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
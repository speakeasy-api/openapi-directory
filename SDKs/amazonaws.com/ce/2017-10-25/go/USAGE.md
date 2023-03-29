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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSInsightsIndexService.CreateAnomalyMonitor",
        },
        Request: shared.CreateAnomalyMonitorRequest{
            AnomalyMonitor: shared.AnomalyMonitor{
                CreationDate: "nihil",
                DimensionalValueCount: 623564,
                LastEvaluatedDate: "facilis",
                LastUpdatedDate: "eum",
                MonitorArn: "iusto",
                MonitorDimension: "SERVICE",
                MonitorName: "saepe",
                MonitorSpecification: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{},
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: "sapiente",
                        MatchOptions: []shared.MatchOptionEnum{
                            "ENDS_WITH",
                            "ENDS_WITH",
                        },
                        Values: []string{
                            "vel",
                            "non",
                            "deleniti",
                            "similique",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: "TENANCY",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CASE_INSENSITIVE",
                            "EQUALS",
                            "STARTS_WITH",
                            "EQUALS",
                        },
                        Values: []string{
                            "voluptatem",
                            "consequatur",
                            "fugiat",
                        },
                    },
                    Not: &shared.Expression{},
                    Or: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                        shared.Expression{},
                        shared.Expression{},
                    },
                    Tags: &shared.TagValues{
                        Key: "omnis",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CASE_INSENSITIVE",
                        },
                        Values: []string{
                            "reiciendis",
                            "rem",
                            "quibusdam",
                            "et",
                        },
                    },
                },
                MonitorType: "DIMENSIONAL",
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "dolor",
                    Value: "soluta",
                },
                shared.ResourceTag{
                    Key: "sed",
                    Value: "quisquam",
                },
                shared.ResourceTag{
                    Key: "rerum",
                    Value: "culpa",
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
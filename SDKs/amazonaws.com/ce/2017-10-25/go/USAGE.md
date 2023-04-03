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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateAnomalyMonitorRequest{
        CreateAnomalyMonitorRequest: shared.CreateAnomalyMonitorRequest{
            AnomalyMonitor: shared.AnomalyMonitor{
                CreationDate: "corrupti",
                DimensionalValueCount: 592845,
                LastEvaluatedDate: "distinctio",
                LastUpdatedDate: "quibusdam",
                MonitorArn: "unde",
                MonitorDimension: "SERVICE",
                MonitorName: "nulla",
                MonitorSpecification: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                        shared.Expression{},
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: "illum",
                        MatchOptions: []shared.MatchOptionEnum{
                            "CONTAINS",
                            "CASE_SENSITIVE",
                        },
                        Values: []string{
                            "iure",
                            "magnam",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: "AGREEMENT_END_DATE_TIME_BEFORE",
                        MatchOptions: []shared.MatchOptionEnum{
                            "GREATER_THAN_OR_EQUAL",
                        },
                        Values: []string{
                            "suscipit",
                            "molestiae",
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
                        Key: "placeat",
                        MatchOptions: []shared.MatchOptionEnum{
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
                },
                MonitorType: "CUSTOM",
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "ipsam",
                    Value: "repellendus",
                },
            },
        },
        XAmzAlgorithm: "sapiente",
        XAmzContentSha256: "quo",
        XAmzCredential: "odit",
        XAmzDate: "at",
        XAmzSecurityToken: "at",
        XAmzSignature: "maiores",
        XAmzSignedHeaders: "molestiae",
        XAmzTarget: "AWSInsightsIndexService.CreateAnomalyMonitor",
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
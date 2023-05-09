<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateAnomalyMonitor(ctx, operations.CreateAnomalyMonitorRequest{
        CreateAnomalyMonitorRequest: shared.CreateAnomalyMonitorRequest{
            AnomalyMonitor: shared.AnomalyMonitor{
                CreationDate: sdk.String("corrupti"),
                DimensionalValueCount: sdk.Int64(592845),
                LastEvaluatedDate: sdk.String("distinctio"),
                LastUpdatedDate: sdk.String("quibusdam"),
                MonitorArn: sdk.String("unde"),
                MonitorDimension: shared.MonitorDimensionEnumService.ToPointer(),
                MonitorName: "nulla",
                MonitorSpecification: &shared.Expression{
                    And: []shared.Expression{
                        shared.Expression{},
                        shared.Expression{},
                        shared.Expression{},
                    },
                    CostCategories: &shared.CostCategoryValues{
                        Key: sdk.String("illum"),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumContains,
                            shared.MatchOptionEnumCaseSensitive,
                        },
                        Values: []string{
                            "iure",
                            "magnam",
                        },
                    },
                    Dimensions: &shared.DimensionValues{
                        Key: shared.DimensionEnumAgreementEndDateTimeBefore.ToPointer(),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumGreaterThanOrEqual,
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
                        Key: sdk.String("placeat"),
                        MatchOptions: []shared.MatchOptionEnum{
                            shared.MatchOptionEnumEndsWith,
                            shared.MatchOptionEnumContains,
                            shared.MatchOptionEnumEndsWith,
                        },
                        Values: []string{
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        },
                    },
                },
                MonitorType: shared.MonitorTypeEnumCustom,
            },
            ResourceTags: []shared.ResourceTag{
                shared.ResourceTag{
                    Key: "ipsam",
                    Value: "repellendus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateAnomalyMonitorXAmzTargetEnumAwsInsightsIndexServiceCreateAnomalyMonitor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnomalyMonitorResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
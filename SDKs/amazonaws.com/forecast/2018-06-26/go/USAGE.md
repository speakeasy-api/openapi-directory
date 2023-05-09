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
    res, err := s.CreateAutoPredictor(ctx, operations.CreateAutoPredictorRequest{
        CreateAutoPredictorRequest: shared.CreateAutoPredictorRequest{
            DataConfig: &shared.DataConfig{
                AdditionalDatasets: []shared.AdditionalDataset{
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "distinctio": []string{
                                "unde",
                                "nulla",
                                "corrupti",
                                "illum",
                            },
                            "vel": []string{
                                "deserunt",
                                "suscipit",
                                "iure",
                            },
                            "magnam": []string{
                                "ipsa",
                                "delectus",
                                "tempora",
                                "suscipit",
                            },
                        },
                        Name: "Alexandra Schulist",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "nisi": []string{
                                "temporibus",
                                "ab",
                                "quis",
                                "veritatis",
                            },
                            "deserunt": []string{
                                "ipsam",
                            },
                            "repellendus": []string{
                                "quo",
                                "odit",
                                "at",
                                "at",
                            },
                        },
                        Name: "Javier Schmidt",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "porro": []string{
                                "dicta",
                                "nam",
                                "officia",
                            },
                            "occaecati": []string{
                                "deleniti",
                            },
                            "hic": []string{
                                "totam",
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                        },
                        Name: "Norma Ryan",
                    },
                },
                AttributeConfigs: []shared.AttributeConfig{
                    shared.AttributeConfig{
                        AttributeName: "excepturi",
                        Transformations: map[string]string{
                            "perferendis": "ad",
                        },
                    },
                },
                DatasetGroupArn: "natus",
            },
            EncryptionConfig: &shared.EncryptionConfig{
                KMSKeyArn: "sed",
                RoleArn: "iste",
            },
            ExplainPredictor: sdk.Bool(false),
            ForecastDimensions: []string{
                "natus",
            },
            ForecastFrequency: sdk.String("laboriosam"),
            ForecastHorizon: sdk.Int64(943749),
            ForecastTypes: []string{
                "fuga",
                "in",
                "corporis",
                "iste",
            },
            MonitorConfig: &shared.MonitorConfig{
                MonitorName: "iure",
            },
            OptimizationMetric: shared.OptimizationMetricEnumMape.ToPointer(),
            PredictorName: "quidem",
            ReferencePredictorArn: sdk.String("architecto"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "reiciendis",
                    Value: "est",
                },
            },
            TimeAlignmentBoundary: &shared.TimeAlignmentBoundary{
                DayOfMonth: sdk.Int64(653140),
                DayOfWeek: shared.DayOfWeekEnumFriday.ToPointer(),
                Hour: sdk.Int64(170909),
                Month: shared.MonthEnumMarch.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.CreateAutoPredictorXAmzTargetEnumAmazonForecastCreateAutoPredictor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAutoPredictorResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
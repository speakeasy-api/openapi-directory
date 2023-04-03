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

    req := operations.CreateAutoPredictorRequest{
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
                        Name: "molestiae",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "placeat": []string{
                                "iusto",
                                "excepturi",
                                "nisi",
                            },
                            "recusandae": []string{
                                "ab",
                                "quis",
                                "veritatis",
                                "deserunt",
                            },
                            "perferendis": []string{
                                "repellendus",
                                "sapiente",
                            },
                            "quo": []string{
                                "at",
                            },
                        },
                        Name: "at",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "molestiae": []string{
                                "quod",
                                "esse",
                                "totam",
                                "porro",
                            },
                            "dolorum": []string{
                                "nam",
                            },
                            "officia": []string{
                                "fugit",
                                "deleniti",
                                "hic",
                            },
                            "optio": []string{
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                        },
                        Name: "modi",
                    },
                },
                AttributeConfigs: []shared.AttributeConfig{
                    shared.AttributeConfig{
                        AttributeName: "impedit",
                        Transformations: map[string]string{
                            "esse": "ipsum",
                            "excepturi": "aspernatur",
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
            ExplainPredictor: false,
            ForecastDimensions: []string{
                "natus",
            },
            ForecastFrequency: "laboriosam",
            ForecastHorizon: 943749,
            ForecastTypes: []string{
                "fuga",
                "in",
                "corporis",
                "iste",
            },
            MonitorConfig: &shared.MonitorConfig{
                MonitorName: "iure",
            },
            OptimizationMetric: "MAPE",
            PredictorName: "quidem",
            ReferencePredictorArn: "architecto",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "reiciendis",
                    Value: "est",
                },
            },
            TimeAlignmentBoundary: &shared.TimeAlignmentBoundary{
                DayOfMonth: 653140,
                DayOfWeek: "FRIDAY",
                Hour: 170909,
                Month: "MARCH",
            },
        },
        XAmzAlgorithm: "corporis",
        XAmzContentSha256: "explicabo",
        XAmzCredential: "nobis",
        XAmzDate: "enim",
        XAmzSecurityToken: "omnis",
        XAmzSignature: "nemo",
        XAmzSignedHeaders: "minima",
        XAmzTarget: "AmazonForecast.CreateAutoPredictor",
    }

    ctx := context.Background()
    res, err := s.CreateAutoPredictor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAutoPredictorResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
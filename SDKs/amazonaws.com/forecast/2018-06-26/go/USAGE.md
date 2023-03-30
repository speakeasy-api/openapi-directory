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

    req := operations.CreateAutoPredictorRequest{
        Headers: operations.CreateAutoPredictorHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AmazonForecast.CreateAutoPredictor",
        },
        Request: shared.CreateAutoPredictorRequest{
            DataConfig: &shared.DataConfig{
                AdditionalDatasets: []shared.AdditionalDataset{
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "error": []string{
                                "suscipit",
                                "iure",
                                "magnam",
                            },
                            "debitis": []string{
                                "delectus",
                            },
                        },
                        Name: "tempora",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "molestiae": []string{
                                "placeat",
                                "voluptatum",
                                "iusto",
                                "excepturi",
                            },
                            "nisi": []string{
                                "temporibus",
                                "ab",
                                "quis",
                                "veritatis",
                            },
                        },
                        Name: "deserunt",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "ipsam": []string{
                                "sapiente",
                                "quo",
                                "odit",
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
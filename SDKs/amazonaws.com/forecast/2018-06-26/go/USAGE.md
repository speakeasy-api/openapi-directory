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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AmazonForecast.CreateAutoPredictor",
        },
        Request: shared.CreateAutoPredictorRequest{
            DataConfig: &shared.DataConfig{
                AdditionalDatasets: []shared.AdditionalDataset{
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "facilis": []string{
                                "iusto",
                                "ullam",
                            },
                            "saepe": []string{
                                "sapiente",
                            },
                            "enim": []string{
                                "voluptatum",
                                "autem",
                            },
                        },
                        Name: "vel",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "deleniti": []string{
                                "reprehenderit",
                                "molestiae",
                                "quo",
                            },
                            "quasi": []string{
                                "dicta",
                                "est",
                            },
                            "voluptatem": []string{
                                "fugiat",
                                "a",
                            },
                        },
                        Name: "omnis",
                    },
                },
                AttributeConfigs: []shared.AttributeConfig{
                    shared.AttributeConfig{
                        AttributeName: "accusamus",
                        Transformations: map[string]string{
                            "reiciendis": "rem",
                            "quibusdam": "et",
                            "praesentium": "occaecati",
                            "dolor": "soluta",
                        },
                    },
                },
                DatasetGroupArn: "sed",
            },
            EncryptionConfig: &shared.EncryptionConfig{
                KMSKeyArn: "quisquam",
                RoleArn: "rerum",
            },
            ExplainPredictor: false,
            ForecastDimensions: []string{
                "qui",
                "sed",
                "rerum",
            },
            ForecastFrequency: "possimus",
            ForecastHorizon: 521848,
            ForecastTypes: []string{
                "esse",
            },
            MonitorConfig: &shared.MonitorConfig{
                MonitorName: "rem",
            },
            OptimizationMetric: "RMSE",
            PredictorName: "amet",
            ReferencePredictorArn: "est",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "blanditiis",
                    Value: "numquam",
                },
                shared.Tag{
                    Key: "similique",
                    Value: "dolores",
                },
                shared.Tag{
                    Key: "sit",
                    Value: "quia",
                },
            },
            TimeAlignmentBoundary: &shared.TimeAlignmentBoundary{
                DayOfMonth: 617636,
                DayOfWeek: "TUESDAY",
                Hour: 612096,
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
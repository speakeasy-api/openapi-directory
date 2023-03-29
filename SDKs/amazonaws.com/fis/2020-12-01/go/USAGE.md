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

    req := operations.CreateExperimentTemplateRequest{
        Headers: operations.CreateExperimentTemplateHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateExperimentTemplateRequestBody{
            Actions: map[string]shared.CreateExperimentTemplateActionInput{
                "nihil": shared.CreateExperimentTemplateActionInput{
                    ActionID: "fuga",
                    Description: "facilis",
                    Parameters: map[string]string{
                        "iusto": "ullam",
                        "saepe": "inventore",
                    },
                    StartAfter: []string{
                        "enim",
                        "eum",
                        "voluptatum",
                        "autem",
                    },
                    Targets: map[string]string{
                        "non": "deleniti",
                        "similique": "reprehenderit",
                        "molestiae": "quo",
                        "quasi": "laboriosam",
                    },
                },
                "dicta": shared.CreateExperimentTemplateActionInput{
                    ActionID: "est",
                    Description: "voluptatem",
                    Parameters: map[string]string{
                        "fugiat": "a",
                        "omnis": "eos",
                    },
                    StartAfter: []string{
                        "accusamus",
                        "reiciendis",
                        "rem",
                        "quibusdam",
                    },
                    Targets: map[string]string{
                        "praesentium": "occaecati",
                        "dolor": "soluta",
                        "sed": "quisquam",
                        "rerum": "culpa",
                    },
                },
                "qui": shared.CreateExperimentTemplateActionInput{
                    ActionID: "sed",
                    Description: "rerum",
                    Parameters: map[string]string{
                        "occaecati": "odit",
                        "esse": "rem",
                        "voluptatem": "amet",
                        "est": "id",
                    },
                    StartAfter: []string{
                        "numquam",
                        "similique",
                    },
                    Targets: map[string]string{
                        "sit": "quia",
                    },
                },
                "et": shared.CreateExperimentTemplateActionInput{
                    ActionID: "voluptatem",
                    Description: "laborum",
                    Parameters: map[string]string{
                        "et": "iure",
                    },
                    StartAfter: []string{
                        "ut",
                        "soluta",
                        "qui",
                        "ea",
                    },
                    Targets: map[string]string{
                        "iusto": "ut",
                        "optio": "aspernatur",
                        "inventore": "ut",
                    },
                },
            },
            ClientToken: "libero",
            Description: "et",
            LogConfiguration: &operations.CreateExperimentTemplateRequestBodyLogConfiguration{
                CloudWatchLogsConfiguration: &shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput{
                    LogGroupArn: "libero",
                },
                LogSchemaVersion: 170909,
                S3Configuration: &shared.ExperimentTemplateS3LogConfigurationInput{
                    BucketName: "non",
                    Prefix: "ea",
                },
            },
            RoleArn: "magni",
            StopConditions: []shared.CreateExperimentTemplateStopConditionInput{
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "ipsam",
                    Value: "est",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "commodi",
                    Value: "quia",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "similique",
                    Value: "eaque",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "odio",
                    Value: "harum",
                },
            },
            Tags: map[string]string{
                "a": "aut",
                "et": "non",
                "quidem": "neque",
                "asperiores": "et",
            },
            Targets: map[string]shared.CreateExperimentTemplateTargetInput{
                "aliquam": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "totam",
                            Values: []string{
                                "et",
                                "fuga",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "nesciunt",
                            Values: []string{
                                "aut",
                                "cum",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "ipsam": "eos",
                        "omnis": "adipisci",
                        "hic": "consequatur",
                    },
                    ResourceArns: []string{
                        "qui",
                        "perferendis",
                        "aspernatur",
                    },
                    ResourceTags: map[string]string{
                        "quo": "tempore",
                        "explicabo": "aut",
                        "reiciendis": "debitis",
                    },
                    ResourceType: "totam",
                    SelectionMode: "molestias",
                },
                "reiciendis": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "id",
                            Values: []string{
                                "quod",
                                "sit",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "odio": "veniam",
                    },
                    ResourceArns: []string{
                        "sed",
                        "ea",
                        "exercitationem",
                        "deleniti",
                    },
                    ResourceTags: map[string]string{
                        "est": "voluptatem",
                    },
                    ResourceType: "aut",
                    SelectionMode: "esse",
                },
                "sint": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "numquam",
                            Values: []string{
                                "error",
                                "similique",
                                "et",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "molestias": "cupiditate",
                        "sint": "explicabo",
                    },
                    ResourceArns: []string{
                        "in",
                        "vitae",
                        "non",
                        "minima",
                    },
                    ResourceTags: map[string]string{
                        "aut": "libero",
                        "voluptas": "magni",
                    },
                    ResourceType: "est",
                    SelectionMode: "porro",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateExperimentTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExperimentTemplateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
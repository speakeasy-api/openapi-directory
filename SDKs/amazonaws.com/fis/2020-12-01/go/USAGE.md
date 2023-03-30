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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateExperimentTemplateRequestBody{
            Actions: map[string]shared.CreateExperimentTemplateActionInput{
                "vel": shared.CreateExperimentTemplateActionInput{
                    ActionID: "error",
                    Description: "deserunt",
                    Parameters: map[string]string{
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    StartAfter: []string{
                        "tempora",
                        "suscipit",
                        "molestiae",
                        "minus",
                    },
                    Targets: map[string]string{
                        "voluptatum": "iusto",
                        "excepturi": "nisi",
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                },
                "veritatis": shared.CreateExperimentTemplateActionInput{
                    ActionID: "deserunt",
                    Description: "perferendis",
                    Parameters: map[string]string{
                        "repellendus": "sapiente",
                        "quo": "odit",
                    },
                    StartAfter: []string{
                        "at",
                        "maiores",
                        "molestiae",
                        "quod",
                    },
                    Targets: map[string]string{
                        "esse": "totam",
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                },
                "fugit": shared.CreateExperimentTemplateActionInput{
                    ActionID: "deleniti",
                    Description: "hic",
                    Parameters: map[string]string{
                        "totam": "beatae",
                        "commodi": "molestiae",
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    StartAfter: []string{
                        "ipsum",
                        "excepturi",
                    },
                    Targets: map[string]string{
                        "perferendis": "ad",
                    },
                },
                "natus": shared.CreateExperimentTemplateActionInput{
                    ActionID: "sed",
                    Description: "iste",
                    Parameters: map[string]string{
                        "natus": "laboriosam",
                    },
                    StartAfter: []string{
                        "saepe",
                        "fuga",
                        "in",
                        "corporis",
                    },
                    Targets: map[string]string{
                        "iure": "saepe",
                        "quidem": "architecto",
                        "ipsa": "reiciendis",
                    },
                },
            },
            ClientToken: "est",
            Description: "mollitia",
            LogConfiguration: &operations.CreateExperimentTemplateRequestBodyLogConfiguration{
                CloudWatchLogsConfiguration: &shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput{
                    LogGroupArn: "laborum",
                },
                LogSchemaVersion: 170909,
                S3Configuration: &shared.ExperimentTemplateS3LogConfigurationInput{
                    BucketName: "dolorem",
                    Prefix: "corporis",
                },
            },
            RoleArn: "explicabo",
            StopConditions: []shared.CreateExperimentTemplateStopConditionInput{
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "enim",
                    Value: "omnis",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "nemo",
                    Value: "minima",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "excepturi",
                    Value: "accusantium",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "iure",
                    Value: "culpa",
                },
            },
            Tags: map[string]string{
                "sapiente": "architecto",
                "mollitia": "dolorem",
                "culpa": "consequuntur",
                "repellat": "mollitia",
            },
            Targets: map[string]shared.CreateExperimentTemplateTargetInput{
                "numquam": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "quam",
                            Values: []string{
                                "velit",
                                "error",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "quia",
                            Values: []string{
                                "vitae",
                                "laborum",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "enim": "odit",
                        "quo": "sequi",
                        "tenetur": "ipsam",
                    },
                    ResourceArns: []string{
                        "possimus",
                        "aut",
                        "quasi",
                    },
                    ResourceTags: map[string]string{
                        "temporibus": "laborum",
                        "quasi": "reiciendis",
                        "voluptatibus": "vero",
                    },
                    ResourceType: "nihil",
                    SelectionMode: "praesentium",
                },
                "voluptatibus": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "omnis",
                            Values: []string{
                                "cum",
                                "perferendis",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "reprehenderit": "ut",
                    },
                    ResourceArns: []string{
                        "dicta",
                        "corporis",
                        "dolore",
                        "iusto",
                    },
                    ResourceTags: map[string]string{
                        "harum": "enim",
                    },
                    ResourceType: "accusamus",
                    SelectionMode: "commodi",
                },
                "repudiandae": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "ipsum",
                            Values: []string{
                                "molestias",
                                "excepturi",
                                "pariatur",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "praesentium": "rem",
                        "voluptates": "quasi",
                    },
                    ResourceArns: []string{
                        "sint",
                        "veritatis",
                        "itaque",
                        "incidunt",
                    },
                    ResourceTags: map[string]string{
                        "consequatur": "est",
                        "quibusdam": "explicabo",
                    },
                    ResourceType: "deserunt",
                    SelectionMode: "distinctio",
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
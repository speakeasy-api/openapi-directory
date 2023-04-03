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

    req := operations.CreateExperimentTemplateRequest{
        RequestBody: operations.CreateExperimentTemplateRequestBody{
            Actions: map[string]shared.CreateExperimentTemplateActionInput{
                "provident": shared.CreateExperimentTemplateActionInput{
                    ActionID: "distinctio",
                    Description: "quibusdam",
                    Parameters: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    StartAfter: []string{
                        "iure",
                        "magnam",
                    },
                    Targets: map[string]string{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                },
                "iusto": shared.CreateExperimentTemplateActionInput{
                    ActionID: "excepturi",
                    Description: "nisi",
                    Parameters: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    StartAfter: []string{
                        "quo",
                        "odit",
                        "at",
                        "at",
                    },
                    Targets: map[string]string{
                        "molestiae": "quod",
                        "quod": "esse",
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                },
                "nam": shared.CreateExperimentTemplateActionInput{
                    ActionID: "officia",
                    Description: "occaecati",
                    Parameters: map[string]string{
                        "deleniti": "hic",
                    },
                    StartAfter: []string{
                        "totam",
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                    Targets: map[string]string{
                        "qui": "impedit",
                        "cum": "esse",
                    },
                },
            },
            ClientToken: "ipsum",
            Description: "excepturi",
            LogConfiguration: &operations.CreateExperimentTemplateRequestBodyLogConfiguration{
                CloudWatchLogsConfiguration: &shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput{
                    LogGroupArn: "aspernatur",
                },
                LogSchemaVersion: 18789,
                S3Configuration: &shared.ExperimentTemplateS3LogConfigurationInput{
                    BucketName: "ad",
                    Prefix: "natus",
                },
            },
            RoleArn: "sed",
            StopConditions: []shared.CreateExperimentTemplateStopConditionInput{
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "dolor",
                    Value: "natus",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "laboriosam",
                    Value: "hic",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "saepe",
                    Value: "fuga",
                },
            },
            Tags: map[string]string{
                "corporis": "iste",
                "iure": "saepe",
            },
            Targets: map[string]shared.CreateExperimentTemplateTargetInput{
                "architecto": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "reiciendis",
                            Values: []string{
                                "mollitia",
                                "laborum",
                                "dolores",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "corporis": "explicabo",
                    },
                    ResourceArns: []string{
                        "enim",
                        "omnis",
                        "nemo",
                        "minima",
                    },
                    ResourceTags: map[string]string{
                        "accusantium": "iure",
                        "culpa": "doloribus",
                        "sapiente": "architecto",
                    },
                    ResourceType: "mollitia",
                    SelectionMode: "dolorem",
                },
                "culpa": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "repellat",
                            Values: []string{
                                "occaecati",
                                "numquam",
                                "commodi",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "molestiae": "velit",
                        "error": "quia",
                    },
                    ResourceArns: []string{
                        "vitae",
                        "laborum",
                    },
                    ResourceTags: map[string]string{
                        "enim": "odit",
                        "quo": "sequi",
                        "tenetur": "ipsam",
                    },
                    ResourceType: "id",
                    SelectionMode: "possimus",
                },
                "aut": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "error",
                            Values: []string{
                                "laborum",
                                "quasi",
                                "reiciendis",
                                "voluptatibus",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "nihil": "praesentium",
                        "voluptatibus": "ipsa",
                        "omnis": "voluptate",
                        "cum": "perferendis",
                    },
                    ResourceArns: []string{
                        "reprehenderit",
                    },
                    ResourceTags: map[string]string{
                        "maiores": "dicta",
                        "corporis": "dolore",
                    },
                    ResourceType: "iusto",
                    SelectionMode: "dicta",
                },
            },
        },
        XAmzAlgorithm: "harum",
        XAmzContentSha256: "enim",
        XAmzCredential: "accusamus",
        XAmzDate: "commodi",
        XAmzSecurityToken: "repudiandae",
        XAmzSignature: "quae",
        XAmzSignedHeaders: "ipsum",
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
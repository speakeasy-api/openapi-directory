# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/fis/2020-12-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateExperimentTemplate` - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* `DeleteExperimentTemplate` - Deletes the specified experiment template.
* `GetAction` - Gets information about the specified FIS action.
* `GetExperiment` - Gets information about the specified experiment.
* `GetExperimentTemplate` - Gets information about the specified experiment template.
* `GetTargetResourceType` - Gets information about the specified resource type.
* `ListActions` - Lists the available FIS actions.
* `ListExperimentTemplates` - Lists your experiment templates.
* `ListExperiments` - Lists your experiments.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `ListTargetResourceTypes` - Lists the target resource types.
* `StartExperiment` - Starts running an experiment from the specified experiment template.
* `StopExperiment` - Stops the specified experiment.
* `TagResource` - Applies the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
* `UpdateExperimentTemplate` - Updates the specified experiment template.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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

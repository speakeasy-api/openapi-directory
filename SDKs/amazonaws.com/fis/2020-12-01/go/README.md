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
    res, err := s.CreateExperimentTemplate(ctx, operations.CreateExperimentTemplateRequest{
        RequestBody: operations.CreateExperimentTemplateRequestBody{
            Actions: map[string]shared.CreateExperimentTemplateActionInput{
                "provident": shared.CreateExperimentTemplateActionInput{
                    ActionID: "distinctio",
                    Description: sdk.String("quibusdam"),
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
                    Description: sdk.String("nisi"),
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
                    Description: sdk.String("occaecati"),
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
                LogSchemaVersion: sdk.Int64(18789),
                S3Configuration: &shared.ExperimentTemplateS3LogConfigurationInput{
                    BucketName: "ad",
                    Prefix: sdk.String("natus"),
                },
            },
            RoleArn: "sed",
            StopConditions: []shared.CreateExperimentTemplateStopConditionInput{
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "dolor",
                    Value: sdk.String("natus"),
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "laboriosam",
                    Value: sdk.String("hic"),
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "saepe",
                    Value: sdk.String("fuga"),
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
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
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
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateExperimentTemplate](docs/sdk/README.md#createexperimenttemplate) - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* [DeleteExperimentTemplate](docs/sdk/README.md#deleteexperimenttemplate) - Deletes the specified experiment template.
* [GetAction](docs/sdk/README.md#getaction) - Gets information about the specified FIS action.
* [GetExperiment](docs/sdk/README.md#getexperiment) - Gets information about the specified experiment.
* [GetExperimentTemplate](docs/sdk/README.md#getexperimenttemplate) - Gets information about the specified experiment template.
* [GetTargetResourceType](docs/sdk/README.md#gettargetresourcetype) - Gets information about the specified resource type.
* [ListActions](docs/sdk/README.md#listactions) - Lists the available FIS actions.
* [ListExperimentTemplates](docs/sdk/README.md#listexperimenttemplates) - Lists your experiment templates.
* [ListExperiments](docs/sdk/README.md#listexperiments) - Lists your experiments.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [ListTargetResourceTypes](docs/sdk/README.md#listtargetresourcetypes) - Lists the target resource types.
* [StartExperiment](docs/sdk/README.md#startexperiment) - Starts running an experiment from the specified experiment template.
* [StopExperiment](docs/sdk/README.md#stopexperiment) - Stops the specified experiment.
* [TagResource](docs/sdk/README.md#tagresource) - Applies the specified tags to the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [UpdateExperimentTemplate](docs/sdk/README.md#updateexperimenttemplate) - Updates the specified experiment template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

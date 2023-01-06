# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateExperimentTemplateRequest{
        Headers: operations.CreateExperimentTemplateHeaders{
            XAmzAlgorithm: "recusandae",
            XAmzContentSha256: "nostrum",
            XAmzCredential: "illum",
            XAmzDate: "aut",
            XAmzSecurityToken: "quo",
            XAmzSignature: "minus",
            XAmzSignedHeaders: "facilis",
        },
        Request: operations.CreateExperimentTemplateRequestBody{
            Actions: map[string]shared.CreateExperimentTemplateActionInput{
                "officia": shared.CreateExperimentTemplateActionInput{
                    ActionID: "vel",
                    Description: "magni",
                    Parameters: map[string]string{
                        "ut": "ut",
                        "distinctio": "dolor",
                        "nemo": "aut",
                    },
                    StartAfter: []string{
                        "in",
                        "voluptatem",
                        "velit",
                    },
                    Targets: map[string]string{
                        "est": "dignissimos",
                        "hic": "accusantium",
                        "dolores": "et",
                    },
                },
                "quia": shared.CreateExperimentTemplateActionInput{
                    ActionID: "qui",
                    Description: "sit",
                    Parameters: map[string]string{
                        "aperiam": "nulla",
                    },
                    StartAfter: []string{
                        "qui",
                        "ea",
                    },
                    Targets: map[string]string{
                        "eveniet": "reiciendis",
                        "velit": "qui",
                    },
                },
            },
            ClientToken: "quam",
            Description: "sequi",
            RoleArn: "ut",
            StopConditions: []shared.CreateExperimentTemplateStopConditionInput{
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "vel",
                    Value: "reprehenderit",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "nesciunt",
                    Value: "tenetur",
                },
            },
            Tags: map[string]string{
                "fuga": "dolor",
                "enim": "animi",
            },
            Targets: map[string]shared.CreateExperimentTemplateTargetInput{
                "sit": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "in",
                            Values: []string{
                                "id",
                                "ea",
                            },
                        },
                    },
                    ResourceArns: []string{
                        "pariatur",
                        "id",
                    },
                    ResourceTags: map[string]string{
                        "esse": "in",
                        "amet": "consectetur",
                    },
                    ResourceType: "et",
                    SelectionMode: "nesciunt",
                },
                "ab": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "sapiente",
                            Values: []string{
                                "autem",
                                "placeat",
                                "velit",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "minus",
                            Values: []string{
                                "minus",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "voluptas",
                            Values: []string{
                                "aut",
                                "et",
                            },
                        },
                    },
                    ResourceArns: []string{
                        "atque",
                        "praesentium",
                        "perferendis",
                    },
                    ResourceTags: map[string]string{
                        "cumque": "minus",
                    },
                    ResourceType: "quo",
                    SelectionMode: "enim",
                },
                "eaque": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "maxime",
                            Values: []string{
                                "qui",
                                "ea",
                                "porro",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "labore",
                            Values: []string{
                                "sint",
                                "non",
                            },
                        },
                    },
                    ResourceArns: []string{
                        "omnis",
                    },
                    ResourceTags: map[string]string{
                        "cum": "hic",
                    },
                    ResourceType: "qui",
                    SelectionMode: "cum",
                },
            },
        },
    }
    
    res, err := s.CreateExperimentTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExperimentTemplateResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateExperimentTemplate` - <p>Creates an experiment template. </p> <p>To create a template, specify the following information: </p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
* `DeleteExperimentTemplate` - Deletes the specified experiment template.
* `GetAction` - Gets information about the specified AWS FIS action.
* `GetExperiment` - Gets information about the specified experiment.
* `GetExperimentTemplate` - Gets information about the specified experiment template.
* `ListActions` - Lists the available AWS FIS actions.
* `ListExperimentTemplates` - Lists your experiment templates.
* `ListExperiments` - Lists your experiments.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `StartExperiment` - Starts running an experiment from the specified experiment template.
* `StopExperiment` - Stops the specified experiment.
* `TagResource` - Applies the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
* `UpdateExperimentTemplate` - Updates the specified experiment template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

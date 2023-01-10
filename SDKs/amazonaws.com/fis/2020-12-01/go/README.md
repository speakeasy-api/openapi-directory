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
            XAmzAlgorithm: "rem",
            XAmzContentSha256: "perspiciatis",
            XAmzCredential: "molestias",
            XAmzDate: "repellendus",
            XAmzSecurityToken: "doloremque",
            XAmzSignature: "doloremque",
            XAmzSignedHeaders: "consectetur",
        },
        Request: operations.CreateExperimentTemplateRequestBody{
            Actions: map[string]shared.CreateExperimentTemplateActionInput{
                "et": shared.CreateExperimentTemplateActionInput{
                    ActionID: "ut",
                    Description: "eaque",
                    Parameters: map[string]string{
                        "dolorem": "nulla",
                        "nam": "velit",
                    },
                    StartAfter: []string{
                        "culpa",
                    },
                    Targets: map[string]string{
                        "qui": "impedit",
                        "culpa": "voluptatibus",
                        "consequuntur": "sapiente",
                    },
                },
                "sint": shared.CreateExperimentTemplateActionInput{
                    ActionID: "et",
                    Description: "fuga",
                    Parameters: map[string]string{
                        "quidem": "reiciendis",
                    },
                    StartAfter: []string{
                        "quas",
                        "pariatur",
                        "omnis",
                    },
                    Targets: map[string]string{
                        "soluta": "qui",
                        "aut": "et",
                    },
                },
            },
            ClientToken: "omnis",
            Description: "et",
            RoleArn: "architecto",
            StopConditions: []shared.CreateExperimentTemplateStopConditionInput{
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "dolorem",
                    Value: "recusandae",
                },
            },
            Tags: map[string]string{
                "ut": "ab",
            },
            Targets: map[string]shared.CreateExperimentTemplateTargetInput{
                "ut": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "molestiae",
                            Values: []string{
                                "aut",
                                "sequi",
                                "eum",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "iusto",
                            Values: []string{
                                "sunt",
                                "ea",
                                "et",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "officiis",
                            Values: []string{
                                "delectus",
                            },
                        },
                    },
                    ResourceArns: []string{
                        "esse",
                        "ut",
                    },
                    ResourceTags: map[string]string{
                        "deserunt": "ut",
                        "in": "maiores",
                    },
                    ResourceType: "iure",
                    SelectionMode: "qui",
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

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
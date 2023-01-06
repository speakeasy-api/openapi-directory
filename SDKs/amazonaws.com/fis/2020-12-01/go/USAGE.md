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
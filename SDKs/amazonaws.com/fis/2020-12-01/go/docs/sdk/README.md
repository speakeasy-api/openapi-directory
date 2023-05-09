# SDK

## Overview

Fault Injection Simulator is a managed service that enables you to perform fault injection experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Simulator User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/fis/>
### Available Operations

* [CreateExperimentTemplate](#createexperimenttemplate) - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* [DeleteExperimentTemplate](#deleteexperimenttemplate) - Deletes the specified experiment template.
* [GetAction](#getaction) - Gets information about the specified FIS action.
* [GetExperiment](#getexperiment) - Gets information about the specified experiment.
* [GetExperimentTemplate](#getexperimenttemplate) - Gets information about the specified experiment template.
* [GetTargetResourceType](#gettargetresourcetype) - Gets information about the specified resource type.
* [ListActions](#listactions) - Lists the available FIS actions.
* [ListExperimentTemplates](#listexperimenttemplates) - Lists your experiment templates.
* [ListExperiments](#listexperiments) - Lists your experiments.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [ListTargetResourceTypes](#listtargetresourcetypes) - Lists the target resource types.
* [StartExperiment](#startexperiment) - Starts running an experiment from the specified experiment template.
* [StopExperiment](#stopexperiment) - Stops the specified experiment.
* [TagResource](#tagresource) - Applies the specified tags to the specified resource.
* [UntagResource](#untagresource) - Removes the specified tags from the specified resource.
* [UpdateExperimentTemplate](#updateexperimenttemplate) - Updates the specified experiment template.

## CreateExperimentTemplate

<p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateExperimentTemplate(ctx, operations.CreateExperimentTemplateRequest{
        RequestBody: operations.CreateExperimentTemplateRequestBody{
            Actions: map[string]shared.CreateExperimentTemplateActionInput{
                "molestias": shared.CreateExperimentTemplateActionInput{
                    ActionID: "excepturi",
                    Description: sdk.String("pariatur"),
                    Parameters: map[string]string{
                        "praesentium": "rem",
                        "voluptates": "quasi",
                    },
                    StartAfter: []string{
                        "sint",
                        "veritatis",
                        "itaque",
                        "incidunt",
                    },
                    Targets: map[string]string{
                        "consequatur": "est",
                        "quibusdam": "explicabo",
                    },
                },
                "deserunt": shared.CreateExperimentTemplateActionInput{
                    ActionID: "distinctio",
                    Description: sdk.String("quibusdam"),
                    Parameters: map[string]string{
                        "modi": "qui",
                        "aliquid": "cupiditate",
                    },
                    StartAfter: []string{
                        "perferendis",
                        "magni",
                        "assumenda",
                    },
                    Targets: map[string]string{
                        "alias": "fugit",
                        "dolorum": "excepturi",
                    },
                },
                "tempora": shared.CreateExperimentTemplateActionInput{
                    ActionID: "facilis",
                    Description: sdk.String("tempore"),
                    Parameters: map[string]string{
                        "delectus": "eum",
                        "non": "eligendi",
                    },
                    StartAfter: []string{
                        "aliquid",
                        "provident",
                        "necessitatibus",
                    },
                    Targets: map[string]string{
                        "officia": "dolor",
                        "debitis": "a",
                        "dolorum": "in",
                    },
                },
            },
            ClientToken: "in",
            Description: "illum",
            LogConfiguration: &operations.CreateExperimentTemplateRequestBodyLogConfiguration{
                CloudWatchLogsConfiguration: &shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput{
                    LogGroupArn: "maiores",
                },
                LogSchemaVersion: sdk.Int64(699479),
                S3Configuration: &shared.ExperimentTemplateS3LogConfigurationInput{
                    BucketName: "dicta",
                    Prefix: sdk.String("magnam"),
                },
            },
            RoleArn: "cumque",
            StopConditions: []shared.CreateExperimentTemplateStopConditionInput{
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "ea",
                    Value: sdk.String("aliquid"),
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "laborum",
                    Value: sdk.String("accusamus"),
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "non",
                    Value: sdk.String("occaecati"),
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "enim",
                    Value: sdk.String("accusamus"),
                },
            },
            Tags: map[string]string{
                "quidem": "provident",
                "nam": "id",
                "blanditiis": "deleniti",
                "sapiente": "amet",
            },
            Targets: map[string]shared.CreateExperimentTemplateTargetInput{
                "nisi": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "natus",
                            Values: []string{
                                "molestiae",
                                "perferendis",
                                "nihil",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "magnam",
                            Values: []string{
                                "id",
                                "labore",
                                "labore",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "natus": "nobis",
                        "eum": "vero",
                    },
                    ResourceArns: []string{
                        "architecto",
                    },
                    ResourceTags: map[string]string{
                        "et": "excepturi",
                        "ullam": "provident",
                    },
                    ResourceType: "quos",
                    SelectionMode: "sint",
                },
                "accusantium": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "reiciendis",
                            Values: []string{
                                "ad",
                                "eum",
                                "dolor",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "necessitatibus",
                            Values: []string{
                                "nemo",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "quasi",
                            Values: []string{
                                "doloribus",
                                "debitis",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "maxime": "deleniti",
                        "facilis": "in",
                    },
                    ResourceArns: []string{
                        "architecto",
                    },
                    ResourceTags: map[string]string{
                        "ullam": "expedita",
                        "nihil": "repellat",
                        "quibusdam": "sed",
                        "saepe": "pariatur",
                    },
                    ResourceType: "accusantium",
                    SelectionMode: "consequuntur",
                },
                "praesentium": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "magni",
                            Values: []string{
                                "quo",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "illum",
                            Values: []string{
                                "maxime",
                                "ea",
                                "excepturi",
                                "odit",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "ea",
                            Values: []string{
                                "ab",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "quidem": "ipsam",
                        "voluptate": "autem",
                        "nam": "eaque",
                        "pariatur": "nemo",
                    },
                    ResourceArns: []string{
                        "perferendis",
                        "fugiat",
                        "amet",
                        "aut",
                    },
                    ResourceTags: map[string]string{
                        "corporis": "hic",
                        "libero": "nobis",
                        "dolores": "quis",
                        "totam": "dignissimos",
                    },
                    ResourceType: "eaque",
                    SelectionMode: "quis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExperimentTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteExperimentTemplate

Deletes the specified experiment template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteExperimentTemplate(ctx, operations.DeleteExperimentTemplateRequest{
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        ID: "0c28909b-3fe4-49a8-99cb-f48633323f9b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteExperimentTemplateResponse != nil {
        // handle response
    }
}
```

## GetAction

Gets information about the specified FIS action.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAction(ctx, operations.GetActionRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        ID: "00674ebf-6928-40d1-ba77-a89ebf737ae4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetActionResponse != nil {
        // handle response
    }
}
```

## GetExperiment

Gets information about the specified experiment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetExperiment(ctx, operations.GetExperimentRequest{
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("saepe"),
        ID: "6a95d8a0-d446-4ce2-af7a-73cf3be453f8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetExperimentResponse != nil {
        // handle response
    }
}
```

## GetExperimentTemplate

Gets information about the specified experiment template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetExperimentTemplate(ctx, operations.GetExperimentTemplateRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("libero"),
        ID: "5a73429c-db1a-4842-abb6-79d2322715bf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetExperimentTemplateResponse != nil {
        // handle response
    }
}
```

## GetTargetResourceType

Gets information about the specified resource type.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTargetResourceType(ctx, operations.GetTargetResourceTypeRequest{
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        ResourceType: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTargetResourceTypeResponse != nil {
        // handle response
    }
}
```

## ListActions

Lists the available FIS actions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListActions(ctx, operations.ListActionsRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        MaxResults: sdk.Int64(292147),
        NextToken: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActionsResponse != nil {
        // handle response
    }
}
```

## ListExperimentTemplates

Lists your experiment templates.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExperimentTemplates(ctx, operations.ListExperimentTemplatesRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        MaxResults: sdk.Int64(9240),
        NextToken: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExperimentTemplatesResponse != nil {
        // handle response
    }
}
```

## ListExperiments

Lists your experiments.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExperiments(ctx, operations.ListExperimentsRequest{
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("qui"),
        MaxResults: sdk.Int64(63955),
        NextToken: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExperimentsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("quis"),
        ResourceArn: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTargetResourceTypes

Lists the target resource types.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTargetResourceTypes(ctx, operations.ListTargetResourceTypesRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        MaxResults: sdk.Int64(715561),
        NextToken: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetResourceTypesResponse != nil {
        // handle response
    }
}
```

## StartExperiment

Starts running an experiment from the specified experiment template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartExperiment(ctx, operations.StartExperimentRequest{
        RequestBody: operations.StartExperimentRequestBody{
            ClientToken: "odio",
            ExperimentTemplateID: "similique",
            Tags: map[string]string{
                "vero": "ducimus",
                "dolore": "quibusdam",
                "illum": "sequi",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartExperimentResponse != nil {
        // handle response
    }
}
```

## StopExperiment

Stops the specified experiment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopExperiment(ctx, operations.StopExperimentRequest{
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("alias"),
        ID: "a45626d4-3681-43f1-ad9f-5fce6c556146",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopExperimentResponse != nil {
        // handle response
    }
}
```

## TagResource

Applies the specified tags to the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "consectetur": "recusandae",
                "aspernatur": "minima",
                "eaque": "a",
                "libero": "aut",
            },
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
        ResourceArn: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes the specified tags from the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("autem"),
        ResourceArn: "nobis",
        TagKeys: []string{
            "assumenda",
            "nulla",
            "voluptas",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateExperimentTemplate

Updates the specified experiment template.

### Example Usage

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
    res, err := s.SDK.UpdateExperimentTemplate(ctx, operations.UpdateExperimentTemplateRequest{
        RequestBody: operations.UpdateExperimentTemplateRequestBody{
            Actions: map[string]shared.UpdateExperimentTemplateActionInputItem{
                "quasi": shared.UpdateExperimentTemplateActionInputItem{
                    ActionID: sdk.String("tempora"),
                    Description: sdk.String("numquam"),
                    Parameters: map[string]string{
                        "provident": "ipsa",
                    },
                    StartAfter: []string{
                        "magnam",
                        "odio",
                    },
                    Targets: map[string]string{
                        "esse": "esse",
                        "rem": "fuga",
                    },
                },
                "reprehenderit": shared.UpdateExperimentTemplateActionInputItem{
                    ActionID: sdk.String("quidem"),
                    Description: sdk.String("fugiat"),
                    Parameters: map[string]string{
                        "eum": "suscipit",
                        "assumenda": "eos",
                    },
                    StartAfter: []string{
                        "quisquam",
                        "veritatis",
                        "ipsa",
                    },
                    Targets: map[string]string{
                        "quidem": "neque",
                        "quo": "illum",
                        "quo": "fuga",
                    },
                },
                "eius": shared.UpdateExperimentTemplateActionInputItem{
                    ActionID: sdk.String("eos"),
                    Description: sdk.String("voluptas"),
                    Parameters: map[string]string{
                        "cupiditate": "consequatur",
                    },
                    StartAfter: []string{
                        "debitis",
                        "ipsam",
                    },
                    Targets: map[string]string{
                        "sequi": "quo",
                    },
                },
            },
            Description: sdk.String("esse"),
            LogConfiguration: &operations.UpdateExperimentTemplateRequestBodyLogConfiguration{
                CloudWatchLogsConfiguration: &shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput{
                    LogGroupArn: "recusandae",
                },
                LogSchemaVersion: sdk.Int64(44612),
                S3Configuration: &shared.ExperimentTemplateS3LogConfigurationInput{
                    BucketName: "distinctio",
                    Prefix: sdk.String("quod"),
                },
            },
            RoleArn: sdk.String("dignissimos"),
            StopConditions: []shared.UpdateExperimentTemplateStopConditionInput{
                shared.UpdateExperimentTemplateStopConditionInput{
                    Source: "nihil",
                    Value: sdk.String("totam"),
                },
            },
            Targets: map[string]shared.UpdateExperimentTemplateTargetInput{
                "aliquam": shared.UpdateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "occaecati",
                            Values: []string{
                                "sapiente",
                                "dolores",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "deserunt",
                            Values: []string{
                                "accusantium",
                                "porro",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "quas": "praesentium",
                        "consequuntur": "deleniti",
                    },
                    ResourceArns: []string{
                        "fuga",
                    },
                    ResourceTags: map[string]string{
                        "incidunt": "atque",
                        "explicabo": "minima",
                        "nisi": "fugit",
                    },
                    ResourceType: "sapiente",
                    SelectionMode: "consequuntur",
                },
                "ratione": shared.UpdateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "saepe",
                            Values: []string{
                                "atque",
                                "et",
                                "esse",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "accusamus": "veritatis",
                        "esse": "quod",
                        "nam": "vero",
                        "aliquid": "quasi",
                    },
                    ResourceArns: []string{
                        "vel",
                        "harum",
                        "molestiae",
                        "rerum",
                    },
                    ResourceTags: map[string]string{
                        "minima": "distinctio",
                        "eligendi": "sit",
                        "culpa": "tempore",
                    },
                    ResourceType: "adipisci",
                    SelectionMode: "cumque",
                },
                "consequuntur": shared.UpdateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "minus",
                            Values: []string{
                                "sapiente",
                                "consectetur",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "blanditiis": "provident",
                        "a": "nulla",
                    },
                    ResourceArns: []string{
                        "esse",
                        "quasi",
                        "a",
                    },
                    ResourceTags: map[string]string{
                        "sint": "pariatur",
                        "possimus": "quia",
                        "eveniet": "asperiores",
                    },
                    ResourceType: "facere",
                    SelectionMode: "veritatis",
                },
                "consequuntur": shared.UpdateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "similique",
                            Values: []string{
                                "aliquid",
                                "tenetur",
                                "quae",
                            },
                        },
                    },
                    Parameters: map[string]string{
                        "vel": "in",
                        "eius": "libero",
                        "illum": "soluta",
                        "accusantium": "aliquam",
                    },
                    ResourceArns: []string{
                        "dicta",
                        "ullam",
                        "reprehenderit",
                        "ullam",
                    },
                    ResourceTags: map[string]string{
                        "aut": "voluptatum",
                        "qui": "quibusdam",
                    },
                    ResourceType: "ex",
                    SelectionMode: "deleniti",
                },
            },
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("at"),
        ID: "17051339-d080-486a-9840-394c26071f93",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateExperimentTemplateResponse != nil {
        // handle response
    }
}
```

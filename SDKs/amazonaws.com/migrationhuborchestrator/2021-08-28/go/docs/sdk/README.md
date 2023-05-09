# SDK

## Overview

This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Migration Hub Orchestrator. he topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using.

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-orchestrator/>
### Available Operations

* [CreateWorkflow](#createworkflow) - Create a workflow to orchestrate your migrations.
* [CreateWorkflowStep](#createworkflowstep) - Create a step in the migration workflow.
* [CreateWorkflowStepGroup](#createworkflowstepgroup) - Create a step group in a migration workflow.
* [DeleteWorkflow](#deleteworkflow) - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* [DeleteWorkflowStep](#deleteworkflowstep) - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* [DeleteWorkflowStepGroup](#deleteworkflowstepgroup) - Delete a step group in a migration workflow.
* [GetTemplate](#gettemplate) - Get the template you want to use for creating a migration workflow.
* [GetTemplateStep](#gettemplatestep) - Get a specific step in a template.
* [GetTemplateStepGroup](#gettemplatestepgroup) - Get a step group in a template.
* [GetWorkflow](#getworkflow) - Get migration workflow.
* [GetWorkflowStep](#getworkflowstep) - Get a step in the migration workflow.
* [GetWorkflowStepGroup](#getworkflowstepgroup) - Get the step group of a migration workflow.
* [ListPlugins](#listplugins) - List AWS Migration Hub Orchestrator plugins.
* [ListTagsForResource](#listtagsforresource) - List the tags added to a resource.
* [ListTemplateStepGroups](#listtemplatestepgroups) - List the step groups in a template.
* [ListTemplateSteps](#listtemplatesteps) - List the steps in a template.
* [ListTemplates](#listtemplates) - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* [ListWorkflowStepGroups](#listworkflowstepgroups) - List the step groups in a migration workflow.
* [ListWorkflowSteps](#listworkflowsteps) - List the steps in a workflow.
* [ListWorkflows](#listworkflows) - List the migration workflows.
* [RetryWorkflowStep](#retryworkflowstep) - Retry a failed step in a migration workflow.
* [StartWorkflow](#startworkflow) - Start a migration workflow.
* [StopWorkflow](#stopworkflow) - Stop an ongoing migration workflow.
* [TagResource](#tagresource) - Tag a resource by specifying its Amazon Resource Name (ARN).
* [UntagResource](#untagresource) - Deletes the tags for a resource.
* [UpdateWorkflow](#updateworkflow) - Update a migration workflow.
* [UpdateWorkflowStep](#updateworkflowstep) - Update a step in a migration workflow.
* [UpdateWorkflowStepGroup](#updateworkflowstepgroup) - Update the step group in a migration workflow.

## CreateWorkflow

Create a workflow to orchestrate your migrations.

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
    res, err := s.SDK.CreateWorkflow(ctx, operations.CreateWorkflowRequest{
        RequestBody: operations.CreateWorkflowRequestBody{
            ApplicationConfigurationID: "iste",
            Description: sdk.String("dolor"),
            InputParameters: map[string]shared.StepInput{
                "laboriosam": shared.StepInput{
                    IntegerValue: sdk.Int64(943749),
                    ListOfStringsValue: []string{
                        "fuga",
                        "in",
                        "corporis",
                        "iste",
                    },
                    MapOfStringValue: map[string]string{
                        "saepe": "quidem",
                        "architecto": "ipsa",
                    },
                    StringValue: sdk.String("reiciendis"),
                },
                "est": shared.StepInput{
                    IntegerValue: sdk.Int64(653140),
                    ListOfStringsValue: []string{
                        "dolores",
                        "dolorem",
                        "corporis",
                    },
                    MapOfStringValue: map[string]string{
                        "nobis": "enim",
                    },
                    StringValue: sdk.String("omnis"),
                },
                "nemo": shared.StepInput{
                    IntegerValue: sdk.Int64(325047),
                    ListOfStringsValue: []string{
                        "accusantium",
                        "iure",
                        "culpa",
                    },
                    MapOfStringValue: map[string]string{
                        "sapiente": "architecto",
                        "mollitia": "dolorem",
                        "culpa": "consequuntur",
                        "repellat": "mollitia",
                    },
                    StringValue: sdk.String("occaecati"),
                },
            },
            Name: "Lucy Konopelski",
            StepTargets: []string{
                "quia",
                "quis",
                "vitae",
            },
            Tags: map[string]string{
                "animi": "enim",
                "odit": "quo",
                "sequi": "tenetur",
            },
            TemplateID: "ipsam",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMigrationWorkflowResponse != nil {
        // handle response
    }
}
```

## CreateWorkflowStep

Create a step in the migration workflow.

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
    res, err := s.SDK.CreateWorkflowStep(ctx, operations.CreateWorkflowStepRequest{
        RequestBody: operations.CreateWorkflowStepRequestBody{
            Description: sdk.String("quasi"),
            Name: "Jan Thiel",
            Next: []string{
                "ipsa",
                "omnis",
                "voluptate",
                "cum",
            },
            Outputs: []shared.WorkflowStepOutput{
                shared.WorkflowStepOutput{
                    DataType: shared.DataTypeEnumString.ToPointer(),
                    Name: sdk.String("Mrs. April Wuckert"),
                    Required: sdk.Bool(false),
                    Value: &shared.WorkflowStepOutputUnion{
                        IntegerValue: sdk.Int64(480894),
                        ListOfStringValue: []string{
                            "harum",
                        },
                        StringValue: sdk.String("enim"),
                    },
                },
            },
            Previous: []string{
                "commodi",
                "repudiandae",
                "quae",
                "ipsum",
            },
            StepActionType: operations.CreateWorkflowStepRequestBodyStepActionTypeEnumAutomated,
            StepGroupID: "molestias",
            StepTarget: []string{
                "pariatur",
                "modi",
                "praesentium",
            },
            WorkflowID: "rem",
            WorkflowStepAutomationConfiguration: &operations.CreateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration{
                Command: &shared.PlatformCommand{
                    Linux: sdk.String("voluptates"),
                    Windows: sdk.String("quasi"),
                },
                RunEnvironment: shared.RunEnvironmentEnumOnpremise.ToPointer(),
                ScriptLocationS3Bucket: sdk.String("sint"),
                ScriptLocationS3Key: &shared.PlatformScriptKey{
                    Linux: sdk.String("veritatis"),
                    Windows: sdk.String("itaque"),
                },
                TargetType: shared.TargetTypeEnumSingle.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkflowStepResponse != nil {
        // handle response
    }
}
```

## CreateWorkflowStepGroup

Create a step group in a migration workflow.

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
    res, err := s.SDK.CreateWorkflowStepGroup(ctx, operations.CreateWorkflowStepGroupRequest{
        RequestBody: operations.CreateWorkflowStepGroupRequestBody{
            Description: sdk.String("quibusdam"),
            Name: "Pauline Deckow",
            Next: []string{
                "perferendis",
                "magni",
                "assumenda",
            },
            Previous: []string{
                "alias",
                "fugit",
            },
            WorkflowID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkflowStepGroupResponse != nil {
        // handle response
    }
}
```

## DeleteWorkflow

Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.

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
    res, err := s.SDK.DeleteWorkflow(ctx, operations.DeleteWorkflowRequest{
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        ID: "a3efa77d-fb14-4cd6-aae3-95efb9ba88f3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMigrationWorkflowResponse != nil {
        // handle response
    }
}
```

## DeleteWorkflowStep

Delete a step in a migration workflow. Pause the workflow to delete a running step.

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
    res, err := s.SDK.DeleteWorkflowStep(ctx, operations.DeleteWorkflowStepRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ID: "74ba4469-b6e2-4141-9598-90afa563e251",
        StepGroupID: "iure",
        WorkflowID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkflowStepResponse != nil {
        // handle response
    }
}
```

## DeleteWorkflowStepGroup

Delete a step group in a migration workflow.

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
    res, err := s.SDK.DeleteWorkflowStepGroup(ctx, operations.DeleteWorkflowStepGroupRequest{
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        ID: "1e5b7fd2-ed02-4892-9cdd-c692601fb576",
        WorkflowID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkflowStepGroupResponse != nil {
        // handle response
    }
}
```

## GetTemplate

Get the template you want to use for creating a migration workflow.

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
    res, err := s.SDK.GetTemplate(ctx, operations.GetTemplateRequest{
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
        ID: "0c5fbb25-8705-4320-ac73-d5fe9b90c289",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMigrationWorkflowTemplateResponse != nil {
        // handle response
    }
}
```

## GetTemplateStep

Get a specific step in a template.

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
    res, err := s.SDK.GetTemplateStep(ctx, operations.GetTemplateStepRequest{
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
        ID: "9a8d9cbf-4863-4332-bf9b-77f3a4100674",
        StepGroupID: "accusamus",
        TemplateID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplateStepResponse != nil {
        // handle response
    }
}
```

## GetTemplateStepGroup

Get a step group in a template.

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
    res, err := s.SDK.GetTemplateStepGroup(ctx, operations.GetTemplateStepGroupRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        ID: "1ba77a89-ebf7-437a-a420-3ce5e6a95d8a",
        TemplateID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplateStepGroupResponse != nil {
        // handle response
    }
}
```

## GetWorkflow

Get migration workflow.

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
    res, err := s.SDK.GetWorkflow(ctx, operations.GetWorkflowRequest{
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
        ID: "af7a73cf-3be4-453f-870b-326b5a73429c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMigrationWorkflowResponse != nil {
        // handle response
    }
}
```

## GetWorkflowStep

Get a step in the migration workflow.

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
    res, err := s.SDK.GetWorkflowStep(ctx, operations.GetWorkflowStepRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        ID: "2bb679d2-3227-415b-b0cb-b1e31b8b90f3",
        StepGroupID: "dolore",
        WorkflowID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkflowStepResponse != nil {
        // handle response
    }
}
```

## GetWorkflowStepGroup

Get the step group of a migration workflow.

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
    res, err := s.SDK.GetWorkflowStepGroup(ctx, operations.GetWorkflowStepGroupRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        ID: "0adcf4b9-2187-49fc-a953-f73ef7fbc7ab",
        WorkflowID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkflowStepGroupResponse != nil {
        // handle response
    }
}
```

## ListPlugins

List AWS Migration Hub Orchestrator plugins.

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
    res, err := s.SDK.ListPlugins(ctx, operations.ListPluginsRequest{
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        MaxResults: sdk.Int64(13236),
        NextToken: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPluginsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List the tags added to a resource.

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
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("iusto"),
        ResourceArn: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTemplateStepGroups

List the step groups in a template.

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
    res, err := s.SDK.ListTemplateStepGroups(ctx, operations.ListTemplateStepGroupsRequest{
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        MaxResults: sdk.Int64(428224),
        NextToken: sdk.String("possimus"),
        TemplateID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTemplateStepGroupsResponse != nil {
        // handle response
    }
}
```

## ListTemplateSteps

List the steps in a template.

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
    res, err := s.SDK.ListTemplateSteps(ctx, operations.ListTemplateStepsRequest{
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quasi"),
        MaxResults: sdk.Int64(406120),
        NextToken: sdk.String("nulla"),
        StepGroupID: "excepturi",
        TemplateID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTemplateStepsResponse != nil {
        // handle response
    }
}
```

## ListTemplates

List the templates available in Migration Hub Orchestrator to create a migration workflow.

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
    res, err := s.SDK.ListTemplates(ctx, operations.ListTemplatesRequest{
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("corporis"),
        MaxResults: sdk.Int64(333145),
        Name: sdk.String("Stephanie Gutkowski"),
        NextToken: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMigrationWorkflowTemplatesResponse != nil {
        // handle response
    }
}
```

## ListWorkflowStepGroups

List the step groups in a migration workflow.

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
    res, err := s.SDK.ListWorkflowStepGroups(ctx, operations.ListWorkflowStepGroupsRequest{
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("aut"),
        MaxResults: sdk.Int64(11427),
        NextToken: sdk.String("deleniti"),
        WorkflowID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowStepGroupsResponse != nil {
        // handle response
    }
}
```

## ListWorkflowSteps

List the steps in a workflow.

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
    res, err := s.SDK.ListWorkflowSteps(ctx, operations.ListWorkflowStepsRequest{
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        MaxResults: sdk.Int64(672048),
        NextToken: sdk.String("placeat"),
        StepGroupID: "velit",
        WorkflowID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowStepsResponse != nil {
        // handle response
    }
}
```

## ListWorkflows

List the migration workflows.

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
    res, err := s.SDK.ListWorkflows(ctx, operations.ListWorkflowsRequest{
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("libero"),
        AdsApplicationConfigurationName: sdk.String("quasi"),
        MaxResults: sdk.Int64(270328),
        Name: sdk.String("Ms. Janice McLaughlin"),
        NextToken: sdk.String("odio"),
        Status: operations.ListWorkflowsStatusEnumStarting.ToPointer(),
        TemplateID: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMigrationWorkflowsResponse != nil {
        // handle response
    }
}
```

## RetryWorkflowStep

Retry a failed step in a migration workflow.

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
    res, err := s.SDK.RetryWorkflowStep(ctx, operations.RetryWorkflowStepRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ut"),
        ID: "66d28c10-ab3c-4dca-8251-904e523c7e0b",
        StepGroupID: "quod",
        WorkflowID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetryWorkflowStepResponse != nil {
        // handle response
    }
}
```

## StartWorkflow

Start a migration workflow.

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
    res, err := s.SDK.StartWorkflow(ctx, operations.StartWorkflowRequest{
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        ID: "6f2a70c6-8828-42aa-8825-62f222e9817e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartMigrationWorkflowResponse != nil {
        // handle response
    }
}
```

## StopWorkflow

Stop an ongoing migration workflow.

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
    res, err := s.SDK.StopWorkflow(ctx, operations.StopWorkflowRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        ID: "1e6b7b95-bc0a-4b3c-a0c4-f3789fd871f9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopMigrationWorkflowResponse != nil {
        // handle response
    }
}
```

## TagResource

Tag a resource by specifying its Amazon Resource Name (ARN).

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
                "pariatur": "possimus",
                "quia": "eveniet",
                "asperiores": "facere",
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        ResourceArn: "quae",
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

Deletes the tags for a resource.

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
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("soluta"),
        ResourceArn: "accusantium",
        TagKeys: []string{
            "sapiente",
            "dicta",
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

## UpdateWorkflow

Update a migration workflow.

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
    res, err := s.SDK.UpdateWorkflow(ctx, operations.UpdateWorkflowRequest{
        RequestBody: operations.UpdateWorkflowRequestBody{
            Description: sdk.String("ullam"),
            InputParameters: map[string]shared.StepInput{
                "ullam": shared.StepInput{
                    IntegerValue: sdk.Int64(391774),
                    ListOfStringsValue: []string{
                        "voluptatum",
                    },
                    MapOfStringValue: map[string]string{
                        "quibusdam": "ex",
                    },
                    StringValue: sdk.String("deleniti"),
                },
                "itaque": shared.StepInput{
                    IntegerValue: sdk.Int64(680270),
                    ListOfStringsValue: []string{
                        "omnis",
                    },
                    MapOfStringValue: map[string]string{
                        "quasi": "at",
                        "et": "voluptate",
                        "ipsa": "minima",
                        "veritatis": "consectetur",
                    },
                    StringValue: sdk.String("adipisci"),
                },
            },
            Name: sdk.String("Lionel Bartoletti IV"),
            StepTargets: []string{
                "mollitia",
                "ab",
            },
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("impedit"),
        ID: "26071f93-f5f0-4642-9ac7-af515cc413aa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMigrationWorkflowResponse != nil {
        // handle response
    }
}
```

## UpdateWorkflowStep

Update a step in a migration workflow.

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
    res, err := s.SDK.UpdateWorkflowStep(ctx, operations.UpdateWorkflowStepRequest{
        RequestBody: operations.UpdateWorkflowStepRequestBody{
            Description: sdk.String("suscipit"),
            Name: sdk.String("Molly O'Reilly"),
            Next: []string{
                "vel",
                "ducimus",
                "quos",
                "vel",
            },
            Outputs: []shared.WorkflowStepOutput{
                shared.WorkflowStepOutput{
                    DataType: shared.DataTypeEnumStringmap.ToPointer(),
                    Name: sdk.String("Felipe Johns"),
                    Required: sdk.Bool(false),
                    Value: &shared.WorkflowStepOutputUnion{
                        IntegerValue: sdk.Int64(968904),
                        ListOfStringValue: []string{
                            "nemo",
                            "recusandae",
                            "aliquid",
                            "aperiam",
                        },
                        StringValue: sdk.String("cum"),
                    },
                },
                shared.WorkflowStepOutput{
                    DataType: shared.DataTypeEnumString.ToPointer(),
                    Name: sdk.String("Annette Wehner"),
                    Required: sdk.Bool(false),
                    Value: &shared.WorkflowStepOutputUnion{
                        IntegerValue: sdk.Int64(985492),
                        ListOfStringValue: []string{
                            "reiciendis",
                            "quidem",
                        },
                        StringValue: sdk.String("saepe"),
                    },
                },
            },
            Previous: []string{
                "dolore",
                "sunt",
                "asperiores",
                "adipisci",
            },
            Status: operations.UpdateWorkflowStepRequestBodyStatusEnumReady.ToPointer(),
            StepActionType: operations.UpdateWorkflowStepRequestBodyStepActionTypeEnumManual.ToPointer(),
            StepGroupID: "beatae",
            StepTarget: []string{
                "a",
                "debitis",
            },
            WorkflowID: "consectetur",
            WorkflowStepAutomationConfiguration: &operations.UpdateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration{
                Command: &shared.PlatformCommand{
                    Linux: sdk.String("corporis"),
                    Windows: sdk.String("harum"),
                },
                RunEnvironment: shared.RunEnvironmentEnumAws.ToPointer(),
                ScriptLocationS3Bucket: sdk.String("ipsa"),
                ScriptLocationS3Key: &shared.PlatformScriptKey{
                    Linux: sdk.String("voluptates"),
                    Windows: sdk.String("libero"),
                },
                TargetType: shared.TargetTypeEnumSingle.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        ID: "5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkflowStepResponse != nil {
        // handle response
    }
}
```

## UpdateWorkflowStepGroup

Update the step group in a migration workflow.

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
    res, err := s.SDK.UpdateWorkflowStepGroup(ctx, operations.UpdateWorkflowStepGroupRequest{
        RequestBody: operations.UpdateWorkflowStepGroupRequestBody{
            Description: sdk.String("asperiores"),
            Name: sdk.String("Miss Jared Quitzon"),
            Next: []string{
                "sed",
                "in",
                "commodi",
            },
            Previous: []string{
                "explicabo",
                "voluptas",
                "unde",
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ID: "8f4294e3-698f-4447-b603-e8b445e80ca5",
        WorkflowID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkflowStepGroupResponse != nil {
        // handle response
    }
}
```

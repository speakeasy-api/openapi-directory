# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/migrationhuborchestrator/2021-08-28/go
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

    req := operations.CreateWorkflowRequest{
        Headers: operations.CreateWorkflowHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateWorkflowRequestBody{
            ApplicationConfigurationID: "illum",
            Description: "vel",
            InputParameters: map[string]shared.StepInput{
                "deserunt": shared.StepInput{
                    IntegerValue: 384382,
                    ListOfStringsValue: []string{
                        "magnam",
                        "debitis",
                    },
                    MapOfStringValue: map[string]string{
                        "delectus": "tempora",
                    },
                    StringValue: "suscipit",
                },
                "molestiae": shared.StepInput{
                    IntegerValue: 791725,
                    ListOfStringsValue: []string{
                        "voluptatum",
                        "iusto",
                        "excepturi",
                        "nisi",
                    },
                    MapOfStringValue: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    StringValue: "sapiente",
                },
                "quo": shared.StepInput{
                    IntegerValue: 140350,
                    ListOfStringsValue: []string{
                        "at",
                        "maiores",
                        "molestiae",
                        "quod",
                    },
                    MapOfStringValue: map[string]string{
                        "esse": "totam",
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                    StringValue: "fugit",
                },
            },
            Name: "deleniti",
            StepTargets: []string{
                "optio",
                "totam",
                "beatae",
                "commodi",
            },
            Tags: map[string]string{
                "modi": "qui",
                "impedit": "cum",
            },
            TemplateID: "esse",
        },
    }

    ctx := context.Background()
    res, err := s.CreateWorkflow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMigrationWorkflowResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateWorkflow` - Create a workflow to orchestrate your migrations.
* `CreateWorkflowStep` - Create a step in the migration workflow.
* `CreateWorkflowStepGroup` - Create a step group in a migration workflow.
* `DeleteWorkflow` - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* `DeleteWorkflowStep` - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* `DeleteWorkflowStepGroup` - Delete a step group in a migration workflow.
* `GetTemplate` - Get the template you want to use for creating a migration workflow.
* `GetTemplateStep` - Get a specific step in a template.
* `GetTemplateStepGroup` - Get a step group in a template.
* `GetWorkflow` - Get migration workflow.
* `GetWorkflowStep` - Get a step in the migration workflow.
* `GetWorkflowStepGroup` - Get the step group of a migration workflow.
* `ListPlugins` - List AWS Migration Hub Orchestrator plugins.
* `ListTagsForResource` - List the tags added to a resource.
* `ListTemplateStepGroups` - List the step groups in a template.
* `ListTemplateSteps` - List the steps in a template.
* `ListTemplates` - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* `ListWorkflowStepGroups` - List the step groups in a migration workflow.
* `ListWorkflowSteps` - List the steps in a workflow.
* `ListWorkflows` - List the migration workflows.
* `RetryWorkflowStep` - Retry a failed step in a migration workflow.
* `StartWorkflow` - Start a migration workflow.
* `StopWorkflow` - Stop an ongoing migration workflow.
* `TagResource` - Tag a resource by specifying its Amazon Resource Name (ARN).
* `UntagResource` - Deletes the tags for a resource.
* `UpdateWorkflow` - Update a migration workflow.
* `UpdateWorkflowStep` - Update a step in a migration workflow.
* `UpdateWorkflowStepGroup` - Update the step group in a migration workflow.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

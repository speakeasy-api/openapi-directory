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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateWorkflowRequest{
        RequestBody: operations.CreateWorkflowRequestBody{
            ApplicationConfigurationID: "corrupti",
            Description: "provident",
            InputParameters: map[string]shared.StepInput{
                "quibusdam": shared.StepInput{
                    IntegerValue: 602763,
                    ListOfStringsValue: []string{
                        "corrupti",
                        "illum",
                        "vel",
                        "error",
                    },
                    MapOfStringValue: map[string]string{
                        "suscipit": "iure",
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    StringValue: "tempora",
                },
                "suscipit": shared.StepInput{
                    IntegerValue: 477665,
                    ListOfStringsValue: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    MapOfStringValue: map[string]string{
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                    StringValue: "veritatis",
                },
                "deserunt": shared.StepInput{
                    IntegerValue: 20218,
                    ListOfStringsValue: []string{
                        "repellendus",
                        "sapiente",
                    },
                    MapOfStringValue: map[string]string{
                        "odit": "at",
                        "at": "maiores",
                        "molestiae": "quod",
                        "quod": "esse",
                    },
                    StringValue: "totam",
                },
            },
            Name: "porro",
            StepTargets: []string{
                "dicta",
                "nam",
                "officia",
            },
            Tags: map[string]string{
                "fugit": "deleniti",
                "hic": "optio",
                "totam": "beatae",
            },
            TemplateID: "commodi",
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "modi",
        XAmzCredential: "qui",
        XAmzDate: "impedit",
        XAmzSecurityToken: "cum",
        XAmzSignature: "esse",
        XAmzSignedHeaders: "ipsum",
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
## Available Resources and Operations

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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

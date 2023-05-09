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
    res, err := s.CreateWorkflow(ctx, operations.CreateWorkflowRequest{
        RequestBody: operations.CreateWorkflowRequestBody{
            ApplicationConfigurationID: "corrupti",
            Description: sdk.String("provident"),
            InputParameters: map[string]shared.StepInput{
                "quibusdam": shared.StepInput{
                    IntegerValue: sdk.Int64(602763),
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
                    StringValue: sdk.String("tempora"),
                },
                "suscipit": shared.StepInput{
                    IntegerValue: sdk.Int64(477665),
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
                    StringValue: sdk.String("veritatis"),
                },
                "deserunt": shared.StepInput{
                    IntegerValue: sdk.Int64(20218),
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
                    StringValue: sdk.String("totam"),
                },
            },
            Name: "Omar Carroll",
            StepTargets: []string{
                "fugit",
                "deleniti",
                "hic",
            },
            Tags: map[string]string{
                "totam": "beatae",
                "commodi": "molestiae",
                "modi": "qui",
                "impedit": "cum",
            },
            TemplateID: "esse",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
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

### [SDK](docs/sdk/README.md)

* [CreateWorkflow](docs/sdk/README.md#createworkflow) - Create a workflow to orchestrate your migrations.
* [CreateWorkflowStep](docs/sdk/README.md#createworkflowstep) - Create a step in the migration workflow.
* [CreateWorkflowStepGroup](docs/sdk/README.md#createworkflowstepgroup) - Create a step group in a migration workflow.
* [DeleteWorkflow](docs/sdk/README.md#deleteworkflow) - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* [DeleteWorkflowStep](docs/sdk/README.md#deleteworkflowstep) - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* [DeleteWorkflowStepGroup](docs/sdk/README.md#deleteworkflowstepgroup) - Delete a step group in a migration workflow.
* [GetTemplate](docs/sdk/README.md#gettemplate) - Get the template you want to use for creating a migration workflow.
* [GetTemplateStep](docs/sdk/README.md#gettemplatestep) - Get a specific step in a template.
* [GetTemplateStepGroup](docs/sdk/README.md#gettemplatestepgroup) - Get a step group in a template.
* [GetWorkflow](docs/sdk/README.md#getworkflow) - Get migration workflow.
* [GetWorkflowStep](docs/sdk/README.md#getworkflowstep) - Get a step in the migration workflow.
* [GetWorkflowStepGroup](docs/sdk/README.md#getworkflowstepgroup) - Get the step group of a migration workflow.
* [ListPlugins](docs/sdk/README.md#listplugins) - List AWS Migration Hub Orchestrator plugins.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags added to a resource.
* [ListTemplateStepGroups](docs/sdk/README.md#listtemplatestepgroups) - List the step groups in a template.
* [ListTemplateSteps](docs/sdk/README.md#listtemplatesteps) - List the steps in a template.
* [ListTemplates](docs/sdk/README.md#listtemplates) - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* [ListWorkflowStepGroups](docs/sdk/README.md#listworkflowstepgroups) - List the step groups in a migration workflow.
* [ListWorkflowSteps](docs/sdk/README.md#listworkflowsteps) - List the steps in a workflow.
* [ListWorkflows](docs/sdk/README.md#listworkflows) - List the migration workflows.
* [RetryWorkflowStep](docs/sdk/README.md#retryworkflowstep) - Retry a failed step in a migration workflow.
* [StartWorkflow](docs/sdk/README.md#startworkflow) - Start a migration workflow.
* [StopWorkflow](docs/sdk/README.md#stopworkflow) - Stop an ongoing migration workflow.
* [TagResource](docs/sdk/README.md#tagresource) - Tag a resource by specifying its Amazon Resource Name (ARN).
* [UntagResource](docs/sdk/README.md#untagresource) - Deletes the tags for a resource.
* [UpdateWorkflow](docs/sdk/README.md#updateworkflow) - Update a migration workflow.
* [UpdateWorkflowStep](docs/sdk/README.md#updateworkflowstep) - Update a step in a migration workflow.
* [UpdateWorkflowStepGroup](docs/sdk/README.md#updateworkflowstepgroup) - Update the step group in a migration workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

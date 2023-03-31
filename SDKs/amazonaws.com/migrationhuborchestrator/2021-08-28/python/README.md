# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/migrationhuborchestrator/2021-08-28/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateWorkflowRequest(
    request_body=operations.CreateWorkflowRequestBody(
        application_configuration_id="corrupti",
        description="provident",
        input_parameters={
            "quibusdam": shared.StepInput(
                integer_value=602763,
                list_of_strings_value=[
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                ],
                map_of_string_value={
                    "suscipit": "iure",
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                string_value="tempora",
            ),
            "suscipit": shared.StepInput(
                integer_value=477665,
                list_of_strings_value=[
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                ],
                map_of_string_value={
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
                string_value="veritatis",
            ),
            "deserunt": shared.StepInput(
                integer_value=20218,
                list_of_strings_value=[
                    "repellendus",
                    "sapiente",
                ],
                map_of_string_value={
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                    "quod": "esse",
                },
                string_value="totam",
            ),
        },
        name="porro",
        step_targets=[
            "dicta",
            "nam",
            "officia",
        ],
        tags={
            "fugit": "deleniti",
            "hic": "optio",
            "totam": "beatae",
        },
        template_id="commodi",
    ),
    x_amz_algorithm="molestiae",
    x_amz_content_sha256="modi",
    x_amz_credential="qui",
    x_amz_date="impedit",
    x_amz_security_token="cum",
    x_amz_signature="esse",
    x_amz_signed_headers="ipsum",
)
    
res = s.create_workflow(req)

if res.create_migration_workflow_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_workflow` - Create a workflow to orchestrate your migrations.
* `create_workflow_step` - Create a step in the migration workflow.
* `create_workflow_step_group` - Create a step group in a migration workflow.
* `delete_workflow` - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* `delete_workflow_step` - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* `delete_workflow_step_group` - Delete a step group in a migration workflow.
* `get_template` - Get the template you want to use for creating a migration workflow.
* `get_template_step` - Get a specific step in a template.
* `get_template_step_group` - Get a step group in a template.
* `get_workflow` - Get migration workflow.
* `get_workflow_step` - Get a step in the migration workflow.
* `get_workflow_step_group` - Get the step group of a migration workflow.
* `list_plugins` - List AWS Migration Hub Orchestrator plugins.
* `list_tags_for_resource` - List the tags added to a resource.
* `list_template_step_groups` - List the step groups in a template.
* `list_template_steps` - List the steps in a template.
* `list_templates` - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* `list_workflow_step_groups` - List the step groups in a migration workflow.
* `list_workflow_steps` - List the steps in a workflow.
* `list_workflows` - List the migration workflows.
* `retry_workflow_step` - Retry a failed step in a migration workflow.
* `start_workflow` - Start a migration workflow.
* `stop_workflow` - Stop an ongoing migration workflow.
* `tag_resource` - Tag a resource by specifying its Amazon Resource Name (ARN).
* `untag_resource` - Deletes the tags for a resource.
* `update_workflow` - Update a migration workflow.
* `update_workflow_step` - Update a step in a migration workflow.
* `update_workflow_step_group` - Update the step group in a migration workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

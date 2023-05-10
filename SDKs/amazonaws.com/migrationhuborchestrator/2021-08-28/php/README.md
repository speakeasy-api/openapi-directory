# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StepInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowRequest();
    $request->requestBody = new CreateWorkflowRequestBody();
    $request->requestBody->applicationConfigurationId = 'corrupti';
    $request->requestBody->description = 'provident';
    $request->requestBody->inputParameters = [
        'quibusdam' => new StepInput(),
        'unde' => new StepInput(),
        'nulla' => new StepInput(),
    ];
    $request->requestBody->name = 'Dallas Kassulke';
    $request->requestBody->stepTargets = [
        'iure',
        'magnam',
    ];
    $request->requestBody->tags = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->requestBody->templateId = 'iusto';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->createWorkflow($request);

    if ($response->createMigrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createWorkflow](docs/sdk/README.md#createworkflow) - Create a workflow to orchestrate your migrations.
* [createWorkflowStep](docs/sdk/README.md#createworkflowstep) - Create a step in the migration workflow.
* [createWorkflowStepGroup](docs/sdk/README.md#createworkflowstepgroup) - Create a step group in a migration workflow.
* [deleteWorkflow](docs/sdk/README.md#deleteworkflow) - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* [deleteWorkflowStep](docs/sdk/README.md#deleteworkflowstep) - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* [deleteWorkflowStepGroup](docs/sdk/README.md#deleteworkflowstepgroup) - Delete a step group in a migration workflow.
* [getTemplate](docs/sdk/README.md#gettemplate) - Get the template you want to use for creating a migration workflow.
* [getTemplateStep](docs/sdk/README.md#gettemplatestep) - Get a specific step in a template.
* [getTemplateStepGroup](docs/sdk/README.md#gettemplatestepgroup) - Get a step group in a template.
* [getWorkflow](docs/sdk/README.md#getworkflow) - Get migration workflow.
* [getWorkflowStep](docs/sdk/README.md#getworkflowstep) - Get a step in the migration workflow.
* [getWorkflowStepGroup](docs/sdk/README.md#getworkflowstepgroup) - Get the step group of a migration workflow.
* [listPlugins](docs/sdk/README.md#listplugins) - List AWS Migration Hub Orchestrator plugins.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags added to a resource.
* [listTemplateStepGroups](docs/sdk/README.md#listtemplatestepgroups) - List the step groups in a template.
* [listTemplateSteps](docs/sdk/README.md#listtemplatesteps) - List the steps in a template.
* [listTemplates](docs/sdk/README.md#listtemplates) - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* [listWorkflowStepGroups](docs/sdk/README.md#listworkflowstepgroups) - List the step groups in a migration workflow.
* [listWorkflowSteps](docs/sdk/README.md#listworkflowsteps) - List the steps in a workflow.
* [listWorkflows](docs/sdk/README.md#listworkflows) - List the migration workflows.
* [retryWorkflowStep](docs/sdk/README.md#retryworkflowstep) - Retry a failed step in a migration workflow.
* [startWorkflow](docs/sdk/README.md#startworkflow) - Start a migration workflow.
* [stopWorkflow](docs/sdk/README.md#stopworkflow) - Stop an ongoing migration workflow.
* [tagResource](docs/sdk/README.md#tagresource) - Tag a resource by specifying its Amazon Resource Name (ARN).
* [untagResource](docs/sdk/README.md#untagresource) - Deletes the tags for a resource.
* [updateWorkflow](docs/sdk/README.md#updateworkflow) - Update a migration workflow.
* [updateWorkflowStep](docs/sdk/README.md#updateworkflowstep) - Update a step in a migration workflow.
* [updateWorkflowStepGroup](docs/sdk/README.md#updateworkflowstepgroup) - Update the step group in a migration workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

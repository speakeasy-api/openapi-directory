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
use \OpenAPI\OpenAPI\Models\Operations\BatchPutPropertyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutPropertyValuesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValueEntry;
use \OpenAPI\OpenAPI\Models\Shared\EntityPropertyReference;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\DataValue;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutPropertyValuesRequest();
    $request->requestBody = new BatchPutPropertyValuesRequestBody();
    $request->requestBody->entries = [
        new PropertyValueEntry(),
        new PropertyValueEntry(),
        new PropertyValueEntry(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->workspaceId = 'vel';

    $response = $sdk->batchPutPropertyValues($request);

    if ($response->batchPutPropertyValuesResponse !== null) {
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

* [batchPutPropertyValues](docs/sdk/README.md#batchputpropertyvalues) - Sets values for multiple time series properties.
* [createComponentType](docs/sdk/README.md#createcomponenttype) - Creates a component type.
* [createEntity](docs/sdk/README.md#createentity) - Creates an entity.
* [createScene](docs/sdk/README.md#createscene) - Creates a scene.
* [createSyncJob](docs/sdk/README.md#createsyncjob) - This action creates a SyncJob.
* [createWorkspace](docs/sdk/README.md#createworkspace) - Creates a workplace.
* [deleteComponentType](docs/sdk/README.md#deletecomponenttype) - Deletes a component type.
* [deleteEntity](docs/sdk/README.md#deleteentity) - Deletes an entity.
* [deleteScene](docs/sdk/README.md#deletescene) - Deletes a scene.
* [deleteSyncJob](docs/sdk/README.md#deletesyncjob) - Delete the SyncJob.
* [deleteWorkspace](docs/sdk/README.md#deleteworkspace) - Deletes a workspace.
* [executeQuery](docs/sdk/README.md#executequery) - Run queries to access information from your knowledge graph of entities within individual workspaces.
* [getComponentType](docs/sdk/README.md#getcomponenttype) - Retrieves information about a component type.
* [getEntity](docs/sdk/README.md#getentity) - Retrieves information about an entity.
* [getPricingPlan](docs/sdk/README.md#getpricingplan) - Gets the pricing plan.
* [getPropertyValue](docs/sdk/README.md#getpropertyvalue) - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* [getPropertyValueHistory](docs/sdk/README.md#getpropertyvaluehistory) - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* [getScene](docs/sdk/README.md#getscene) - Retrieves information about a scene.
* [getSyncJob](docs/sdk/README.md#getsyncjob) - Gets the SyncJob.
* [getWorkspace](docs/sdk/README.md#getworkspace) - Retrieves information about a workspace.
* [listComponentTypes](docs/sdk/README.md#listcomponenttypes) - Lists all component types in a workspace.
* [listEntities](docs/sdk/README.md#listentities) - Lists all entities in a workspace.
* [listScenes](docs/sdk/README.md#listscenes) - Lists all scenes in a workspace.
* [listSyncJobs](docs/sdk/README.md#listsyncjobs) - List all SyncJobs.
* [listSyncResources](docs/sdk/README.md#listsyncresources) - Lists the sync resources.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags associated with a resource.
* [listWorkspaces](docs/sdk/README.md#listworkspaces) - Retrieves information about workspaces in the current account.
* [tagResource](docs/sdk/README.md#tagresource) - Adds tags to a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from a resource.
* [updateComponentType](docs/sdk/README.md#updatecomponenttype) - Updates information in a component type.
* [updateEntity](docs/sdk/README.md#updateentity) - Updates an entity.
* [updatePricingPlan](docs/sdk/README.md#updatepricingplan) - Update the pricing plan.
* [updateScene](docs/sdk/README.md#updatescene) - Updates a scene.
* [updateWorkspace](docs/sdk/README.md#updateworkspace) - Updates a workspace.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

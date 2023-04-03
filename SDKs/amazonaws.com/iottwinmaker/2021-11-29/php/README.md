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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchPutPropertyValues` - Sets values for multiple time series properties.
* `createComponentType` - Creates a component type.
* `createEntity` - Creates an entity.
* `createScene` - Creates a scene.
* `createSyncJob` - This action creates a SyncJob.
* `createWorkspace` - Creates a workplace.
* `deleteComponentType` - Deletes a component type.
* `deleteEntity` - Deletes an entity.
* `deleteScene` - Deletes a scene.
* `deleteSyncJob` - Delete the SyncJob.
* `deleteWorkspace` - Deletes a workspace.
* `executeQuery` - Run queries to access information from your knowledge graph of entities within individual workspaces.
* `getComponentType` - Retrieves information about a component type.
* `getEntity` - Retrieves information about an entity.
* `getPricingPlan` - Gets the pricing plan.
* `getPropertyValue` - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* `getPropertyValueHistory` - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* `getScene` - Retrieves information about a scene.
* `getSyncJob` - Gets the SyncJob.
* `getWorkspace` - Retrieves information about a workspace.
* `listComponentTypes` - Lists all component types in a workspace.
* `listEntities` - Lists all entities in a workspace.
* `listScenes` - Lists all scenes in a workspace.
* `listSyncJobs` - List all SyncJobs.
* `listSyncResources` - Lists the sync resources.
* `listTagsForResource` - Lists all tags associated with a resource.
* `listWorkspaces` - Retrieves information about workspaces in the current account.
* `tagResource` - Adds tags to a resource.
* `untagResource` - Removes tags from a resource.
* `updateComponentType` - Updates information in a component type.
* `updateEntity` - Updates an entity.
* `updatePricingPlan` - Update the pricing plan.
* `updateScene` - Updates a scene.
* `updateWorkspace` - Updates a workspace.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

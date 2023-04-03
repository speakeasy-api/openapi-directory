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

* `createAlertManagerDefinition` - Create an alert manager definition.
* `createLoggingConfiguration` - Create logging configuration.
* `createRuleGroupsNamespace` - Create a rule group namespace.
* `createWorkspace` - Creates a new AMP workspace.
* `deleteAlertManagerDefinition` - Deletes an alert manager definition.
* `deleteLoggingConfiguration` - Delete logging configuration.
* `deleteRuleGroupsNamespace` - Delete a rule groups namespace.
* `deleteWorkspace` - Deletes an AMP workspace.
* `describeAlertManagerDefinition` - Describes an alert manager definition.
* `describeLoggingConfiguration` - Describes logging configuration.
* `describeRuleGroupsNamespace` - Describe a rule groups namespace.
* `describeWorkspace` - Describes an existing AMP workspace.
* `listRuleGroupsNamespaces` - Lists rule groups namespaces.
* `listTagsForResource` - Lists the tags you have assigned to the resource.
* `listWorkspaces` - Lists all AMP workspaces, including workspaces being created or deleted.
* `putAlertManagerDefinition` - Update an alert manager definition.
* `putRuleGroupsNamespace` - Update a rule groups namespace.
* `tagResource` - Creates tags for the specified resource.
* `untagResource` - Deletes tags from the specified resource.
* `updateLoggingConfiguration` - Update logging configuration.
* `updateWorkspaceAlias` - Updates an AMP workspace alias.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

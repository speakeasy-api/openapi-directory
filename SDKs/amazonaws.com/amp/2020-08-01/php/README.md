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
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertManagerDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertManagerDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAlertManagerDefinitionRequest();
    $request->requestBody = new CreateAlertManagerDefinitionRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->data = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->workspaceId = 'error';

    $response = $sdk->createAlertManagerDefinition($request);

    if ($response->createAlertManagerDefinitionResponse !== null) {
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

* [createAlertManagerDefinition](docs/sdk/README.md#createalertmanagerdefinition) - Create an alert manager definition.
* [createLoggingConfiguration](docs/sdk/README.md#createloggingconfiguration) - Create logging configuration.
* [createRuleGroupsNamespace](docs/sdk/README.md#createrulegroupsnamespace) - Create a rule group namespace.
* [createWorkspace](docs/sdk/README.md#createworkspace) - Creates a new AMP workspace.
* [deleteAlertManagerDefinition](docs/sdk/README.md#deletealertmanagerdefinition) - Deletes an alert manager definition.
* [deleteLoggingConfiguration](docs/sdk/README.md#deleteloggingconfiguration) - Delete logging configuration.
* [deleteRuleGroupsNamespace](docs/sdk/README.md#deleterulegroupsnamespace) - Delete a rule groups namespace.
* [deleteWorkspace](docs/sdk/README.md#deleteworkspace) - Deletes an AMP workspace.
* [describeAlertManagerDefinition](docs/sdk/README.md#describealertmanagerdefinition) - Describes an alert manager definition.
* [describeLoggingConfiguration](docs/sdk/README.md#describeloggingconfiguration) - Describes logging configuration.
* [describeRuleGroupsNamespace](docs/sdk/README.md#describerulegroupsnamespace) - Describe a rule groups namespace.
* [describeWorkspace](docs/sdk/README.md#describeworkspace) - Describes an existing AMP workspace.
* [listRuleGroupsNamespaces](docs/sdk/README.md#listrulegroupsnamespaces) - Lists rule groups namespaces.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags you have assigned to the resource.
* [listWorkspaces](docs/sdk/README.md#listworkspaces) - Lists all AMP workspaces, including workspaces being created or deleted.
* [putAlertManagerDefinition](docs/sdk/README.md#putalertmanagerdefinition) - Update an alert manager definition.
* [putRuleGroupsNamespace](docs/sdk/README.md#putrulegroupsnamespace) - Update a rule groups namespace.
* [tagResource](docs/sdk/README.md#tagresource) - Creates tags for the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes tags from the specified resource.
* [updateLoggingConfiguration](docs/sdk/README.md#updateloggingconfiguration) - Update logging configuration.
* [updateWorkspaceAlias](docs/sdk/README.md#updateworkspacealias) - Updates an AMP workspace alias.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

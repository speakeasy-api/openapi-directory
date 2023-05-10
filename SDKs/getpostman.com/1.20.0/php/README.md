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
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBodyApi;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiRequest();
    $request->requestBody = new CreateApiRequestBody();
    $request->requestBody->api = new CreateApiRequestBodyApi();
    $request->requestBody->api->description = 'This is description.';
    $request->requestBody->api->name = 'Sync Service API';
    $request->requestBody->api->summary = 'This is supposed to be a short summary.';
    $request->workspace = '{{workspaceId}}';

    $response = $sdk->api->createApi($request);

    if ($response->createApi200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [api](docs/api/README.md)

* [createApi](docs/api/README.md#createapi) - Create API
* [createApiVersion](docs/api/README.md#createapiversion) - Create API Version
* [createCollectionFromSchema](docs/api/README.md#createcollectionfromschema) - Create collection from schema
* [createRelations](docs/api/README.md#createrelations) - Create relations
* [createSchema](docs/api/README.md#createschema) - Create Schema
* [deleteAnApi](docs/api/README.md#deleteanapi) - Delete an API
* [deleteAnApiVersion](docs/api/README.md#deleteanapiversion) - Delete an API Version
* [getAllApIs](docs/api/README.md#getallapis) - Get all APIs
* [getAllApiVersions](docs/api/README.md#getallapiversions) - Get All API Versions
* [getAnApiVersion](docs/api/README.md#getanapiversion) - Get an API Version
* [getContractTestRelations](docs/api/README.md#getcontracttestrelations) - Get contract test relations
* [getDocumentationRelations](docs/api/README.md#getdocumentationrelations) - Get  documentation relations
* [getEnvironmentRelations](docs/api/README.md#getenvironmentrelations) - Get environment relations
* [getIntegrationTestRelations](docs/api/README.md#getintegrationtestrelations) - Get integration test relations
* [getLinkedRelations](docs/api/README.md#getlinkedrelations) - Get linked relations
* [getMonitorRelations](docs/api/README.md#getmonitorrelations) - Get monitor relations
* [getSchema](docs/api/README.md#getschema) - Get Schema
* [getTestSuiteRelations](docs/api/README.md#gettestsuiterelations) - Get test suite relations
* [singleApi](docs/api/README.md#singleapi) - Single API
* [syncRelationsWithSchema](docs/api/README.md#syncrelationswithschema) - Sync relations with schema
* [updateAnApi](docs/api/README.md#updateanapi) - Update an API
* [updateAnApiVersion](docs/api/README.md#updateanapiversion) - Update an API Version
* [updateSchema](docs/api/README.md#updateschema) - Update Schema

### [apiVersion](docs/apiversion/README.md)

* [createApiVersion](docs/apiversion/README.md#createapiversion) - Create API Version
* [deleteAnApiVersion](docs/apiversion/README.md#deleteanapiversion) - Delete an API Version
* [getAllApiVersions](docs/apiversion/README.md#getallapiversions) - Get All API Versions
* [getAnApiVersion](docs/apiversion/README.md#getanapiversion) - Get an API Version
* [updateAnApiVersion](docs/apiversion/README.md#updateanapiversion) - Update an API Version

### [collections](docs/collections/README.md)

* [allCollections](docs/collections/README.md#allcollections) - All Collections
* [createAFork](docs/collections/README.md#createafork) - Create a Fork
* [createCollection](docs/collections/README.md#createcollection) - Create Collection
* [deleteCollection](docs/collections/README.md#deletecollection) - Delete Collection
* [mergeAFork](docs/collections/README.md#mergeafork) - Merge a Fork
* [singleCollection](docs/collections/README.md#singlecollection) - Single Collection 
* [updateCollection](docs/collections/README.md#updatecollection) - Update Collection

### [environments](docs/environments/README.md)

* [allEnvironments](docs/environments/README.md#allenvironments) - All Environments
* [createEnvironment](docs/environments/README.md#createenvironment) - Create Environment
* [deleteEnvironment](docs/environments/README.md#deleteenvironment) - Delete Environment
* [singleEnvironment](docs/environments/README.md#singleenvironment) - Single Environment
* [updateEnvironment](docs/environments/README.md#updateenvironment) - Update Environment

### [import](docs/import/README.md)

* [importExportedData](docs/import/README.md#importexporteddata) - Import exported data
* [importExternalApiSpecification](docs/import/README.md#importexternalapispecification) - Import external API specification

### [mocks](docs/mocks/README.md)

* [allMocks](docs/mocks/README.md#allmocks) - All Mocks
* [createMock](docs/mocks/README.md#createmock) - Create Mock
* [deleteMock](docs/mocks/README.md#deletemock) - Delete Mock
* [publishMock](docs/mocks/README.md#publishmock) - Publish Mock
* [singleMock](docs/mocks/README.md#singlemock) - Single Mock
* [unpublishMock](docs/mocks/README.md#unpublishmock) - Unpublish Mock
* [updateMock](docs/mocks/README.md#updatemock) - Update Mock

### [monitors](docs/monitors/README.md)

* [allMonitors](docs/monitors/README.md#allmonitors) - All Monitors
* [createMonitor](docs/monitors/README.md#createmonitor) - Create Monitor
* [deleteMonitor](docs/monitors/README.md#deletemonitor) - Delete Monitor
* [runAMonitor](docs/monitors/README.md#runamonitor) - Run a Monitor
* [singleMonitor](docs/monitors/README.md#singlemonitor) - Single Monitor
* [updateMonitor](docs/monitors/README.md#updatemonitor) - Update Monitor

### [relations](docs/relations/README.md)

* [createRelations](docs/relations/README.md#createrelations) - Create relations
* [getContractTestRelations](docs/relations/README.md#getcontracttestrelations) - Get contract test relations
* [getDocumentationRelations](docs/relations/README.md#getdocumentationrelations) - Get  documentation relations
* [getEnvironmentRelations](docs/relations/README.md#getenvironmentrelations) - Get environment relations
* [getIntegrationTestRelations](docs/relations/README.md#getintegrationtestrelations) - Get integration test relations
* [getLinkedRelations](docs/relations/README.md#getlinkedrelations) - Get linked relations
* [getMonitorRelations](docs/relations/README.md#getmonitorrelations) - Get monitor relations
* [getTestSuiteRelations](docs/relations/README.md#gettestsuiterelations) - Get test suite relations
* [syncRelationsWithSchema](docs/relations/README.md#syncrelationswithschema) - Sync relations with schema

### [schema](docs/schema/README.md)

* [createCollectionFromSchema](docs/schema/README.md#createcollectionfromschema) - Create collection from schema
* [createSchema](docs/schema/README.md#createschema) - Create Schema
* [getSchema](docs/schema/README.md#getschema) - Get Schema
* [updateSchema](docs/schema/README.md#updateschema) - Update Schema

### [user](docs/user/README.md)

* [apiKeyOwner](docs/user/README.md#apikeyowner) - API Key Owner

### [webhooks](docs/webhooks/README.md)

* [createWebhook](docs/webhooks/README.md#createwebhook) - Create Webhook

### [workspaces](docs/workspaces/README.md)

* [allWorkspaces](docs/workspaces/README.md#allworkspaces) - All workspaces
* [createWorkspace](docs/workspaces/README.md#createworkspace) - Create Workspace
* [deleteWorkspace](docs/workspaces/README.md#deleteworkspace) - Delete Workspace
* [singleWorkspace](docs/workspaces/README.md#singleworkspace) - Single workspace
* [updateWorkspace](docs/workspaces/README.md#updateworkspace) - Update Workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

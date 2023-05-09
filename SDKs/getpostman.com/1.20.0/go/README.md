# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/getpostman.com/1.20.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.API.CreateAPI(ctx, operations.CreateAPIRequest{
        RequestBody: &operations.CreateAPIRequestBody{
            API: &operations.CreateAPIRequestBodyAPI{
                Description: sdk.String("This is description."),
                Name: sdk.String("Sync Service API"),
                Summary: sdk.String("This is supposed to be a short summary."),
            },
        },
        Workspace: sdk.String("{{workspaceId}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [API](docs/api/README.md)

* [CreateAPI](docs/api/README.md#createapi) - Create API
* [CreateAPIVersion](docs/api/README.md#createapiversion) - Create API Version
* [CreateCollectionFromSchema](docs/api/README.md#createcollectionfromschema) - Create collection from schema
* [CreateRelations](docs/api/README.md#createrelations) - Create relations
* [CreateSchema](docs/api/README.md#createschema) - Create Schema
* [DeleteAnAPI](docs/api/README.md#deleteanapi) - Delete an API
* [DeleteAnAPIVersion](docs/api/README.md#deleteanapiversion) - Delete an API Version
* [GetAllApIs](docs/api/README.md#getallapis) - Get all APIs
* [GetAllAPIVersions](docs/api/README.md#getallapiversions) - Get All API Versions
* [GetAnAPIVersion](docs/api/README.md#getanapiversion) - Get an API Version
* [GetContractTestRelations](docs/api/README.md#getcontracttestrelations) - Get contract test relations
* [GetDocumentationRelations](docs/api/README.md#getdocumentationrelations) - Get  documentation relations
* [GetEnvironmentRelations](docs/api/README.md#getenvironmentrelations) - Get environment relations
* [GetIntegrationTestRelations](docs/api/README.md#getintegrationtestrelations) - Get integration test relations
* [GetLinkedRelations](docs/api/README.md#getlinkedrelations) - Get linked relations
* [GetMonitorRelations](docs/api/README.md#getmonitorrelations) - Get monitor relations
* [GetSchema](docs/api/README.md#getschema) - Get Schema
* [GetTestSuiteRelations](docs/api/README.md#gettestsuiterelations) - Get test suite relations
* [SingleAPI](docs/api/README.md#singleapi) - Single API
* [SyncRelationsWithSchema](docs/api/README.md#syncrelationswithschema) - Sync relations with schema
* [UpdateAnAPI](docs/api/README.md#updateanapi) - Update an API
* [UpdateAnAPIVersion](docs/api/README.md#updateanapiversion) - Update an API Version
* [UpdateSchema](docs/api/README.md#updateschema) - Update Schema

### [APIVersion](docs/apiversion/README.md)

* [CreateAPIVersion](docs/apiversion/README.md#createapiversion) - Create API Version
* [DeleteAnAPIVersion](docs/apiversion/README.md#deleteanapiversion) - Delete an API Version
* [GetAllAPIVersions](docs/apiversion/README.md#getallapiversions) - Get All API Versions
* [GetAnAPIVersion](docs/apiversion/README.md#getanapiversion) - Get an API Version
* [UpdateAnAPIVersion](docs/apiversion/README.md#updateanapiversion) - Update an API Version

### [Collections](docs/collections/README.md)

* [AllCollections](docs/collections/README.md#allcollections) - All Collections
* [CreateAFork](docs/collections/README.md#createafork) - Create a Fork
* [CreateCollection](docs/collections/README.md#createcollection) - Create Collection
* [DeleteCollection](docs/collections/README.md#deletecollection) - Delete Collection
* [MergeAFork](docs/collections/README.md#mergeafork) - Merge a Fork
* [SingleCollection](docs/collections/README.md#singlecollection) - Single Collection 
* [UpdateCollection](docs/collections/README.md#updatecollection) - Update Collection

### [Environments](docs/environments/README.md)

* [AllEnvironments](docs/environments/README.md#allenvironments) - All Environments
* [CreateEnvironment](docs/environments/README.md#createenvironment) - Create Environment
* [DeleteEnvironment](docs/environments/README.md#deleteenvironment) - Delete Environment
* [SingleEnvironment](docs/environments/README.md#singleenvironment) - Single Environment
* [UpdateEnvironment](docs/environments/README.md#updateenvironment) - Update Environment

### [Import](docs/import/README.md)

* [ImportExportedData](docs/import/README.md#importexporteddata) - Import exported data
* [ImportExternalAPISpecification](docs/import/README.md#importexternalapispecification) - Import external API specification

### [Mocks](docs/mocks/README.md)

* [AllMocks](docs/mocks/README.md#allmocks) - All Mocks
* [CreateMock](docs/mocks/README.md#createmock) - Create Mock
* [DeleteMock](docs/mocks/README.md#deletemock) - Delete Mock
* [PublishMock](docs/mocks/README.md#publishmock) - Publish Mock
* [SingleMock](docs/mocks/README.md#singlemock) - Single Mock
* [UnpublishMock](docs/mocks/README.md#unpublishmock) - Unpublish Mock
* [UpdateMock](docs/mocks/README.md#updatemock) - Update Mock

### [Monitors](docs/monitors/README.md)

* [AllMonitors](docs/monitors/README.md#allmonitors) - All Monitors
* [CreateMonitor](docs/monitors/README.md#createmonitor) - Create Monitor
* [DeleteMonitor](docs/monitors/README.md#deletemonitor) - Delete Monitor
* [RunAMonitor](docs/monitors/README.md#runamonitor) - Run a Monitor
* [SingleMonitor](docs/monitors/README.md#singlemonitor) - Single Monitor
* [UpdateMonitor](docs/monitors/README.md#updatemonitor) - Update Monitor

### [Relations](docs/relations/README.md)

* [CreateRelations](docs/relations/README.md#createrelations) - Create relations
* [GetContractTestRelations](docs/relations/README.md#getcontracttestrelations) - Get contract test relations
* [GetDocumentationRelations](docs/relations/README.md#getdocumentationrelations) - Get  documentation relations
* [GetEnvironmentRelations](docs/relations/README.md#getenvironmentrelations) - Get environment relations
* [GetIntegrationTestRelations](docs/relations/README.md#getintegrationtestrelations) - Get integration test relations
* [GetLinkedRelations](docs/relations/README.md#getlinkedrelations) - Get linked relations
* [GetMonitorRelations](docs/relations/README.md#getmonitorrelations) - Get monitor relations
* [GetTestSuiteRelations](docs/relations/README.md#gettestsuiterelations) - Get test suite relations
* [SyncRelationsWithSchema](docs/relations/README.md#syncrelationswithschema) - Sync relations with schema

### [Schema](docs/schema/README.md)

* [CreateCollectionFromSchema](docs/schema/README.md#createcollectionfromschema) - Create collection from schema
* [CreateSchema](docs/schema/README.md#createschema) - Create Schema
* [GetSchema](docs/schema/README.md#getschema) - Get Schema
* [UpdateSchema](docs/schema/README.md#updateschema) - Update Schema

### [User](docs/user/README.md)

* [APIKeyOwner](docs/user/README.md#apikeyowner) - API Key Owner

### [Webhooks](docs/webhooks/README.md)

* [CreateWebhook](docs/webhooks/README.md#createwebhook) - Create Webhook

### [Workspaces](docs/workspaces/README.md)

* [AllWorkspaces](docs/workspaces/README.md#allworkspaces) - All workspaces
* [CreateWorkspace](docs/workspaces/README.md#createworkspace) - Create Workspace
* [DeleteWorkspace](docs/workspaces/README.md#deleteworkspace) - Delete Workspace
* [SingleWorkspace](docs/workspaces/README.md#singleworkspace) - Single workspace
* [UpdateWorkspace](docs/workspaces/README.md#updateworkspace) - Update Workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

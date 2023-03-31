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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateAPIRequest{
        RequestBody: &operations.CreateAPIRequestBody{
            API: &operations.CreateAPIRequestBodyAPI{
                Description: "This is description.",
                Name: "Sync Service API",
                Summary: "This is supposed to be a short summary.",
            },
        },
        Workspace: "{{workspaceId}}",
    }

    ctx := context.Background()
    res, err := s.API.CreateAPI(ctx, req)
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


### API

* `CreateAPI` - Create API
* `CreateAPIVersion` - Create API Version
* `CreateCollectionFromSchema` - Create collection from schema
* `CreateRelations` - Create relations
* `CreateSchema` - Create Schema
* `DeleteAnAPI` - Delete an API
* `DeleteAnAPIVersion` - Delete an API Version
* `GetAllApIs` - Get all APIs
* `GetAllAPIVersions` - Get All API Versions
* `GetAnAPIVersion` - Get an API Version
* `GetContractTestRelations` - Get contract test relations
* `GetDocumentationRelations` - Get  documentation relations
* `GetEnvironmentRelations` - Get environment relations
* `GetIntegrationTestRelations` - Get integration test relations
* `GetLinkedRelations` - Get linked relations
* `GetMonitorRelations` - Get monitor relations
* `GetSchema` - Get Schema
* `GetTestSuiteRelations` - Get test suite relations
* `SingleAPI` - Single API
* `SyncRelationsWithSchema` - Sync relations with schema
* `UpdateAnAPI` - Update an API
* `UpdateAnAPIVersion` - Update an API Version
* `UpdateSchema` - Update Schema

### APIVersion

* `CreateAPIVersion` - Create API Version
* `DeleteAnAPIVersion` - Delete an API Version
* `GetAllAPIVersions` - Get All API Versions
* `GetAnAPIVersion` - Get an API Version
* `UpdateAnAPIVersion` - Update an API Version

### Collections

* `AllCollections` - All Collections
* `CreateAFork` - Create a Fork
* `CreateCollection` - Create Collection
* `DeleteCollection` - Delete Collection
* `MergeAFork` - Merge a Fork
* `SingleCollection` - Single Collection 
* `UpdateCollection` - Update Collection

### Environments

* `AllEnvironments` - All Environments
* `CreateEnvironment` - Create Environment
* `DeleteEnvironment` - Delete Environment
* `SingleEnvironment` - Single Environment
* `UpdateEnvironment` - Update Environment

### Import

* `ImportExportedData` - Import exported data
* `ImportExternalAPISpecification` - Import external API specification

### Mocks

* `AllMocks` - All Mocks
* `CreateMock` - Create Mock
* `DeleteMock` - Delete Mock
* `PublishMock` - Publish Mock
* `SingleMock` - Single Mock
* `UnpublishMock` - Unpublish Mock
* `UpdateMock` - Update Mock

### Monitors

* `AllMonitors` - All Monitors
* `CreateMonitor` - Create Monitor
* `DeleteMonitor` - Delete Monitor
* `RunAMonitor` - Run a Monitor
* `SingleMonitor` - Single Monitor
* `UpdateMonitor` - Update Monitor

### Relations

* `CreateRelations` - Create relations
* `GetContractTestRelations` - Get contract test relations
* `GetDocumentationRelations` - Get  documentation relations
* `GetEnvironmentRelations` - Get environment relations
* `GetIntegrationTestRelations` - Get integration test relations
* `GetLinkedRelations` - Get linked relations
* `GetMonitorRelations` - Get monitor relations
* `GetTestSuiteRelations` - Get test suite relations
* `SyncRelationsWithSchema` - Sync relations with schema

### Schema

* `CreateCollectionFromSchema` - Create collection from schema
* `CreateSchema` - Create Schema
* `GetSchema` - Get Schema
* `UpdateSchema` - Update Schema

### User

* `APIKeyOwner` - API Key Owner

### Webhooks

* `CreateWebhook` - Create Webhook

### Workspaces

* `AllWorkspaces` - All workspaces
* `CreateWorkspace` - Create Workspace
* `DeleteWorkspace` - Delete Workspace
* `SingleWorkspace` - Single workspace
* `UpdateWorkspace` - Update Workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

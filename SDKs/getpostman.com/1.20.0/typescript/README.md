# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/getpostman.com/1.20.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/getpostman.com/1.20.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApiRequest,
  CreateApiResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateApiRequest = {
  requestBody: {
    api: {
      description: "This is description.",
      name: "Sync Service API",
      summary: "This is supposed to be a short summary.",
    },
  },
  workspace: "{{workspaceId}}",
};

sdk.api.createApi(req).then((res: CreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### api

* `createApi` - Create API
* `createApiVersion` - Create API Version
* `createCollectionFromSchema` - Create collection from schema
* `createRelations` - Create relations
* `createSchema` - Create Schema
* `deleteAnApi` - Delete an API
* `deleteAnApiVersion` - Delete an API Version
* `getAllApIs` - Get all APIs
* `getAllApiVersions` - Get All API Versions
* `getAnApiVersion` - Get an API Version
* `getContractTestRelations` - Get contract test relations
* `getDocumentationRelations` - Get  documentation relations
* `getEnvironmentRelations` - Get environment relations
* `getIntegrationTestRelations` - Get integration test relations
* `getLinkedRelations` - Get linked relations
* `getMonitorRelations` - Get monitor relations
* `getSchema` - Get Schema
* `getTestSuiteRelations` - Get test suite relations
* `singleApi` - Single API
* `syncRelationsWithSchema` - Sync relations with schema
* `updateAnApi` - Update an API
* `updateAnApiVersion` - Update an API Version
* `updateSchema` - Update Schema

### apiVersion

* `createApiVersion` - Create API Version
* `deleteAnApiVersion` - Delete an API Version
* `getAllApiVersions` - Get All API Versions
* `getAnApiVersion` - Get an API Version
* `updateAnApiVersion` - Update an API Version

### collections

* `allCollections` - All Collections
* `createAFork` - Create a Fork
* `createCollection` - Create Collection
* `deleteCollection` - Delete Collection
* `mergeAFork` - Merge a Fork
* `singleCollection` - Single Collection 
* `updateCollection` - Update Collection

### environments

* `allEnvironments` - All Environments
* `createEnvironment` - Create Environment
* `deleteEnvironment` - Delete Environment
* `singleEnvironment` - Single Environment
* `updateEnvironment` - Update Environment

### import

* `importExportedData` - Import exported data
* `importExternalApiSpecification` - Import external API specification

### mocks

* `allMocks` - All Mocks
* `createMock` - Create Mock
* `deleteMock` - Delete Mock
* `publishMock` - Publish Mock
* `singleMock` - Single Mock
* `unpublishMock` - Unpublish Mock
* `updateMock` - Update Mock

### monitors

* `allMonitors` - All Monitors
* `createMonitor` - Create Monitor
* `deleteMonitor` - Delete Monitor
* `runAMonitor` - Run a Monitor
* `singleMonitor` - Single Monitor
* `updateMonitor` - Update Monitor

### relations

* `createRelations` - Create relations
* `getContractTestRelations` - Get contract test relations
* `getDocumentationRelations` - Get  documentation relations
* `getEnvironmentRelations` - Get environment relations
* `getIntegrationTestRelations` - Get integration test relations
* `getLinkedRelations` - Get linked relations
* `getMonitorRelations` - Get monitor relations
* `getTestSuiteRelations` - Get test suite relations
* `syncRelationsWithSchema` - Sync relations with schema

### schema

* `createCollectionFromSchema` - Create collection from schema
* `createSchema` - Create Schema
* `getSchema` - Get Schema
* `updateSchema` - Update Schema

### user

* `apiKeyOwner` - API Key Owner

### webhooks

* `createWebhook` - Create Webhook

### workspaces

* `allWorkspaces` - All workspaces
* `createWorkspace` - Create Workspace
* `deleteWorkspace` - Delete Workspace
* `singleWorkspace` - Single workspace
* `updateWorkspace` - Update Workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


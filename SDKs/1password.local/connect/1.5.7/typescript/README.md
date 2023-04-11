# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/1password.local/connect/1.5.7/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/1password.local/connect/1.5.7/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetApiActivityRequest,
  GetApiActivityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetApiActivityRequest = {
  limit: 10,
  offset: 50,
};

sdk.activity.getApiActivity(req).then((res: GetApiActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activity

* `getApiActivity` - Retrieve a list of API Requests that have been made.

### files

* `downloadFileByID` - Get the content of a File
* `getDetailsOfFileById` - Get the details of a File
* `getItemFiles` - Get all the files inside an Item

### health

* `getHeartbeat` - Ping the server for liveness
* `getServerHealth` - Get state of the server and its dependencies.

### items

* `createVaultItem` - Create a new Item
* `deleteVaultItem` - Delete an Item
* `getVaultItemById` - Get the details of an Item
* `getVaultItems` - Get all items for inside a Vault
* `patchVaultItem` - Update a subset of Item attributes
* `updateVaultItem` - Update an Item

### metrics

* `getPrometheusMetrics` - Query server for exposed Prometheus metrics

### vaults

* `getVaultById` - Get Vault details and metadata
* `getVaults` - Get all Vaults
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


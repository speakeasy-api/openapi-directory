# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/vault/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/vault/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ConnectionSettingsAllRequest,
  ConnectionSettingsAllResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConnectionSettingsAllRequest = {
  resource: "corrupti",
  serviceId: "provident",
  unifiedApi: "distinctio",
  xApideckAppId: "quibusdam",
  xApideckConsumerId: "unde",
};

sdk.connections.connectionSettingsAll(req).then((res: ConnectionSettingsAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### connections

* `connectionSettingsAll` - Get resource settings
* `connectionSettingsUpdate` - Update settings
* `connectionsAdd` - Create connection
* `connectionsAll` - Get all connections
* `connectionsCallback` - Callback
* `connectionsDelete` - Deletes a connection
* `connectionsImport` - Import connection
* `connectionsOne` - Get connection
* `connectionsRevoke` - Revoke connection
* `connectionsToken` - Get Access Token
* `connectionsUpdate` - Update connection

### consumers

* `consumerRequestCountsAll` - Consumer request counts
* `consumersAdd` - Create consumer
* `consumersAll` - Get all consumers
* `consumersDelete` - Delete consumer
* `consumersOne` - Get consumer
* `consumersUpdate` - Update consumer

### logs

* `logsAll` - Get all consumer request logs

### sessions

* `sessionsCreate` - Create Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


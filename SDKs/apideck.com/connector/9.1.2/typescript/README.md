# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/connector/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/connector/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ApiResourceCoverageOneRequest,
  ApiResourceCoverageOneResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApiResourceCoverageOneRequest = {
  id: "corrupti",
  resourceId: "provident",
  xApideckAppId: "distinctio",
};

sdk.apiResources.apiResourceCoverageOne(req).then((res: ApiResourceCoverageOneResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apiResources

* `apiResourceCoverageOne` - Get API Resource Coverage
* `apiResourcesOne` - Get API Resource

### apIs

* `apisAll` - List APIs
* `apisOne` - Get API

### connectorDocs

* `connectorDocsOne` - Get Connector Doc content

### connectorResources

* `connectorResourcesOne` - Get Connector Resource

### connectors

* `connectorsAll` - List Connectors
* `connectorsOne` - Get Connector
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


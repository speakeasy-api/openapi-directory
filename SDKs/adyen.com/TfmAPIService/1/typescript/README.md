# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/TfmAPIService/1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/TfmAPIService/1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AssignTerminalsRequest,
  PostAssignTerminalsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.AssignTerminalsRequest = {
  companyAccount: "corrupti",
  merchantAccount: "provident",
  merchantInventory: false,
  store: "distinctio",
  terminals: [
    "unde",
    "nulla",
    "corrupti",
    "illum",
  ],
};

sdk.general.postAssignTerminals(req).then((res: PostAssignTerminalsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postAssignTerminals` - Assign terminals
* `postFindTerminal` - Get the account or store of a terminal
* `postGetStoresUnderAccount` - Get the stores of an account
* `postGetTerminalDetails` - Get the details of a terminal
* `postGetTerminalsUnderAccount` - Get the list of terminals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


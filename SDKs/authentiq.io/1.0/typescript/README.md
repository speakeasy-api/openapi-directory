# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/authentiq.io/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/authentiq.io/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AuthorizeRequest,
  AuthorizeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AuthorizeRequest = {
  clientId: "corrupti",
  display: "provident",
  maxAge: 715190,
  nonce: "quibusdam",
  prompt: "unde",
  redirectUri: "nulla",
  responseMode: "corrupti",
  responseType: "illum",
  scope: "vel",
  state: "error",
  uiLocales: "deserunt",
};

sdk.authentication.authorize(req).then((res: AuthorizeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### authentication

* `authorize` - Authenticate a user
* `token` - Obtain an ID Token
* `userInfo` - Retrieve a user profile

### clientManagement

* `client` - List clients
* `clientClientId` - Delete a client
* `createClient` - Register a client
* `getClient` - View a client
* `updateClient` - Update a client

### sessionManagement

* `authorizeIframe` - Include a session iframe
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


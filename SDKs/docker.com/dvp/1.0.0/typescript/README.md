# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/docker.com/dvp/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/docker.com/dvp/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.Users2FALoginRequest,
  PostUsers2FALoginResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.Users2FALoginRequest = {
  code: "123456",
  login2faToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};

sdk.authentication.postUsers2FALogin(req).then((res: PostUsers2FALoginResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### authentication

* `postUsers2FALogin` - Second factor authentication.
* `postUsersLogin` - Create an authentication token

### discovery

* `getNamespace` - Get namespace
* `getNamespaces` - Get namespaces and repos

### namespaces

* `getNamespaceDataByTimespan` - Get namespace data for timespan
* `getNamespaceTimespanMetadata` - Get namespace metadata for timespan
* `getNamespaceTimespans` - Get timespans with data
* `getNamespaceYears` - Get years with data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


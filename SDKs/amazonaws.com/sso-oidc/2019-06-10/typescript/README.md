# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sso-oidc/2019-06-10/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sso-oidc/2019-06-10/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateTokenRequest,
  CreateTokenResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateTokenRequest = {
  requestBody: {
    clientId: "corrupti",
    clientSecret: "provident",
    code: "distinctio",
    deviceCode: "quibusdam",
    grantType: "unde",
    redirectUri: "nulla",
    refreshToken: "corrupti",
    scope: [
      "vel",
      "error",
      "deserunt",
      "suscipit",
    ],
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
};

sdk.createToken(req).then((res: CreateTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createToken` - Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.
* `registerClient` - Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
* `startDeviceAuthorization` - Initiates device authorization by requesting a pair of verification codes from the authorization service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


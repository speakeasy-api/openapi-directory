# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/amplifybackend/2020-08-11/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/amplifybackend/2020-08-11/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloneBackendRequest,
  CloneBackendResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CloneBackendRequest = {
  requestBody: {
    targetEnvironmentName: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  appId: "vel",
  backendEnvironmentName: "error",
};

sdk.cloneBackend(req).then((res: CloneBackendResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `cloneBackend` - This operation clones an existing backend.
* `createBackend` - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
* `createBackendAPI` - Creates a new backend API resource.
* `createBackendAuth` - Creates a new backend authentication resource.
* `createBackendConfig` - Creates a config object for a backend.
* `createBackendStorage` - Creates a backend storage resource.
* `createToken` - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
* `deleteBackend` - Removes an existing environment from your Amplify project.
* `deleteBackendAPI` - Deletes an existing backend API resource.
* `deleteBackendAuth` - Deletes an existing backend authentication resource.
* `deleteBackendStorage` - Removes the specified backend storage resource.
* `deleteToken` - Deletes the challenge token based on the given appId and sessionId.
* `generateBackendAPIModels` - Generates a model schema for an existing backend API resource.
* `getBackend` - Provides project-level details for your Amplify UI project.
* `getBackendAPI` - Gets the details for a backend API.
* `getBackendAPIModels` - Gets a model introspection schema for an existing backend API resource.
* `getBackendAuth` - Gets a backend auth details.
* `getBackendJob` - Returns information about a specific job.
* `getBackendStorage` - Gets details for a backend storage resource.
* `getToken` - Gets the challenge token based on the given appId and sessionId.
* `importBackendAuth` - Imports an existing backend authentication resource.
* `importBackendStorage` - Imports an existing backend storage resource.
* `listBackendJobs` - Lists the jobs for the backend of an Amplify app.
* `listS3Buckets` - The list of S3 buckets in your account.
* `removeAllBackends` - Removes all backend environments from your Amplify project.
* `removeBackendConfig` - Removes the AWS resources required to access the Amplify Admin UI.
* `updateBackendAPI` - Updates an existing backend API resource.
* `updateBackendAuth` - Updates an existing backend authentication resource.
* `updateBackendConfig` - Updates the AWS resources required to access the Amplify Admin UI.
* `updateBackendJob` - Updates a specific job.
* `updateBackendStorage` - Updates an existing backend storage resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


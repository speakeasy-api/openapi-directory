# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-edge/2020-09-23/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-edge/2020-09-23/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetDeploymentsRequest,
  GetDeploymentsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetDeploymentsRequest = {
  requestBody: {
    deviceFleetName: "corrupti",
    deviceName: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.getDeployments(req).then((res: GetDeploymentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getDeployments` - Use to get the active deployments from a device.
* `getDeviceRegistration` - Use to check if a device is registered with SageMaker Edge Manager.
* `sendHeartbeat` - Use to get the current status of devices registered on SageMaker Edge Manager.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


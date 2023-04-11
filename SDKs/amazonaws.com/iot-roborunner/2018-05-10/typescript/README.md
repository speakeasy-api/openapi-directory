# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iot-roborunner/2018-05-10/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iot-roborunner/2018-05-10/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDestinationRequest,
  CreateDestinationResponse,
  CreateDestinationRequestBodyStateEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDestinationRequest = {
  requestBody: {
    additionalFixedProperties: "corrupti",
    clientToken: "provident",
    name: "distinctio",
    site: "quibusdam",
    state: CreateDestinationRequestBodyStateEnum.Disabled,
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
};

sdk.createDestination(req).then((res: CreateDestinationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createDestination` - Grants permission to create a destination
* `createSite` - Grants permission to create a site
* `createWorker` - Grants permission to create a worker
* `createWorkerFleet` - Grants permission to create a worker fleet
* `deleteDestination` - Grants permission to delete a destination
* `deleteSite` - Grants permission to delete a site
* `deleteWorker` - Grants permission to delete a worker
* `deleteWorkerFleet` - Grants permission to delete a worker fleet
* `getDestination` - Grants permission to get a destination
* `getSite` - Grants permission to get a site
* `getWorker` - Grants permission to get a worker
* `getWorkerFleet` - Grants permission to get a worker fleet
* `listDestinations` - Grants permission to list destinations
* `listSites` - Grants permission to list sites
* `listWorkerFleets` - Grants permission to list worker fleets
* `listWorkers` - Grants permission to list workers
* `updateDestination` - Grants permission to update a destination
* `updateSite` - Grants permission to update a site
* `updateWorker` - Grants permission to update a worker
* `updateWorkerFleet` - Grants permission to update a worker fleet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


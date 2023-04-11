# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/archive.org/wayback/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/archive.org/wayback/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetWaybackV1AvailableRequest,
  GetWaybackV1AvailableResponse
} from "openapi/dist/sdk/models/operations";
import {
  StatusCodeEnum,
  ClosestEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetWaybackV1AvailableRequest = {
  callback: "corrupti",
  closest: ClosestEnum.Before,
  statusCode: StatusCodeEnum.FourHundredAndTwentyOne,
  tag: "quibusdam",
  timeout: 6027.63,
  timestamp: "nulla",
  url: "corrupti",
};

sdk.getWaybackV1Available(req).then((res: GetWaybackV1AvailableResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getWaybackV1Available`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


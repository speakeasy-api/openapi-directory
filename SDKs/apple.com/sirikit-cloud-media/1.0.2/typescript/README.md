# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apple.com/sirikit-cloud-media/1.0.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apple.com/sirikit-cloud-media/1.0.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ExtensionConfigurationRequest,
  ExtensionConfigurationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ExtensionConfigurationRequest = {
  acceptLanguage: "corrupti",
  cacheControl: "provident",
  ifNoneMatch: "distinctio",
  requestTimeout: 8442.66,
  userAgent: "unde",
  xApplecloudextensionRetryCount: 8579.46,
  xApplecloudextensionSessionId: "corrupti",
};

sdk.config.extensionConfiguration(req).then((res: ExtensionConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### config

* `extensionConfiguration` - Configuration Resource

### intent

* `addMediaIntentHandling` - addMedia
* `playMediaIntentHandling` - playMedia
* `updateMediaAffinityIntentHandling` - updateMediaAffinity

### queues

* `playMediaOnQueue` - playMedia
* `updateActivityOnQueue` - updateActivity
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


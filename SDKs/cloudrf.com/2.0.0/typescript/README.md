# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/cloudrf.com/2.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/cloudrf.com/2.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  InterferenceRequest,
  InterferenceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: InterferenceRequest = {
  name: "corrupti",
  network: "provident",
};

sdk.analyse.interference(req).then((res: InterferenceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analyse

* `interference` - Find the best server for overlapping coverage
* `mesh` - Merge sites into a super layer.
* `network` - Find the best server for somewhere

### create

* `area` - Create a point-to-multipoint heatmap
* `path` - Point-to-point path profile analysis (Tx to Rx)
* `points` - Point-to-multipoint path profile analysis (Many Tx, one Rx)

### manage

* `addClutter` - Upload clutter data as GeoJSON
* `delete` - Delete a calculation from the database.
* `deleteNetwork` - Delete an entire network
* `export` - Export a calculation in a GIS file format
* `list` - List calculations from your archive
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


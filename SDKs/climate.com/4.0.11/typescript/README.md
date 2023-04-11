# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/climate.com/4.0.11/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/climate.com/4.0.11/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.BoundariesQuery,
  FetchBoundariesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.BoundariesQuery = {
  ids: [
    "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    "b7392059-2939-46fe-a759-6eb10faaa235",
  ],
};

sdk.boundaries.fetchBoundaries(req).then((res: FetchBoundariesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### boundaries

* `fetchBoundaries` - Retrieve Boundaries in batch
* `fetchBoundaryById` - Retrieve a Boundary by ID
* `uploadBoundary` - Upload a boundary

### exports

* `fetchExportContentsById` - Retrieve the binary contents of a processed export request.
* `fetchExportStatusById` - Retrieve the status of an Export.
* `postExport` - Initiate a new export request.

### farmOrganizations

* `fetchFarmOrganizationByTypeAndId` - Retrieve a specific farm organization by organization type and ID

### fields

* `fetchAllFields` - Retrieve list of all Fields the user has access to.
* `fetchFieldById` - Retrieve a specific Field by ID
* `fetchFields` - Retrieve list of Fields

### layers

* `getV4LayersAsApplied` - Retrieve a list of application activities
* `getV4LayersAsAppliedActivityIdContents` - Retrieve the raw application activity
* `getV4LayersAsHarvested` - Retrieve a list of harvest activities
* `getV4LayersAsHarvestedActivityIdContents` - Retrieve the raw harvest activity
* `getV4LayersAsPlanted` - Retrieve a list of planting activities
* `getV4LayersAsPlantedActivityIdContents` - Retrieve the raw planting activity
* `getV4LayersScoutingObservations` - Retrieve a list of scouting observations
* `getV4LayersScoutingObservationsScoutingObservationId` - Retrieve individual scouting observation
* `getV4LayersScoutingObservationsScoutingObservationIdAttachments` - Retrieve attachments associated with a given scouting observation.
* `getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents` - Retrieve the binary contents of a scouting observation’s attachment.

### operations

* `fetchOperations` - Retrieve the operations accessible to a a given user.

### resourceOwners

* `getResourceOwner` - Retrieve a resource owner by ID

### uploads

* `chunkedUpload` - Chunked upload of data
* `fetchUploadStatusById` - Retrieve Upload status
* `fetchUploadStatuses` - Retrieve Upload statuses in batch
* `postUpload` - Initiate a new upload
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


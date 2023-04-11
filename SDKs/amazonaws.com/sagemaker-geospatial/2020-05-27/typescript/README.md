# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-geospatial/2020-05-27/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-geospatial/2020-05-27/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteEarthObservationJobRequest,
  DeleteEarthObservationJobResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteEarthObservationJobRequest = {
  arn: "corrupti",
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.deleteEarthObservationJob(req).then((res: DeleteEarthObservationJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `deleteEarthObservationJob` - Use this operation to delete an Earth Observation job.
* `deleteVectorEnrichmentJob` - Use this operation to delete a Vector Enrichment job.
* `exportEarthObservationJob` - Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an S3 location.
* `exportVectorEnrichmentJob` - Use this operation to copy results of a Vector Enrichment job to an S3 location.
* `getEarthObservationJob` - Get the details for a previously initiated Earth Observation job.
* `getRasterDataCollection` - Use this operation to get details of a specific raster data collection.
* `getTile` - Gets a web mercator tile for the given Earth Observation job.
* `getVectorEnrichmentJob` - Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
* `listEarthObservationJobs` - Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
* `listRasterDataCollections` - Use this operation to get raster data collections.
* `listTagsForResource` - Lists the tags attached to the resource.
* `listVectorEnrichmentJobs` - Retrieves a list of vector enrichment jobs.
* `searchRasterDataCollection` - Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
* `startEarthObservationJob` - Use this operation to create an Earth observation job.
* `startVectorEnrichmentJob` - Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
* `stopEarthObservationJob` - Use this operation to stop an existing earth observation job.
* `stopVectorEnrichmentJob` - Stops the Vector Enrichment job for a given job ARN.
* `tagResource` - The resource you want to tag.
* `untagResource` - The resource you want to untag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


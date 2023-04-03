# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-geospatial/2020-05-27/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.DeleteEarthObservationJobRequest{
        Arn: "corrupti",
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
    }

    ctx := context.Background()
    res, err := s.DeleteEarthObservationJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEarthObservationJobOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DeleteEarthObservationJob` - Use this operation to delete an Earth Observation job.
* `DeleteVectorEnrichmentJob` - Use this operation to delete a Vector Enrichment job.
* `ExportEarthObservationJob` - Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an S3 location.
* `ExportVectorEnrichmentJob` - Use this operation to copy results of a Vector Enrichment job to an S3 location.
* `GetEarthObservationJob` - Get the details for a previously initiated Earth Observation job.
* `GetRasterDataCollection` - Use this operation to get details of a specific raster data collection.
* `GetTile` - Gets a web mercator tile for the given Earth Observation job.
* `GetVectorEnrichmentJob` - Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
* `ListEarthObservationJobs` - Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
* `ListRasterDataCollections` - Use this operation to get raster data collections.
* `ListTagsForResource` - Lists the tags attached to the resource.
* `ListVectorEnrichmentJobs` - Retrieves a list of vector enrichment jobs.
* `SearchRasterDataCollection` - Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
* `StartEarthObservationJob` - Use this operation to create an Earth observation job.
* `StartVectorEnrichmentJob` - Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
* `StopEarthObservationJob` - Use this operation to stop an existing earth observation job.
* `StopVectorEnrichmentJob` - Stops the Vector Enrichment job for a given job ARN.
* `TagResource` - The resource you want to tag.
* `UntagResource` - The resource you want to untag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

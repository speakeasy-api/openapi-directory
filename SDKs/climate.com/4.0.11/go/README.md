# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/climate.com/4.0.11/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Boundaries.FetchBoundaries(ctx, shared.BoundariesQuery{
        Ids: []string{
            "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
            "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
            "b7392059-2939-46fe-a759-6eb10faaa235",
        },
    }, operations.FetchBoundariesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Boundaries != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Boundaries](docs/boundaries/README.md)

* [FetchBoundaries](docs/boundaries/README.md#fetchboundaries) - Retrieve Boundaries in batch
* [FetchBoundaryByID](docs/boundaries/README.md#fetchboundarybyid) - Retrieve a Boundary by ID
* [UploadBoundary](docs/boundaries/README.md#uploadboundary) - Upload a boundary

### [Exports](docs/exports/README.md)

* [FetchExportContentsByID](docs/exports/README.md#fetchexportcontentsbyid) - Retrieve the binary contents of a processed export request.
* [FetchExportStatusByID](docs/exports/README.md#fetchexportstatusbyid) - Retrieve the status of an Export.
* [PostExport](docs/exports/README.md#postexport) - Initiate a new export request.

### [FarmOrganizations](docs/farmorganizations/README.md)

* [FetchFarmOrganizationByTypeAndID](docs/farmorganizations/README.md#fetchfarmorganizationbytypeandid) - Retrieve a specific farm organization by organization type and ID

### [Fields](docs/fields/README.md)

* [FetchAllFields](docs/fields/README.md#fetchallfields) - Retrieve list of all Fields the user has access to.
* [FetchFieldByID](docs/fields/README.md#fetchfieldbyid) - Retrieve a specific Field by ID
* [FetchFields](docs/fields/README.md#fetchfields) - Retrieve list of Fields

### [Layers](docs/layers/README.md)

* [GetV4LayersAsApplied](docs/layers/README.md#getv4layersasapplied) - Retrieve a list of application activities
* [GetV4LayersAsAppliedActivityIDContents](docs/layers/README.md#getv4layersasappliedactivityidcontents) - Retrieve the raw application activity
* [GetV4LayersAsHarvested](docs/layers/README.md#getv4layersasharvested) - Retrieve a list of harvest activities
* [GetV4LayersAsHarvestedActivityIDContents](docs/layers/README.md#getv4layersasharvestedactivityidcontents) - Retrieve the raw harvest activity
* [GetV4LayersAsPlanted](docs/layers/README.md#getv4layersasplanted) - Retrieve a list of planting activities
* [GetV4LayersAsPlantedActivityIDContents](docs/layers/README.md#getv4layersasplantedactivityidcontents) - Retrieve the raw planting activity
* [GetV4LayersScoutingObservations](docs/layers/README.md#getv4layersscoutingobservations) - Retrieve a list of scouting observations
* [GetV4LayersScoutingObservationsScoutingObservationID](docs/layers/README.md#getv4layersscoutingobservationsscoutingobservationid) - Retrieve individual scouting observation
* [GetV4LayersScoutingObservationsScoutingObservationIDAttachments](docs/layers/README.md#getv4layersscoutingobservationsscoutingobservationidattachments) - Retrieve attachments associated with a given scouting observation.
* [GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContents](docs/layers/README.md#getv4layersscoutingobservationsscoutingobservationidattachmentsattachmentidcontents) - Retrieve the binary contents of a scouting observation’s attachment.

### [Operations](docs/operations/README.md)

* [FetchOperations](docs/operations/README.md#fetchoperations) - Retrieve the operations accessible to a a given user.

### [ResourceOwners](docs/resourceowners/README.md)

* [GetResourceOwner](docs/resourceowners/README.md#getresourceowner) - Retrieve a resource owner by ID

### [Uploads](docs/uploads/README.md)

* [ChunkedUpload](docs/uploads/README.md#chunkedupload) - Chunked upload of data
* [FetchUploadStatusByID](docs/uploads/README.md#fetchuploadstatusbyid) - Retrieve Upload status
* [FetchUploadStatuses](docs/uploads/README.md#fetchuploadstatuses) - Retrieve Upload statuses in batch
* [PostUpload](docs/uploads/README.md#postupload) - Initiate a new upload
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

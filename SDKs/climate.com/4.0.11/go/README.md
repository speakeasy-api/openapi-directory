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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.BoundariesQuery{
        Ids: []string{
            "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
            "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
            "b7392059-2939-46fe-a759-6eb10faaa235",
        },
    }

    ctx := context.Background()
    res, err := s.Boundaries.FetchBoundaries(ctx, req, operations.FetchBoundariesSecurity{
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


### Boundaries

* `FetchBoundaries` - Retrieve Boundaries in batch
* `FetchBoundaryByID` - Retrieve a Boundary by ID
* `UploadBoundary` - Upload a boundary

### Exports

* `FetchExportContentsByID` - Retrieve the binary contents of a processed export request.
* `FetchExportStatusByID` - Retrieve the status of an Export.
* `PostExport` - Initiate a new export request.

### FarmOrganizations

* `FetchFarmOrganizationByTypeAndID` - Retrieve a specific farm organization by organization type and ID

### Fields

* `FetchAllFields` - Retrieve list of all Fields the user has access to.
* `FetchFieldByID` - Retrieve a specific Field by ID
* `FetchFields` - Retrieve list of Fields

### Layers

* `GetV4LayersAsApplied` - Retrieve a list of application activities
* `GetV4LayersAsAppliedActivityIDContents` - Retrieve the raw application activity
* `GetV4LayersAsHarvested` - Retrieve a list of harvest activities
* `GetV4LayersAsHarvestedActivityIDContents` - Retrieve the raw harvest activity
* `GetV4LayersAsPlanted` - Retrieve a list of planting activities
* `GetV4LayersAsPlantedActivityIDContents` - Retrieve the raw planting activity
* `GetV4LayersScoutingObservations` - Retrieve a list of scouting observations
* `GetV4LayersScoutingObservationsScoutingObservationID` - Retrieve individual scouting observation
* `GetV4LayersScoutingObservationsScoutingObservationIDAttachments` - Retrieve attachments associated with a given scouting observation.
* `GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContents` - Retrieve the binary contents of a scouting observation’s attachment.

### Operations

* `FetchOperations` - Retrieve the operations accessible to a a given user.

### ResourceOwners

* `GetResourceOwner` - Retrieve a resource owner by ID

### Uploads

* `ChunkedUpload` - Chunked upload of data
* `FetchUploadStatusByID` - Retrieve Upload status
* `FetchUploadStatuses` - Retrieve Upload statuses in batch
* `PostUpload` - Initiate a new upload
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

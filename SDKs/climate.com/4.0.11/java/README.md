# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBoundariesResponse;
import org.openapis.openapi.models.operations.FetchBoundariesSecurity;
import org.openapis.openapi.models.shared.BoundariesQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BoundariesQuery req = new BoundariesQuery(                new String[]{{
                                add("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
                                add("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
                                add("b7392059-2939-46fe-a759-6eb10faaa235"),
                            }});            

            FetchBoundariesResponse res = sdk.boundaries.fetchBoundaries(req, new FetchBoundariesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.boundaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [boundaries](docs/boundaries/README.md)

* [fetchBoundaries](docs/boundaries/README.md#fetchboundaries) - Retrieve Boundaries in batch
* [fetchBoundaryById](docs/boundaries/README.md#fetchboundarybyid) - Retrieve a Boundary by ID
* [uploadBoundary](docs/boundaries/README.md#uploadboundary) - Upload a boundary

### [exports](docs/exports/README.md)

* [fetchExportContentsById](docs/exports/README.md#fetchexportcontentsbyid) - Retrieve the binary contents of a processed export request.
* [fetchExportStatusById](docs/exports/README.md#fetchexportstatusbyid) - Retrieve the status of an Export.
* [postExport](docs/exports/README.md#postexport) - Initiate a new export request.

### [farmOrganizations](docs/farmorganizations/README.md)

* [fetchFarmOrganizationByTypeAndId](docs/farmorganizations/README.md#fetchfarmorganizationbytypeandid) - Retrieve a specific farm organization by organization type and ID

### [fields](docs/fields/README.md)

* [fetchAllFields](docs/fields/README.md#fetchallfields) - Retrieve list of all Fields the user has access to.
* [fetchFieldById](docs/fields/README.md#fetchfieldbyid) - Retrieve a specific Field by ID
* [fetchFields](docs/fields/README.md#fetchfields) - Retrieve list of Fields

### [layers](docs/layers/README.md)

* [getV4LayersAsApplied](docs/layers/README.md#getv4layersasapplied) - Retrieve a list of application activities
* [getV4LayersAsAppliedActivityIdContents](docs/layers/README.md#getv4layersasappliedactivityidcontents) - Retrieve the raw application activity
* [getV4LayersAsHarvested](docs/layers/README.md#getv4layersasharvested) - Retrieve a list of harvest activities
* [getV4LayersAsHarvestedActivityIdContents](docs/layers/README.md#getv4layersasharvestedactivityidcontents) - Retrieve the raw harvest activity
* [getV4LayersAsPlanted](docs/layers/README.md#getv4layersasplanted) - Retrieve a list of planting activities
* [getV4LayersAsPlantedActivityIdContents](docs/layers/README.md#getv4layersasplantedactivityidcontents) - Retrieve the raw planting activity
* [getV4LayersScoutingObservations](docs/layers/README.md#getv4layersscoutingobservations) - Retrieve a list of scouting observations
* [getV4LayersScoutingObservationsScoutingObservationId](docs/layers/README.md#getv4layersscoutingobservationsscoutingobservationid) - Retrieve individual scouting observation
* [getV4LayersScoutingObservationsScoutingObservationIdAttachments](docs/layers/README.md#getv4layersscoutingobservationsscoutingobservationidattachments) - Retrieve attachments associated with a given scouting observation.
* [getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents](docs/layers/README.md#getv4layersscoutingobservationsscoutingobservationidattachmentsattachmentidcontents) - Retrieve the binary contents of a scouting observation’s attachment.

### [operations](docs/operations/README.md)

* [fetchOperations](docs/operations/README.md#fetchoperations) - Retrieve the operations accessible to a a given user.

### [resourceOwners](docs/resourceowners/README.md)

* [getResourceOwner](docs/resourceowners/README.md#getresourceowner) - Retrieve a resource owner by ID

### [uploads](docs/uploads/README.md)

* [chunkedUpload](docs/uploads/README.md#chunkedupload) - Chunked upload of data
* [fetchUploadStatusById](docs/uploads/README.md#fetchuploadstatusbyid) - Retrieve Upload status
* [fetchUploadStatuses](docs/uploads/README.md#fetchuploadstatuses) - Retrieve Upload statuses in batch
* [postUpload](docs/uploads/README.md#postupload) - Initiate a new upload
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

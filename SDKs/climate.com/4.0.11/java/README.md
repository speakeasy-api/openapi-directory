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

import org.openapis.openapi.models.operations.FetchBoundariesSecurity;
import org.openapis.openapi.models.operations.FetchBoundariesResponse;
import org.openapis.openapi.models.shared.BoundariesQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BoundariesQuery req = new BoundariesQuery() {{
                ids = new String[]{{
                    add("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
                    add("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
                    add("b7392059-2939-46fe-a759-6eb10faaa235"),
                }};
            }}            

            FetchBoundariesResponse res = sdk.boundaries.fetchBoundaries(req, new FetchBoundariesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.boundaries.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
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

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
import org.openapis.openapi.models.operations.DeleteEarthObservationJobRequest;
import org.openapis.openapi.models.operations.DeleteEarthObservationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEarthObservationJobRequest req = new DeleteEarthObservationJobRequest("provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteEarthObservationJobResponse res = sdk.deleteEarthObservationJob(req);

            if (res.deleteEarthObservationJobOutput != null) {
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

### [SDK](docs/sdk/README.md)

* [deleteEarthObservationJob](docs/sdk/README.md#deleteearthobservationjob) - Use this operation to delete an Earth Observation job.
* [deleteVectorEnrichmentJob](docs/sdk/README.md#deletevectorenrichmentjob) - Use this operation to delete a Vector Enrichment job.
* [exportEarthObservationJob](docs/sdk/README.md#exportearthobservationjob) - Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.
* [exportVectorEnrichmentJob](docs/sdk/README.md#exportvectorenrichmentjob) - Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.
* [getEarthObservationJob](docs/sdk/README.md#getearthobservationjob) - Get the details for a previously initiated Earth Observation job.
* [getRasterDataCollection](docs/sdk/README.md#getrasterdatacollection) - Use this operation to get details of a specific raster data collection.
* [getTile](docs/sdk/README.md#gettile) - Gets a web mercator tile for the given Earth Observation job.
* [getVectorEnrichmentJob](docs/sdk/README.md#getvectorenrichmentjob) - Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
* [listEarthObservationJobs](docs/sdk/README.md#listearthobservationjobs) - Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
* [listRasterDataCollections](docs/sdk/README.md#listrasterdatacollections) - Use this operation to get raster data collections.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags attached to the resource.
* [listVectorEnrichmentJobs](docs/sdk/README.md#listvectorenrichmentjobs) - Retrieves a list of vector enrichment jobs.
* [searchRasterDataCollection](docs/sdk/README.md#searchrasterdatacollection) - Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
* [startEarthObservationJob](docs/sdk/README.md#startearthobservationjob) - Use this operation to create an Earth observation job.
* [startVectorEnrichmentJob](docs/sdk/README.md#startvectorenrichmentjob) - Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
* [stopEarthObservationJob](docs/sdk/README.md#stopearthobservationjob) - Use this operation to stop an existing earth observation job.
* [stopVectorEnrichmentJob](docs/sdk/README.md#stopvectorenrichmentjob) - Stops the Vector Enrichment job for a given job ARN.
* [tagResource](docs/sdk/README.md#tagresource) - The resource you want to tag.
* [untagResource](docs/sdk/README.md#untagresource) - The resource you want to untag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

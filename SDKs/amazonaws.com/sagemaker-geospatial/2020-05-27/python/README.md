# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/sagemaker-geospatial/2020-05-27/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteEarthObservationJobRequest(
    arn="corrupti",
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
)
    
res = s.delete_earth_observation_job(req)

if res.delete_earth_observation_job_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_earth_observation_job` - Use this operation to delete an Earth Observation job.
* `delete_vector_enrichment_job` - Use this operation to delete a Vector Enrichment job.
* `export_earth_observation_job` - Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an S3 location.
* `export_vector_enrichment_job` - Use this operation to copy results of a Vector Enrichment job to an S3 location.
* `get_earth_observation_job` - Get the details for a previously initiated Earth Observation job.
* `get_raster_data_collection` - Use this operation to get details of a specific raster data collection.
* `get_tile` - Gets a web mercator tile for the given Earth Observation job.
* `get_vector_enrichment_job` - Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
* `list_earth_observation_jobs` - Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
* `list_raster_data_collections` - Use this operation to get raster data collections.
* `list_tags_for_resource` - Lists the tags attached to the resource.
* `list_vector_enrichment_jobs` - Retrieves a list of vector enrichment jobs.
* `search_raster_data_collection` - Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
* `start_earth_observation_job` - Use this operation to create an Earth observation job.
* `start_vector_enrichment_job` - Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
* `stop_earth_observation_job` - Use this operation to stop an existing earth observation job.
* `stop_vector_enrichment_job` - Stops the Vector Enrichment job for a given job ARN.
* `tag_resource` - The resource you want to tag.
* `untag_resource` - The resource you want to untag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

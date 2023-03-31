# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/healthlake/2017-07-01/python
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


req = operations.CreateFHIRDatastoreRequest(
    create_fhir_datastore_request=shared.CreateFHIRDatastoreRequest(
        client_token="corrupti",
        datastore_name="provident",
        datastore_type_version="R4",
        preload_data_config=shared.PreloadDataConfig(
            preload_data_type="SYNTHEA",
        ),
        sse_configuration=shared.SseConfiguration(
            kms_encryption_config=shared.KmsEncryptionConfig(
                cmk_type="AWS_OWNED_KMS_KEY",
                kms_key_id="quibusdam",
            ),
        ),
        tags=[
            shared.Tag(
                key="nulla",
                value="corrupti",
            ),
            shared.Tag(
                key="illum",
                value="vel",
            ),
            shared.Tag(
                key="error",
                value="deserunt",
            ),
        ],
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
    x_amz_target="HealthLake.CreateFHIRDatastore",
)
    
res = s.create_fhir_datastore(req)

if res.create_fhir_datastore_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_fhir_datastore` - Creates a Data Store that can ingest and export FHIR formatted data.
* `delete_fhir_datastore` - Deletes a Data Store. 
* `describe_fhir_datastore` - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* `describe_fhir_export_job` - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* `describe_fhir_import_job` - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* `list_fhir_datastores` - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* `list_fhir_export_jobs` -  Lists all FHIR export jobs associated with an account and their statuses. 
* `list_fhir_import_jobs` -  Lists all FHIR import jobs associated with an account and their statuses. 
* `list_tags_for_resource` -  Returns a list of all existing tags associated with a Data Store. 
* `start_fhir_export_job` - Begins a FHIR export job.
* `start_fhir_import_job` - Begins a FHIR Import job.
* `tag_resource` -  Adds a user specifed key and value tag to a Data Store. 
* `untag_resource` -  Removes tags from a Data Store. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

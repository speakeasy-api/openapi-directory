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
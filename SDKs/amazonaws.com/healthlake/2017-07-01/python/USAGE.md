<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateFhirDatastoreRequest(
    headers=operations.CreateFhirDatastoreHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="est",
        x_amz_credential="eos",
        x_amz_date="quas",
        x_amz_security_token="commodi",
        x_amz_signature="eum",
        x_amz_signed_headers="ex",
        x_amz_target="HealthLake.CreateFHIRDatastore",
    ),
    request=shared.CreateFhirDatastoreRequest(
        client_token="deleniti",
        datastore_name="quam",
        datastore_type_version="R4",
        preload_data_config=shared.PreloadDataConfig(
            preload_data_type="SYNTHEA",
        ),
        sse_configuration=shared.SseConfiguration(
            kms_encryption_config=shared.KmsEncryptionConfig(
                cmk_type="AWS_OWNED_KMS_KEY",
                kms_key_id="molestiae",
            ),
        ),
        tags=[
            shared.Tag(
                key="magnam",
                value="voluptatem",
            ),
            shared.Tag(
                key="nihil",
                value="et",
            ),
            shared.Tag(
                key="recusandae",
                value="error",
            ),
        ],
    ),
)
    
res = s.create_fhir_datastore(req)

if res.create_fhir_datastore_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
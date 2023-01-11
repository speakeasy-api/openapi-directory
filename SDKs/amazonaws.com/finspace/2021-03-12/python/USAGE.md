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
    
req = operations.CreateEnvironmentRequest(
    headers=operations.CreateEnvironmentHeaders(
        x_amz_algorithm="vitae",
        x_amz_content_sha256="nulla",
        x_amz_credential="voluptatem",
        x_amz_date="dolor",
        x_amz_security_token="expedita",
        x_amz_signature="ea",
        x_amz_signed_headers="iure",
    ),
    request=operations.CreateEnvironmentRequestBody(
        description="ratione",
        federation_mode="FEDERATED",
        federation_parameters=operations.CreateEnvironmentRequestBodyFederationParameters(
            application_call_back_url="sed",
            attribute_map={
                "quae": "officia",
                "aperiam": "molestiae",
            },
            federation_provider_name="voluptatem",
            federation_urn="impedit",
            saml_metadata_document="debitis",
            saml_metadata_url="quae",
        ),
        kms_key_id="rerum",
        name="ut",
        tags={
            "excepturi": "et",
            "asperiores": "fugit",
            "perspiciatis": "ratione",
        },
    ),
)
    
res = s.create_environment(req)

if res.create_environment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
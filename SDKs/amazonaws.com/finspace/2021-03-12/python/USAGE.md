<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateEnvironmentRequest(
    request_body=operations.CreateEnvironmentRequestBody(
        data_bundles=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        description="unde",
        federation_mode="LOCAL",
        federation_parameters=operations.CreateEnvironmentRequestBodyFederationParameters(
            application_call_back_url="corrupti",
            attribute_map={
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            federation_provider_name="delectus",
            federation_urn="tempora",
            saml_metadata_document="suscipit",
            saml_metadata_url="molestiae",
        ),
        kms_key_id="minus",
        name="placeat",
        superuser_parameters=operations.CreateEnvironmentRequestBodySuperuserParameters(
            email_address="voluptatum",
            first_name="Jaycee",
            last_name="Mante",
        ),
        tags={
            "recusandae": "temporibus",
            "ab": "quis",
        },
    ),
    x_amz_algorithm="veritatis",
    x_amz_content_sha256="deserunt",
    x_amz_credential="perferendis",
    x_amz_date="ipsam",
    x_amz_security_token="repellendus",
    x_amz_signature="sapiente",
    x_amz_signed_headers="quo",
)
    
res = s.create_environment(req)

if res.create_environment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
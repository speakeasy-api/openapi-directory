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
    
req = operations.CreateAppRequest(
    headers=operations.CreateAppHeaders(
        x_amz_algorithm="dolorum",
        x_amz_content_sha256="ut",
        x_amz_credential="voluptatum",
        x_amz_date="alias",
        x_amz_security_token="consequatur",
        x_amz_signature="eum",
        x_amz_signed_headers="nemo",
    ),
    request=operations.CreateAppRequestBody(
        create_application_request=operations.CreateAppRequestBodyCreateApplicationRequest(
            name="omnis",
            tags={
                "reprehenderit": "omnis",
                "velit": "molestiae",
                "id": "quia",
            },
        ),
    ),
)
    
res = s.create_app(req)

if res.create_app_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
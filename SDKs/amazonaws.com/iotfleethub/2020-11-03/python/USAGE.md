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
    
req = operations.CreateApplicationRequest(
    headers=operations.CreateApplicationHeaders(
        x_amz_algorithm="vel",
        x_amz_content_sha256="tempora",
        x_amz_credential="atque",
        x_amz_date="repellendus",
        x_amz_security_token="ut",
        x_amz_signature="possimus",
        x_amz_signed_headers="cumque",
    ),
    request=operations.CreateApplicationRequestBody(
        application_description="odit",
        application_name="tempore",
        client_token="maiores",
        role_arn="dignissimos",
        tags={
            "voluptatum": "neque",
            "corporis": "quas",
            "autem": "qui",
        },
    ),
)
    
res = s.create_application(req)

if res.create_application_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
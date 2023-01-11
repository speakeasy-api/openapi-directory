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
    
req = operations.CreateTokenRequest(
    headers=operations.CreateTokenHeaders(
        x_amz_algorithm="enim",
        x_amz_content_sha256="quia",
        x_amz_credential="voluptatem",
        x_amz_date="suscipit",
        x_amz_security_token="dolorem",
        x_amz_signature="beatae",
        x_amz_signed_headers="at",
    ),
    request=operations.CreateTokenRequestBody(
        client_id="debitis",
        client_secret="optio",
        code="ut",
        device_code="at",
        grant_type="sed",
        redirect_uri="ut",
        refresh_token="cumque",
        scope=[
            "quibusdam",
        ],
    ),
)
    
res = s.create_token(req)

if res.create_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
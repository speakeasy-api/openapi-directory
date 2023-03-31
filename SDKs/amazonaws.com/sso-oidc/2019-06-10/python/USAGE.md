<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateTokenRequest(
    request_body=operations.CreateTokenRequestBody(
        client_id="corrupti",
        client_secret="provident",
        code="distinctio",
        device_code="quibusdam",
        grant_type="unde",
        redirect_uri="nulla",
        refresh_token="corrupti",
        scope=[
            "vel",
            "error",
            "deserunt",
            "suscipit",
        ],
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
)
    
res = s.create_token(req)

if res.create_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
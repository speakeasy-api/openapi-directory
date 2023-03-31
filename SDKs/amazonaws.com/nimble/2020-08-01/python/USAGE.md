<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptEulasRequest(
    request_body=operations.AcceptEulasRequestBody(
        eula_ids=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
    ),
    x_amz_algorithm="unde",
    x_amz_client_token="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
    studio_id="iure",
)
    
res = s.accept_eulas(req)

if res.accept_eulas_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
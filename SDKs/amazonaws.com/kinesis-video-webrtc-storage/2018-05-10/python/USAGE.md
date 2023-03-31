<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.JoinStorageSessionRequest(
    request_body=operations.JoinStorageSessionRequestBody(
        channel_arn="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
)
    
res = s.join_storage_session(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
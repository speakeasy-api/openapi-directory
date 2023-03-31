<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CloneBackendRequest(
    request_body=operations.CloneBackendRequestBody(
        target_environment_name="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    app_id="vel",
    backend_environment_name="error",
)
    
res = s.clone_backend(req)

if res.clone_backend_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
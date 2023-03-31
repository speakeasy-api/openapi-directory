<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETAbortEnvironmentUpdateRequest(
    action="AbortEnvironmentUpdate",
    environment_id="corrupti",
    environment_name="provident",
    version="2010-12-01",
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.get_abort_environment_update(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
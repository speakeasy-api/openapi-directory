<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateProjectRequest(
    request_body=operations.CreateProjectRequestBody(
        contents="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    name="vel",
    region="error",
    snapshot_id="deserunt",
)
    
res = s.create_project(req)

if res.create_project_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->
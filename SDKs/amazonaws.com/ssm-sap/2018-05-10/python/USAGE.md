<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteResourcePermissionRequest(
    request_body=operations.DeleteResourcePermissionRequestBody(
        action_type="RESTORE",
        resource_arn="corrupti",
        source_resource_arn="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.delete_resource_permission(req)

if res.delete_resource_permission_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->
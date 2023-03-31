<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddLayerVersionPermissionRequest(
    layer_name="corrupti",
    request_body=operations.AddLayerVersionPermissionRequestBody(
        action="provident",
        organization_id="distinctio",
        principal="quibusdam",
        statement_id="unde",
    ),
    revision_id="nulla",
    version_number=544883,
    x_amz_algorithm="illum",
    x_amz_content_sha256="vel",
    x_amz_credential="error",
    x_amz_date="deserunt",
    x_amz_security_token="suscipit",
    x_amz_signature="iure",
    x_amz_signed_headers="magnam",
)
    
res = s.add_layer_version_permission(req)

if res.add_layer_version_permission_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
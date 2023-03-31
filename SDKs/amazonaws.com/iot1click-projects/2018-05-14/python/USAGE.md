<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateDeviceWithPlacementRequest(
    request_body=operations.AssociateDeviceWithPlacementRequestBody(
        device_id="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    device_template_name="vel",
    placement_name="error",
    project_name="deserunt",
)
    
res = s.associate_device_with_placement(req)

if res.associate_device_with_placement_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
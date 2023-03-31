<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CancelImageCreationRequest(
    request_body=operations.CancelImageCreationRequestBody(
        client_token="corrupti",
        image_build_version_arn="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.cancel_image_creation(req)

if res.cancel_image_creation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
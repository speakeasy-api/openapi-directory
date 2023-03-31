<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AbortMultipartUploadRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    account_id="illum",
    upload_id="vel",
    vault_name="error",
)
    
res = s.abort_multipart_upload(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
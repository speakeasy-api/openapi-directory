<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptSharedDirectoryRequest(
    accept_shared_directory_request=shared.AcceptSharedDirectoryRequest(
        shared_directory_id="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    x_amz_target="DirectoryService_20150416.AcceptSharedDirectory",
)
    
res = s.accept_shared_directory(req)

if res.accept_shared_directory_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->
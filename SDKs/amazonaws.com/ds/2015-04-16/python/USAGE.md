<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AcceptSharedDirectoryRequest(
    headers=operations.AcceptSharedDirectoryHeaders(
        x_amz_algorithm="quis",
        x_amz_content_sha256="saepe",
        x_amz_credential="illo",
        x_amz_date="aliquam",
        x_amz_security_token="qui",
        x_amz_signature="quia",
        x_amz_signed_headers="aperiam",
        x_amz_target="DirectoryService_20150416.AcceptSharedDirectory",
    ),
    request=shared.AcceptSharedDirectoryRequest(
        shared_directory_id="voluptatem",
    ),
)
    
res = s.accept_shared_directory(req)

if res.accept_shared_directory_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->
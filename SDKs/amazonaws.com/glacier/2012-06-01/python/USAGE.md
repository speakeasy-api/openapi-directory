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
    
req = operations.AbortMultipartUploadRequest(
    path_params=operations.AbortMultipartUploadPathParams(
        account_id="similique",
        upload_id="recusandae",
        vault_name="error",
    ),
    headers=operations.AbortMultipartUploadHeaders(
        x_amz_algorithm="hic",
        x_amz_content_sha256="atque",
        x_amz_credential="rerum",
        x_amz_date="voluptates",
        x_amz_security_token="iste",
        x_amz_signature="reiciendis",
        x_amz_signed_headers="ipsam",
    ),
)
    
res = s.abort_multipart_upload(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
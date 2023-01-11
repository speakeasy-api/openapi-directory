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
    
req = operations.CompleteAttachmentUploadRequest(
    headers=operations.CompleteAttachmentUploadHeaders(
        x_amz_algorithm="earum",
        x_amz_bearer="quas",
        x_amz_content_sha256="repellendus",
        x_amz_credential="ut",
        x_amz_date="voluptas",
        x_amz_security_token="quisquam",
        x_amz_signature="qui",
        x_amz_signed_headers="voluptas",
    ),
    request=operations.CompleteAttachmentUploadRequestBody(
        attachment_ids=[
            "deleniti",
            "totam",
            "nemo",
        ],
        client_token="eligendi",
    ),
)
    
res = s.complete_attachment_upload(req)

if res.complete_attachment_upload_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CompleteAttachmentUploadRequest(
    request_body=operations.CompleteAttachmentUploadRequestBody(
        attachment_ids=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        client_token="unde",
    ),
    x_amz_algorithm="nulla",
    x_amz_bearer="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
)
    
res = s.complete_attachment_upload(req)

if res.complete_attachment_upload_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
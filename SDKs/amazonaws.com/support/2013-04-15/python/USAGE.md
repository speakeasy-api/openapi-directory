<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddAttachmentsToSetRequest(
    add_attachments_to_set_request=shared.AddAttachmentsToSetRequest(
        attachment_set_id="corrupti",
        attachments=[
            shared.Attachment(
                data="distinctio",
                file_name="quibusdam",
            ),
            shared.Attachment(
                data="unde",
                file_name="nulla",
            ),
            shared.Attachment(
                data="corrupti",
                file_name="illum",
            ),
        ],
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
    x_amz_target="AWSSupport_20130415.AddAttachmentsToSet",
)
    
res = s.add_attachments_to_set(req)

if res.add_attachments_to_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
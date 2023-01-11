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
    
req = operations.AddAttachmentsToSetRequest(
    headers=operations.AddAttachmentsToSetHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="qui",
        x_amz_credential="deleniti",
        x_amz_date="eos",
        x_amz_security_token="error",
        x_amz_signature="illo",
        x_amz_signed_headers="veniam",
        x_amz_target="AWSSupport_20130415.AddAttachmentsToSet",
    ),
    request=shared.AddAttachmentsToSetRequest(
        attachment_set_id="fugit",
        attachments=[
            shared.Attachment(
                data="aut",
                file_name="modi",
            ),
            shared.Attachment(
                data="ex",
                file_name="voluptatibus",
            ),
        ],
    ),
)
    
res = s.add_attachments_to_set(req)

if res.add_attachments_to_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
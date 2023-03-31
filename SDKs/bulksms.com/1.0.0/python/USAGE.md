<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.PreSignRequest(
    file_extension="pdf",
    media_type="application/pdf",
)
    
res = s.attachments.post_rmm_pre_sign_attachment(req, operations.PostRmmPreSignAttachmentSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.pre_sign_info is not None:
    # handle response
```
<!-- End SDK Example Usage -->
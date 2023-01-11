<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.PostRmmPreSignAttachmentRequest(
    security=operations.PostRmmPreSignAttachmentSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=shared.PreSignRequest(
        file_extension="dignissimos",
        media_type="ullam",
    ),
)
    
res = s.attachments.post_rmm_pre_sign_attachment(req)

if res.pre_sign_info is not None:
    # handle response
```
<!-- End SDK Example Usage -->
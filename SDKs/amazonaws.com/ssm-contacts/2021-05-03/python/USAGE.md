<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptPageRequest(
    accept_page_request=shared.AcceptPageRequest(
        accept_code="corrupti",
        accept_code_validation="ENFORCE",
        accept_type="READ",
        contact_channel_id="quibusdam",
        note="unde",
        page_id="nulla",
    ),
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
    x_amz_target="SSMContacts.AcceptPage",
)
    
res = s.accept_page(req)

if res.accept_page_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->
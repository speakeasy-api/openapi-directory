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
    
req = operations.AcceptPageRequest(
    headers=operations.AcceptPageHeaders(
        x_amz_algorithm="vitae",
        x_amz_content_sha256="quasi",
        x_amz_credential="ipsum",
        x_amz_date="incidunt",
        x_amz_security_token="vitae",
        x_amz_signature="animi",
        x_amz_signed_headers="eos",
        x_amz_target="SSMContacts.AcceptPage",
    ),
    request=shared.AcceptPageRequest(
        accept_code="aperiam",
        accept_code_validation="ENFORCE",
        accept_type="DELIVERED",
        contact_channel_id="in",
        note="eum",
        page_id="quibusdam",
    ),
)
    
res = s.accept_page(req)

if res.accept_page_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->
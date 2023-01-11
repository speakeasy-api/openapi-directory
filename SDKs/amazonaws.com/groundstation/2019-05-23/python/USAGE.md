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
    
req = operations.CancelContactRequest(
    path_params=operations.CancelContactPathParams(
        contact_id="repudiandae",
    ),
    headers=operations.CancelContactHeaders(
        x_amz_algorithm="quo",
        x_amz_content_sha256="omnis",
        x_amz_credential="adipisci",
        x_amz_date="praesentium",
        x_amz_security_token="qui",
        x_amz_signature="ipsam",
        x_amz_signed_headers="in",
    ),
)
    
res = s.cancel_contact(req)

if res.contact_id_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
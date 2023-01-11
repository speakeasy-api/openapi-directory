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
    
req = operations.AcceptInvitationRequest(
    headers=operations.AcceptInvitationHeaders(
        x_amz_algorithm="veritatis",
        x_amz_content_sha256="qui",
        x_amz_credential="facere",
        x_amz_date="aut",
        x_amz_security_token="nesciunt",
        x_amz_signature="adipisci",
        x_amz_signed_headers="consequatur",
    ),
    request=operations.AcceptInvitationRequestBody(
        administrator_account_id="praesentium",
        invitation_id="temporibus",
        master_account="alias",
    ),
)
    
res = s.accept_invitation(req)

if res.accept_invitation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
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
    
req = operations.AcceptAdministratorInvitationRequest(
    headers=operations.AcceptAdministratorInvitationHeaders(
        x_amz_algorithm="sint",
        x_amz_content_sha256="et",
        x_amz_credential="deleniti",
        x_amz_date="ratione",
        x_amz_security_token="voluptas",
        x_amz_signature="quas",
        x_amz_signed_headers="quae",
    ),
    request=operations.AcceptAdministratorInvitationRequestBody(
        administrator_id="incidunt",
        invitation_id="sapiente",
    ),
)
    
res = s.accept_administrator_invitation(req)

if res.accept_administrator_invitation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
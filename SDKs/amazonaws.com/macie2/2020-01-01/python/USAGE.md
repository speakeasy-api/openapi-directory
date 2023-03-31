<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptInvitationRequest(
    request_body=operations.AcceptInvitationRequestBody(
        administrator_account_id="corrupti",
        invitation_id="provident",
        master_account="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
)
    
res = s.accept_invitation(req)

if res.accept_invitation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
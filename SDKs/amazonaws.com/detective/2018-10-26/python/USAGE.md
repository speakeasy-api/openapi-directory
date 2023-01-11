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
        x_amz_algorithm="temporibus",
        x_amz_content_sha256="consequatur",
        x_amz_credential="non",
        x_amz_date="nulla",
        x_amz_security_token="inventore",
        x_amz_signature="reprehenderit",
        x_amz_signed_headers="quos",
    ),
    request=operations.AcceptInvitationRequestBody(
        graph_arn="saepe",
    ),
)
    
res = s.accept_invitation(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
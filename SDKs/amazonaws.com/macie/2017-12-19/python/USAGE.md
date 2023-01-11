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
    
req = operations.AssociateMemberAccountRequest(
    headers=operations.AssociateMemberAccountHeaders(
        x_amz_algorithm="qui",
        x_amz_content_sha256="harum",
        x_amz_credential="fuga",
        x_amz_date="facilis",
        x_amz_security_token="blanditiis",
        x_amz_signature="dicta",
        x_amz_signed_headers="ea",
        x_amz_target="MacieService.AssociateMemberAccount",
    ),
    request=shared.AssociateMemberAccountRequest(
        member_account_id="non",
    ),
)
    
res = s.associate_member_account(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
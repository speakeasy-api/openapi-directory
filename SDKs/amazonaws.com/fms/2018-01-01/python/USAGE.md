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
    
req = operations.AssociateAdminAccountRequest(
    headers=operations.AssociateAdminAccountHeaders(
        x_amz_algorithm="expedita",
        x_amz_content_sha256="cupiditate",
        x_amz_credential="aut",
        x_amz_date="id",
        x_amz_security_token="suscipit",
        x_amz_signature="dicta",
        x_amz_signed_headers="laboriosam",
        x_amz_target="AWSFMS_20180101.AssociateAdminAccount",
    ),
    request=shared.AssociateAdminAccountRequest(
        admin_account="architecto",
    ),
)
    
res = s.associate_admin_account(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
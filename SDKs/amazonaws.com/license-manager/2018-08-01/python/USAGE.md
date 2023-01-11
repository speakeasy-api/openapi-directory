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
    
req = operations.AcceptGrantRequest(
    headers=operations.AcceptGrantHeaders(
        x_amz_algorithm="vel",
        x_amz_content_sha256="rerum",
        x_amz_credential="minus",
        x_amz_date="asperiores",
        x_amz_security_token="laboriosam",
        x_amz_signature="voluptate",
        x_amz_signed_headers="aut",
        x_amz_target="AWSLicenseManager.AcceptGrant",
    ),
    request=shared.AcceptGrantRequest(
        grant_arn="ipsa",
    ),
)
    
res = s.accept_grant(req)

if res.accept_grant_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
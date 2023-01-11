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
    
req = operations.AssociateDomainRequest(
    headers=operations.AssociateDomainHeaders(
        x_amz_algorithm="nobis",
        x_amz_content_sha256="possimus",
        x_amz_credential="voluptate",
        x_amz_date="illum",
        x_amz_security_token="iusto",
        x_amz_signature="sunt",
        x_amz_signed_headers="saepe",
    ),
    request=operations.AssociateDomainRequestBody(
        acm_certificate_arn="veniam",
        display_name="quod",
        domain_name="ducimus",
        fleet_arn="esse",
    ),
)
    
res = s.associate_domain(req)

if res.associate_domain_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
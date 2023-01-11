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
    
req = operations.AssociateCustomDomainRequest(
    headers=operations.AssociateCustomDomainHeaders(
        x_amz_algorithm="pariatur",
        x_amz_content_sha256="id",
        x_amz_credential="voluptatem",
        x_amz_date="esse",
        x_amz_security_token="in",
        x_amz_signature="amet",
        x_amz_signed_headers="consectetur",
        x_amz_target="AppRunner.AssociateCustomDomain",
    ),
    request=shared.AssociateCustomDomainRequest(
        domain_name="nesciunt",
        enable_www_subdomain=False,
        service_arn="aut",
    ),
)
    
res = s.associate_custom_domain(req)

if res.associate_custom_domain_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
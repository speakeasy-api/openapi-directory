<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateCustomDomainRequest(
    associate_custom_domain_request=shared.AssociateCustomDomainRequest(
        domain_name="corrupti",
        enable_www_subdomain=False,
        service_arn="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="AppRunner.AssociateCustomDomain",
)
    
res = s.associate_custom_domain(req)

if res.associate_custom_domain_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateDomainRequest(
    request_body=operations.AssociateDomainRequestBody(
        acm_certificate_arn="corrupti",
        display_name="provident",
        domain_name="distinctio",
        fleet_arn="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
)
    
res = s.associate_domain(req)

if res.associate_domain_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
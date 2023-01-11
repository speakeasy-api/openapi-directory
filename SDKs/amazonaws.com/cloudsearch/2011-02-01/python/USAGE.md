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
    
req = operations.GetCreateDomainRequest(
    query_params=operations.GetCreateDomainQueryParams(
        action="CreateDomain",
        domain_name="illo",
        version="2011-02-01",
    ),
    headers=operations.GetCreateDomainHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="aut",
        x_amz_credential="eum",
        x_amz_date="mollitia",
        x_amz_security_token="praesentium",
        x_amz_signature="inventore",
        x_amz_signed_headers="adipisci",
    ),
)
    
res = s.get_create_domain(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->
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
        aws_access_key_id="dolorem",
        action="CreateDomain",
        domain_name="repellendus",
        signature="magni",
        signature_method="necessitatibus",
        signature_version="provident",
        timestamp="placeat",
        version="2009-04-15",
    ),
)
    
res = s.get_create_domain(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
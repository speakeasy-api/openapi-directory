<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETCreateDomainRequest(
    aws_access_key_id="corrupti",
    action="CreateDomain",
    domain_name="provident",
    signature="distinctio",
    signature_method="quibusdam",
    signature_version="unde",
    timestamp="nulla",
    version="2009-04-15",
)
    
res = s.get_create_domain(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
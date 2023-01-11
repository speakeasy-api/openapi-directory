<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CheckDomainRequest(
    path_params=operations.CheckDomainPathParams(
        domain="porro",
    ),
)
    
res = s.check_domain(req)

if res.check_domain_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
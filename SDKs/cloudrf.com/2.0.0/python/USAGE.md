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
    
req = operations.InterferenceRequest(
    security=operations.InterferenceSecurity(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.InterferenceQueryParams(
        name="voluptas",
        network="quam",
    ),
)
    
res = s.analyse.interference(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
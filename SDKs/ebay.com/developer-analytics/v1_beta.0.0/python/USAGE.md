<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetRateLimitsRequest(
    security=operations.GetRateLimitsSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.GetRateLimitsQueryParams(
        api_context="placeat",
        api_name="doloremque",
    ),
)
    
res = s.rate_limit.get_rate_limits(req)

if res.rate_limits_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
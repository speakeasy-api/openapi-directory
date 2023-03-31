<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRateLimitsRequest(
    api_context="corrupti",
    api_name="provident",
)
    
res = s.rate_limit.get_rate_limits(req, operations.GetRateLimitsSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.rate_limits_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
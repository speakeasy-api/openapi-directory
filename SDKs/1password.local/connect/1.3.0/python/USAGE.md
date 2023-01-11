<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAPIActivityRequest(
    security=operations.GetAPIActivitySecurity(
        connect_token=shared.SchemeConnectToken(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    query_params=operations.GetAPIActivityQueryParams(
        limit=2259404117704393152,
        offset=6050128673802995827,
    ),
)
    
res = s.activity.get_api_activity(req)

if res.api_requests is not None:
    # handle response
```
<!-- End SDK Example Usage -->
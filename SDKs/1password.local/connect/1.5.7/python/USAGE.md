<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAPIActivityRequest(
    limit=10,
    offset=50,
)
    
res = s.activity.get_api_activity(req, operations.GetAPIActivitySecurity(
    connect_token="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.api_requests is not None:
    # handle response
```
<!-- End SDK Example Usage -->
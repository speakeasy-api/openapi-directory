<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetUserRequest(
    security=operations.GetUserSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
)
    
res = s.user.get_user(req)

if res.user_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
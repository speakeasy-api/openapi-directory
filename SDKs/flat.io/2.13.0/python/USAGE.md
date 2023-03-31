<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAuthenticatedUserRequest(
    only_id=False,
)
    
res = s.account.get_authenticated_user(req, operations.GetAuthenticatedUserSecurity(
    o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.user_details is not None:
    # handle response
```
<!-- End SDK Example Usage -->
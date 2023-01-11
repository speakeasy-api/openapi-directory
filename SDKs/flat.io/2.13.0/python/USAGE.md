<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAuthenticatedUserRequest(
    security=operations.GetAuthenticatedUserSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.GetAuthenticatedUserQueryParams(
        only_id=False,
    ),
)
    
res = s.account.get_authenticated_user(req)

if res.user_details is not None:
    # handle response
```
<!-- End SDK Example Usage -->
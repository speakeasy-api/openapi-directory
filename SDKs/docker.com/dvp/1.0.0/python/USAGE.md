<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hub_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = shared.Users2FALoginRequest(
    code="123456",
    login_2fa_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
)
    
res = s.authentication.post_users2_fa_login(req)

if res.post_users_login_success_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
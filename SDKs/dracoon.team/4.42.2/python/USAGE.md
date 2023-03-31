<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.CompleteOpenIDLoginRequest(
    code="corrupti",
    id_token="provident",
    state="distinctio",
)
    
res = s.auth.complete_open_id_login(req)

if res.login_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
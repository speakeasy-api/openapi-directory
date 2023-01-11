<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.RequestAccessTokenRequest(
    path_params=operations.RequestAccessTokenPathParams(
        key_name="dolor",
    ),
    query_params=operations.RequestAccessTokenQueryParams(
        format="html",
    ),
    headers=operations.RequestAccessTokenHeaders(
        x_ably_version="voluptas",
    ),
    request="fugit",
)
    
res = s.authentication.request_access_token(req)

if res.token_details is not None:
    # handle response
```
<!-- End SDK Example Usage -->
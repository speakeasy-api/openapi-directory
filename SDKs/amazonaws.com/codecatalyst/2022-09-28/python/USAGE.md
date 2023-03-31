<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAccessTokenRequestBody(
    expires_time="2021-10-25T05:21:43.948Z",
    name="distinctio",
)
    
res = s.create_access_token(req)

if res.create_access_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
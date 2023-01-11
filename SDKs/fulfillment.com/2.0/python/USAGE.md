<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostOauthAccessTokenRequest(
    request="explicabo",
)
    
res = s.auth.post_oauth_access_token(req)

if res.access_token_response_v2 is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostAuthOauthTokenRequest(
    request=operations.PostAuthOauthTokenRequestBody(
        client_id="vel",
        client_secret="voluptates",
        grant_type="nesciunt",
        scope="vel",
    ),
)
    
res = s.auth.post_auth_oauth_token(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
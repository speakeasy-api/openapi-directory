<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
)


req = operations.RequestAccessTokenRequest(
    request_body=shared.SignedTokenRequest(
        capability={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        client_id="vel",
        key_name="xVLyHw.LMJZxw",
        mac="error",
        nonce="deserunt",
        timestamp=384382,
    ),
    x_ably_version="iure",
    format="jsonp",
    key_name="debitis",
)
    
res = s.authentication.request_access_token(req)

if res.token_details is not None:
    # handle response
```
<!-- End SDK Example Usage -->
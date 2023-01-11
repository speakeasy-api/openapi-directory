<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        token_header=shared.SchemeTokenHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DeleteSigninSigninIDRequest(
    path_params=operations.DeleteSigninSigninIDPathParams(
        signin_id=1213256779453366885,
    ),
)
    
res = s.attendees_signins.delete_signin_signin_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
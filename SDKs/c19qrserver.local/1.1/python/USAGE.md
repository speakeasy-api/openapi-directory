<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        token_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteSigninSigninIDRequest(
    signin_id=1,
)
    
res = s.attendees_signins.delete_signin_signin_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
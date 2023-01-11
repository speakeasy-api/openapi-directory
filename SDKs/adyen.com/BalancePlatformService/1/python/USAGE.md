<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAccountHoldersIDRequest(
    security=operations.GetAccountHoldersIDSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.GetAccountHoldersIDPathParams(
        id="dolorem",
    ),
)
    
res = s.account_holders.get_account_holders_id(req)

if res.account_holder is not None:
    # handle response
```
<!-- End SDK Example Usage -->
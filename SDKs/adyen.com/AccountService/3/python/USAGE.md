<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostCloseAccountHolderRequest(
    security=operations.PostCloseAccountHolderSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request="debitis",
)
    
res = s.account_holders.post_close_account_holder(req)

if res.close_account_holder_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
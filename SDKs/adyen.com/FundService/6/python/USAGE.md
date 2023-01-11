<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostAccountHolderBalanceRequest(
    security=operations.PostAccountHolderBalanceSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request="dolores",
)
    
res = s.general.post_account_holder_balance(req)

if res.account_holder_balance_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
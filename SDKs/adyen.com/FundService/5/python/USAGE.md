<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.AccountHolderBalanceRequest(
    account_holder_code="corrupti",
)
    
res = s.general.post_account_holder_balance(req, operations.PostAccountHolderBalanceSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.account_holder_balance_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
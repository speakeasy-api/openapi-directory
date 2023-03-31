<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAccountHoldersIDRequest(
    id="corrupti",
)
    
res = s.account_holders.get_account_holders_id(req, operations.GetAccountHoldersIDSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.account_holder is not None:
    # handle response
```
<!-- End SDK Example Usage -->
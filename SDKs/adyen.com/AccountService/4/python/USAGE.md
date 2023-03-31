<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CloseAccountHolderRequest(
    account_holder_code="corrupti",
)
    
res = s.account_holders.post_close_account_holder(req, operations.PostCloseAccountHolderSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.close_account_holder_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AccountCreateRecoveryRequestBody(
    email="Larue_Rau85@yahoo.com",
    url="corrupti",
)
    
res = s.account.account_create_recovery(req, operations.AccountCreateRecoverySecurity(
    jwt="YOUR_API_KEY_HERE",
    project="YOUR_API_KEY_HERE",
))

if res.token is not None:
    # handle response
```
<!-- End SDK Example Usage -->
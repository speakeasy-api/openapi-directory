<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AccountCreateRequestBody(
    email="Larue_Rau85@yahoo.com",
    name="corrupti",
    password="illum",
)
    
res = s.account.account_create(req, operations.AccountCreateSecurity(
    project="YOUR_API_KEY_HERE",
))

if res.user is not None:
    # handle response
```
<!-- End SDK Example Usage -->
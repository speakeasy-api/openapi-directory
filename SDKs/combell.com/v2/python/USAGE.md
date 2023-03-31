<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateAccount(
    ftp_password="corrupti",
    identifier="provident",
    servicepack_id=715190,
)
    
res = s.accounts.create_account(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
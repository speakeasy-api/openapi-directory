<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.accounts.accounts_get()

if res.page_result_account_dto is not None:
    # handle response
```
<!-- End SDK Example Usage -->
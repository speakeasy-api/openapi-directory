<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.AccountDeleteDomainWhitelistRequest(
    whitelist_id="corrupti",
)
    
res = s.account.account_delete_domain_whitelist(req)

if res.api_core_dto_accounting_domain_whitelist_entry is not None:
    # handle response
```
<!-- End SDK Example Usage -->
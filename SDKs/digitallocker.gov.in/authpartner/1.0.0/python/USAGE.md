<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AccountDetailAPIIDRequest(
    security=operations.AccountDetailAPIIDSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
)
    
res = s.account_detail_api.account_detail_api_id(req)

if res.sample is not None:
    # handle response
```
<!-- End SDK Example Usage -->
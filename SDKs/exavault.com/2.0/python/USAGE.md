<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAccountRequest(
    query_params=operations.GetAccountQueryParams(
        include="maxime",
    ),
    headers=operations.GetAccountHeaders(
        ev_access_token="facilis",
        ev_api_key="iure",
    ),
)
    
res = s.account.get_account(req)

if res.account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
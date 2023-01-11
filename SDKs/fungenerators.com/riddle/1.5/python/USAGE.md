<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteRiddleRequest(
    security=operations.DeleteRiddleSecurity(
        x_fungenerators_api_secret=shared.SchemeXFungeneratorsAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.DeleteRiddleQueryParams(
        id="ipsa",
    ),
)
    
res = s.private_riddles.delete_riddle(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
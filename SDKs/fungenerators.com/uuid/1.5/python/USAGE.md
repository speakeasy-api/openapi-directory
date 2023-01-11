<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetUUIDRequest(
    security=operations.GetUUIDSecurity(
        x_fungenerators_api_secret=shared.SchemeXFungeneratorsAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetUUIDQueryParams(
        count=7828643123862776481,
    ),
)
    
res = s.uuid_generation.get_uuid(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
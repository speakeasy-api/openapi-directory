<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetSearchRequest(
    security=operations.GetSearchSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetSearchQueryParams(
        q="magnam",
    ),
)
    
res = s.rating.get_search(req)

if res.get_search_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->
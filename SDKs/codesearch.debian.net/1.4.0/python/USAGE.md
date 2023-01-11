<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SearchRequest(
    security=operations.SearchSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.SearchQueryParams(
        match_mode="regexp",
        query="ullam",
    ),
)
    
res = s.search.search(req)

if res.search_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->
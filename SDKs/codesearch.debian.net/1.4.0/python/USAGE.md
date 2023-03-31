<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SearchRequest(
    match_mode="regexp",
    query="provident",
)
    
res = s.search.search(req, operations.SearchSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.search_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetContentproSearchRequest(
    query_params=operations.GetContentproSearchQueryParams(
        terms="nisi",
    ),
)
    
res = s.contentpro_search.get_contentpro_search(req)

if res.get_contentpro_search_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
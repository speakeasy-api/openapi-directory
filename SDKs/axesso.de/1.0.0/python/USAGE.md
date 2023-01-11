<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.KeywordSearchRequest(
    query_params=operations.KeywordSearchQueryParams(
        domain_code="aut",
        keyword="velit",
        number_of_products=8628636448964422193,
        sort_by="non",
    ),
)
    
res = s.amz.keyword_search(req)

if res.keyword_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
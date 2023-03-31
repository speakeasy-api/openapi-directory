<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KeywordSearchRequest(
    domain_code="corrupti",
    keyword="provident",
    number_of_products=715190,
    sort_by="quibusdam",
)
    
res = s.amz.keyword_search(req)

if res.keyword_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
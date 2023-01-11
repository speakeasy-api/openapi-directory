<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetSearchV1FieldsRequest(
    query_params=operations.GetSearchV1FieldsQueryParams(
        callback="officia",
    ),
)
    
res = s.get_search_v1_fields(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->
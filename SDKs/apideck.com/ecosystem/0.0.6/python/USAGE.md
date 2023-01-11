<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CategoriesAllRequest(
    path_params=operations.CategoriesAllPathParams(
        ecosystem_id="itaque",
    ),
    query_params=operations.CategoriesAllQueryParams(
        cursor="optio",
        limit=7998526504416170211,
    ),
)
    
res = s.category.categories_all(req)

if res.get_categories_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
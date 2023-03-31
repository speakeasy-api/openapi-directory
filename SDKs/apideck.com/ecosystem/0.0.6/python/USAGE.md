<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CategoriesAllRequest(
    cursor="corrupti",
    ecosystem_id="provident",
    limit=715190,
)
    
res = s.category.categories_all(req)

if res.get_categories_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
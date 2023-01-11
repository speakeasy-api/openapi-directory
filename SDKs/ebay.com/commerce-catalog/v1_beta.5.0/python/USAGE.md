<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetProductRequest(
    security=operations.GetProductSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetProductPathParams(
        epid="modi",
    ),
)
    
res = s.product.get_product(req)

if res.product is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetProductRequest(
    x_ebay_c_marketplace_id="corrupti",
    epid="provident",
)
    
res = s.product.get_product(req, operations.GetProductSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.product is not None:
    # handle response
```
<!-- End SDK Example Usage -->
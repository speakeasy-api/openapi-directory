<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetMerchandisedProductsRequest(
    aspect_filter="corrupti",
    category_id="provident",
    limit="distinctio",
    metric_name="quibusdam",
)
    
res = s.merchandised_product.get_merchandised_products(req, operations.GetMerchandisedProductsSecurity(
    client_credentials="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->
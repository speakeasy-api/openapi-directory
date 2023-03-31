<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetOrderRequest(
    field_groups="corrupti",
    order_id="provident",
)
    
res = s.order.get_order(req, operations.GetOrderSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.order is not None:
    # handle response
```
<!-- End SDK Example Usage -->
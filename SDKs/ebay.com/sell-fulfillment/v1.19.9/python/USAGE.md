<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetOrderRequest(
    security=operations.GetOrderSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetOrderPathParams(
        order_id="quasi",
    ),
    query_params=operations.GetOrderQueryParams(
        field_groups="odit",
    ),
)
    
res = s.order.get_order(req)

if res.order is not None:
    # handle response
```
<!-- End SDK Example Usage -->
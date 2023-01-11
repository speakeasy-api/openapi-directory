<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetCustomerServiceMetricRequest(
    security=operations.GetCustomerServiceMetricSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetCustomerServiceMetricPathParams(
        customer_service_metric_type="consequuntur",
        evaluation_type="sunt",
    ),
    query_params=operations.GetCustomerServiceMetricQueryParams(
        evaluation_marketplace_id="quo",
    ),
)
    
res = s.customer_service_metric.get_customer_service_metric(req)

if res.get_customer_service_metric_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
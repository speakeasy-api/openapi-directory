<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCustomerServiceMetricRequest(
    customer_service_metric_type="corrupti",
    evaluation_marketplace_id="provident",
    evaluation_type="distinctio",
)
    
res = s.customer_service_metric.get_customer_service_metric(req, operations.GetCustomerServiceMetricSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.get_customer_service_metric_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
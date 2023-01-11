<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateCustomerServiceMetricTaskRequest(
    security=operations.CreateCustomerServiceMetricTaskSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    headers=operations.CreateCustomerServiceMetricTaskHeaders(
        accept_language="voluptas",
    ),
    request=shared.CreateServiceMetricsTaskRequest(
        feed_type="et",
        filter_criteria=shared.CustomerServiceMetricsFilterCriteria(
            customer_service_metric_type="culpa",
            evaluation_marketplace_id="odio",
            listing_categories=[
                "voluptas",
            ],
            shipping_regions=[
                "corrupti",
            ],
        ),
        schema_version="qui",
    ),
)
    
res = s.customer_service_metric_task.create_customer_service_metric_task(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
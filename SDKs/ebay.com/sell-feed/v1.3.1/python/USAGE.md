<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateCustomerServiceMetricTaskRequest(
    create_service_metrics_task_request=shared.CreateServiceMetricsTaskRequest(
        feed_type="corrupti",
        filter_criteria=shared.CustomerServiceMetricsFilterCriteria(
            customer_service_metric_type="provident",
            evaluation_marketplace_id="distinctio",
            listing_categories=[
                "unde",
                "nulla",
                "corrupti",
                "illum",
            ],
            shipping_regions=[
                "error",
                "deserunt",
            ],
        ),
        schema_version="suscipit",
    ),
    accept_language="iure",
)
    
res = s.customer_service_metric_task.create_customer_service_metric_task(req, operations.CreateCustomerServiceMetricTaskSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
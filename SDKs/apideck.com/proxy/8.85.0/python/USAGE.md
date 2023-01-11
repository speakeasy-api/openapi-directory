<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        application_id=shared.SchemeApplicationID(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DeleteProxyRequest(
    security=operations.DeleteProxySecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    headers=operations.DeleteProxyHeaders(
        x_apideck_app_id="ullam",
        x_apideck_consumer_id="id",
        x_apideck_downstream_authorization="temporibus",
        x_apideck_downstream_url="ipsam",
        x_apideck_service_id="eum",
    ),
)
    
res = s.execute.delete_proxy(req)

if res.delete_proxy_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->
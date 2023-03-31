<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteProxyRequest(
    x_apideck_app_id="corrupti",
    x_apideck_consumer_id="provident",
    x_apideck_downstream_authorization="distinctio",
    x_apideck_downstream_url="quibusdam",
    x_apideck_service_id="unde",
)
    
res = s.execute.delete_proxy(req, operations.DeleteProxySecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.delete_proxy_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->
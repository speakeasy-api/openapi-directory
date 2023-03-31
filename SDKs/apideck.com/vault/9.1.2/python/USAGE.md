<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConnectionSettingsAllRequest(
    resource="corrupti",
    service_id="provident",
    unified_api="distinctio",
    x_apideck_app_id="quibusdam",
    x_apideck_consumer_id="unde",
)
    
res = s.connections.connection_settings_all(req, operations.ConnectionSettingsAllSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_connection_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
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
    
req = operations.ConnectionSettingsAllRequest(
    security=operations.ConnectionSettingsAllSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.ConnectionSettingsAllPathParams(
        resource="atque",
        service_id="maiores",
        unified_api="beatae",
    ),
    headers=operations.ConnectionSettingsAllHeaders(
        x_apideck_app_id="ab",
        x_apideck_consumer_id="exercitationem",
    ),
)
    
res = s.connections.connection_settings_all(req)

if res.get_connection_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ControlChargerChargingRequest(
    security=operations.ControlChargerChargingSecurity(
        user_access_token=shared.SchemeUserAccessToken(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ControlChargerChargingPathParams(
        charger_id="ut",
    ),
    request=operations.ControlChargerChargingRequestBody(
        action="START",
    ),
)
    
res = s.chargers.control_charger_charging(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
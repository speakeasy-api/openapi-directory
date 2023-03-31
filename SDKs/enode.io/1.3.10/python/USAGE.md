<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ControlChargerChargingRequest(
    request_body=operations.ControlChargerChargingRequestBody(
        action="START",
    ),
    charger_id="corrupti",
)
    
res = s.chargers.control_charger_charging(req, operations.ControlChargerChargingSecurity(
    user_access_token="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
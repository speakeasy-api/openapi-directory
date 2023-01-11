<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteChargeStationRequest(
    path_params=operations.DeleteChargeStationPathParams(
        id="omnis",
    ),
)
    
res = s.charge_stations.delete_charge_station(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
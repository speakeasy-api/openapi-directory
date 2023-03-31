<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.DeleteChargeStationRequest(
    id="corrupti",
)
    
res = s.charge_stations.delete_charge_station(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
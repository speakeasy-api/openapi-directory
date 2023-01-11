<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CancelShipmentRequest(
    security=operations.CancelShipmentSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CancelShipmentPathParams(
        shipment_id="aliquid",
    ),
)
    
res = s.shipment.cancel_shipment(req)

if res.shipment is not None:
    # handle response
```
<!-- End SDK Example Usage -->
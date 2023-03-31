<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CancelShipmentRequest(
    shipment_id="corrupti",
)
    
res = s.shipment.cancel_shipment(req, operations.CancelShipmentSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.shipment is not None:
    # handle response
```
<!-- End SDK Example Usage -->
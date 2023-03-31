<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetReisezentrenRequest(
    name="corrupti",
)
    
res = s.get_reisezentren(req)

if res.travel_center_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostGet3dsAvailabilityRequest(
    security=operations.PostGet3dsAvailabilitySecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request="voluptate",
)
    
res = s.general.post_get3ds_availability(req)

if res.three_ds_availability_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
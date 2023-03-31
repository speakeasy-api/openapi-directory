<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DoctorsListRequest(
    cursor="corrupti",
    doctor=592845,
    page_size=715190,
)
    
res = s.administrative.doctors_list(req, operations.DoctorsListSecurity(
    drchrono_oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.doctors_list_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
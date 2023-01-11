<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DoctorsListRequest(
    security=operations.DoctorsListSecurity(
        drchrono_oauth2=shared.SchemeDrchronoOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.DoctorsListQueryParams(
        cursor="est",
        doctor=2873217883208899000,
        page_size=749214027407528753,
    ),
)
    
res = s.administrative.doctors_list(req)

if res.doctors_list_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
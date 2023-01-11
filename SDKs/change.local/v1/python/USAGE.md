<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAPIV1DonationsCarbonCalculateRequest(
    security=operations.GetAPIV1DonationsCarbonCalculateSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    query_params=operations.GetAPIV1DonationsCarbonCalculateQueryParams(
        destination_address=90.199997,
        distance_mi=69.199997,
        origin_address=7.100000,
        transportation_method="air",
        weight_lb=88.199997,
    ),
)
    
res = s.get_api_v1_donations_carbon_calculate(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAPIV1DonationsCarbonCalculateRequest(
    destination_address=5488.14,
    distance_mi=5928.45,
    origin_address=7151.9,
    transportation_method="sea",
    weight_lb=6027.63,
)
    
res = s.get_api_v1_donations_carbon_calculate(req, operations.GetAPIV1DonationsCarbonCalculateSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
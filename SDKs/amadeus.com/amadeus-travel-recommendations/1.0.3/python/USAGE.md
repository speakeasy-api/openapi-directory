<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRecommendedLocationRequest(
    city_codes="corrupti",
    destination_country_codes="provident",
    traveler_country_code="distinctio",
)
    
res = s.recommended_locations.get_recommended_location(req)

if res.get_recommended_location_200_application_vnd_amadeus_plus_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
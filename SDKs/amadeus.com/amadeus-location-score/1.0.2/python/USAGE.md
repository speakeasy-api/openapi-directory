<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCategoryRatedAreasRequest(
    latitude=5488.14,
    longitude=5928.45,
)
    
res = s.category_rated_areas.get_category_rated_areas(req)

if res.get_category_rated_areas_200_application_vnd_amadeus_plus_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
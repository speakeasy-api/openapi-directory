<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBng2latlongEastingNorthingRequest(
    easting=548814,
    northing=592845,
)
    
res = s.get_bng2latlong_easting_northing_(req)

if res.get_bng2latlong_easting_northing_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
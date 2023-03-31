<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IPGeolocationWithConfidenceAreaAndHazardReportAPIRequest(
    ip="193.114.112.122",
    key="{{API KEY}}",
    locality_language="en",
)
    
res = s.ip_geolocation_with_confidence_area_and_hazard_report_api(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
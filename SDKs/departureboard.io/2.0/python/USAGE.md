<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetArrivalsAndDeparturesByCRSRequest(
    crs="corrupti",
    api_key="provident",
    filter_station="distinctio",
    filter_type="quibusdam",
    num_services=602763,
    service_details=False,
    time_offset=857946,
    time_window=544883,
)
    
res = s.departures_and_arrivals.get_arrivals_and_departures_by_crs(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetArrivalsAndDeparturesByCrsRequest(
    path_params=operations.GetArrivalsAndDeparturesByCrsPathParams(
        crs="voluptas",
    ),
    query_params=operations.GetArrivalsAndDeparturesByCrsQueryParams(
        api_key="veniam",
        filter_station="dolorum",
        filter_type="id",
        num_services=5235212334792799739,
        service_details=False,
        time_offset=5575187088826678383,
        time_window=6278711762470794999,
    ),
)
    
res = s.departures_and_arrivals.get_arrivals_and_departures_by_crs(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
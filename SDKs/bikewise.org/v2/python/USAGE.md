<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVersionIncidentsFormatRequest(
    query_params=operations.GetVersionIncidentsFormatQueryParams(
        incident_type="hazard",
        occurred_after=7278960282919804440,
        occurred_before=8123455823415940668,
        page=279016587921788840,
        per_page=6868718605133710902,
        proximity="quibusdam",
        proximity_square=2090439125431722263,
        query="vel",
    ),
)
    
res = s.incidents.get_version_incidents_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
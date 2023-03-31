<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GETVersionIncidentsFormatRequest(
    incident_type="unconfirmed",
    occurred_after=592845,
    occurred_before=715190,
    page=844266,
    per_page=602763,
    proximity="nulla",
    proximity_square=544883,
    query="illum",
)
    
res = s.incidents.get_version_incidents_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
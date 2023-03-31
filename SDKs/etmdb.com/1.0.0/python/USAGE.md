<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CinemaSearchReadRequest(
    id="corrupti",
)
    
res = s.cinema.cinema_search_read(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetFactFodRequest(
    category="corrupti",
)
    
res = s.fact_of_the_day.get_fact_fod(req, operations.GetFactFodSecurity(
    x_fungenerators_api_secret="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
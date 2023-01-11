<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer=shared.SchemeBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
res = s.cases.cases_general_stats_list()

if res.general_stats is not None:
    # handle response
```
<!-- End SDK Example Usage -->
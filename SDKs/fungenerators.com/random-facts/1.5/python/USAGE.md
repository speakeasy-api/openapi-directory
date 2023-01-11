<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetFactFodRequest(
    security=operations.GetFactFodSecurity(
        x_fungenerators_api_secret=shared.SchemeXFungeneratorsAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetFactFodQueryParams(
        category="et",
    ),
)
    
res = s.fact_of_the_day.get_fact_fod(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
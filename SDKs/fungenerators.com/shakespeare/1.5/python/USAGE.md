<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetShakespeareGenerateInsultRequest(
    security=operations.GetShakespeareGenerateInsultSecurity(
        x_fungenerators_api_secret=shared.SchemeXFungeneratorsAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetShakespeareGenerateInsultQueryParams(
        limit=4136970415430295649,
    ),
)
    
res = s.generation.get_shakespeare_generate_insult(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
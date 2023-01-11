<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetPirateGenerateInsultRequest(
    security=operations.GetPirateGenerateInsultSecurity(
        x_fungenerators_api_secret=shared.SchemeXFungeneratorsAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetPirateGenerateInsultQueryParams(
        limit=1200493864574663480,
    ),
)
    
res = s.generation.get_pirate_generate_insult(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
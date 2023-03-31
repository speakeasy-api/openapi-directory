<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetPirateGenerateInsultRequest(
    limit=548814,
)
    
res = s.generation.get_pirate_generate_insult(req, operations.GetPirateGenerateInsultSecurity(
    x_fungenerators_api_secret="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
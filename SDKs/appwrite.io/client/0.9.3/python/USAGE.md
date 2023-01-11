<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AccountCreateRequest(
    security=operations.AccountCreateSecurity(
        project=shared.SchemeProject(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AccountCreateRequestBody(
        email="unde",
        name="ullam",
        password="assumenda",
    ),
)
    
res = s.account.account_create(req)

if res.user is not None:
    # handle response
```
<!-- End SDK Example Usage -->
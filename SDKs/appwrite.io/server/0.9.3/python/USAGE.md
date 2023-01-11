<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AccountCreateRecoveryRequest(
    security=operations.AccountCreateRecoverySecurity(
        jwt=shared.SchemeJwt(
            api_key="YOUR_API_KEY_HERE",
        ),
        project=shared.SchemeProject(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AccountCreateRecoveryRequestBody(
        email="amet",
        url="sequi",
    ),
)
    
res = s.account.account_create_recovery(req)

if res.token is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)

    
res = s.balance_get()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
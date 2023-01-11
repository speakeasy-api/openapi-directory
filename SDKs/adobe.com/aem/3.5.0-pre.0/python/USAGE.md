<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        aem_auth=shared.SchemeAemAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
res = s.console.get_aem_product_info()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
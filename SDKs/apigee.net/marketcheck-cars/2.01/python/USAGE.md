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


req = operations.CrmCheckRequest(
    api_key="corrupti",
    sale_date="provident",
    vin="distinctio",
)
    
res = s.crm_cleanse_api.crm_check(req)

if res.crm_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
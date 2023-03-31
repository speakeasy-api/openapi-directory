<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCharityOrgRequest(
    x_ebay_c_marketplace_id="corrupti",
    charity_org_id="provident",
)
    
res = s.charity_org.get_charity_org(req, operations.GetCharityOrgSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.charity_org is not None:
    # handle response
```
<!-- End SDK Example Usage -->
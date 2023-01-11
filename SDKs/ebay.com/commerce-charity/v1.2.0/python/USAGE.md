<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetCharityOrgRequest(
    security=operations.GetCharityOrgSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetCharityOrgPathParams(
        charity_org_id="et",
    ),
    headers=operations.GetCharityOrgHeaders(
        x_ebay_c_marketplace_id="maxime",
    ),
)
    
res = s.charity_org.get_charity_org(req)

if res.charity_org is not None:
    # handle response
```
<!-- End SDK Example Usage -->
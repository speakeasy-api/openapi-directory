<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetSalesTaxJurisdictionsRequest(
    security=operations.GetSalesTaxJurisdictionsSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetSalesTaxJurisdictionsPathParams(
        country_code="modi",
    ),
)
    
res = s.country.get_sales_tax_jurisdictions(req)

if res.sales_tax_jurisdictions is not None:
    # handle response
```
<!-- End SDK Example Usage -->
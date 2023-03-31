<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetSalesTaxJurisdictionsRequest(
    country_code="corrupti",
)
    
res = s.country.get_sales_tax_jurisdictions(req, operations.GetSalesTaxJurisdictionsSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.sales_tax_jurisdictions is not None:
    # handle response
```
<!-- End SDK Example Usage -->
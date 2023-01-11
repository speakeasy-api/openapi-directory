<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetFoodBrandedBarcodePhpRequest(
    security=operations.GetFoodBrandedBarcodePhpSecurity(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetFoodBrandedBarcodePhpQueryParams(
        code="velit",
    ),
)
    
res = s.get_food_branded_barcode_php(req)

if res.branded_food_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
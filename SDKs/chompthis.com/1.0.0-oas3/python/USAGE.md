<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetFoodBrandedBarcodePhpRequest(
    code="corrupti",
)
    
res = s.get_food_branded_barcode_php(req, operations.GetFoodBrandedBarcodePhpSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.branded_food_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
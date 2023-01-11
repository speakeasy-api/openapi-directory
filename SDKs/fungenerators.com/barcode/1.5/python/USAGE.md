<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetBarcodeDecodeTypesRequest(
    security=operations.GetBarcodeDecodeTypesSecurity(
        x_fungenerators_api_secret=shared.SchemeXFungeneratorsAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
)
    
res = s.barcode.get_barcode_decode_types(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
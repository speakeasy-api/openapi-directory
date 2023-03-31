# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/chompthis.com/1.0.0-oas3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_food_branded_barcode_php` - Get a branded food item using a barcode
* `get_food_branded_name_php` - Get a branded food item by name
* `get_food_branded_search_php` - Get data for branded food items using various search parameters
* `get_food_ingredient_search_php` - Get raw/generic food ingredient item(s)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

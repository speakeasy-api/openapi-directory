# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apideck.com/ecosystem/0.0.6/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CategoriesAllRequest(
    cursor="corrupti",
    ecosystem_id="provident",
    limit=715190,
)
    
res = s.category.categories_all(req)

if res.get_categories_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### category

* `categories_all` - List categories
* `categories_one` - Get category
* `category_listings_all` - List category listings

### collection

* `collection_listings_all` - List collection listings
* `collections_all` - List collections
* `collections_one` - Get collection

### ecosystem

* `ecosystems_one` - Get ecosystem

### listing

* `listings_all` - List listings
* `listings_one` - Get listing

### product

* `product_listings_all` - List product listings
* `products_all` - List products
* `products_one` - Get product
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

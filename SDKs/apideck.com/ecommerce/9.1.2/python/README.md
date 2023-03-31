# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apideck.com/ecommerce/9.1.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CustomersAllRequest(
    cursor="corrupti",
    fields_="provident",
    filter=shared.EcommerceCustomersFilter(
        email="elon@musk.com",
        phone_number="111-111-1111",
    ),
    limit=715190,
    raw=False,
    x_apideck_app_id="quibusdam",
    x_apideck_consumer_id="unde",
    x_apideck_service_id="nulla",
)
    
res = s.customers.customers_all(req, operations.CustomersAllSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_ecommerce_customers_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `customers_all` - List Customers
* `customers_one` - Get Customer

### orders

* `orders_all` - List Orders
* `orders_one` - Get Order

### products

* `products_all` - List Products
* `products_one` - Get Product

### stores

* `stores_one` - Get Store
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

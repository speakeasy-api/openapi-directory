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
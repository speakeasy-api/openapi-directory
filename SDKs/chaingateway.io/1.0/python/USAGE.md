<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteAddressRequest(
    authorization="q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
    delete_address_request=shared.DeleteAddressRequest(
        ethereumaddress="corrupti",
        password="provident",
    ),
)
    
res = s.address_requests.delete_address(req)

if res.delete_address is not None:
    # handle response
```
<!-- End SDK Example Usage -->
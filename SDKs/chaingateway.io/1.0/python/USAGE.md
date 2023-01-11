<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAddressRequest(
    headers=operations.DeleteAddressHeaders(
        authorization="dolores",
    ),
    request=shared.DeleteAddressRequest(
        ethereumaddress="sit",
        password="id",
    ),
)
    
res = s.address_requests.delete_address(req)

if res.delete_address is not None:
    # handle response
```
<!-- End SDK Example Usage -->
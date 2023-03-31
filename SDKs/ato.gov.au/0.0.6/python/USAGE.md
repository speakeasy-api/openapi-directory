<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetClassificationsAddressTypesRequest(
    api_key="corrupti",
)
    
res = s.address_types.get_classifications_address_types(req)

if res.address_types is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RegistryCreateAPIRequest(
    path_params=operations.RegistryCreateAPIPathParams(
        project="rerum",
    ),
    query_params=operations.RegistryCreateAPIQueryParams(
        api_id="nobis",
    ),
    request="nemo",
)
    
res = s.registry_create_api(req)

if res.api is not None:
    # handle response
```
<!-- End SDK Example Usage -->
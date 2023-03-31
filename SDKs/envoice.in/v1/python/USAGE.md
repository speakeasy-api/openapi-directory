<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ClientAPIAllRequest(
    x_auth_key="corrupti",
    x_auth_secret="provident",
)
    
res = s.client.client_api_all(req)

if res.client_details_api_models is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteV2AccessTokensUUIDRequest(
    uuid="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
)
    
res = s.access_tokens.delete_v2_access_tokens_uuid_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
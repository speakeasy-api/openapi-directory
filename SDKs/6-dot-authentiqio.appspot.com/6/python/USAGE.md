<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KeyRevokeRequest(
    pk="corrupti",
    secret="provident",
)
    
res = s.delete.key_revoke(req)

if res.key_revoke_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
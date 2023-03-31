<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteClientsIDClientRequest(
    expand="corrupti",
    id_client=592845,
)
    
res = s.administration.delete_clients_id_client_(req)

if res.client is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConnectRequestBody(
    endpoint="corrupti",
)
    
res = s.connect(req)

if res.connect_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->
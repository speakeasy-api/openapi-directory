<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRequest(
    list_="nbsIscc",
    noduplicates=False,
    values="provident",
)
    
res = s.get_(req)

if res.get_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
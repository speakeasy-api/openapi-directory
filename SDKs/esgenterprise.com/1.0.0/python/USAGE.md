<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetSearchRequest(
    q="corrupti",
)
    
res = s.rating.get_search(req, operations.GetSearchSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_search_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
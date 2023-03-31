<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.AppendTextUsingGETRequest(
    pad_id="corrupti",
    text="provident",
)
    
res = s.append_text_using_get(req)

if res.append_text_using_get_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
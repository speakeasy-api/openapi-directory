<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConvertAPIRequest(
    request_body=operations.ConvertAPIRequestBody(
        url="corrupti",
    ),
    format="wadl2009",
)
    
res = s.convert_api(req)

if res.convert_api_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AppendTextUsingGetRequest(
    query_params=operations.AppendTextUsingGetQueryParams(
        pad_id="et",
        text="fuga",
    ),
)
    
res = s.append_text_using_get(req)

if res.append_text_using_get_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
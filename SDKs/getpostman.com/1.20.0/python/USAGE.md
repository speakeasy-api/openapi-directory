<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAPIRequest(
    request_body=operations.CreateAPIRequestBody(
        api=operations.CreateAPIRequestBodyAPI(
            description="This is description.",
            name="Sync Service API",
            summary="This is supposed to be a short summary.",
        ),
    ),
    workspace="{{workspaceId}}",
)
    
res = s.api.create_api(req)

if res.create_api_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
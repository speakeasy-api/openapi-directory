<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAPIRequest(
    query_params=operations.CreateAPIQueryParams(
        workspace="est",
    ),
    request=operations.CreateAPIRequestBody(
        api=operations.CreateAPIRequestBodyAPI(
            description="et",
            name="dolores",
            summary="modi",
        ),
    ),
)
    
res = s.api.create_api(req)

if res.create_api_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
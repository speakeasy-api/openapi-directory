<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetContainersMessagesRequest(
    headers=operations.GetContainersMessagesHeaders(
        x_auth_project_id="amet",
        x_auth_token="eos",
    ),
)
    
res = s.api_info.get_containers_messages(req)

if res.get_containers_messages_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
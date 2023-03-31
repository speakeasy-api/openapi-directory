<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_auth="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetAlmawsV1TaskListsRsLendingRequestsRequest(
    library="corrupti",
    partner="provident",
    printed="distinctio",
    reported="quibusdam",
    requested_format="unde",
    status="nulla",
    supplied_format="corrupti",
)
    
res = s.lending_requests.get_almaws_v1_task_lists_rs_lending_requests(req)

if res.get_almaws_v1_task_lists_rs_lending_requests_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
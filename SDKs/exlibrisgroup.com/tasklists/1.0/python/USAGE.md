<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetAlmawsV1TaskListsRsLendingRequestsRequest(
    query_params=operations.GetAlmawsV1TaskListsRsLendingRequestsQueryParams(
        library="nulla",
        partner="iste",
        printed="qui",
        reported="in",
        requested_format="aut",
        status="ea",
        supplied_format="laborum",
    ),
)
    
res = s.lending_requests.get_almaws_v1_task_lists_rs_lending_requests(req)

if res.get_almaws_v1_task_lists_rs_lending_requests_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
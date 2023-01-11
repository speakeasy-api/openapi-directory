<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetActionNotificationExportResultsRequest(
    query_params=operations.GetActionNotificationExportResultsQueryParams(
        action_notification_export_id=2966375377600891262,
        cursor="aut",
        per_page=5026721396665135782,
        user_id=8604752373465719830,
    ),
)
    
res = s.action_notification_export_results.get_action_notification_export_results(req)

if res.action_notification_export_result_entities is not None:
    # handle response
```
<!-- End SDK Example Usage -->
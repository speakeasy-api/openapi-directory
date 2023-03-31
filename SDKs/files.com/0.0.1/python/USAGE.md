<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetActionNotificationExportResultsRequest(
    action_notification_export_id=548814,
    cursor="provident",
    per_page=715190,
    user_id=844266,
)
    
res = s.action_notification_export_results.get_action_notification_export_results(req)

if res.action_notification_export_result_entities is not None:
    # handle response
```
<!-- End SDK Example Usage -->
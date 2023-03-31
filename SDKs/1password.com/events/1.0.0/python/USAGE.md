<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.ResetCursor(
    end_time="2020-06-11T16:32:50-03:00",
    limit=5928.45,
    start_time="2020-06-11T16:32:50-03:00",
)
    
res = s.api_v1.get_item_usages(req, operations.GetItemUsagesSecurity(
    jwtsa="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.get_item_usages_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
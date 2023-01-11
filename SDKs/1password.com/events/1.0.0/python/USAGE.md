<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetItemUsagesRequest(
    security=operations.GetItemUsagesSecurity(
        jwtsa=shared.SchemeJwtsa(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    request="sit",
)
    
res = s.api_v1.get_item_usages(req)

if res.get_item_usages_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->
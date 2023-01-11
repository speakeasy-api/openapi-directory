<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostV1OrderFeedbackRequest(
    query_params=operations.PostV1OrderFeedbackQueryParams(
        action="REJECT_BLACKLIST",
        format="xml",
        id="blanditiis",
        key="voluptatem",
        notes="consequuntur",
    ),
)
    
res = s.post_v1_order_feedback(req)

if res.post_v1_order_feedback_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->
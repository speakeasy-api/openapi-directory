<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetV1Request(
    query_params=operations.GetV1QueryParams(
        api_key="nihil",
        fields="rerum",
        ip_address="dicta",
    ),
)
    
res = s.get_v1_(req)

if res.inline_response_200 is not None:
    # handle response
```
<!-- End SDK Example Usage -->
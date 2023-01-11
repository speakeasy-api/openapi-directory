<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FetchBoundariesRequest(
    security=operations.FetchBoundariesSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=shared.BoundariesQuery(
        ids=[
            "illo",
            "minus",
        ],
    ),
)
    
res = s.boundaries.fetch_boundaries(req)

if res.boundaries is not None:
    # handle response
```
<!-- End SDK Example Usage -->
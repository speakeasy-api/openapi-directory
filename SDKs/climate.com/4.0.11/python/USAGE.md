<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.BoundariesQuery(
    ids=[
        "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
        "b7392059-2939-46fe-a759-6eb10faaa235",
    ],
)
    
res = s.boundaries.fetch_boundaries(req, operations.FetchBoundariesSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.boundaries is not None:
    # handle response
```
<!-- End SDK Example Usage -->
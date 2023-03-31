<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetProgrammesAtoZSearchRequest(
    availability="available",
    initial_child_count=592845,
    letter="distinctio",
    page=844266,
    per_page=602763,
    rights="web",
    sort="title",
    sort_direction="desc",
)
    
res = s.a_to_z.get_programmes_ato_z_search_(req)

if res.ibl is not None:
    # handle response
```
<!-- End SDK Example Usage -->
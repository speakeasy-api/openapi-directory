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
    
req = operations.GetLinesRequest(
    query_params=operations.GetLinesQueryParams(
        away="quia",
        conference="blanditiis",
        game_id=501002963790601971,
        home="expedita",
        season_type="quo",
        team="id",
        week=319022383954109970,
        year=3325329196161324374,
    ),
)
    
res = s.betting.get_lines(req)

if res.game_lines is not None:
    # handle response
```
<!-- End SDK Example Usage -->
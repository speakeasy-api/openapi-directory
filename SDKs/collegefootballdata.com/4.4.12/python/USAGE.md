<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_auth="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetLinesRequest(
    away="corrupti",
    conference="provident",
    game_id=715190,
    home="quibusdam",
    season_type="unde",
    team="nulla",
    week=544883,
    year=847252,
)
    
res = s.betting.get_lines(req)

if res.game_lines is not None:
    # handle response
```
<!-- End SDK Example Usage -->
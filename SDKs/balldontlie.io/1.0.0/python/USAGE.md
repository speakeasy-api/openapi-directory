<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AllGamesExampleParametersRequest(
    seasons="2018",
    team_ids="1",
)
    
res = s.games.all_games_example_parameters(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetGifByIDRequest(
    gif_id=548814,
)
    
res = s.gifs.get_gif_by_id(req)

if res.get_gif_by_id_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->
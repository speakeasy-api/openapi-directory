<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetNhArtRequest(
    accept_version="corrupti",
    x_api_key="9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    excludedetails="perferendis",
    hasfake="ipsam",
    thumbsize=832620,
)
    
res = s.get_nh_art(req)

if res.nh_artworks is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetLookupSha1Sha1Request(
    path_params=operations.GetLookupSha1Sha1PathParams(
        sha1="nisi",
    ),
)
    
res = s.default.get_lookup_sha1_sha1_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
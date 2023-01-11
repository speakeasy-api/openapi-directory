<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AppDgetRequest(
    path_params=operations.AppDgetPathParams(
        app_d_id="ut",
    ),
    query_params=operations.AppDgetQueryParams(
        all_fields="sit",
        exclude_default="accusamus",
        exclude_fields="beatae",
        fields="rerum",
        filter="aspernatur",
    ),
)
    
res = s.app_pkgm.app_dget(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->
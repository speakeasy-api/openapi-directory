<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AppDGETRequest(
    all_fields="corrupti",
    app_d_id="provident",
    exclude_default="distinctio",
    exclude_fields="quibusdam",
    fields_="unde",
    filter="nulla",
)
    
res = s.app_pkgm.app_dget(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->
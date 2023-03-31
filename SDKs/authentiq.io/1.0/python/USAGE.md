<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AuthorizeRequest(
    client_id="corrupti",
    display="provident",
    max_age=715190,
    nonce="quibusdam",
    prompt="unde",
    redirect_uri="nulla",
    response_mode="corrupti",
    response_type="illum",
    scope="vel",
    state="error",
    ui_locales="deserunt",
)
    
res = s.authentication.authorize(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->
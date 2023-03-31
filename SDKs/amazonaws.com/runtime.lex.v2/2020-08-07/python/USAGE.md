<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteSessionRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    bot_alias_id="illum",
    bot_id="vel",
    locale_id="error",
    session_id="deserunt",
)
    
res = s.delete_session(req)

if res.delete_session_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
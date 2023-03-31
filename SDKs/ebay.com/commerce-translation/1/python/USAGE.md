<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.TranslateRequest(
    from_="corrupti",
    text=[
        "distinctio",
        "quibusdam",
        "unde",
    ],
    to="nulla",
    translation_context="corrupti",
)
    
res = s.language.translate(req, operations.TranslateSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.translate_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
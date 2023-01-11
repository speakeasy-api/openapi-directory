<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TranslateRequest(
    security=operations.TranslateSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    request=shared.TranslateRequest(
        from_="facilis",
        text=[
            "aliquid",
            "ad",
        ],
        to="labore",
        translation_context="totam",
    ),
)
    
res = s.language.translate(req)

if res.translate_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->
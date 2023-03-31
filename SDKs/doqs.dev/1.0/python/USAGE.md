<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_auth="YOUR_API_KEY_HERE",
    ),
)


req = shared.CreateOrUpdateTemplateRequest(
    components=[
        {
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        {
            "error": "deserunt",
            "suscipit": "iure",
        },
        {
            "debitis": "ipsa",
            "delectus": "tempora",
        },
    ],
    css="suscipit",
    footer_html="molestiae",
    format="a5",
    header_html="placeat",
    name="voluptatum",
    orientation="landscape",
    preview_payload={
        "nisi": "recusandae",
        "temporibus": "ab",
        "quis": "veritatis",
    },
    template_html="deserunt",
)
    
res = s.create_template_designer_templates_post(req)

if res.response_ok_designer_template is not None:
    # handle response
```
<!-- End SDK Example Usage -->
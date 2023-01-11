<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        header_api_key=shared.SchemeHeaderAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.ChromeFromHTMLPostRequest(
    request=shared.ChromeHTMLToPdfRequest(
        file_name="in",
        html="quia",
        inline_pdf=False,
        options=shared.ChromeAdvancedOptions(
            landscape="quia",
            print_background=True,
        ),
    ),
)
    
res = s.headless_chrome.chrome_from_html_post(req)

if res.api_response_success is not None:
    # handle response
```
<!-- End SDK Example Usage -->
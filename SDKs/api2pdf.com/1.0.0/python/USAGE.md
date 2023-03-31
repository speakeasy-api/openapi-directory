<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        header_api_key="YOUR_API_KEY_HERE",
    ),
)


req = shared.ChromeHTMLToPdfRequest(
    file_name="test.pdf",
    html="<p>Hello World</p>",
    inline_pdf=True,
    options=shared.ChromeAdvancedOptions(
        landscape="true",
        print_background=False,
    ),
)
    
res = s.headless_chrome.chrome_from_html_post(req)

if res.api_response_success is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostMakePdfRequest(
    request=operations.PostMakePdfRequestBody(
        html="dolorem",
        key="assumenda",
        url="laudantium",
    ),
)
    
res = s.post_make_pdf(req)

if res.post_make_pdf_200_application_pdf_binary_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->
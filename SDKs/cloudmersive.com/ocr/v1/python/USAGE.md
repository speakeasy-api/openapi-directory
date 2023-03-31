<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ImageOcrImageLinesWithLocationRequest(
    request_body=operations.ImageOcrImageLinesWithLocationRequestBody(
        image_file=operations.ImageOcrImageLinesWithLocationRequestBodyImageFile(
            content="corrupti".encode(),
            image_file="provident",
        ),
    ),
    language="distinctio",
    preprocessing="quibusdam",
)
    
res = s.image_ocr.image_ocr_image_lines_with_location(req, operations.ImageOcrImageLinesWithLocationSecurity(
    apikey="YOUR_API_KEY_HERE",
))

if res.image_to_lines_with_location_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ImageOcrImageLinesWithLocationRequest(
    security=operations.ImageOcrImageLinesWithLocationSecurity(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    headers=operations.ImageOcrImageLinesWithLocationHeaders(
        language="quasi",
        preprocessing="tempore",
    ),
    request=operations.ImageOcrImageLinesWithLocationRequestBody(
        image_file=operations.ImageOcrImageLinesWithLocationRequestBodyImageFile(
            content="consequatur".encode(),
            image_file="quos",
        ),
    ),
)
    
res = s.image_ocr.image_ocr_image_lines_with_location(req)

if res.image_to_lines_with_location_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->
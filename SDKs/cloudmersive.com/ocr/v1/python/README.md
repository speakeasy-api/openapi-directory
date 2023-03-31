# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/cloudmersive.com/ocr/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### image_ocr

* `image_ocr_image_lines_with_location` - Convert a scanned image into words with location
* `image_ocr_image_words_with_location` - Convert a scanned image into words with location
* `image_ocr_photo_recognize_business_card` - Recognize a photo of a business card, extract key business information
* `image_ocr_photo_recognize_form_advanced` - Recognize a photo of a form, extract key fields using stored templates
* `image_ocr_photo_recognize_receipt` - Recognize a photo of a receipt, extract key business information
* `image_ocr_photo_to_text` - Convert a photo of a document into text
* `image_ocr_photo_words_with_location` - Convert a photo of a document or receipt into words with location
* `image_ocr_post` - Convert a scanned image into text

### pdf_ocr

* `pdf_ocr_pdf_to_lines_with_location` - Convert a PDF into text lines with location
* `pdf_ocr_pdf_to_words_with_location` - Convert a PDF into words with location
* `pdf_ocr_post` - Converts an uploaded PDF file into text via Optical Character Recognition.

### preprocessing

* `preprocessing_binarize` - Convert an image of text into a binarized (light and dark) view
* `preprocessing_binarize_advanced` - Convert an image of text into a binary (light and dark) view with ML
* `preprocessing_get_page_angle` - Get the angle of the page / document / receipt
* `preprocessing_unrotate` - Detect and unrotate a document image
* `preprocessing_unrotate_advanced` - Detect and unrotate a document image (advanced)
* `preprocessing_unskew` - Detect and unskew a photo of a document

### receipts

* `receipts_photo_to_csv` - Convert a photo of a receipt into a CSV file containing structured information from the receipt
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

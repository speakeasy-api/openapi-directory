# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/cloudmersive.com/ocr/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ImageOcrImageLinesWithLocationRequest{
        RequestBody: operations.ImageOcrImageLinesWithLocationRequestBody{
            ImageFile: operations.ImageOcrImageLinesWithLocationRequestBodyImageFile{
                Content: []byte("corrupti"),
                ImageFile: "provident",
            },
        },
        Language: "distinctio",
        Preprocessing: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.ImageOcr.ImageOcrImageLinesWithLocation(ctx, req, operations.ImageOcrImageLinesWithLocationSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageToLinesWithLocationResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ImageOcr

* `ImageOcrImageLinesWithLocation` - Convert a scanned image into words with location
* `ImageOcrImageWordsWithLocation` - Convert a scanned image into words with location
* `ImageOcrPhotoRecognizeBusinessCard` - Recognize a photo of a business card, extract key business information
* `ImageOcrPhotoRecognizeFormAdvanced` - Recognize a photo of a form, extract key fields using stored templates
* `ImageOcrPhotoRecognizeReceipt` - Recognize a photo of a receipt, extract key business information
* `ImageOcrPhotoToText` - Convert a photo of a document into text
* `ImageOcrPhotoWordsWithLocation` - Convert a photo of a document or receipt into words with location
* `ImageOcrPost` - Convert a scanned image into text

### PdfOcr

* `PdfOcrPdfToLinesWithLocation` - Convert a PDF into text lines with location
* `PdfOcrPdfToWordsWithLocation` - Convert a PDF into words with location
* `PdfOcrPost` - Converts an uploaded PDF file into text via Optical Character Recognition.

### Preprocessing

* `PreprocessingBinarize` - Convert an image of text into a binarized (light and dark) view
* `PreprocessingBinarizeAdvanced` - Convert an image of text into a binary (light and dark) view with ML
* `PreprocessingGetPageAngle` - Get the angle of the page / document / receipt
* `PreprocessingUnrotate` - Detect and unrotate a document image
* `PreprocessingUnrotateAdvanced` - Detect and unrotate a document image (advanced)
* `PreprocessingUnskew` - Detect and unskew a photo of a document

### Receipts

* `ReceiptsPhotoToCSV` - Convert a photo of a receipt into a CSV file containing structured information from the receipt
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

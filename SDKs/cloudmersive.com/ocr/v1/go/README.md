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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ImageOcr.ImageOcrImageLinesWithLocation(ctx, operations.ImageOcrImageLinesWithLocationRequest{
        RequestBody: operations.ImageOcrImageLinesWithLocationRequestBody{
            ImageFile: operations.ImageOcrImageLinesWithLocationRequestBodyImageFile{
                Content: []byte("corrupti"),
                ImageFile: "provident",
            },
        },
        Language: sdk.String("distinctio"),
        Preprocessing: sdk.String("quibusdam"),
    }, operations.ImageOcrImageLinesWithLocationSecurity{
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


### [ImageOcr](docs/imageocr/README.md)

* [ImageOcrImageLinesWithLocation](docs/imageocr/README.md#imageocrimagelineswithlocation) - Convert a scanned image into words with location
* [ImageOcrImageWordsWithLocation](docs/imageocr/README.md#imageocrimagewordswithlocation) - Convert a scanned image into words with location
* [ImageOcrPhotoRecognizeBusinessCard](docs/imageocr/README.md#imageocrphotorecognizebusinesscard) - Recognize a photo of a business card, extract key business information
* [ImageOcrPhotoRecognizeFormAdvanced](docs/imageocr/README.md#imageocrphotorecognizeformadvanced) - Recognize a photo of a form, extract key fields using stored templates
* [ImageOcrPhotoRecognizeReceipt](docs/imageocr/README.md#imageocrphotorecognizereceipt) - Recognize a photo of a receipt, extract key business information
* [ImageOcrPhotoToText](docs/imageocr/README.md#imageocrphotototext) - Convert a photo of a document into text
* [ImageOcrPhotoWordsWithLocation](docs/imageocr/README.md#imageocrphotowordswithlocation) - Convert a photo of a document or receipt into words with location
* [ImageOcrPost](docs/imageocr/README.md#imageocrpost) - Convert a scanned image into text

### [PdfOcr](docs/pdfocr/README.md)

* [PdfOcrGetAsyncJobStatus](docs/pdfocr/README.md#pdfocrgetasyncjobstatus) - Returns the result of the Async Job - possible states can be STARTED or COMPLETED
* [PdfOcrPdfToLinesWithLocation](docs/pdfocr/README.md#pdfocrpdftolineswithlocation) - Convert a PDF into text lines with location
* [PdfOcrPdfToWordsWithLocation](docs/pdfocr/README.md#pdfocrpdftowordswithlocation) - Convert a PDF into words with location
* [PdfOcrPost](docs/pdfocr/README.md#pdfocrpost) - Converts an uploaded PDF file into text via Optical Character Recognition.

### [Preprocessing](docs/preprocessing/README.md)

* [PreprocessingBinarize](docs/preprocessing/README.md#preprocessingbinarize) - Convert an image of text into a binarized (light and dark) view
* [PreprocessingBinarizeAdvanced](docs/preprocessing/README.md#preprocessingbinarizeadvanced) - Convert an image of text into a binary (light and dark) view with ML
* [PreprocessingGetPageAngle](docs/preprocessing/README.md#preprocessinggetpageangle) - Get the angle of the page / document / receipt
* [PreprocessingUnrotate](docs/preprocessing/README.md#preprocessingunrotate) - Detect and unrotate a document image
* [PreprocessingUnrotateAdvanced](docs/preprocessing/README.md#preprocessingunrotateadvanced) - Detect and unrotate a document image (advanced)
* [PreprocessingUnskew](docs/preprocessing/README.md#preprocessingunskew) - Detect and unskew a photo of a document

### [Receipts](docs/receipts/README.md)

* [~~ReceiptsPhotoToCSV~~](docs/receipts/README.md#receiptsphototocsv) - Convert a photo of a receipt into a CSV file containing structured information from the receipt :warning: **Deprecated**
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

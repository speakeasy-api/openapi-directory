# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### imageOcr

* `imageOcrImageLinesWithLocation` - Convert a scanned image into words with location
* `imageOcrImageWordsWithLocation` - Convert a scanned image into words with location
* `imageOcrPhotoRecognizeBusinessCard` - Recognize a photo of a business card, extract key business information
* `imageOcrPhotoRecognizeFormAdvanced` - Recognize a photo of a form, extract key fields using stored templates
* `imageOcrPhotoRecognizeReceipt` - Recognize a photo of a receipt, extract key business information
* `imageOcrPhotoToText` - Convert a photo of a document into text
* `imageOcrPhotoWordsWithLocation` - Convert a photo of a document or receipt into words with location
* `imageOcrPost` - Convert a scanned image into text

### pdfOcr

* `pdfOcrPdfToLinesWithLocation` - Convert a PDF into text lines with location
* `pdfOcrPdfToWordsWithLocation` - Convert a PDF into words with location
* `pdfOcrPost` - Converts an uploaded PDF file into text via Optical Character Recognition.

### preprocessing

* `preprocessingBinarize` - Convert an image of text into a binarized (light and dark) view
* `preprocessingBinarizeAdvanced` - Convert an image of text into a binary (light and dark) view with ML
* `preprocessingGetPageAngle` - Get the angle of the page / document / receipt
* `preprocessingUnrotate` - Detect and unrotate a document image
* `preprocessingUnrotateAdvanced` - Detect and unrotate a document image (advanced)
* `preprocessingUnskew` - Detect and unskew a photo of a document

### receipts

* `receiptsPhotoToCSV` - Convert a photo of a receipt into a CSV file containing structured information from the receipt
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

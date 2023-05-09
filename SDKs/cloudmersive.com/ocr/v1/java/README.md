# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequest;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBody;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationResponse;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrImageLinesWithLocationRequest req = new ImageOcrImageLinesWithLocationRequest(                new ImageOcrImageLinesWithLocationRequestBody(                new ImageOcrImageLinesWithLocationRequestBodyImageFile("corrupti".getBytes(), "provident"););) {{
                language = "distinctio";
                preprocessing = "quibusdam";
            }};            

            ImageOcrImageLinesWithLocationResponse res = sdk.imageOcr.imageOcrImageLinesWithLocation(req, new ImageOcrImageLinesWithLocationSecurity("unde") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.imageToLinesWithLocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [imageOcr](docs/imageocr/README.md)

* [imageOcrImageLinesWithLocation](docs/imageocr/README.md#imageocrimagelineswithlocation) - Convert a scanned image into words with location
* [imageOcrImageWordsWithLocation](docs/imageocr/README.md#imageocrimagewordswithlocation) - Convert a scanned image into words with location
* [imageOcrPhotoRecognizeBusinessCard](docs/imageocr/README.md#imageocrphotorecognizebusinesscard) - Recognize a photo of a business card, extract key business information
* [imageOcrPhotoRecognizeFormAdvanced](docs/imageocr/README.md#imageocrphotorecognizeformadvanced) - Recognize a photo of a form, extract key fields using stored templates
* [imageOcrPhotoRecognizeReceipt](docs/imageocr/README.md#imageocrphotorecognizereceipt) - Recognize a photo of a receipt, extract key business information
* [imageOcrPhotoToText](docs/imageocr/README.md#imageocrphotototext) - Convert a photo of a document into text
* [imageOcrPhotoWordsWithLocation](docs/imageocr/README.md#imageocrphotowordswithlocation) - Convert a photo of a document or receipt into words with location
* [imageOcrPost](docs/imageocr/README.md#imageocrpost) - Convert a scanned image into text

### [pdfOcr](docs/pdfocr/README.md)

* [pdfOcrGetAsyncJobStatus](docs/pdfocr/README.md#pdfocrgetasyncjobstatus) - Returns the result of the Async Job - possible states can be STARTED or COMPLETED
* [pdfOcrPdfToLinesWithLocation](docs/pdfocr/README.md#pdfocrpdftolineswithlocation) - Convert a PDF into text lines with location
* [pdfOcrPdfToWordsWithLocation](docs/pdfocr/README.md#pdfocrpdftowordswithlocation) - Convert a PDF into words with location
* [pdfOcrPost](docs/pdfocr/README.md#pdfocrpost) - Converts an uploaded PDF file into text via Optical Character Recognition.

### [preprocessing](docs/preprocessing/README.md)

* [preprocessingBinarize](docs/preprocessing/README.md#preprocessingbinarize) - Convert an image of text into a binarized (light and dark) view
* [preprocessingBinarizeAdvanced](docs/preprocessing/README.md#preprocessingbinarizeadvanced) - Convert an image of text into a binary (light and dark) view with ML
* [preprocessingGetPageAngle](docs/preprocessing/README.md#preprocessinggetpageangle) - Get the angle of the page / document / receipt
* [preprocessingUnrotate](docs/preprocessing/README.md#preprocessingunrotate) - Detect and unrotate a document image
* [preprocessingUnrotateAdvanced](docs/preprocessing/README.md#preprocessingunrotateadvanced) - Detect and unrotate a document image (advanced)
* [preprocessingUnskew](docs/preprocessing/README.md#preprocessingunskew) - Detect and unskew a photo of a document

### [receipts](docs/receipts/README.md)

* [~~receiptsPhotoToCSV~~](docs/receipts/README.md#receiptsphototocsv) - Convert a photo of a receipt into a CSV file containing structured information from the receipt :warning: **Deprecated**
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

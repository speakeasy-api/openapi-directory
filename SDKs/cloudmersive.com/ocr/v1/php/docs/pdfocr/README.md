# pdfOcr

### Available Operations

* [pdfOcrGetAsyncJobStatus](#pdfocrgetasyncjobstatus) - Returns the result of the Async Job - possible states can be STARTED or COMPLETED
* [pdfOcrPdfToLinesWithLocation](#pdfocrpdftolineswithlocation) - Convert a PDF into text lines with location
* [pdfOcrPdfToWordsWithLocation](#pdfocrpdftowordswithlocation) - Convert a PDF into words with location
* [pdfOcrPost](#pdfocrpost) - Converts an uploaded PDF file into text via Optical Character Recognition.

## pdfOcrGetAsyncJobStatus

Returns the result of the Async Job - possible states can be STARTED or COMPLETED

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrGetAsyncJobStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrGetAsyncJobStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PdfOcrGetAsyncJobStatusRequest();
    $request->asyncJobID = 'molestiae';

    $requestSecurity = new PdfOcrGetAsyncJobStatusSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pdfOcr->pdfOcrGetAsyncJobStatus($request, $requestSecurity);

    if ($response->pdfToTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pdfOcrPdfToLinesWithLocation

Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPdfToLinesWithLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPdfToLinesWithLocationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPdfToLinesWithLocationRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPdfToLinesWithLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PdfOcrPdfToLinesWithLocationRequest();
    $request->requestBody = new PdfOcrPdfToLinesWithLocationRequestBody();
    $request->requestBody->imageFile = new PdfOcrPdfToLinesWithLocationRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'quod';
    $request->requestBody->imageFile->imageFile = 'quod';
    $request->language = 'esse';
    $request->preprocessing = 'totam';

    $requestSecurity = new PdfOcrPdfToLinesWithLocationSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pdfOcr->pdfOcrPdfToLinesWithLocation($request, $requestSecurity);

    if ($response->pdfToLinesWithLocationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pdfOcrPdfToWordsWithLocation

Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPdfToWordsWithLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPdfToWordsWithLocationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPdfToWordsWithLocationRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPdfToWordsWithLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PdfOcrPdfToWordsWithLocationRequest();
    $request->requestBody = new PdfOcrPdfToWordsWithLocationRequestBody();
    $request->requestBody->imageFile = new PdfOcrPdfToWordsWithLocationRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'porro';
    $request->requestBody->imageFile->imageFile = 'dolorum';
    $request->language = 'dicta';
    $request->preprocessing = 'nam';

    $requestSecurity = new PdfOcrPdfToWordsWithLocationSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pdfOcr->pdfOcrPdfToWordsWithLocation($request, $requestSecurity);

    if ($response->pdfToWordsWithLocationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pdfOcrPost

Converts an uploaded PDF file into text via Optical Character Recognition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPostRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPostRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PdfOcrPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PdfOcrPostRequest();
    $request->requestBody = new PdfOcrPostRequestBody();
    $request->requestBody->imageFile = new PdfOcrPostRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'officia';
    $request->requestBody->imageFile->imageFile = 'occaecati';
    $request->language = 'fugit';
    $request->preprocessing = 'deleniti';
    $request->recognitionMode = 'hic';

    $requestSecurity = new PdfOcrPostSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pdfOcr->pdfOcrPost($request, $requestSecurity);

    if ($response->pdfToTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

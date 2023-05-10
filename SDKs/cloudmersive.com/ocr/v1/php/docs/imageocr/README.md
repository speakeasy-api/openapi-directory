# imageOcr

### Available Operations

* [imageOcrImageLinesWithLocation](#imageocrimagelineswithlocation) - Convert a scanned image into words with location
* [imageOcrImageWordsWithLocation](#imageocrimagewordswithlocation) - Convert a scanned image into words with location
* [imageOcrPhotoRecognizeBusinessCard](#imageocrphotorecognizebusinesscard) - Recognize a photo of a business card, extract key business information
* [imageOcrPhotoRecognizeFormAdvanced](#imageocrphotorecognizeformadvanced) - Recognize a photo of a form, extract key fields using stored templates
* [imageOcrPhotoRecognizeReceipt](#imageocrphotorecognizereceipt) - Recognize a photo of a receipt, extract key business information
* [imageOcrPhotoToText](#imageocrphotototext) - Convert a photo of a document into text
* [imageOcrPhotoWordsWithLocation](#imageocrphotowordswithlocation) - Convert a photo of a document or receipt into words with location
* [imageOcrPost](#imageocrpost) - Convert a scanned image into text

## imageOcrImageLinesWithLocation

Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrImageLinesWithLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrImageLinesWithLocationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrImageLinesWithLocationRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrImageLinesWithLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageOcrImageLinesWithLocationRequest();
    $request->requestBody = new ImageOcrImageLinesWithLocationRequestBody();
    $request->requestBody->imageFile = new ImageOcrImageLinesWithLocationRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'unde';
    $request->requestBody->imageFile->imageFile = 'nulla';
    $request->language = 'corrupti';
    $request->preprocessing = 'illum';

    $requestSecurity = new ImageOcrImageLinesWithLocationSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->imageOcr->imageOcrImageLinesWithLocation($request, $requestSecurity);

    if ($response->imageToLinesWithLocationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageOcrImageWordsWithLocation

Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrImageWordsWithLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrImageWordsWithLocationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrImageWordsWithLocationRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrImageWordsWithLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageOcrImageWordsWithLocationRequest();
    $request->requestBody = new ImageOcrImageWordsWithLocationRequestBody();
    $request->requestBody->imageFile = new ImageOcrImageWordsWithLocationRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'vel';
    $request->requestBody->imageFile->imageFile = 'error';
    $request->language = 'deserunt';
    $request->preprocessing = 'suscipit';

    $requestSecurity = new ImageOcrImageWordsWithLocationSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->imageOcr->imageOcrImageWordsWithLocation($request, $requestSecurity);

    if ($response->imageToWordsWithLocationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageOcrPhotoRecognizeBusinessCard

Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeBusinessCardRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeBusinessCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageOcrPhotoRecognizeBusinessCardRequestBody();
    $request->imageFile = new ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile();
    $request->imageFile->content = 'iure';
    $request->imageFile->imageFile = 'magnam';

    $requestSecurity = new ImageOcrPhotoRecognizeBusinessCardSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->imageOcr->imageOcrPhotoRecognizeBusinessCard($request, $requestSecurity);

    if ($response->businessCardRecognitionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageOcrPhotoRecognizeFormAdvanced

Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeFormAdvancedRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeFormAdvancedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeFormAdvancedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageOcrPhotoRecognizeFormAdvancedRequest();
    $request->requestBody = new ImageOcrPhotoRecognizeFormAdvancedRequestBody();
    $request->requestBody->imageFile = new ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'debitis';
    $request->requestBody->imageFile->imageFile = 'ipsa';
    $request->bucketID = 'delectus';
    $request->bucketSecretKey = 'tempora';
    $request->diagnostics = 'suscipit';
    $request->preprocessing = 'molestiae';
    $request->recognitionMode = 'minus';

    $requestSecurity = new ImageOcrPhotoRecognizeFormAdvancedSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->imageOcr->imageOcrPhotoRecognizeFormAdvanced($request, $requestSecurity);

    if ($response->formRecognitionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageOcrPhotoRecognizeReceipt

Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeReceiptRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeReceiptRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeReceiptRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoRecognizeReceiptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageOcrPhotoRecognizeReceiptRequest();
    $request->requestBody = new ImageOcrPhotoRecognizeReceiptRequestBody();
    $request->requestBody->imageFile = new ImageOcrPhotoRecognizeReceiptRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'placeat';
    $request->requestBody->imageFile->imageFile = 'voluptatum';
    $request->language = 'iusto';
    $request->preprocessing = 'excepturi';
    $request->recognitionMode = 'nisi';

    $requestSecurity = new ImageOcrPhotoRecognizeReceiptSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->imageOcr->imageOcrPhotoRecognizeReceipt($request, $requestSecurity);

    if ($response->receiptRecognitionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageOcrPhotoToText

Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoToTextRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoToTextRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoToTextRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoToTextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageOcrPhotoToTextRequest();
    $request->requestBody = new ImageOcrPhotoToTextRequestBody();
    $request->requestBody->imageFile = new ImageOcrPhotoToTextRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'recusandae';
    $request->requestBody->imageFile->imageFile = 'temporibus';
    $request->language = 'ab';
    $request->recognitionMode = 'quis';

    $requestSecurity = new ImageOcrPhotoToTextSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->imageOcr->imageOcrPhotoToText($request, $requestSecurity);

    if ($response->imageToTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageOcrPhotoWordsWithLocation

Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoWordsWithLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoWordsWithLocationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoWordsWithLocationRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPhotoWordsWithLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageOcrPhotoWordsWithLocationRequest();
    $request->requestBody = new ImageOcrPhotoWordsWithLocationRequestBody();
    $request->requestBody->imageFile = new ImageOcrPhotoWordsWithLocationRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'veritatis';
    $request->requestBody->imageFile->imageFile = 'deserunt';
    $request->diagnostics = 'perferendis';
    $request->language = 'ipsam';
    $request->preprocessing = 'repellendus';
    $request->recognitionMode = 'sapiente';

    $requestSecurity = new ImageOcrPhotoWordsWithLocationSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->imageOcr->imageOcrPhotoWordsWithLocation($request, $requestSecurity);

    if ($response->photoToWordsWithLocationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageOcrPost

Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPostRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPostRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\ImageOcrPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageOcrPostRequest();
    $request->requestBody = new ImageOcrPostRequestBody();
    $request->requestBody->imageFile = new ImageOcrPostRequestBodyImageFile();
    $request->requestBody->imageFile->content = 'quo';
    $request->requestBody->imageFile->imageFile = 'odit';
    $request->language = 'at';
    $request->preprocessing = 'at';
    $request->recognitionMode = 'maiores';

    $requestSecurity = new ImageOcrPostSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->imageOcr->imageOcrPost($request, $requestSecurity);

    if ($response->imageToTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

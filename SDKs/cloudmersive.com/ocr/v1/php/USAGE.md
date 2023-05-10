<!-- Start SDK Example Usage -->
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
    $request->requestBody->imageFile->content = 'corrupti';
    $request->requestBody->imageFile->imageFile = 'provident';
    $request->language = 'distinctio';
    $request->preprocessing = 'quibusdam';

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
<!-- End SDK Example Usage -->
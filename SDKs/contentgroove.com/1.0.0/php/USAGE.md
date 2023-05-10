<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateClipRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateClipRequestBodyData;
use \OpenAPI\OpenAPI\Models\Operations\CreateClipRequestBodyDataAttributes;
use \OpenAPI\OpenAPI\Models\Operations\CreateClipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClipRequestBody();
    $request->data = new CreateClipRequestBodyData();
    $request->data->attributes = new CreateClipRequestBodyDataAttributes();
    $request->data->attributes->endTime = 12.3;
    $request->data->attributes->mediaId = '9b9a2e82-5b47-4f59-831d-4c239824b983';
    $request->data->attributes->name = 'Example New Clip';
    $request->data->attributes->startTime = 10.1;

    $requestSecurity = new CreateClipSecurity();
    $requestSecurity->bearerHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->createClip($request, $requestSecurity);

    if ($response->clipResponseObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
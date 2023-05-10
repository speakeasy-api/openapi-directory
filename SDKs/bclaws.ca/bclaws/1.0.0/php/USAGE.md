<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContentAspectIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContentAspectIDAspectIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentAspectIdRequest();
    $request->aspectId = GetContentAspectIDAspectIDEnum::OIC;

    $response = $sdk->content->getContentAspectId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
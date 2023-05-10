<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FilterFileDataStoppingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FilterFileDataStoppingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FilterFileDataStoppingsRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilterFileDataStoppingsRequest();
    $request->requestBody = new FilterFileDataStoppingsRequestBody();
    $request->requestBody->file = new FilterFileDataStoppingsRequestBodyFile();
    $request->requestBody->file->content = 'corrupti';
    $request->requestBody->file->file = 'provident';
    $request->type = 'distinctio';

    $response = $sdk->exude->filterFileDataStoppings($request);

    if ($response->exudeResponseBean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
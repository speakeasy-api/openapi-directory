<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MediaTabularExtractsheetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MediaTabularExtractsheetRequest();
    $request->arg1 = 'corrupti';
    $request->entryid = 'provident';
    $request->output = 'distinctio';

    $response = $sdk->serviceMediaTabularExtractsheet->mediaTabularExtractsheet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
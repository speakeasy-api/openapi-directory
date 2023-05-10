<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchV1FieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchV1FieldsRequest();
    $request->callback = 'corrupti';

    $response = $sdk->getSearchV1Fields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
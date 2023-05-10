<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Shared\PossibleListsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->list = PossibleListsEnum::NBS_ISCC;
    $request->noduplicates = false;
    $request->values = 'provident';

    $response = $sdk->get($request);

    if ($response->get200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
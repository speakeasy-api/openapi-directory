<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectUsernameProjectBuildCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectUsernameProjectBuildCacheRequest();
    $request->project = 'corrupti';
    $request->username = 'Larue_Rau85';

    $response = $sdk->deleteProjectUsernameProjectBuildCache($request);

    if ($response->deleteProjectUsernameProjectBuildCache200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
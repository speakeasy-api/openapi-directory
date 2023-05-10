# apiInfo

### Available Operations

* [getContainersMessages](#getcontainersmessages) - List messages for the user
* [getContainersVersion](#getcontainersversion) - List latest API version

## getContainersMessages

This endpoint retrieves all IBM Containers system messages for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersMessagesRequest();
    $request->xAuthProjectId = 'distinctio';
    $request->xAuthToken = 'quibusdam';

    $response = $sdk->apiInfo->getContainersMessages($request);

    if ($response->getContainersMessages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainersVersion

This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiInfo->getContainersVersion();

    if ($response->containersVersionGetInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# profileImages

### Available Operations

* [getProfileImage](#getprofileimage) - A Users or organizations profile image

## getProfileImage

This endpoint allows the client to retrieve a user or organization profile image information by its
        corresponding username.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileImageRequest();
    $request->username = 'Bernie.Padberg';

    $response = $sdk->profileImages->getProfileImage($request);

    if ($response->getProfileImage200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

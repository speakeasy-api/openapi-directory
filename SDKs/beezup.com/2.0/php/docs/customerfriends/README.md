# customerFriends

### Available Operations

* [getFriendInfo](#getfriendinfo) - Get friend information

## getFriendInfo

Get friend information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFriendInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFriendInfoRequest();
    $request->ifNoneMatch = 'dolorem';
    $request->userId = 'dolor';

    $response = $sdk->customerFriends->getFriendInfo($request);

    if ($response->userFriendInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

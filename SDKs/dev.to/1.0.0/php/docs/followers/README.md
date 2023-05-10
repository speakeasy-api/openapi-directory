# followers

### Available Operations

* [getFollowers](#getfollowers) - Followers

## getFollowers

This endpoint allows the client to retrieve a list of the followers they have.
        "Followers" are users that are following other users on the website.
        It supports pagination, each page will contain 80 followers by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFollowersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFollowersRequest();
    $request->page = 943749;
    $request->perPage = 902599;
    $request->sort = 'fuga';

    $response = $sdk->followers->getFollowers($request);

    if ($response->getFollowers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

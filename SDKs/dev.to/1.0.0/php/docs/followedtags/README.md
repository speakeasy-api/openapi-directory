# followedTags

### Available Operations

* [getFollowedTags](#getfollowedtags) - Followed Tags

## getFollowedTags

This endpoint allows the client to retrieve a list of the tags they follow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->followedTags->getFollowedTags();

    if ($response->followedTags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# tags

### Available Operations

* [getFollowedTags](#getfollowedtags) - Followed Tags
* [getTags](#gettags) - Tags

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
    $response = $sdk->tags->getFollowedTags();

    if ($response->followedTags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

This endpoint allows the client to retrieve a list of tags that can be used to tag articles.

It will return tags ordered by popularity.

It supports pagination, each page will contain 10 tags by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->page = 97101;
    $request->perPage = 622846;

    $response = $sdk->tags->getTags($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

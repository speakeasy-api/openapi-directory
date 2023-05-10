# videos

### Available Operations

* [videos](#videos) - Articles with a video

## videos

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VideosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideosRequest();
    $request->page = 20107;
    $request->perPage = 164940;

    $response = $sdk->videos->videos($request);

    if ($response->videoArticles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

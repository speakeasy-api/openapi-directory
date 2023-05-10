# communityContent

## Overview

communitycontent

### Available Operations

* [communityContentGetCommunityContent](#communitycontentgetcommunitycontent) - Returns community content.

## communityContentGetCommunityContent

Returns community content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommunityContentGetCommunityContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommunityContentGetCommunityContentRequest();
    $request->mediaFilter = 857946;
    $request->page = 544883;
    $request->sort = 847252;

    $response = $sdk->communityContent->communityContentGetCommunityContent($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

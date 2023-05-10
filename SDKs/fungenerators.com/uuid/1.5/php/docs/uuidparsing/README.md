# uuidParsing

## Overview

Parse UUID string and check for its validity and return version details

Find out more
<https://fungenerators.com/api/uuid/>
### Available Operations

* [postUuid](#postuuid) - Parse a UUID string and return its version and check whether it is valid.

## postUuid

Parse a UUID string and return its version and check whether it is valid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUuidRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUuidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUuidRequest();
    $request->uuidstr = 'corrupti';

    $requestSecurity = new PostUuidSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->uuidParsing->postUuid($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

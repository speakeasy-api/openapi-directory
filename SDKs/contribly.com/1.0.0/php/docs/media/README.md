# media

## Overview

Submit media

### Available Operations

* [postMedia](#postmedia) - Submit a new media file

## postMedia

Submit a new media file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
'dolorum'

    $requestSecurity = new PostMediaSecurity();
    $requestSecurity->oauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->postMedia($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

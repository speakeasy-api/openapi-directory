# emojis

## Overview

List emojis available to use on GitHub.

### Available Operations

* [emojisGet](#emojisget) - Get emojis

## emojisGet

Lists all the emojis available to use on GitHub Enterprise Server.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/emojis#get-emojis>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->emojis->emojisGet();

    if ($response->emojisGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

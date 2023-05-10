# realtime

### Available Operations

* [getRealtime](#getrealtime) - Use to request a Websockets handshake

## getRealtime

Use to request a Websockets handshake

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRealtimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRealtimeRequest();
    $request->secWebsocketProtocol = 'voluptas';

    $response = $sdk->realtime->getRealtime($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

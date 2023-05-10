# transfer

### Available Operations

* [getWebauth](#getwebauth) - First step to establish an oAuth2 connection.

## getWebauth

The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebauthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebauthRequestBody();
    $request->clientId = 622231;
    $request->idTransfer = 8511;
    $request->redirectUri = 'incidunt';
    $request->state = 'reiciendis';

    $response = $sdk->transfer->getWebauth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# SDK

### Available Operations

* [connect](#connect) - connect
* [connections](#connections) - connections
* [disconnect](#disconnect) - disconnect
* [status](#status) - status

## connect

Initiate a connection to a specified peer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectRequestBody();
    $request->endpoint = 'provident';

    $response = $sdk->sdk->connect($request);

    if ($response->connect200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connections

Returns an array of all peer connection statuses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ]

    $response = $sdk->sdk->connections($request);

    if ($response->connections200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnect

Initiate disconnection from a specified peer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectRequestBody();
    $request->endpoint = 'error';

    $response = $sdk->sdk->disconnect($request);

    if ($response->disconnect200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## status

Retrieves the connection status for a specified peer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StatusRequestBody();
    $request->endpoint = 'deserunt';

    $response = $sdk->sdk->status($request);

    if ($response->status200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

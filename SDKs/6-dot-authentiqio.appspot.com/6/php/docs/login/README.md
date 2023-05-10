# login

### Available Operations

* [pushLoginRequest](#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


## pushLoginRequest

push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PushLoginRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PushLoginRequestRequest();
    $request->requestBody = 'qui';
    $request->callback = 'impedit';

    $response = $sdk->login->pushLoginRequest($request);

    if ($response->pushLoginRequest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# transactionRequests123

### Available Operations

* [sendtransaction3](#sendtransaction3) - sendTransaction
* [sendtrc10](#sendtrc10) - sendTRC10
* [sendtrc20](#sendtrc20) - sendTRC20
* [sendtrc721](#sendtrc721) - sendTRC721

## sendtransaction3

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtransaction3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtransaction3RequestBody();
    $request->amount = '1';
    $request->privatekey = '92a5a62fdf7290244b564450f4ab10a5ea796f234aa6aded322c826ad40efb9c';
    $request->to = 'TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M';

    $response = $sdk->transactionRequests123->sendtransaction3($request);

    if ($response->sendtransaction3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtrc10

sendTRC10

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtrc10RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtrc10RequestBody();
    $request->amount = '0.000001';
    $request->privatekey = '92a5a62fdf7290244b564450f4ab10a5ea796f234aa6aded322c826ad40efb9c';
    $request->to = 'TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M';
    $request->tokenId = 1002000;

    $response = $sdk->transactionRequests123->sendtrc10($request);

    if ($response->sendtrc10200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtrc20

sendTRC20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtrc20RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtrc20RequestBody();
    $request->amount = '0.1';
    $request->contractaddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
    $request->from = 'TPbJ4q2wZP2UpsE7ME3bxewS5pKAdWZwCj';
    $request->privatekey = 'privatekey';
    $request->to = 'TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M';

    $response = $sdk->transactionRequests123->sendtrc20($request);

    if ($response->sendtrc20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtrc721

sendTRC721

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'cum'

    $response = $sdk->transactionRequests123->sendtrc721($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

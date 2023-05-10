# transactionRequests12

### Available Operations

* [broadcasttransaction2](#broadcasttransaction2) - broadcastTransaction
* [sendbep20](#sendbep20) - sendBEP20
* [sendbep721](#sendbep721) - sendBEP721
* [sendtransaction2](#sendtransaction2) - sendTransaction

## broadcasttransaction2

Broadcast raw transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Broadcasttransaction2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Broadcasttransaction2RequestBody();
    $request->data = '0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85';

    $response = $sdk->transactionRequests12->broadcasttransaction2($request);

    if ($response->broadcasttransaction2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendbep20

sendBEP20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendbep20RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendbep20RequestBody();
    $request->amount = '0.1';
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->gas = 7742.34;
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->transactionRequests12->sendbep20($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendbep721

sendBEP721

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendbep721RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendbep721RequestBody();
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';
    $request->tokenid = 123;

    $response = $sdk->transactionRequests12->sendbep721($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtransaction2

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtransaction2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtransaction2RequestBody();
    $request->amount = '0.1';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->transactionRequests12->sendtransaction2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# transactionRequests1

### Available Operations

* [broadcasttransaction1](#broadcasttransaction1) - broadcastTransaction
* [senderc201](#senderc201) - sendERC20
* [senderc7211](#senderc7211) - sendERC721
* [sendtransaction1](#sendtransaction1) - sendTransaction

## broadcasttransaction1

Broadcast raw transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Broadcasttransaction1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Broadcasttransaction1RequestBody();
    $request->data = '0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85';

    $response = $sdk->transactionRequests1->broadcasttransaction1($request);

    if ($response->broadcasttransaction1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## senderc201

sendERC20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Senderc201RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Senderc201RequestBody();
    $request->amount = 0.1;
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->gas = 2645.55;
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->transactionRequests1->senderc201($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## senderc7211

sendERC721

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Senderc7211RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Senderc7211RequestBody();
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';
    $request->tokenid = 123;

    $response = $sdk->transactionRequests1->senderc7211($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtransaction1

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtransaction1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtransaction1RequestBody();
    $request->amount = '0.1';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->gas = 1863.32;
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->transactionRequests1->sendtransaction1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# walletRequests

### Available Operations

* [createwallet](#createwallet) - createWallet
* [createwalletaddress](#createwalletaddress) - createWalletAddress
* [deletewallet](#deletewallet) - deleteWallet
* [exportaddressprivatekey](#exportaddressprivatekey) - exportAddressPrivateKey
* [getwallet](#getwallet) - getWallet
* [getwalletaddresses](#getwalletaddresses) - getWalletAddresses

## createwallet

createWallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatewalletRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatewalletRequestBody();
    $request->password = 'test123';

    $response = $sdk->walletRequests->createwallet($request);

    if ($response->createwallet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createwalletaddress

createWalletAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatewalletaddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatewalletaddressRequest();
    $request->requestBody = [
        'dolor' => 'natus',
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
    ];
    $request->walletName = 'Evolo_2163532';

    $response = $sdk->walletRequests->createwalletaddress($request);

    if ($response->createwalletaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletewallet

deleteWallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletewalletRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletewalletRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletewalletRequest();
    $request->requestBody = new DeletewalletRequestBody();
    $request->requestBody->password = 'test123';
    $request->walletname = 'Evolo_4215179';

    $response = $sdk->walletRequests->deletewallet($request);

    if ($response->deletewallet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportaddressprivatekey

exportAddressPrivateKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportaddressprivatekeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportaddressprivatekeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportaddressprivatekeyRequest();
    $request->requestBody = new ExportaddressprivatekeyRequestBody();
    $request->requestBody->password = 'test123';
    $request->address = 'bc1qz3hdws5lt5ug7qwfv4m4ttanaq67ts77ekv95x';
    $request->name = 'Evolo_4215179';

    $response = $sdk->walletRequests->exportaddressprivatekey($request);

    if ($response->exportaddressprivatekey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getwallet

getWallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'in'

    $response = $sdk->walletRequests->getwallet($request);

    if ($response->getwallet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getwalletaddresses

getWalletAddresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetwalletaddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetwalletaddressesRequest();
    $request->walletName = 'Evolo_2163532';

    $response = $sdk->walletRequests->getwalletaddresses($request);

    if ($response->getwalletaddresses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

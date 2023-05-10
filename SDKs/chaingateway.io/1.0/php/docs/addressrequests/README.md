# addressRequests

## Overview

Requests to create, list and delete addresses

### Available Operations

* [deleteAddress](#deleteaddress) - deleteAddress
* [exportAddress](#exportaddress) - exportAddress
* [importAddress](#importaddress) - importAddress
* [listAddresses](#listaddresses) - listAddresses
* [newAddress](#newaddress) - newAddress

## deleteAddress

Deletes an existing ethereum address. Be careful when using this function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->deleteAddressRequest = new DeleteAddressRequest();
    $request->deleteAddressRequest->ethereumaddress = 'distinctio';
    $request->deleteAddressRequest->password = 'quibusdam';

    $response = $sdk->addressRequests->deleteAddress($request);

    if ($response->deleteAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAddress

Returns all ethereum addresses created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->exportAddressRequest = new ExportAddressRequest();
    $request->exportAddressRequest->ethaddress = 'unde';
    $request->exportAddressRequest->password = 'nulla';

    $response = $sdk->addressRequests->exportAddress($request);

    if ($response->exportAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importAddress

Returns all ethereum addresses created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\Content;
use \OpenAPI\OpenAPI\Models\Shared\Crypto;
use \OpenAPI\OpenAPI\Models\Shared\Cipherparams;
use \OpenAPI\OpenAPI\Models\Shared\Kdfparams;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->importAddressRequest = new ImportAddressRequest();
    $request->importAddressRequest->content = new Content();
    $request->importAddressRequest->content->address = '8466 Hunter Fort';
    $request->importAddressRequest->content->crypto = new Crypto();
    $request->importAddressRequest->content->crypto->cipher = 'debitis';
    $request->importAddressRequest->content->crypto->cipherparams = new Cipherparams();
    $request->importAddressRequest->content->crypto->cipherparams->iv = 'ipsa';
    $request->importAddressRequest->content->crypto->ciphertext = 'delectus';
    $request->importAddressRequest->content->crypto->kdf = 'tempora';
    $request->importAddressRequest->content->crypto->kdfparams = new Kdfparams();
    $request->importAddressRequest->content->crypto->kdfparams->dklen = 383441;
    $request->importAddressRequest->content->crypto->kdfparams->n = 477665;
    $request->importAddressRequest->content->crypto->kdfparams->p = 791725;
    $request->importAddressRequest->content->crypto->kdfparams->r = 812169;
    $request->importAddressRequest->content->crypto->kdfparams->salt = 'voluptatum';
    $request->importAddressRequest->content->crypto->mac = 'iusto';
    $request->importAddressRequest->content->id = '96ed151a-05df-4c2d-9f7c-c78ca1ba928f';
    $request->importAddressRequest->content->version = 758616;
    $request->importAddressRequest->filename = 'totam';
    $request->importAddressRequest->password = 'beatae';

    $response = $sdk->addressRequests->importAddress($request);

    if ($response->importAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAddresses

Returns all ethereum addresses created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAddressesRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->contentType = 'application/json';

    $response = $sdk->addressRequests->listAddresses($request);

    if ($response->listAddresses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newAddress

Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NewAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->newAddressRequest = new NewAddressRequest();
    $request->newAddressRequest->password = 'commodi';

    $response = $sdk->addressRequests->newAddress($request);

    if ($response->newAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

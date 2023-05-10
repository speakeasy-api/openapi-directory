# customerStores

### Available Operations

* [createStore](#createstore) - Create a new store
* [deleteStore](#deletestore) - Delete a store
* [getStore](#getstore) - Get store's information
* [getStores](#getstores) - Get store list
* [updateStore](#updatestore) - Update some store's information.

## createStore

Create a new store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStoreRequest();
    $request->countryIsoCodeAlpha3 = 'DEU';
    $request->id = '64f43358-63a1-47f7-97ec-0301fc39956b';
    $request->name = 'My Store';
    $request->sectors = [
        'ANIMALERIE',
    ];
    $request->url = 'http://www.mystore.com';

    $response = $sdk->customerStores->createStore($request);

    if ($response->linksGetStoreLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStore

Delete a store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStoreRequest();
    $request->storeId = 'dolorum';

    $response = $sdk->customerStores->deleteStore($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStore

Get store's information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreRequest();
    $request->ifNoneMatch = 'numquam';
    $request->storeId = 'veritatis';

    $response = $sdk->customerStores->getStore($request);

    if ($response->store !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStores

Get store list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoresRequest();
    $request->ifNoneMatch = 'ipsa';

    $response = $sdk->customerStores->getStores($request);

    if ($response->storeList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStore

Update some store's information. FYI, you cannot change the country.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStoreRequest();
    $request->storeId = 'ipsa';
    $request->updateStoreRequest = new UpdateStoreRequest();
    $request->updateStoreRequest->name = 'My Store';
    $request->updateStoreRequest->sectors = [
        'ANIMALERIE',
        'ANIMALERIE',
    ];
    $request->updateStoreRequest->url = 'http://www.mystore.com';

    $response = $sdk->customerStores->updateStore($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

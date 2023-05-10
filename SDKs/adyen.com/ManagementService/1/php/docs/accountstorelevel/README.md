# accountStoreLevel

### Available Operations

* [getMerchantsMerchantIdStores](#getmerchantsmerchantidstores) - Get a list of stores
* [getMerchantsMerchantIdStoresStoreId](#getmerchantsmerchantidstoresstoreid) - Get a store
* [getStores](#getstores) - Get a list of stores
* [getStoresStoreId](#getstoresstoreid) - Get a store
* [patchMerchantsMerchantIdStoresStoreId](#patchmerchantsmerchantidstoresstoreid) - Update a store
* [patchStoresStoreId](#patchstoresstoreid) - Update a store
* [postMerchantsMerchantIdStores](#postmerchantsmerchantidstores) - Create a store
* [postStores](#poststores) - Create a store

## getMerchantsMerchantIdStores

Returns a list of stores for the merchant account identified in the path. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdStoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdStoresSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdStoresRequest();
    $request->merchantId = 'saepe';
    $request->pageNumber = 697631;
    $request->pageSize = 99280;
    $request->reference = 'ipsa';

    $requestSecurity = new GetMerchantsMerchantIdStoresSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountStoreLevel->getMerchantsMerchantIdStores($request, $requestSecurity);

    if ($response->listStoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdStoresStoreId

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdStoresStoreIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdStoresStoreIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdStoresStoreIdRequest();
    $request->merchantId = 'reiciendis';
    $request->storeId = 'est';

    $requestSecurity = new GetMerchantsMerchantIdStoresStoreIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountStoreLevel->getMerchantsMerchantIdStoresStoreId($request, $requestSecurity);

    if ($response->store !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStores

Returns a list of stores. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoresRequest();
    $request->merchantId = 'mollitia';
    $request->pageNumber = 670638;
    $request->pageSize = 170909;
    $request->reference = 'dolorem';

    $requestSecurity = new GetStoresSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountStoreLevel->getStores($request, $requestSecurity);

    if ($response->listStoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoresStoreId

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresStoreIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresStoreIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoresStoreIdRequest();
    $request->storeId = 'corporis';

    $requestSecurity = new GetStoresStoreIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountStoreLevel->getStoresStoreId($request, $requestSecurity);

    if ($response->store !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdStoresStoreId

Updates the store identified in the path. You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdStoresStoreIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatableAddress;
use \OpenAPI\OpenAPI\Models\Shared\StoreSplitConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStoreRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdStoresStoreIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdStoresStoreIdRequest();
    $request->updateStoreRequest = new UpdateStoreRequest();
    $request->updateStoreRequest->address = new UpdatableAddress();
    $request->updateStoreRequest->address->city = 'Port Emeraldstead';
    $request->updateStoreRequest->address->line1 = 'nemo';
    $request->updateStoreRequest->address->line2 = 'minima';
    $request->updateStoreRequest->address->line3 = 'excepturi';
    $request->updateStoreRequest->address->postalCode = '46991';
    $request->updateStoreRequest->address->stateOrProvince = 'mollitia';
    $request->updateStoreRequest->businessLineIds = [
        'culpa',
    ];
    $request->updateStoreRequest->description = 'consequuntur';
    $request->updateStoreRequest->externalReferenceId = 'repellat';
    $request->updateStoreRequest->splitConfiguration = new StoreSplitConfiguration();
    $request->updateStoreRequest->splitConfiguration->balanceAccountId = 'mollitia';
    $request->updateStoreRequest->splitConfiguration->splitConfigurationId = 'occaecati';
    $request->updateStoreRequest->status = UpdateStoreRequestStatusEnum::ACTIVE;
    $request->merchantId = 'commodi';
    $request->storeId = 'quam';

    $requestSecurity = new PatchMerchantsMerchantIdStoresStoreIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountStoreLevel->patchMerchantsMerchantIdStoresStoreId($request, $requestSecurity);

    if ($response->store !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchStoresStoreId

Updates the store identified in the path.
You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchStoresStoreIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatableAddress;
use \OpenAPI\OpenAPI\Models\Shared\StoreSplitConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStoreRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchStoresStoreIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchStoresStoreIdRequest();
    $request->updateStoreRequest = new UpdateStoreRequest();
    $request->updateStoreRequest->address = new UpdatableAddress();
    $request->updateStoreRequest->address->city = 'Deionfurt';
    $request->updateStoreRequest->address->line1 = 'quia';
    $request->updateStoreRequest->address->line2 = 'quis';
    $request->updateStoreRequest->address->line3 = 'vitae';
    $request->updateStoreRequest->address->postalCode = '63171-9368';
    $request->updateStoreRequest->address->stateOrProvince = 'aut';
    $request->updateStoreRequest->businessLineIds = [
        'error',
    ];
    $request->updateStoreRequest->description = 'temporibus';
    $request->updateStoreRequest->externalReferenceId = 'laborum';
    $request->updateStoreRequest->splitConfiguration = new StoreSplitConfiguration();
    $request->updateStoreRequest->splitConfiguration->balanceAccountId = 'quasi';
    $request->updateStoreRequest->splitConfiguration->splitConfigurationId = 'reiciendis';
    $request->updateStoreRequest->status = UpdateStoreRequestStatusEnum::INACTIVE;
    $request->storeId = 'vero';

    $requestSecurity = new PatchStoresStoreIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountStoreLevel->patchStoresStoreId($request, $requestSecurity);

    if ($response->store !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdStores

Creates a store for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdStoresRequest;
use \OpenAPI\OpenAPI\Models\Shared\StoreCreationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StoreLocation;
use \OpenAPI\OpenAPI\Models\Shared\StoreSplitConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdStoresSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdStoresRequest();
    $request->storeCreationRequest = new StoreCreationRequest();
    $request->storeCreationRequest->address = new StoreLocation();
    $request->storeCreationRequest->address->city = 'Johnworth';
    $request->storeCreationRequest->address->country = 'Austria';
    $request->storeCreationRequest->address->line1 = 'omnis';
    $request->storeCreationRequest->address->line2 = 'voluptate';
    $request->storeCreationRequest->address->line3 = 'cum';
    $request->storeCreationRequest->address->postalCode = '04291';
    $request->storeCreationRequest->address->stateOrProvince = 'corporis';
    $request->storeCreationRequest->businessLineIds = [
        'iusto',
        'dicta',
    ];
    $request->storeCreationRequest->description = 'harum';
    $request->storeCreationRequest->externalReferenceId = 'enim';
    $request->storeCreationRequest->phoneNumber = 'accusamus';
    $request->storeCreationRequest->reference = 'commodi';
    $request->storeCreationRequest->shopperStatement = 'repudiandae';
    $request->storeCreationRequest->splitConfiguration = new StoreSplitConfiguration();
    $request->storeCreationRequest->splitConfiguration->balanceAccountId = 'quae';
    $request->storeCreationRequest->splitConfiguration->splitConfigurationId = 'ipsum';
    $request->merchantId = 'quidem';

    $requestSecurity = new PostMerchantsMerchantIdStoresSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountStoreLevel->postMerchantsMerchantIdStores($request, $requestSecurity);

    if ($response->store !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStores

Creates a store for the merchant account specified in the request.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoreCreationWithMerchantCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\StoreLocation;
use \OpenAPI\OpenAPI\Models\Shared\StoreSplitConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\PostStoresSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreCreationWithMerchantCodeRequest();
    $request->address = new StoreLocation();
    $request->address->city = 'Kennyhaven';
    $request->address->country = 'Eritrea';
    $request->address->line1 = 'praesentium';
    $request->address->line2 = 'rem';
    $request->address->line3 = 'voluptates';
    $request->address->postalCode = '95092';
    $request->address->stateOrProvince = 'enim';
    $request->businessLineIds = [
        'est',
    ];
    $request->description = 'quibusdam';
    $request->externalReferenceId = 'explicabo';
    $request->merchantId = 'deserunt';
    $request->phoneNumber = 'distinctio';
    $request->reference = 'quibusdam';
    $request->shopperStatement = 'labore';
    $request->splitConfiguration = new StoreSplitConfiguration();
    $request->splitConfiguration->balanceAccountId = 'modi';
    $request->splitConfiguration->splitConfigurationId = 'qui';

    $requestSecurity = new PostStoresSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountStoreLevel->postStores($request, $requestSecurity);

    if ($response->store !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

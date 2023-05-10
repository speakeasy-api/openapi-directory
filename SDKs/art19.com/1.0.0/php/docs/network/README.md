# network

### Available Operations

* [getNetworks](#getnetworks) - Get a list of networks
* [getNetworksId](#getnetworksid) - Get a specific network

## getNetworks

### Deprecations

- The attribute `cover_image_id` has been replaced with the relationship `cover_image`
  and will be removed from the response in a future release.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksAdDealStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworksRequest();
    $request->adDealStatus = [
        GetNetworksAdDealStatusEnum::ACTIVE,
        GetNetworksAdDealStatusEnum::ACTIVE,
        GetNetworksAdDealStatusEnum::ACTIVE,
        GetNetworksAdDealStatusEnum::ACTIVE,
    ];
    $request->adRepAccountId = '563f94e2-9e97-43e9-a2a5-7a15be3e0608';
    $request->ids = [
        '7e2b6e3a-b884-45f0-997a-60ff2a54a31e',
    ];
    $request->pageNumber = 607249;
    $request->pageSize = 309251;
    $request->q = 'molestiae';
    $request->sort = [
        GetNetworksSortEnum::CREATED_AT,
        GetNetworksSortEnum::NAME,
    ];

    $requestSecurity = new GetNetworksSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->network->getNetworks($request, $requestSecurity);

    if ($response->getNetworks200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworksId

### Deprecations

- The attribute `cover_image_id` has been replaced with the relationship `cover_image`
  and will be removed from the response in a future release.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworksIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworksIdRequest();
    $request->id = '3e865e79-56f9-4251-a5a9-da660ff57bfa';

    $requestSecurity = new GetNetworksIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->network->getNetworksId($request, $requestSecurity);

    if ($response->getNetworksId200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

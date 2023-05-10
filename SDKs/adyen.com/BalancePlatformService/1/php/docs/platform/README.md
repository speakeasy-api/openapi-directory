# platform

### Available Operations

* [getBalancePlatformsId](#getbalanceplatformsid) - Get a balance platform
* [getBalancePlatformsIdAccountHolders](#getbalanceplatformsidaccountholders) - Get all account holders under a balance platform

## getBalancePlatformsId

Returns a balance platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBalancePlatformsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBalancePlatformsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBalancePlatformsIdRequest();
    $request->id = 'ff2a54a3-1e94-4764-a3e8-65e7956f9251';

    $requestSecurity = new GetBalancePlatformsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->platform->getBalancePlatformsId($request, $requestSecurity);

    if ($response->balancePlatform !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBalancePlatformsIdAccountHolders

Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBalancePlatformsIdAccountHoldersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBalancePlatformsIdAccountHoldersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBalancePlatformsIdAccountHoldersRequest();
    $request->id = 'a5a9da66-0ff5-47bf-aad4-f9efc1b4512c';
    $request->limit = 62636;
    $request->offset = 21688;

    $requestSecurity = new GetBalancePlatformsIdAccountHoldersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->platform->getBalancePlatformsIdAccountHolders($request, $requestSecurity);

    if ($response->paginatedAccountHoldersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

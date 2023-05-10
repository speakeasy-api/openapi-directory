# organizations

### Available Operations

* [getOrgArticles](#getorgarticles) - Organization's Articles
* [getOrgUsers](#getorgusers) - Organization's users
* [getOrganization](#getorganization) - An organization

## getOrgArticles

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrgArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrgArticlesRequest();
    $request->page = 449950;
    $request->perPage = 359508;
    $request->username = 'Leslie_Kertzmann9';

    $response = $sdk->organizations->getOrgArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrgUsers

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrgUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrgUsersRequest();
    $request->page = 60225;
    $request->perPage = 969810;
    $request->username = 'Manuela.OHara21';

    $response = $sdk->organizations->getOrgUsers($request);

    if ($response->users !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganization

This endpoint allows the client to retrieve a single organization by their username

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationRequest();
    $request->username = 'Florian.Champlin60';

    $response = $sdk->organizations->getOrganization($request);

    if ($response->getOrganization200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

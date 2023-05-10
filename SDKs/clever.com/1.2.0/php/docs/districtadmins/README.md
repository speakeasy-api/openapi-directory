# districtAdmins

### Available Operations

* [getDistrictAdmin](#getdistrictadmin) - Returns a specific district admin
* [getDistrictAdmins](#getdistrictadmins) - Returns a list of district admins

## getDistrictAdmin

Returns a specific district admin

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictAdminRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictAdminRequest();
    $request->id = 'c3f5ad01-9da1-4ffe-b8f0-97b0074f1547';

    $response = $sdk->districtAdmins->getDistrictAdmin($request);

    if ($response->districtAdminResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictAdmins

Returns a list of district admins

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictAdminsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictAdminsRequest();
    $request->endingBefore = 'dicta';
    $request->showLinks = 'harum';
    $request->startingAfter = 'enim';

    $response = $sdk->districtAdmins->getDistrictAdmins($request);

    if ($response->districtAdminsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

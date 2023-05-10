# schoolAdmins

### Available Operations

* [getSchoolAdmin](#getschooladmin) - Returns a specific school admin
* [getSchoolAdmins](#getschooladmins) - Returns a list of school admins
* [getSchoolsForSchoolAdmin](#getschoolsforschooladmin) - Returns the schools for a school admin

## getSchoolAdmin

Returns a specific school admin

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolAdminRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolAdminRequest();
    $request->id = '100674eb-f692-480d-9ba7-7a89ebf737ae';
    $request->include = 'eius';

    $response = $sdk->schoolAdmins->getSchoolAdmin($request);

    if ($response->schoolAdminResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchoolAdmins

Returns a list of school admins

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolAdminsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolAdminsRequest();
    $request->endingBefore = 'aspernatur';
    $request->limit = 20651;
    $request->startingAfter = 'amet';
    $request->where = 'optio';

    $response = $sdk->schoolAdmins->getSchoolAdmins($request);

    if ($response->schoolAdminsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchoolsForSchoolAdmin

Returns the schools for a school admin

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolsForSchoolAdminRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolsForSchoolAdminRequest();
    $request->endingBefore = 'accusamus';
    $request->id = '5e6a95d8-a0d4-446c-a2af-7a73cf3be453';
    $request->limit = 957451;
    $request->startingAfter = 'totam';

    $response = $sdk->schoolAdmins->getSchoolsForSchoolAdmin($request);

    if ($response->schoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

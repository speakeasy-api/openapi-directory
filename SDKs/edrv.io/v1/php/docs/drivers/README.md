# drivers

### Available Operations

* [deleteDriver](#deletedriver) - Delete a driver
* [getDriver](#getdriver) - Get a driver's data
* [getDrivers](#getdrivers) - List all drivers
* [patchDriver](#patchdriver) - Update a driver's data
* [postDrivers](#postdrivers) - Create a new driver

## deleteDriver

Delete a driver

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDriverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDriverRequest();
    $request->id = '5e6a95d8-a0d4-446c-a2af-7a73cf3be453';

    $response = $sdk->drivers->deleteDriver($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDriver

Get a driver's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDriverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDriverRequest();
    $request->id = 'f870b326-b5a7-4342-9cdb-1a8422bb679d';
    $request->includeGroup = false;
    $request->includeOrganization = false;
    $request->includeTokens = false;

    $response = $sdk->drivers->getDriver($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDrivers

List all drivers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDriversRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDriversRequest();
    $request->active = false;
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T05:22:32.548Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T18:57:36.196Z');
    $request->includeGroup = false;
    $request->includeOrganization = false;
    $request->includeTokens = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 488056;
    $request->paginatePage = 'sunt';
    $request->sortBy = 'ullam';
    $request->sortOrder = SortOrder1Enum::ASC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-28T15:41:44.846Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-05T00:59:28.911Z');

    $response = $sdk->drivers->getDrivers($request);

    if ($response->getDrivers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchDriver

Update a driver's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchDriverRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchDriverRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchDriverRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\PatchDriverRequestBodyPhone;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchDriverRequest();
    $request->requestBody = new PatchDriverRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->address = new PatchDriverRequestBodyAddress();
    $request->requestBody->address->city = 'Boscoside';
    $request->requestBody->address->country = 'Cuba';
    $request->requestBody->address->postalCode = '75750';
    $request->requestBody->address->streetAndNumber = 'delectus';
    $request->requestBody->email = 'Eladio67@gmail.com';
    $request->requestBody->firstname = 'Barbara';
    $request->requestBody->lastname = 'Berge';
    $request->requestBody->phone = new PatchDriverRequestBodyPhone();
    $request->requestBody->phone->home = 'aut';
    $request->requestBody->phone->mobile = '906-879-2751 x0545';
    $request->requestBody->phone->work = 'voluptatibus';
    $request->requestBody->source = 'quisquam';
    $request->requestBody->tokens = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->id = '73ef7fbc-7abd-474d-939c-0f5d2cff7c70';

    $response = $sdk->drivers->patchDriver($request);

    if ($response->patchDriver200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDrivers

Create a new driver

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostDriversRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostDriversRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\PostDriversRequestBodyPhone;
use \OpenAPI\OpenAPI\Models\Operations\PostDriversRequestBodySourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostDriversRequestBody();
    $request->active = false;
    $request->address = new PostDriversRequestBodyAddress();
    $request->address->city = 'Gloverbury';
    $request->address->country = 'Iran';
    $request->address->postalCode = '48214';
    $request->address->streetAndNumber = 'laudantium';
    $request->email = 'Dana40@gmail.com';
    $request->firstname = 'Sage';
    $request->lastname = 'Marks';
    $request->phone = new PostDriversRequestBodyPhone();
    $request->phone->home = 'voluptatibus';
    $request->phone->mobile = '(979) 573-3303 x472';
    $request->phone->work = 'recusandae';
    $request->source = PostDriversRequestBodySourceEnum::PHYSICAL;

    $response = $sdk->drivers->postDrivers($request);

    if ($response->postDrivers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

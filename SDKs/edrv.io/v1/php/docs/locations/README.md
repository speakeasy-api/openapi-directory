# locations

### Available Operations

* [deleteLocation](#deletelocation) - Delete a location
* [getLocation](#getlocation) - Get a location's data
* [getLocations](#getlocations) - Get Locations data
* [patchLocation](#patchlocation) - Update a location's data
* [postLocations](#postlocations) - Create a new location

## deleteLocation

Delete a location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLocationRequest();
    $request->id = '50fb008c-42e1-441a-ac36-6c8dd6b14429';

    $response = $sdk->locations->deleteLocation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocation

Get a location's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocationRequest();
    $request->id = '07474778-a7bd-4466-928c-10ab3cdca425';
    $request->includeChargestations = false;
    $request->includeOrganization = false;

    $response = $sdk->locations->getLocation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocations

Get Locations data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocationsRequest();
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-31T12:37:37.443Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-23T10:04:47.931Z');
    $request->includeOrganization = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 892050;
    $request->paginatePage = 'ipsam';
    $request->sortBy = 'aspernatur';
    $request->sortOrder = SortOrder1Enum::DESC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-15T10:59:14.485Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T03:35:18.820Z');

    $response = $sdk->locations->getLocations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchLocation

Update a location's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyCoordinates;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyOpeningHours;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyOpeningHours0;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyOpeningHours1;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyOpeningHours2;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyOpeningHours3;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyOpeningHours4;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyOpeningHours5;
use \OpenAPI\OpenAPI\Models\Operations\PatchLocationRequestBodyOpeningHours6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchLocationRequest();
    $request->requestBody = new PatchLocationRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->address = new PatchLocationRequestBodyAddress();
    $request->requestBody->address->city = 'Schmidtmouth';
    $request->requestBody->address->country = 'Barbados';
    $request->requestBody->address->postalCode = '58345';
    $request->requestBody->address->state = 'commodi';
    $request->requestBody->address->streetAndNumber = 'sapiente';
    $request->requestBody->chargestations = [
        'deserunt',
    ];
    $request->requestBody->coordinates = new PatchLocationRequestBodyCoordinates();
    $request->requestBody->coordinates->latitude = 4752.89;
    $request->requestBody->coordinates->longitude = 353.62;
    $request->requestBody->openingHours = new PatchLocationRequestBodyOpeningHours();
    $request->requestBody->openingHours->zero = [
        new PatchLocationRequestBodyOpeningHours0(),
        new PatchLocationRequestBodyOpeningHours0(),
        new PatchLocationRequestBodyOpeningHours0(),
        new PatchLocationRequestBodyOpeningHours0(),
    ];
    $request->requestBody->openingHours->one = [
        new PatchLocationRequestBodyOpeningHours1(),
        new PatchLocationRequestBodyOpeningHours1(),
    ];
    $request->requestBody->openingHours->two = [
        new PatchLocationRequestBodyOpeningHours2(),
        new PatchLocationRequestBodyOpeningHours2(),
        new PatchLocationRequestBodyOpeningHours2(),
    ];
    $request->requestBody->openingHours->three = [
        new PatchLocationRequestBodyOpeningHours3(),
        new PatchLocationRequestBodyOpeningHours3(),
        new PatchLocationRequestBodyOpeningHours3(),
    ];
    $request->requestBody->openingHours->four = [
        new PatchLocationRequestBodyOpeningHours4(),
    ];
    $request->requestBody->openingHours->five = [
        new PatchLocationRequestBodyOpeningHours5(),
        new PatchLocationRequestBodyOpeningHours5(),
        new PatchLocationRequestBodyOpeningHours5(),
    ];
    $request->requestBody->openingHours->six = [
        new PatchLocationRequestBodyOpeningHours6(),
    ];
    $request->requestBody->operatorName = 'fuga';
    $request->requestBody->timezone = 'mollitia';
    $request->id = '482562f2-22e9-4817-ae17-cbe61e6b7b95';

    $response = $sdk->locations->patchLocation($request);

    if ($response->patchLocation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLocations

Create a new location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostLocationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostLocationsRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\PostLocationsRequestBodyCoordinates;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLocationsRequestBody();
    $request->active = false;
    $request->address = new PostLocationsRequestBodyAddress();
    $request->address->city = 'Roobtown';
    $request->address->country = 'New Zealand';
    $request->address->postalCode = '27107-3924';
    $request->address->streetAndNumber = 'blanditiis';
    $request->chargestations = [
        'a',
        'nulla',
        'quas',
    ];
    $request->coordinates = new PostLocationsRequestBodyCoordinates();
    $request->coordinates->latitude = 4572.23;
    $request->coordinates->longitude = 974.68;
    $request->operatorName = 'a';

    $response = $sdk->locations->postLocations($request);

    if ($response->postLocations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

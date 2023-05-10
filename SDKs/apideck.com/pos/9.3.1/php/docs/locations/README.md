# locations

### Available Operations

* [locationsAdd](#locationsadd) - Create Location
* [locationsAll](#locationsall) - List Locations
* [locationsDelete](#locationsdelete) - Delete Location
* [locationsOne](#locationsone) - Get Location
* [locationsUpdate](#locationsupdate) - Update Location

## locationsAdd

Create Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LocationsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocationsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationsAddRequest();
    $request->locationInput = new LocationInput();
    $request->locationInput->address = new Address();
    $request->locationInput->address->city = 'San Francisco';
    $request->locationInput->address->contactName = 'Elon Musk';
    $request->locationInput->address->country = 'US';
    $request->locationInput->address->county = 'Santa Clara';
    $request->locationInput->address->email = 'elon@musk.com';
    $request->locationInput->address->fax = '122-111-1111';
    $request->locationInput->address->id = '123';
    $request->locationInput->address->latitude = '40.759211';
    $request->locationInput->address->line1 = 'Main street';
    $request->locationInput->address->line2 = 'apt #';
    $request->locationInput->address->line3 = 'Suite #';
    $request->locationInput->address->line4 = 'delivery instructions';
    $request->locationInput->address->longitude = '-73.984638';
    $request->locationInput->address->name = 'HQ US';
    $request->locationInput->address->phoneNumber = '111-111-1111';
    $request->locationInput->address->postalCode = '94104';
    $request->locationInput->address->rowVersion = '1-12345';
    $request->locationInput->address->salutation = 'Mr';
    $request->locationInput->address->state = 'CA';
    $request->locationInput->address->streetNumber = '25';
    $request->locationInput->address->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->locationInput->address->type = AddressTypeEnum::PRIMARY;
    $request->locationInput->address->website = 'https://elonmusk.com';
    $request->locationInput->businessName = 'Dunkin Donuts LLC';
    $request->locationInput->currency = CurrencyEnum::USD;
    $request->locationInput->merchantId = '12345';
    $request->locationInput->name = 'Dunkin Donuts';
    $request->locationInput->status = LocationStatusEnum::ACTIVE;
    $request->raw = false;
    $request->xApideckAppId = 'reprehenderit';
    $request->xApideckConsumerId = 'ut';
    $request->xApideckServiceId = 'maiores';

    $requestSecurity = new LocationsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->locations->locationsAdd($request, $requestSecurity);

    if ($response->createLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locationsAll

List Locations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LocationsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\LocationsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationsAllRequest();
    $request->cursor = 'dicta';
    $request->fields = 'corporis';
    $request->limit = 296140;
    $request->raw = false;
    $request->xApideckAppId = 'iusto';
    $request->xApideckConsumerId = 'dicta';
    $request->xApideckServiceId = 'harum';

    $requestSecurity = new LocationsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->locations->locationsAll($request, $requestSecurity);

    if ($response->getLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locationsDelete

Delete Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LocationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LocationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationsDeleteRequest();
    $request->id = '5e6e13b9-9d48-48e1-a91e-450ad2abd442';
    $request->raw = false;
    $request->xApideckAppId = 'aliquid';
    $request->xApideckConsumerId = 'cupiditate';
    $request->xApideckServiceId = 'quos';

    $requestSecurity = new LocationsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->locations->locationsDelete($request, $requestSecurity);

    if ($response->deleteLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locationsOne

Get Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LocationsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\LocationsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationsOneRequest();
    $request->fields = 'perferendis';
    $request->id = '2d502a94-bb4f-463c-969e-9a3efa77dfb1';
    $request->raw = false;
    $request->xApideckAppId = 'magnam';
    $request->xApideckConsumerId = 'cumque';
    $request->xApideckServiceId = 'facere';

    $requestSecurity = new LocationsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->locations->locationsOne($request, $requestSecurity);

    if ($response->getLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locationsUpdate

Update Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LocationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\LocationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationsUpdateRequest();
    $request->locationInput = new LocationInput();
    $request->locationInput->address = new Address();
    $request->locationInput->address->city = 'San Francisco';
    $request->locationInput->address->contactName = 'Elon Musk';
    $request->locationInput->address->country = 'US';
    $request->locationInput->address->county = 'Santa Clara';
    $request->locationInput->address->email = 'elon@musk.com';
    $request->locationInput->address->fax = '122-111-1111';
    $request->locationInput->address->id = '123';
    $request->locationInput->address->latitude = '40.759211';
    $request->locationInput->address->line1 = 'Main street';
    $request->locationInput->address->line2 = 'apt #';
    $request->locationInput->address->line3 = 'Suite #';
    $request->locationInput->address->line4 = 'delivery instructions';
    $request->locationInput->address->longitude = '-73.984638';
    $request->locationInput->address->name = 'HQ US';
    $request->locationInput->address->phoneNumber = '111-111-1111';
    $request->locationInput->address->postalCode = '94104';
    $request->locationInput->address->rowVersion = '1-12345';
    $request->locationInput->address->salutation = 'Mr';
    $request->locationInput->address->state = 'CA';
    $request->locationInput->address->streetNumber = '25';
    $request->locationInput->address->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->locationInput->address->type = AddressTypeEnum::PRIMARY;
    $request->locationInput->address->website = 'https://elonmusk.com';
    $request->locationInput->businessName = 'Dunkin Donuts LLC';
    $request->locationInput->currency = CurrencyEnum::USD;
    $request->locationInput->merchantId = '12345';
    $request->locationInput->name = 'Dunkin Donuts';
    $request->locationInput->status = LocationStatusEnum::ACTIVE;
    $request->id = '66ae395e-fb9b-4a88-b3a6-6997074ba446';
    $request->raw = false;
    $request->xApideckAppId = 'natus';
    $request->xApideckConsumerId = 'nobis';
    $request->xApideckServiceId = 'eum';

    $requestSecurity = new LocationsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->locations->locationsUpdate($request, $requestSecurity);

    if ($response->updateLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

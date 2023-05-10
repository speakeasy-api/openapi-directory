# organisationsAddresses

## Overview

The registry maintains information about an organisation's contact details for administrative purposes.

  Including:
  - an address for the service of documents
  - a principal place of business address


### Available Operations

* [deleteOrganisationsPartyIdAddressesAddressId](#deleteorganisationspartyidaddressesaddressid) - Delete an address
* [getOrganisationsPartyIdAddresses](#getorganisationspartyidaddresses) - Retrieve a list of addresses
* [getOrganisationsPartyIdAddressesAddressId](#getorganisationspartyidaddressesaddressid) - Retrieve an address
* [postOrganisationsPartyIdAddresses](#postorganisationspartyidaddresses) - Create an address
* [putOrganisationsPartyIdAddressesAddressId](#putorganisationspartyidaddressesaddressid) - Update an address

## deleteOrganisationsPartyIdAddressesAddressId

Delete an address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganisationsPartyIdAddressesAddressIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganisationsPartyIdAddressesAddressIdRequest();
    $request->addressId = 'voluptate';
    $request->apiKey = 'cum';
    $request->partyId = 'perferendis';

    $response = $sdk->organisationsAddresses->deleteOrganisationsPartyIdAddressesAddressId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdAddresses

Retrieve a list of addresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdAddressesRequest();
    $request->apiKey = 'doloremque';
    $request->partyId = 'reprehenderit';

    $response = $sdk->organisationsAddresses->getOrganisationsPartyIdAddresses($request);

    if ($response->addresses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdAddressesAddressId

Retrieve an address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdAddressesAddressIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdAddressesAddressIdRequest();
    $request->addressId = 'ut';
    $request->apiKey = 'maiores';
    $request->partyId = 'dicta';

    $response = $sdk->organisationsAddresses->getOrganisationsPartyIdAddressesAddressId($request);

    if ($response->address !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrganisationsPartyIdAddresses

Create an address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrganisationsPartyIdAddressesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrganisationsPartyIdAddressesRequest();
    $request->addressInput = new AddressInput();
    $request->addressInput->city = 'Canberra';
    $request->addressInput->country = 'Australia';
    $request->addressInput->line1 = 'Level 7';
    $request->addressInput->line2 = '21 Genge Street';
    $request->addressInput->line3 = 'corporis';
    $request->addressInput->name = 'Kembery Building';
    $request->addressInput->postalCode = '2601';
    $request->addressInput->suburb = 'Civic';
    $request->apiKey = 'dolore';
    $request->partyId = 'iusto';

    $response = $sdk->organisationsAddresses->postOrganisationsPartyIdAddresses($request);

    if ($response->address !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrganisationsPartyIdAddressesAddressId

Update an address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganisationsPartyIdAddressesAddressIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrganisationsPartyIdAddressesAddressIdRequest();
    $request->addressId = 'dicta';
    $request->addressInput = new AddressInput();
    $request->addressInput->city = 'Canberra';
    $request->addressInput->country = 'Australia';
    $request->addressInput->line1 = 'Level 7';
    $request->addressInput->line2 = '21 Genge Street';
    $request->addressInput->line3 = 'harum';
    $request->addressInput->name = 'Kembery Building';
    $request->addressInput->postalCode = '2601';
    $request->addressInput->suburb = 'Civic';
    $request->apiKey = 'enim';
    $request->partyId = 'accusamus';

    $response = $sdk->organisationsAddresses->putOrganisationsPartyIdAddressesAddressId($request);

    if ($response->address !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

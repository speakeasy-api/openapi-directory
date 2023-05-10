# organisationsElectronicAddresses

## Overview

The registry maintains information about an organisation's contact details for administrative purposes.

  Including:
  - an email address
  - a mobile number


### Available Operations

* [deleteOrganisationsPartyIdElectronicAddressesAddressId](#deleteorganisationspartyidelectronicaddressesaddressid) - Delete an electronic address
* [getOrganisationsPartyIdElectronicAddresses](#getorganisationspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [getOrganisationsPartyIdElectronicAddressesAddressId](#getorganisationspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [postOrganisationsPartyIdElectronicAddresses](#postorganisationspartyidelectronicaddresses) - Create an electronic address
* [putOrganisationsPartyIdElectronicAddressesAddressId](#putorganisationspartyidelectronicaddressesaddressid) - Update an electronic address

## deleteOrganisationsPartyIdElectronicAddressesAddressId

Delete an electronic address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganisationsPartyIdElectronicAddressesAddressIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganisationsPartyIdElectronicAddressesAddressIdRequest();
    $request->addressId = 'veritatis';
    $request->apiKey = 'itaque';
    $request->partyId = 'incidunt';

    $response = $sdk->organisationsElectronicAddresses->deleteOrganisationsPartyIdElectronicAddressesAddressId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdElectronicAddresses

Retrieve a list of electronic addresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdElectronicAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdElectronicAddressesRequest();
    $request->apiKey = 'enim';
    $request->partyId = 'consequatur';

    $response = $sdk->organisationsElectronicAddresses->getOrganisationsPartyIdElectronicAddresses($request);

    if ($response->electronicAddresses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdElectronicAddressesAddressId

Retrieve an electronic address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdElectronicAddressesAddressIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdElectronicAddressesAddressIdRequest();
    $request->addressId = 'est';
    $request->apiKey = 'quibusdam';
    $request->partyId = 'explicabo';

    $response = $sdk->organisationsElectronicAddresses->getOrganisationsPartyIdElectronicAddressesAddressId($request);

    if ($response->electronicAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrganisationsPartyIdElectronicAddresses

Create an electronic address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrganisationsPartyIdElectronicAddressesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressElectronicAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrganisationsPartyIdElectronicAddressesRequest();
    $request->apiKey = 'deserunt';
    $request->electronicAddressInput = new ElectronicAddressInput();
    $request->electronicAddressInput->areaCode = '02';
    $request->electronicAddressInput->countryPrefix = '61';
    $request->electronicAddressInput->electronicAddressType = ElectronicAddressElectronicAddressTypeEnum::MOBILE;
    $request->electronicAddressInput->email = 'Edyth39@hotmail.com';
    $request->electronicAddressInput->extension = 'cupiditate';
    $request->electronicAddressInput->number = '62164453';
    $request->electronicAddressInput->url = 'quos';
    $request->partyId = 'perferendis';

    $response = $sdk->organisationsElectronicAddresses->postOrganisationsPartyIdElectronicAddresses($request);

    if ($response->electronicAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrganisationsPartyIdElectronicAddressesAddressId

Update an electronic address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganisationsPartyIdElectronicAddressesAddressIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressElectronicAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrganisationsPartyIdElectronicAddressesAddressIdRequest();
    $request->addressId = 'magni';
    $request->apiKey = 'assumenda';
    $request->electronicAddressInput = new ElectronicAddressInput();
    $request->electronicAddressInput->areaCode = '02';
    $request->electronicAddressInput->countryPrefix = '61';
    $request->electronicAddressInput->electronicAddressType = ElectronicAddressElectronicAddressTypeEnum::FAX;
    $request->electronicAddressInput->email = 'Caden.Pagac@gmail.com';
    $request->electronicAddressInput->extension = 'facilis';
    $request->electronicAddressInput->number = '62164453';
    $request->electronicAddressInput->url = 'tempore';
    $request->partyId = 'labore';

    $response = $sdk->organisationsElectronicAddresses->putOrganisationsPartyIdElectronicAddressesAddressId($request);

    if ($response->electronicAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

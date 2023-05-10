# individualsElectronicAddresses

## Overview

The registry maintains information about an individual's contact details for administrative purposes.

  Including:
  - an email address
  - a mobile number


### Available Operations

* [deleteIndividualsPartyIdElectronicAddressesAddressId](#deleteindividualspartyidelectronicaddressesaddressid) - Delete an electronic address
* [getIndividualsPartyIdElectronicAddresses](#getindividualspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [getIndividualsPartyIdElectronicAddressesAddressId](#getindividualspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [postIndividualsPartyIdElectronicAddresses](#postindividualspartyidelectronicaddresses) - Create an electronic address
* [putIndividualsPartyIdElectronicAddressesAddressId](#putindividualspartyidelectronicaddressesaddressid) - Update an electronic address

## deleteIndividualsPartyIdElectronicAddressesAddressId

Delete an electronic address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndividualsPartyIdElectronicAddressesAddressIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndividualsPartyIdElectronicAddressesAddressIdRequest();
    $request->addressId = 'hic';
    $request->apiKey = 'optio';
    $request->partyId = 'totam';

    $response = $sdk->individualsElectronicAddresses->deleteIndividualsPartyIdElectronicAddressesAddressId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdElectronicAddresses

Retrieve a list of electronic addresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdElectronicAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdElectronicAddressesRequest();
    $request->apiKey = 'beatae';
    $request->partyId = 'commodi';

    $response = $sdk->individualsElectronicAddresses->getIndividualsPartyIdElectronicAddresses($request);

    if ($response->electronicAddresses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdElectronicAddressesAddressId

Retrieve an electronic address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdElectronicAddressesAddressIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdElectronicAddressesAddressIdRequest();
    $request->addressId = 'molestiae';
    $request->apiKey = 'modi';
    $request->partyId = 'qui';

    $response = $sdk->individualsElectronicAddresses->getIndividualsPartyIdElectronicAddressesAddressId($request);

    if ($response->electronicAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIndividualsPartyIdElectronicAddresses

Create an electronic address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostIndividualsPartyIdElectronicAddressesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressElectronicAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostIndividualsPartyIdElectronicAddressesRequest();
    $request->apiKey = 'impedit';
    $request->electronicAddressInput = new ElectronicAddressInput();
    $request->electronicAddressInput->areaCode = '02';
    $request->electronicAddressInput->countryPrefix = '61';
    $request->electronicAddressInput->electronicAddressType = ElectronicAddressElectronicAddressTypeEnum::MOBILE;
    $request->electronicAddressInput->email = 'Cullen1@yahoo.com';
    $request->electronicAddressInput->extension = 'ad';
    $request->electronicAddressInput->number = '62164453';
    $request->electronicAddressInput->url = 'natus';
    $request->partyId = 'sed';

    $response = $sdk->individualsElectronicAddresses->postIndividualsPartyIdElectronicAddresses($request);

    if ($response->electronicAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putIndividualsPartyIdElectronicAddressesAddressId

Update an electronic address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutIndividualsPartyIdElectronicAddressesAddressIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressElectronicAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutIndividualsPartyIdElectronicAddressesAddressIdRequest();
    $request->addressId = 'iste';
    $request->apiKey = 'dolor';
    $request->electronicAddressInput = new ElectronicAddressInput();
    $request->electronicAddressInput->areaCode = '02';
    $request->electronicAddressInput->countryPrefix = '61';
    $request->electronicAddressInput->electronicAddressType = ElectronicAddressElectronicAddressTypeEnum::MOBILE;
    $request->electronicAddressInput->email = 'Tyra.Turcotte35@yahoo.com';
    $request->electronicAddressInput->extension = 'iste';
    $request->electronicAddressInput->number = '62164453';
    $request->electronicAddressInput->url = 'iure';
    $request->partyId = 'saepe';

    $response = $sdk->individualsElectronicAddresses->putIndividualsPartyIdElectronicAddressesAddressId($request);

    if ($response->electronicAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

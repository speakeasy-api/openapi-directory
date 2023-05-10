# individualsAddresses

## Overview

The registry maintains information about an individual's contact details for administrative purposes.

  Including:
  - an address for the service of documents
  - a principal place of business address


### Available Operations

* [deleteIndividualsPartyIdAddressesAddressId](#deleteindividualspartyidaddressesaddressid) - Delete an address
* [getIndividualsPartyIdAddresses](#getindividualspartyidaddresses) - Retrieve a list of addresses
* [getIndividualsPartyIdAddressesAddressId](#getindividualspartyidaddressesaddressid) - Retrieve an address
* [postIndividualsPartyIdAddresses](#postindividualspartyidaddresses) - Create an address
* [putIndividualsPartyIdAddressesAddressId](#putindividualspartyidaddressesaddressid) - Update an address

## deleteIndividualsPartyIdAddressesAddressId

Delete an address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndividualsPartyIdAddressesAddressIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndividualsPartyIdAddressesAddressIdRequest();
    $request->addressId = 'excepturi';
    $request->apiKey = 'nisi';
    $request->partyId = 'recusandae';

    $response = $sdk->individualsAddresses->deleteIndividualsPartyIdAddressesAddressId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdAddresses

Retrieve a list of addresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdAddressesRequest();
    $request->apiKey = 'temporibus';
    $request->partyId = 'ab';

    $response = $sdk->individualsAddresses->getIndividualsPartyIdAddresses($request);

    if ($response->addresses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdAddressesAddressId

Retrieve an address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdAddressesAddressIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdAddressesAddressIdRequest();
    $request->addressId = 'quis';
    $request->apiKey = 'veritatis';
    $request->partyId = 'deserunt';

    $response = $sdk->individualsAddresses->getIndividualsPartyIdAddressesAddressId($request);

    if ($response->address !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIndividualsPartyIdAddresses

Create an address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostIndividualsPartyIdAddressesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostIndividualsPartyIdAddressesRequest();
    $request->addressInput = new AddressInput();
    $request->addressInput->city = 'Canberra';
    $request->addressInput->country = 'Australia';
    $request->addressInput->line1 = 'Level 7';
    $request->addressInput->line2 = '21 Genge Street';
    $request->addressInput->line3 = 'perferendis';
    $request->addressInput->name = 'Kembery Building';
    $request->addressInput->postalCode = '2601';
    $request->addressInput->suburb = 'Civic';
    $request->apiKey = 'ipsam';
    $request->partyId = 'repellendus';

    $response = $sdk->individualsAddresses->postIndividualsPartyIdAddresses($request);

    if ($response->address !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putIndividualsPartyIdAddressesAddressId

Update an address


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutIndividualsPartyIdAddressesAddressIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutIndividualsPartyIdAddressesAddressIdRequest();
    $request->addressId = 'sapiente';
    $request->addressInput = new AddressInput();
    $request->addressInput->city = 'Canberra';
    $request->addressInput->country = 'Australia';
    $request->addressInput->line1 = 'Level 7';
    $request->addressInput->line2 = '21 Genge Street';
    $request->addressInput->line3 = 'quo';
    $request->addressInput->name = 'Kembery Building';
    $request->addressInput->postalCode = '2601';
    $request->addressInput->suburb = 'Civic';
    $request->apiKey = 'odit';
    $request->partyId = 'at';

    $response = $sdk->individualsAddresses->putIndividualsPartyIdAddressesAddressId($request);

    if ($response->address !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

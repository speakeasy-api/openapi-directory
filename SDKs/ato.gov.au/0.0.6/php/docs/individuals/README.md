# individuals

## Overview

An individual is a person about whom the registry wishes to maintain information.

  For example, the individual's date and place of birth (for the purposes of identification) and the individual's
  residential address (which is used for administrative purposes).


### Available Operations

* [deleteIndividualsPartyId](#deleteindividualspartyid) - Delete an individual
* [getIndividuals](#getindividuals) - Retrieve a list of individuals
* [getIndividualsPartyId](#getindividualspartyid) - Retrieve an individual
* [postIndividuals](#postindividuals) - Create an individual
* [putIndividualsPartyId](#putindividualspartyid) - Update an individual

## deleteIndividualsPartyId

Delete an individual with the specified identifier


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndividualsPartyIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndividualsPartyIdRequest();
    $request->apiKey = 'corrupti';
    $request->partyId = 'illum';

    $response = $sdk->individuals->deleteIndividualsPartyId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividuals

Retrieve a list of individuals


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsRequest();
    $request->apiKey = 'vel';
    $request->dateOfBirth = 'error';
    $request->placeOfBirth = 'deserunt';

    $response = $sdk->individuals->getIndividuals($request);

    if ($response->individuals !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyId

Retrieve an individual with the specified identifier


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdRequest();
    $request->apiKey = 'suscipit';
    $request->partyId = 'iure';

    $response = $sdk->individuals->getIndividualsPartyId($request);

    if ($response->individual !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIndividuals

Create an individual


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostIndividualsRequest;
use \OpenAPI\OpenAPI\Models\Shared\IndividualInput;
use \OpenAPI\OpenAPI\Models\Shared\IndividualAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\IndividualAddressAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressElectronicAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualNameInput;
use \OpenAPI\OpenAPI\Models\Shared\IndividualNameDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualNameNamePrefixEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualNameNameTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostIndividualsRequest();
    $request->apiKey = 'magnam';
    $request->individualInput = new IndividualInput();
    $request->individualInput->addresses = [
        new IndividualAddressInput(),
        new IndividualAddressInput(),
        new IndividualAddressInput(),
        new IndividualAddressInput(),
    ];
    $request->individualInput->dateOfBirth = DateTime::createFromFormat('Y-m-d', '1979-01-13');
    $request->individualInput->electronicAddresses = [
        new ElectronicAddressInput(),
    ];
    $request->individualInput->gender = IndividualGenderEnum::NOT_KNOWN;
    $request->individualInput->names = [
        new IndividualNameInput(),
        new IndividualNameInput(),
    ];
    $request->individualInput->placeOfBirth = 'Tamworth';

    $response = $sdk->individuals->postIndividuals($request);

    if ($response->individual !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putIndividualsPartyId

Update an individual


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutIndividualsPartyIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\IndividualInput;
use \OpenAPI\OpenAPI\Models\Shared\IndividualAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\IndividualAddressAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressElectronicAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualNameInput;
use \OpenAPI\OpenAPI\Models\Shared\IndividualNameDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualNameNamePrefixEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualNameNameTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutIndividualsPartyIdRequest();
    $request->apiKey = 'suscipit';
    $request->individualInput = new IndividualInput();
    $request->individualInput->addresses = [
        new IndividualAddressInput(),
        new IndividualAddressInput(),
    ];
    $request->individualInput->dateOfBirth = DateTime::createFromFormat('Y-m-d', '1979-01-13');
    $request->individualInput->electronicAddresses = [
        new ElectronicAddressInput(),
        new ElectronicAddressInput(),
        new ElectronicAddressInput(),
        new ElectronicAddressInput(),
    ];
    $request->individualInput->gender = IndividualGenderEnum::NOT_KNOWN;
    $request->individualInput->names = [
        new IndividualNameInput(),
        new IndividualNameInput(),
        new IndividualNameInput(),
    ];
    $request->individualInput->placeOfBirth = 'Tamworth';
    $request->partyId = 'iusto';

    $response = $sdk->individuals->putIndividualsPartyId($request);

    if ($response->individual !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

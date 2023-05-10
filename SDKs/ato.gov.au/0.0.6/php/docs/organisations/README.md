# organisations

## Overview

An organisation usually consists of a number of individuals or groups bound by a common purpose about whom the
registry wishes to maintain information.

  For example, the organisation's legal entity type (e.g., Incorporated Entity, Unincorporated Entity,
  Partnership or Joint Venture).


### Available Operations

* [deleteOrganisationsPartyId](#deleteorganisationspartyid) - Delete an organisation
* [getOrganisations](#getorganisations) - Retrieve a list of organisations
* [getOrganisationsPartyId](#getorganisationspartyid) - Retrieve an organisation
* [postOrganisations](#postorganisations) - Create an organisation
* [putOrganisationsPartyId](#putorganisationspartyid) - Update an organisation

## deleteOrganisationsPartyId

Delete an organisation with the specified identifier


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganisationsPartyIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganisationsPartyIdRequest();
    $request->apiKey = 'quo';
    $request->partyId = 'sequi';

    $response = $sdk->organisations->deleteOrganisationsPartyId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisations

Retrieve a list of organisations


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsRequest();
    $request->apiKey = 'tenetur';
    $request->identifier = 'ipsam';
    $request->registeredIdentifier = 'id';

    $response = $sdk->organisations->getOrganisations($request);

    if ($response->organisations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyId

Retrieve an organisation with the specified identifier


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdRequest();
    $request->apiKey = 'possimus';
    $request->partyId = 'aut';

    $response = $sdk->organisations->getOrganisationsPartyId($request);

    if ($response->organisation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrganisations

Create an organisation


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrganisationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationAddressAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressElectronicAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationLegalEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationNameInput;
use \OpenAPI\OpenAPI\Models\Shared\RegisteredIdentifierInput;
use \OpenAPI\OpenAPI\Models\Shared\RegisteredIdentifierIdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrganisationsRequest();
    $request->apiKey = 'quasi';
    $request->organisationInput = new OrganisationInput();
    $request->organisationInput->addresses = [
        new OrganisationAddressInput(),
        new OrganisationAddressInput(),
        new OrganisationAddressInput(),
    ];
    $request->organisationInput->electronicAddresses = [
        new ElectronicAddressInput(),
        new ElectronicAddressInput(),
        new ElectronicAddressInput(),
        new ElectronicAddressInput(),
    ];
    $request->organisationInput->establishmentDate = DateTime::createFromFormat('Y-m-d', '1928-03-03');
    $request->organisationInput->legalEntityType = OrganisationLegalEntityTypeEnum::TRUST;
    $request->organisationInput->names = [
        new OrganisationNameInput(),
    ];
    $request->organisationInput->registeredIdentifiers = [
        new RegisteredIdentifierInput(),
        new RegisteredIdentifierInput(),
        new RegisteredIdentifierInput(),
        new RegisteredIdentifierInput(),
    ];

    $response = $sdk->organisations->postOrganisations($request);

    if ($response->organisation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrganisationsPartyId

Update an organisation


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganisationsPartyIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationAddressAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ElectronicAddressElectronicAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationLegalEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganisationNameInput;
use \OpenAPI\OpenAPI\Models\Shared\RegisteredIdentifierInput;
use \OpenAPI\OpenAPI\Models\Shared\RegisteredIdentifierIdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrganisationsPartyIdRequest();
    $request->apiKey = 'voluptatibus';
    $request->organisationInput = new OrganisationInput();
    $request->organisationInput->addresses = [
        new OrganisationAddressInput(),
        new OrganisationAddressInput(),
        new OrganisationAddressInput(),
        new OrganisationAddressInput(),
    ];
    $request->organisationInput->electronicAddresses = [
        new ElectronicAddressInput(),
        new ElectronicAddressInput(),
    ];
    $request->organisationInput->establishmentDate = DateTime::createFromFormat('Y-m-d', '1928-03-03');
    $request->organisationInput->legalEntityType = OrganisationLegalEntityTypeEnum::TRUST;
    $request->organisationInput->names = [
        new OrganisationNameInput(),
        new OrganisationNameInput(),
        new OrganisationNameInput(),
        new OrganisationNameInput(),
    ];
    $request->organisationInput->registeredIdentifiers = [
        new RegisteredIdentifierInput(),
    ];
    $request->partyId = 'omnis';

    $response = $sdk->organisations->putOrganisationsPartyId($request);

    if ($response->organisation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# legalEntities

### Available Operations

* [getLegalEntitiesId](#getlegalentitiesid) - Get a legal entity
* [getLegalEntitiesIdBusinessLines](#getlegalentitiesidbusinesslines) - Get all business lines under a legal entity
* [patchLegalEntitiesId](#patchlegalentitiesid) - Update a legal entity
* [postLegalEntities](#postlegalentities) - Create a legal entity

## getLegalEntitiesId

Returns a legal entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegalEntitiesIdRequest();
    $request->id = 'd5fe9b90-c289-409b-bfe4-9a8d9cbf4863';

    $requestSecurity = new GetLegalEntitiesIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->legalEntities->getLegalEntitiesId($request, $requestSecurity);

    if ($response->legalEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLegalEntitiesIdBusinessLines

Returns the business lines owned by a legal entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdBusinessLinesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdBusinessLinesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegalEntitiesIdBusinessLinesRequest();
    $request->id = '3323f9b7-7f3a-4410-8674-ebf69280d1ba';

    $requestSecurity = new GetLegalEntitiesIdBusinessLinesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->legalEntities->getLegalEntitiesIdBusinessLines($request, $requestSecurity);

    if ($response->businessLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchLegalEntitiesId

Updates a legal entity.

 >To change the legal entity type, include only the new `type` in your request. To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchLegalEntitiesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\LegalEntityInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\LegalEntityAssociationInput;
use \OpenAPI\OpenAPI\Models\Shared\LegalEntityAssociationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualInput;
use \OpenAPI\OpenAPI\Models\Shared\BirthData;
use \OpenAPI\OpenAPI\Models\Shared\IdentificationData;
use \OpenAPI\OpenAPI\Models\Shared\IdentificationDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\WebDataInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\StockData;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationTaxIdAbsenceReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegalEntityInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchLegalEntitiesIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchLegalEntitiesIdRequest();
    $request->legalEntityInfoInput = new LegalEntityInfoInput();
    $request->legalEntityInfoInput->entityAssociations = [
        new LegalEntityAssociationInput(),
        new LegalEntityAssociationInput(),
    ];
    $request->legalEntityInfoInput->individual = new IndividualInput();
    $request->legalEntityInfoInput->individual->birthData = new BirthData();
    $request->legalEntityInfoInput->individual->birthData->dateOfBirth = 'voluptate';
    $request->legalEntityInfoInput->individual->email = 'Kaitlin_Mohr99@hotmail.com';
    $request->legalEntityInfoInput->individual->identificationData = new IdentificationData();
    $request->legalEntityInfoInput->individual->identificationData->cardNumber = 'nihil';
    $request->legalEntityInfoInput->individual->identificationData->expiryDate = 'ipsum';
    $request->legalEntityInfoInput->individual->identificationData->issuerCountry = 'voluptate';
    $request->legalEntityInfoInput->individual->identificationData->issuerState = 'id';
    $request->legalEntityInfoInput->individual->identificationData->nationalIdExempt = false;
    $request->legalEntityInfoInput->individual->identificationData->number = 'saepe';
    $request->legalEntityInfoInput->individual->identificationData->type = IdentificationDataTypeEnum::IDENTITY_CARD;
    $request->legalEntityInfoInput->individual->name = new Name();
    $request->legalEntityInfoInput->individual->name->firstName = 'Brigitte';
    $request->legalEntityInfoInput->individual->name->infix = 'perferendis';
    $request->legalEntityInfoInput->individual->name->lastName = 'Fay';
    $request->legalEntityInfoInput->individual->nationality = 'optio';
    $request->legalEntityInfoInput->individual->phone = new PhoneNumber();
    $request->legalEntityInfoInput->individual->phone->countryCode = 'TK';
    $request->legalEntityInfoInput->individual->phone->number = 'ad';
    $request->legalEntityInfoInput->individual->phone->type = 'saepe';
    $request->legalEntityInfoInput->individual->residentialAddress = new Address();
    $request->legalEntityInfoInput->individual->residentialAddress->city = 'Lake Ladarius';
    $request->legalEntityInfoInput->individual->residentialAddress->country = 'Ghana';
    $request->legalEntityInfoInput->individual->residentialAddress->postalCode = '56083-2478';
    $request->legalEntityInfoInput->individual->residentialAddress->stateOrProvince = 'qui';
    $request->legalEntityInfoInput->individual->residentialAddress->street = '946 Cruz Shores';
    $request->legalEntityInfoInput->individual->residentialAddress->street2 = 'tenetur';
    $request->legalEntityInfoInput->individual->webData = new WebDataInput();
    $request->legalEntityInfoInput->individual->webData->webAddress = 'amet';
    $request->legalEntityInfoInput->organization = new OrganizationInput();
    $request->legalEntityInfoInput->organization->description = 'tempore';
    $request->legalEntityInfoInput->organization->doingBusinessAs = 'accusamus';
    $request->legalEntityInfoInput->organization->email = 'Elza_Effertz47@gmail.com';
    $request->legalEntityInfoInput->organization->legalName = 'sit';
    $request->legalEntityInfoInput->organization->phone = new PhoneNumber();
    $request->legalEntityInfoInput->organization->phone->countryCode = 'PK';
    $request->legalEntityInfoInput->organization->phone->number = 'neque';
    $request->legalEntityInfoInput->organization->phone->type = 'sed';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness = new Address();
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->city = 'Moriahbury';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->country = 'Niger';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->postalCode = '22158';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->stateOrProvince = 'pariatur';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->street = '165 Brendon Dale';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->street2 = 'distinctio';
    $request->legalEntityInfoInput->organization->registeredAddress = new Address();
    $request->legalEntityInfoInput->organization->registeredAddress->city = 'Hyattport';
    $request->legalEntityInfoInput->organization->registeredAddress->country = 'Mauritius';
    $request->legalEntityInfoInput->organization->registeredAddress->postalCode = '12114-1379';
    $request->legalEntityInfoInput->organization->registeredAddress->stateOrProvince = 'voluptatem';
    $request->legalEntityInfoInput->organization->registeredAddress->street = '770 Emmerich Circles';
    $request->legalEntityInfoInput->organization->registeredAddress->street2 = 'nobis';
    $request->legalEntityInfoInput->organization->registrationNumber = 'quos';
    $request->legalEntityInfoInput->organization->stockData = new StockData();
    $request->legalEntityInfoInput->organization->stockData->marketIdentifier = 'tempore';
    $request->legalEntityInfoInput->organization->stockData->stockNumber = 'cupiditate';
    $request->legalEntityInfoInput->organization->stockData->tickerSymbol = 'aperiam';
    $request->legalEntityInfoInput->organization->taxExempt = false;
    $request->legalEntityInfoInput->organization->taxId = 'delectus';
    $request->legalEntityInfoInput->organization->taxIdAbsenceReason = OrganizationTaxIdAbsenceReasonEnum::INDUSTRY_EXEMPTION;
    $request->legalEntityInfoInput->organization->type = OrganizationTypeEnum::GOVERNMENTAL_ORGANIZATION;
    $request->legalEntityInfoInput->organization->webData = new WebDataInput();
    $request->legalEntityInfoInput->organization->webData->webAddress = 'labore';
    $request->legalEntityInfoInput->reference = 'adipisci';
    $request->legalEntityInfoInput->type = LegalEntityInfoTypeEnum::ORGANIZATION;
    $request->id = '1108e0ad-cf4b-4921-879f-ce953f73ef7f';

    $requestSecurity = new PatchLegalEntitiesIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->legalEntities->patchLegalEntitiesId($request, $requestSecurity);

    if ($response->legalEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLegalEntities

Creates a legal entity. 

This resource contains information about the user that will be onboarded in your platform. Adyen uses this information to perform verification checks as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses. 

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\LegalEntityInfoRequiredTypeInput;
use \OpenAPI\OpenAPI\Models\Shared\LegalEntityAssociationInput;
use \OpenAPI\OpenAPI\Models\Shared\LegalEntityAssociationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndividualInput;
use \OpenAPI\OpenAPI\Models\Shared\BirthData;
use \OpenAPI\OpenAPI\Models\Shared\IdentificationData;
use \OpenAPI\OpenAPI\Models\Shared\IdentificationDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\WebDataInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\StockData;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationTaxIdAbsenceReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegalEntityInfoRequiredTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegalEntityInfoRequiredTypeInput();
    $request->entityAssociations = [
        new LegalEntityAssociationInput(),
        new LegalEntityAssociationInput(),
        new LegalEntityAssociationInput(),
    ];
    $request->individual = new IndividualInput();
    $request->individual->birthData = new BirthData();
    $request->individual->birthData->dateOfBirth = 'quod';
    $request->individual->email = 'Lon.Quitzon29@yahoo.com';
    $request->individual->identificationData = new IdentificationData();
    $request->individual->identificationData->cardNumber = 'quibusdam';
    $request->individual->identificationData->expiryDate = 'illum';
    $request->individual->identificationData->issuerCountry = 'sequi';
    $request->individual->identificationData->issuerState = 'natus';
    $request->individual->identificationData->nationalIdExempt = false;
    $request->individual->identificationData->number = 'impedit';
    $request->individual->identificationData->type = IdentificationDataTypeEnum::BANK_STATEMENT;
    $request->individual->name = new Name();
    $request->individual->name->firstName = 'Webster';
    $request->individual->name->infix = 'exercitationem';
    $request->individual->name->lastName = 'Stoltenberg';
    $request->individual->nationality = 'fugit';
    $request->individual->phone = new PhoneNumber();
    $request->individual->phone->countryCode = 'SC';
    $request->individual->phone->number = 'maiores';
    $request->individual->phone->type = 'doloribus';
    $request->individual->residentialAddress = new Address();
    $request->individual->residentialAddress->city = 'Nickmouth';
    $request->individual->residentialAddress->country = 'Afghanistan';
    $request->individual->residentialAddress->postalCode = '23414-8214';
    $request->individual->residentialAddress->stateOrProvince = 'laudantium';
    $request->individual->residentialAddress->street = '29048 Wiza Grove';
    $request->individual->residentialAddress->street2 = 'sapiente';
    $request->individual->webData = new WebDataInput();
    $request->individual->webData->webAddress = 'quisquam';
    $request->organization = new OrganizationInput();
    $request->organization->description = 'saepe';
    $request->organization->doingBusinessAs = 'ea';
    $request->organization->email = 'Flossie.Hartmann@hotmail.com';
    $request->organization->legalName = 'magnam';
    $request->organization->phone = new PhoneNumber();
    $request->organization->phone->countryCode = 'IE';
    $request->organization->phone->number = 'quo';
    $request->organization->phone->type = 'consectetur';
    $request->organization->principalPlaceOfBusiness = new Address();
    $request->organization->principalPlaceOfBusiness->city = 'Camarillo';
    $request->organization->principalPlaceOfBusiness->country = 'Ghana';
    $request->organization->principalPlaceOfBusiness->postalCode = '97005';
    $request->organization->principalPlaceOfBusiness->stateOrProvince = 'impedit';
    $request->organization->principalPlaceOfBusiness->street = '18020 Osinski Spurs';
    $request->organization->principalPlaceOfBusiness->street2 = 'velit';
    $request->organization->registeredAddress = new Address();
    $request->organization->registeredAddress->city = 'Helenfort';
    $request->organization->registeredAddress->country = 'Martinique';
    $request->organization->registeredAddress->postalCode = '83702-2150';
    $request->organization->registeredAddress->stateOrProvince = 'molestiae';
    $request->organization->registeredAddress->street = '42445 Kihn Radial';
    $request->organization->registeredAddress->street2 = 'fugiat';
    $request->organization->registrationNumber = 'ut';
    $request->organization->stockData = new StockData();
    $request->organization->stockData->marketIdentifier = 'eum';
    $request->organization->stockData->stockNumber = 'suscipit';
    $request->organization->stockData->tickerSymbol = 'assumenda';
    $request->organization->taxExempt = false;
    $request->organization->taxId = 'eos';
    $request->organization->taxIdAbsenceReason = OrganizationTaxIdAbsenceReasonEnum::BELOW_TAX_THRESHOLD;
    $request->organization->type = OrganizationTypeEnum::PARTNERSHIP_INCORPORATED;
    $request->organization->webData = new WebDataInput();
    $request->organization->webData->webAddress = 'veritatis';
    $request->reference = 'ipsa';
    $request->type = LegalEntityInfoRequiredTypeTypeEnum::ORGANIZATION;

    $requestSecurity = new PostLegalEntitiesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->legalEntities->postLegalEntities($request, $requestSecurity);

    if ($response->legalEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

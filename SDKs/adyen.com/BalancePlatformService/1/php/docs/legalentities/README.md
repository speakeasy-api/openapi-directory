# legalEntities

### Available Operations

* [getLegalEntitiesId](#getlegalentitiesid) - Get a legal entity
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
    $request->id = 'cbb1e31b-8b90-4f34-83a1-108e0adcf4b9';

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
use \OpenAPI\OpenAPI\Models\Shared\Name3;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber2;
use \OpenAPI\OpenAPI\Models\Shared\Address3;
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
    ];
    $request->legalEntityInfoInput->individual = new IndividualInput();
    $request->legalEntityInfoInput->individual->birthData = new BirthData();
    $request->legalEntityInfoInput->individual->birthData->dateOfBirth = 'quae';
    $request->legalEntityInfoInput->individual->email = 'Jeanette_McClure87@yahoo.com';
    $request->legalEntityInfoInput->individual->identificationData = new IdentificationData();
    $request->legalEntityInfoInput->individual->identificationData->cardNumber = 'omnis';
    $request->legalEntityInfoInput->individual->identificationData->expiryDate = 'quis';
    $request->legalEntityInfoInput->individual->identificationData->issuerCountry = 'ipsum';
    $request->legalEntityInfoInput->individual->identificationData->issuerState = 'delectus';
    $request->legalEntityInfoInput->individual->identificationData->nationalIdExempt = false;
    $request->legalEntityInfoInput->individual->identificationData->number = 'voluptate';
    $request->legalEntityInfoInput->individual->identificationData->type = IdentificationDataTypeEnum::IDENTITY_CARD;
    $request->legalEntityInfoInput->individual->name = new Name3();
    $request->legalEntityInfoInput->individual->name->firstName = 'Shana';
    $request->legalEntityInfoInput->individual->name->infix = 'tenetur';
    $request->legalEntityInfoInput->individual->name->lastName = 'Kulas';
    $request->legalEntityInfoInput->individual->nationality = 'hic';
    $request->legalEntityInfoInput->individual->phone = new PhoneNumber2();
    $request->legalEntityInfoInput->individual->phone->countryCode = 'PL';
    $request->legalEntityInfoInput->individual->phone->number = 'quod';
    $request->legalEntityInfoInput->individual->phone->type = 'odio';
    $request->legalEntityInfoInput->individual->residentialAddress = new Address3();
    $request->legalEntityInfoInput->individual->residentialAddress->city = 'Quitzonside';
    $request->legalEntityInfoInput->individual->residentialAddress->country = 'Liberia';
    $request->legalEntityInfoInput->individual->residentialAddress->postalCode = '88167';
    $request->legalEntityInfoInput->individual->residentialAddress->stateOrProvince = 'aut';
    $request->legalEntityInfoInput->individual->residentialAddress->street = '381 Wunsch Ways';
    $request->legalEntityInfoInput->individual->residentialAddress->street2 = 'iusto';
    $request->legalEntityInfoInput->individual->webData = new WebDataInput();
    $request->legalEntityInfoInput->individual->webData->webAddress = 'eligendi';
    $request->legalEntityInfoInput->organization = new OrganizationInput();
    $request->legalEntityInfoInput->organization->description = 'ducimus';
    $request->legalEntityInfoInput->organization->doingBusinessAs = 'alias';
    $request->legalEntityInfoInput->organization->email = 'Domingo.Hills@yahoo.com';
    $request->legalEntityInfoInput->organization->legalName = 'vel';
    $request->legalEntityInfoInput->organization->phone = new PhoneNumber2();
    $request->legalEntityInfoInput->organization->phone->countryCode = 'SN';
    $request->legalEntityInfoInput->organization->phone->number = 'magnam';
    $request->legalEntityInfoInput->organization->phone->type = 'ratione';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness = new Address3();
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->city = 'Johnpaulland';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->country = 'Cyprus';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->postalCode = '04859-3979';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->stateOrProvince = 'ea';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->street = '333 Elissa Islands';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->street2 = 'quo';
    $request->legalEntityInfoInput->organization->registeredAddress = new Address3();
    $request->legalEntityInfoInput->organization->registeredAddress->city = 'Fort Brennan';
    $request->legalEntityInfoInput->organization->registeredAddress->country = 'Ghana';
    $request->legalEntityInfoInput->organization->registeredAddress->postalCode = '97005';
    $request->legalEntityInfoInput->organization->registeredAddress->stateOrProvince = 'impedit';
    $request->legalEntityInfoInput->organization->registeredAddress->street = '18020 Osinski Spurs';
    $request->legalEntityInfoInput->organization->registeredAddress->street2 = 'velit';
    $request->legalEntityInfoInput->organization->registrationNumber = 'eum';
    $request->legalEntityInfoInput->organization->stockData = new StockData();
    $request->legalEntityInfoInput->organization->stockData->marketIdentifier = 'autem';
    $request->legalEntityInfoInput->organization->stockData->stockNumber = 'nobis';
    $request->legalEntityInfoInput->organization->stockData->tickerSymbol = 'quas';
    $request->legalEntityInfoInput->organization->taxExempt = false;
    $request->legalEntityInfoInput->organization->taxId = 'assumenda';
    $request->legalEntityInfoInput->organization->taxIdAbsenceReason = OrganizationTaxIdAbsenceReasonEnum::BELOW_TAX_THRESHOLD;
    $request->legalEntityInfoInput->organization->type = OrganizationTypeEnum::LISTED_PUBLIC_COMPANY;
    $request->legalEntityInfoInput->organization->webData = new WebDataInput();
    $request->legalEntityInfoInput->organization->webData->webAddress = 'libero';
    $request->legalEntityInfoInput->reference = 'quasi';
    $request->legalEntityInfoInput->type = LegalEntityInfoTypeEnum::INDIVIDUAL;
    $request->id = '42907474-778a-47bd-866d-28c10ab3cdca';

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
use \OpenAPI\OpenAPI\Models\Shared\Name3;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber2;
use \OpenAPI\OpenAPI\Models\Shared\Address3;
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
    ];
    $request->individual = new IndividualInput();
    $request->individual->birthData = new BirthData();
    $request->individual->birthData->dateOfBirth = 'eos';
    $request->individual->email = 'Ansley27@yahoo.com';
    $request->individual->identificationData = new IdentificationData();
    $request->individual->identificationData->cardNumber = 'debitis';
    $request->individual->identificationData->expiryDate = 'ipsam';
    $request->individual->identificationData->issuerCountry = 'aspernatur';
    $request->individual->identificationData->issuerState = 'sequi';
    $request->individual->identificationData->nationalIdExempt = false;
    $request->individual->identificationData->number = 'quo';
    $request->individual->identificationData->type = IdentificationDataTypeEnum::PROOF_OF_ADDRESS;
    $request->individual->name = new Name3();
    $request->individual->name->firstName = 'Tiana';
    $request->individual->name->infix = 'aperiam';
    $request->individual->name->lastName = 'Rau';
    $request->individual->nationality = 'quod';
    $request->individual->phone = new PhoneNumber2();
    $request->individual->phone->countryCode = 'KW';
    $request->individual->phone->number = 'inventore';
    $request->individual->phone->type = 'nihil';
    $request->individual->residentialAddress = new Address3();
    $request->individual->residentialAddress->city = 'Shanyborough';
    $request->individual->residentialAddress->country = 'Lebanon';
    $request->individual->residentialAddress->postalCode = '49164-0745';
    $request->individual->residentialAddress->stateOrProvince = 'praesentium';
    $request->individual->residentialAddress->street = '51662 Champlin Glen';
    $request->individual->residentialAddress->street2 = 'nisi';
    $request->individual->webData = new WebDataInput();
    $request->individual->webData->webAddress = 'fugit';
    $request->organization = new OrganizationInput();
    $request->organization->description = 'sapiente';
    $request->organization->doingBusinessAs = 'consequuntur';
    $request->organization->email = 'Braxton_Turner@gmail.com';
    $request->organization->legalName = 'et';
    $request->organization->phone = new PhoneNumber2();
    $request->organization->phone->countryCode = 'JP';
    $request->organization->phone->number = 'eveniet';
    $request->organization->phone->type = 'accusamus';
    $request->organization->principalPlaceOfBusiness = new Address3();
    $request->organization->principalPlaceOfBusiness->city = 'South Preciouscester';
    $request->organization->principalPlaceOfBusiness->country = 'Tanzania';
    $request->organization->principalPlaceOfBusiness->postalCode = '09464';
    $request->organization->principalPlaceOfBusiness->stateOrProvince = 'rerum';
    $request->organization->principalPlaceOfBusiness->street = '3770 Renner Ferry';
    $request->organization->principalPlaceOfBusiness->street2 = 'cumque';
    $request->organization->registeredAddress = new Address3();
    $request->organization->registeredAddress->city = 'North Peytonborough';
    $request->organization->registeredAddress->country = 'Vanuatu';
    $request->organization->registeredAddress->postalCode = '45598';
    $request->organization->registeredAddress->stateOrProvince = 'quas';
    $request->organization->registeredAddress->street = '0965 Schuster Crest';
    $request->organization->registeredAddress->street2 = 'eveniet';
    $request->organization->registrationNumber = 'asperiores';
    $request->organization->stockData = new StockData();
    $request->organization->stockData->marketIdentifier = 'facere';
    $request->organization->stockData->stockNumber = 'veritatis';
    $request->organization->stockData->tickerSymbol = 'consequuntur';
    $request->organization->taxExempt = false;
    $request->organization->taxId = 'quasi';
    $request->organization->taxIdAbsenceReason = OrganizationTaxIdAbsenceReasonEnum::BELOW_TAX_THRESHOLD;
    $request->organization->type = OrganizationTypeEnum::NON_PROFIT;
    $request->organization->webData = new WebDataInput();
    $request->organization->webData->webAddress = 'aliquid';
    $request->reference = 'tenetur';
    $request->type = LegalEntityInfoRequiredTypeTypeEnum::INDIVIDUAL;

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

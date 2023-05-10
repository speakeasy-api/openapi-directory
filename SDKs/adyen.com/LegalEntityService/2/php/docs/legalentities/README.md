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
    $request->id = '4100674e-bf69-4280-91ba-77a89ebf737a';

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
    $request->id = 'e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c';

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
use \OpenAPI\OpenAPI\Models\Shared\TaxInformation;
use \OpenAPI\OpenAPI\Models\Shared\WebDataInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\StockData;
use \OpenAPI\OpenAPI\Models\Shared\TaxReportingClassification;
use \OpenAPI\OpenAPI\Models\Shared\TaxReportingClassificationBusinessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxReportingClassificationMainSourceOfIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxReportingClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationVatAbsenceReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\SoleProprietorship;
use \OpenAPI\OpenAPI\Models\Shared\SoleProprietorshipVatAbsenceReasonEnum;
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
        new LegalEntityAssociationInput(),
        new LegalEntityAssociationInput(),
    ];
    $request->legalEntityInfoInput->individual = new IndividualInput();
    $request->legalEntityInfoInput->individual->birthData = new BirthData();
    $request->legalEntityInfoInput->individual->birthData->dateOfBirth = 'amet';
    $request->legalEntityInfoInput->individual->email = 'Shania21@hotmail.com';
    $request->legalEntityInfoInput->individual->identificationData = new IdentificationData();
    $request->legalEntityInfoInput->individual->identificationData->cardNumber = 'sapiente';
    $request->legalEntityInfoInput->individual->identificationData->expiryDate = 'totam';
    $request->legalEntityInfoInput->individual->identificationData->issuerCountry = 'nihil';
    $request->legalEntityInfoInput->individual->identificationData->issuerState = 'sit';
    $request->legalEntityInfoInput->individual->identificationData->nationalIdExempt = false;
    $request->legalEntityInfoInput->individual->identificationData->number = 'expedita';
    $request->legalEntityInfoInput->individual->identificationData->type = IdentificationDataTypeEnum::IDENTITY_CARD;
    $request->legalEntityInfoInput->individual->name = new Name();
    $request->legalEntityInfoInput->individual->name->firstName = 'Candida';
    $request->legalEntityInfoInput->individual->name->infix = 'vel';
    $request->legalEntityInfoInput->individual->name->lastName = 'Renner';
    $request->legalEntityInfoInput->individual->nationality = 'voluptas';
    $request->legalEntityInfoInput->individual->phone = new PhoneNumber();
    $request->legalEntityInfoInput->individual->phone->number = 'deserunt';
    $request->legalEntityInfoInput->individual->phone->type = 'quam';
    $request->legalEntityInfoInput->individual->residentialAddress = new Address();
    $request->legalEntityInfoInput->individual->residentialAddress->city = 'West Chyna';
    $request->legalEntityInfoInput->individual->residentialAddress->country = 'Mongolia';
    $request->legalEntityInfoInput->individual->residentialAddress->postalCode = '87165-2117';
    $request->legalEntityInfoInput->individual->residentialAddress->stateOrProvince = 'facilis';
    $request->legalEntityInfoInput->individual->residentialAddress->street = '4581 Burdette Crossroad';
    $request->legalEntityInfoInput->individual->residentialAddress->street2 = 'odio';
    $request->legalEntityInfoInput->individual->taxInformation = [
        new TaxInformation(),
    ];
    $request->legalEntityInfoInput->individual->webData = new WebDataInput();
    $request->legalEntityInfoInput->individual->webData->webAddress = 'ullam';
    $request->legalEntityInfoInput->organization = new OrganizationInput();
    $request->legalEntityInfoInput->organization->dateOfIncorporation = 'nam';
    $request->legalEntityInfoInput->organization->description = 'hic';
    $request->legalEntityInfoInput->organization->doingBusinessAs = 'voluptatem';
    $request->legalEntityInfoInput->organization->email = 'Ned90@hotmail.com';
    $request->legalEntityInfoInput->organization->legalName = 'ipsum';
    $request->legalEntityInfoInput->organization->phone = new PhoneNumber();
    $request->legalEntityInfoInput->organization->phone->number = 'veritatis';
    $request->legalEntityInfoInput->organization->phone->type = 'nobis';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness = new Address();
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->city = 'Mosestead';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->country = 'Aruba';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->postalCode = '22226-1005';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->stateOrProvince = 'itaque';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->street = '68792 McGlynn Dam';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->street2 = 'quae';
    $request->legalEntityInfoInput->organization->registeredAddress = new Address();
    $request->legalEntityInfoInput->organization->registeredAddress->city = 'Jeanettestead';
    $request->legalEntityInfoInput->organization->registeredAddress->country = 'Virgin Islands, U.S.';
    $request->legalEntityInfoInput->organization->registeredAddress->postalCode = '86329-4289';
    $request->legalEntityInfoInput->organization->registeredAddress->stateOrProvince = 'dignissimos';
    $request->legalEntityInfoInput->organization->registeredAddress->street = '774 Quitzon Track';
    $request->legalEntityInfoInput->organization->registeredAddress->street2 = 'ducimus';
    $request->legalEntityInfoInput->organization->registrationNumber = 'dolore';
    $request->legalEntityInfoInput->organization->stockData = new StockData();
    $request->legalEntityInfoInput->organization->stockData->marketIdentifier = 'quibusdam';
    $request->legalEntityInfoInput->organization->stockData->stockNumber = 'illum';
    $request->legalEntityInfoInput->organization->stockData->tickerSymbol = 'sequi';
    $request->legalEntityInfoInput->organization->taxInformation = [
        new TaxInformation(),
        new TaxInformation(),
        new TaxInformation(),
    ];
    $request->legalEntityInfoInput->organization->taxReportingClassification = new TaxReportingClassification();
    $request->legalEntityInfoInput->organization->taxReportingClassification->businessType = TaxReportingClassificationBusinessTypeEnum::INTERNATIONAL_ORGANIZATION;
    $request->legalEntityInfoInput->organization->taxReportingClassification->financialInstitutionNumber = 'aut';
    $request->legalEntityInfoInput->organization->taxReportingClassification->mainSourceOfIncome = TaxReportingClassificationMainSourceOfIncomeEnum::OTHER;
    $request->legalEntityInfoInput->organization->taxReportingClassification->type = TaxReportingClassificationTypeEnum::FINANCIAL_NON_REPORTABLE;
    $request->legalEntityInfoInput->organization->type = OrganizationTypeEnum::PRIVATE_COMPANY;
    $request->legalEntityInfoInput->organization->vatAbsenceReason = OrganizationVatAbsenceReasonEnum::INDUSTRY_EXEMPTION;
    $request->legalEntityInfoInput->organization->vatNumber = 'porro';
    $request->legalEntityInfoInput->organization->webData = new WebDataInput();
    $request->legalEntityInfoInput->organization->webData->webAddress = 'maiores';
    $request->legalEntityInfoInput->reference = 'doloribus';
    $request->legalEntityInfoInput->soleProprietorship = new SoleProprietorship();
    $request->legalEntityInfoInput->soleProprietorship->countryOfGoverningLaw = 'iusto';
    $request->legalEntityInfoInput->soleProprietorship->dateOfIncorporation = 'eligendi';
    $request->legalEntityInfoInput->soleProprietorship->doingBusinessAs = 'ducimus';
    $request->legalEntityInfoInput->soleProprietorship->name = 'Brandi Glover';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness = new Address();
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->city = 'South Reinholdboro';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->country = 'Colombia';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->postalCode = '51290';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->stateOrProvince = 'ex';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->street = '593 Schamberger Union';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->street2 = 'ea';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress = new Address();
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->city = 'Herzogborough';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->country = 'Iceland';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->postalCode = '34729';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->stateOrProvince = 'aspernatur';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->street = '09700 Russel Freeway';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->street2 = 'fugit';
    $request->legalEntityInfoInput->soleProprietorship->registrationNumber = 'accusamus';
    $request->legalEntityInfoInput->soleProprietorship->vatAbsenceReason = SoleProprietorshipVatAbsenceReasonEnum::INDUSTRY_EXEMPTION;
    $request->legalEntityInfoInput->soleProprietorship->vatNumber = 'non';
    $request->legalEntityInfoInput->type = LegalEntityInfoTypeEnum::INDIVIDUAL;
    $request->id = 'aac366c8-dd6b-4144-a907-474778a7bd46';

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
use \OpenAPI\OpenAPI\Models\Shared\TaxInformation;
use \OpenAPI\OpenAPI\Models\Shared\WebDataInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\StockData;
use \OpenAPI\OpenAPI\Models\Shared\TaxReportingClassification;
use \OpenAPI\OpenAPI\Models\Shared\TaxReportingClassificationBusinessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxReportingClassificationMainSourceOfIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxReportingClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationVatAbsenceReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\SoleProprietorship;
use \OpenAPI\OpenAPI\Models\Shared\SoleProprietorshipVatAbsenceReasonEnum;
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
    $request->individual->birthData->dateOfBirth = 'assumenda';
    $request->individual->email = 'Johathan5@gmail.com';
    $request->individual->identificationData = new IdentificationData();
    $request->individual->identificationData->cardNumber = 'id';
    $request->individual->identificationData->expiryDate = 'quidem';
    $request->individual->identificationData->issuerCountry = 'neque';
    $request->individual->identificationData->issuerState = 'quo';
    $request->individual->identificationData->nationalIdExempt = false;
    $request->individual->identificationData->number = 'illum';
    $request->individual->identificationData->type = IdentificationDataTypeEnum::PROOF_OF_ORGANIZATION_TAX_INFO;
    $request->individual->name = new Name();
    $request->individual->name->firstName = 'Marion';
    $request->individual->name->infix = 'eius';
    $request->individual->name->lastName = 'Daugherty';
    $request->individual->nationality = 'voluptas';
    $request->individual->phone = new PhoneNumber();
    $request->individual->phone->number = 'ab';
    $request->individual->phone->type = 'cupiditate';
    $request->individual->residentialAddress = new Address();
    $request->individual->residentialAddress->city = 'West Simeonbury';
    $request->individual->residentialAddress->country = 'Bulgaria';
    $request->individual->residentialAddress->postalCode = '74907';
    $request->individual->residentialAddress->stateOrProvince = 'quod';
    $request->individual->residentialAddress->street = '0458 Jeffery Neck';
    $request->individual->residentialAddress->street2 = 'commodi';
    $request->individual->taxInformation = [
        new TaxInformation(),
        new TaxInformation(),
        new TaxInformation(),
        new TaxInformation(),
    ];
    $request->individual->webData = new WebDataInput();
    $request->individual->webData->webAddress = 'dolores';
    $request->organization = new OrganizationInput();
    $request->organization->dateOfIncorporation = 'deserunt';
    $request->organization->description = 'molestiae';
    $request->organization->doingBusinessAs = 'accusantium';
    $request->organization->email = 'Hipolito.Lynch@hotmail.com';
    $request->organization->legalName = 'deleniti';
    $request->organization->phone = new PhoneNumber();
    $request->organization->phone->number = 'fugit';
    $request->organization->phone->type = 'fuga';
    $request->organization->principalPlaceOfBusiness = new Address();
    $request->organization->principalPlaceOfBusiness->city = 'Gottliebstad';
    $request->organization->principalPlaceOfBusiness->country = 'Brunei Darussalam';
    $request->organization->principalPlaceOfBusiness->postalCode = '31911';
    $request->organization->principalPlaceOfBusiness->stateOrProvince = 'explicabo';
    $request->organization->principalPlaceOfBusiness->street = '550 Talon Trafficway';
    $request->organization->principalPlaceOfBusiness->street2 = 'veritatis';
    $request->organization->registeredAddress = new Address();
    $request->organization->registeredAddress->city = 'Preciouscester';
    $request->organization->registeredAddress->country = 'Tanzania';
    $request->organization->registeredAddress->postalCode = '09464';
    $request->organization->registeredAddress->stateOrProvince = 'rerum';
    $request->organization->registeredAddress->street = '3770 Renner Ferry';
    $request->organization->registeredAddress->street2 = 'cumque';
    $request->organization->registrationNumber = 'consequuntur';
    $request->organization->stockData = new StockData();
    $request->organization->stockData->marketIdentifier = 'consequatur';
    $request->organization->stockData->stockNumber = 'minus';
    $request->organization->stockData->tickerSymbol = 'quaerat';
    $request->organization->taxInformation = [
        new TaxInformation(),
        new TaxInformation(),
        new TaxInformation(),
        new TaxInformation(),
    ];
    $request->organization->taxReportingClassification = new TaxReportingClassification();
    $request->organization->taxReportingClassification->businessType = TaxReportingClassificationBusinessTypeEnum::LISTED_PUBLIC_COMPANY;
    $request->organization->taxReportingClassification->financialInstitutionNumber = 'esse';
    $request->organization->taxReportingClassification->mainSourceOfIncome = TaxReportingClassificationMainSourceOfIncomeEnum::INVESTMENT_INTEREST_OR_ROYALTY;
    $request->organization->taxReportingClassification->type = TaxReportingClassificationTypeEnum::NON_FINANCIAL_ACTIVE;
    $request->organization->type = OrganizationTypeEnum::PRIVATE_COMPANY;
    $request->organization->vatAbsenceReason = OrganizationVatAbsenceReasonEnum::BELOW_TAX_THRESHOLD;
    $request->organization->vatNumber = 'quas';
    $request->organization->webData = new WebDataInput();
    $request->organization->webData->webAddress = 'esse';
    $request->reference = 'quasi';
    $request->soleProprietorship = new SoleProprietorship();
    $request->soleProprietorship->countryOfGoverningLaw = 'a';
    $request->soleProprietorship->dateOfIncorporation = 'error';
    $request->soleProprietorship->doingBusinessAs = 'sint';
    $request->soleProprietorship->name = 'Rufus Crona';
    $request->soleProprietorship->principalPlaceOfBusiness = new Address();
    $request->soleProprietorship->principalPlaceOfBusiness->city = 'Birmingham';
    $request->soleProprietorship->principalPlaceOfBusiness->country = 'Cape Verde';
    $request->soleProprietorship->principalPlaceOfBusiness->postalCode = '66390';
    $request->soleProprietorship->principalPlaceOfBusiness->stateOrProvince = 'earum';
    $request->soleProprietorship->principalPlaceOfBusiness->street = '4278 Bartoletti Freeway';
    $request->soleProprietorship->principalPlaceOfBusiness->street2 = 'sapiente';
    $request->soleProprietorship->registeredAddress = new Address();
    $request->soleProprietorship->registeredAddress->city = 'West Inesbury';
    $request->soleProprietorship->registeredAddress->country = 'Hong Kong';
    $request->soleProprietorship->registeredAddress->postalCode = '51845';
    $request->soleProprietorship->registeredAddress->stateOrProvince = 'itaque';
    $request->soleProprietorship->registeredAddress->street = '069 Santino Cliff';
    $request->soleProprietorship->registeredAddress->street2 = 'voluptate';
    $request->soleProprietorship->registrationNumber = 'ipsa';
    $request->soleProprietorship->vatAbsenceReason = SoleProprietorshipVatAbsenceReasonEnum::INDUSTRY_EXEMPTION;
    $request->soleProprietorship->vatNumber = 'veritatis';
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

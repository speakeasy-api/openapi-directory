# legalEntities

### Available Operations

* [getLegalEntitiesId](#getlegalentitiesid) - Get a legal entity
* [getLegalEntitiesIdBusinessLines](#getlegalentitiesidbusinesslines) - Get all business lines under a legal entity
* [patchLegalEntitiesId](#patchlegalentitiesid) - Update a legal entity
* [postLegalEntities](#postlegalentities) - Create a legal entity
* [postLegalEntitiesIdCheckVerificationErrors](#postlegalentitiesidcheckverificationerrors) - Check a legal entity's verification errors

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
    $request->id = '0674ebf6-9280-4d1b-a77a-89ebf737ae42';

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
    $request->id = '03ce5e6a-95d8-4a0d-846c-e2af7a73cf3b';

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
    $request->legalEntityInfoInput->individual->birthData->dateOfBirth = 'numquam';
    $request->legalEntityInfoInput->individual->email = 'Creola.Will@gmail.com';
    $request->legalEntityInfoInput->individual->identificationData = new IdentificationData();
    $request->legalEntityInfoInput->individual->identificationData->cardNumber = 'sit';
    $request->legalEntityInfoInput->individual->identificationData->expiryDate = 'expedita';
    $request->legalEntityInfoInput->individual->identificationData->issuerCountry = 'neque';
    $request->legalEntityInfoInput->individual->identificationData->issuerState = 'sed';
    $request->legalEntityInfoInput->individual->identificationData->nationalIdExempt = false;
    $request->legalEntityInfoInput->individual->identificationData->number = 'vel';
    $request->legalEntityInfoInput->individual->identificationData->type = IdentificationDataTypeEnum::VAT_DOCUMENT;
    $request->legalEntityInfoInput->individual->name = new Name();
    $request->legalEntityInfoInput->individual->name->firstName = 'Garland';
    $request->legalEntityInfoInput->individual->name->infix = 'deserunt';
    $request->legalEntityInfoInput->individual->name->lastName = 'Kohler';
    $request->legalEntityInfoInput->individual->nationality = 'ipsum';
    $request->legalEntityInfoInput->individual->phone = new PhoneNumber();
    $request->legalEntityInfoInput->individual->phone->number = 'incidunt';
    $request->legalEntityInfoInput->individual->phone->type = 'qui';
    $request->legalEntityInfoInput->individual->residentialAddress = new Address();
    $request->legalEntityInfoInput->individual->residentialAddress->city = 'Rafaelhaven';
    $request->legalEntityInfoInput->individual->residentialAddress->country = 'Saint Helena';
    $request->legalEntityInfoInput->individual->residentialAddress->postalCode = '65211';
    $request->legalEntityInfoInput->individual->residentialAddress->stateOrProvince = 'distinctio';
    $request->legalEntityInfoInput->individual->residentialAddress->street = '345 Deckow Estate';
    $request->legalEntityInfoInput->individual->residentialAddress->street2 = 'fugit';
    $request->legalEntityInfoInput->individual->taxInformation = [
        new TaxInformation(),
    ];
    $request->legalEntityInfoInput->individual->webData = new WebDataInput();
    $request->legalEntityInfoInput->individual->webData->webAddress = 'odio';
    $request->legalEntityInfoInput->organization = new OrganizationInput();
    $request->legalEntityInfoInput->organization->dateOfIncorporation = 'sunt';
    $request->legalEntityInfoInput->organization->description = 'ullam';
    $request->legalEntityInfoInput->organization->doingBusinessAs = 'nam';
    $request->legalEntityInfoInput->organization->email = 'Alexander_Runolfsdottir9@hotmail.com';
    $request->legalEntityInfoInput->organization->legalName = 'saepe';
    $request->legalEntityInfoInput->organization->phone = new PhoneNumber();
    $request->legalEntityInfoInput->organization->phone->number = 'ipsum';
    $request->legalEntityInfoInput->organization->phone->type = 'veritatis';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness = new Address();
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->city = 'Lueilwitzcester';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->country = 'Monaco';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->postalCode = '92222';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->stateOrProvince = 'dolorum';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->street = '00590 Skiles Shores';
    $request->legalEntityInfoInput->organization->principalPlaceOfBusiness->street2 = 'doloribus';
    $request->legalEntityInfoInput->organization->registeredAddress = new Address();
    $request->legalEntityInfoInput->organization->registeredAddress->city = 'Lake Kyler';
    $request->legalEntityInfoInput->organization->registeredAddress->country = 'Christmas Island';
    $request->legalEntityInfoInput->organization->registeredAddress->postalCode = '54597';
    $request->legalEntityInfoInput->organization->registeredAddress->stateOrProvince = 'vero';
    $request->legalEntityInfoInput->organization->registeredAddress->street = '3294 Shana Villages';
    $request->legalEntityInfoInput->organization->registeredAddress->street2 = 'dignissimos';
    $request->legalEntityInfoInput->organization->registrationNumber = 'hic';
    $request->legalEntityInfoInput->organization->stockData = new StockData();
    $request->legalEntityInfoInput->organization->stockData->marketIdentifier = 'distinctio';
    $request->legalEntityInfoInput->organization->stockData->stockNumber = 'quod';
    $request->legalEntityInfoInput->organization->stockData->tickerSymbol = 'odio';
    $request->legalEntityInfoInput->organization->taxInformation = [
        new TaxInformation(),
        new TaxInformation(),
        new TaxInformation(),
    ];
    $request->legalEntityInfoInput->organization->taxReportingClassification = new TaxReportingClassification();
    $request->legalEntityInfoInput->organization->taxReportingClassification->businessType = TaxReportingClassificationBusinessTypeEnum::INTERNATIONAL_ORGANIZATION;
    $request->legalEntityInfoInput->organization->taxReportingClassification->financialInstitutionNumber = 'vero';
    $request->legalEntityInfoInput->organization->taxReportingClassification->mainSourceOfIncome = TaxReportingClassificationMainSourceOfIncomeEnum::INVESTMENT_INTEREST_OR_ROYALTY;
    $request->legalEntityInfoInput->organization->taxReportingClassification->type = TaxReportingClassificationTypeEnum::FINANCIAL_NON_REPORTABLE;
    $request->legalEntityInfoInput->organization->type = OrganizationTypeEnum::PRIVATE_COMPANY;
    $request->legalEntityInfoInput->organization->vatAbsenceReason = OrganizationVatAbsenceReasonEnum::BELOW_TAX_THRESHOLD;
    $request->legalEntityInfoInput->organization->vatNumber = 'sequi';
    $request->legalEntityInfoInput->organization->webData = new WebDataInput();
    $request->legalEntityInfoInput->organization->webData->webAddress = 'natus';
    $request->legalEntityInfoInput->reference = 'impedit';
    $request->legalEntityInfoInput->soleProprietorship = new SoleProprietorship();
    $request->legalEntityInfoInput->soleProprietorship->countryOfGoverningLaw = 'aut';
    $request->legalEntityInfoInput->soleProprietorship->dateOfIncorporation = 'voluptatibus';
    $request->legalEntityInfoInput->soleProprietorship->doingBusinessAs = 'exercitationem';
    $request->legalEntityInfoInput->soleProprietorship->name = 'Louis Sauer';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness = new Address();
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->city = 'Nickmouth';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->country = 'Afghanistan';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->postalCode = '23414-8214';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->stateOrProvince = 'laudantium';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->street = '29048 Wiza Grove';
    $request->legalEntityInfoInput->soleProprietorship->principalPlaceOfBusiness->street2 = 'sapiente';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress = new Address();
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->city = 'Ullrichview';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->country = 'Samoa';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->postalCode = '33034';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->stateOrProvince = 'quo';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->street = '91309 Ankunding Branch';
    $request->legalEntityInfoInput->soleProprietorship->registeredAddress->street2 = 'deleniti';
    $request->legalEntityInfoInput->soleProprietorship->registrationNumber = 'impedit';
    $request->legalEntityInfoInput->soleProprietorship->vatAbsenceReason = SoleProprietorshipVatAbsenceReasonEnum::INDUSTRY_EXEMPTION;
    $request->legalEntityInfoInput->soleProprietorship->vatNumber = 'fugit';
    $request->legalEntityInfoInput->type = LegalEntityInfoTypeEnum::UNINCORPORATED_PARTNERSHIP;
    $request->id = '141aac36-6c8d-4d6b-9442-907474778a7b';

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
        new LegalEntityAssociationInput(),
        new LegalEntityAssociationInput(),
    ];
    $request->individual = new IndividualInput();
    $request->individual->birthData = new BirthData();
    $request->individual->birthData->dateOfBirth = 'ut';
    $request->individual->email = 'Genoveva50@yahoo.com';
    $request->individual->identificationData = new IdentificationData();
    $request->individual->identificationData->cardNumber = 'quisquam';
    $request->individual->identificationData->expiryDate = 'veritatis';
    $request->individual->identificationData->issuerCountry = 'ipsa';
    $request->individual->identificationData->issuerState = 'id';
    $request->individual->identificationData->nationalIdExempt = false;
    $request->individual->identificationData->number = 'quidem';
    $request->individual->identificationData->type = IdentificationDataTypeEnum::IDENTITY_CARD;
    $request->individual->name = new Name();
    $request->individual->name->firstName = 'Orlo';
    $request->individual->name->infix = 'illum';
    $request->individual->name->lastName = 'Sanford';
    $request->individual->nationality = 'fuga';
    $request->individual->phone = new PhoneNumber();
    $request->individual->phone->number = 'eius';
    $request->individual->phone->type = 'eos';
    $request->individual->residentialAddress = new Address();
    $request->individual->residentialAddress->city = 'North Lacey';
    $request->individual->residentialAddress->country = 'Algeria';
    $request->individual->residentialAddress->postalCode = '83117';
    $request->individual->residentialAddress->stateOrProvince = 'esse';
    $request->individual->residentialAddress->street = '077 Arely Lane';
    $request->individual->residentialAddress->street2 = 'totam';
    $request->individual->taxInformation = [
        new TaxInformation(),
        new TaxInformation(),
        new TaxInformation(),
        new TaxInformation(),
    ];
    $request->individual->webData = new WebDataInput();
    $request->individual->webData->webAddress = 'aliquam';
    $request->organization = new OrganizationInput();
    $request->organization->dateOfIncorporation = 'odio';
    $request->organization->description = 'occaecati';
    $request->organization->doingBusinessAs = 'commodi';
    $request->organization->email = 'Chaim.Oberbrunner@hotmail.com';
    $request->organization->legalName = 'porro';
    $request->organization->phone = new PhoneNumber();
    $request->organization->phone->number = 'eum';
    $request->organization->phone->type = 'quas';
    $request->organization->principalPlaceOfBusiness = new Address();
    $request->organization->principalPlaceOfBusiness->city = 'Carolstad';
    $request->organization->principalPlaceOfBusiness->country = 'Cambodia';
    $request->organization->principalPlaceOfBusiness->postalCode = '62513-3191';
    $request->organization->principalPlaceOfBusiness->stateOrProvince = 'ratione';
    $request->organization->principalPlaceOfBusiness->street = '95504 Tillman Circles';
    $request->organization->principalPlaceOfBusiness->street2 = 'esse';
    $request->organization->registeredAddress = new Address();
    $request->organization->registeredAddress->city = 'Raleigh';
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

## postLegalEntitiesIdCheckVerificationErrors

Returns the verification errors for a legal entity and its supporting entities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdCheckVerificationErrorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdCheckVerificationErrorsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLegalEntitiesIdCheckVerificationErrorsRequest();
    $request->id = '39d08086-a184-4039-8c26-071f93f5f064';

    $requestSecurity = new PostLegalEntitiesIdCheckVerificationErrorsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->legalEntities->postLegalEntitiesIdCheckVerificationErrors($request, $requestSecurity);

    if ($response->verificationErrors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

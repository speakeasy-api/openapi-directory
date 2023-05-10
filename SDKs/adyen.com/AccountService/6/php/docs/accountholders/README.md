# accountHolders

### Available Operations

* [postCloseAccountHolder](#postcloseaccountholder) - Close an account holder
* [postCloseStores](#postclosestores) - Close stores
* [postCreateAccountHolder](#postcreateaccountholder) - Create an account holder
* [postGetAccountHolder](#postgetaccountholder) - Get an account holder
* [postGetTaxForm](#postgettaxform) - Get a tax form
* [postSuspendAccountHolder](#postsuspendaccountholder) - Suspend an account holder
* [postUnSuspendAccountHolder](#postunsuspendaccountholder) - Unsuspend an account holder
* [postUpdateAccountHolder](#postupdateaccountholder) - Update an account holder
* [postUpdateAccountHolderState](#postupdateaccountholderstate) - Update payout or processing state

## postCloseAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CloseAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCloseAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloseAccountHolderRequest();
    $request->accountHolderCode = 'provident';

    $requestSecurity = new PostCloseAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postCloseAccountHolder($request, $requestSecurity);

    if ($response->closeAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCloseStores

Closes stores associated with an account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CloseStoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCloseStoresSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloseStoresRequest();
    $request->accountHolderCode = 'distinctio';
    $request->stores = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];

    $requestSecurity = new PostCloseStoresSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postCloseStores($request, $requestSecurity);

    if ($response->genericResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateAccountHolder

Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/marketplaces-and-platforms/classic/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViasAddress;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDetail;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDetails;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompany;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompanyBusinessDetails;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContact;
use \OpenAPI\OpenAPI\Models\Shared\ViasName;
use \OpenAPI\OpenAPI\Models\Shared\ViasNameGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViasPersonalData;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentData;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViasPhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\ViasPhoneNumberPhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContactShareholderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignatoryContact;
use \OpenAPI\OpenAPI\Models\Shared\IndividualDetails;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementDetail;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementEntityDetail;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementEntityDetailLegalArrangementMembersEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementEntityDetailLegalEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementDetailLegalFormEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementDetailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayoutMethod;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetail;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetailShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetailStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderRequestLegalEntityEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCreateAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountHolderRequest();
    $request->accountHolderCode = 'vel';
    $request->accountHolderDetails = new AccountHolderDetails();
    $request->accountHolderDetails->address = new ViasAddress();
    $request->accountHolderDetails->address->city = 'Oberbrunnerbury';
    $request->accountHolderDetails->address->country = 'Jamaica';
    $request->accountHolderDetails->address->houseNumberOrName = 'magnam';
    $request->accountHolderDetails->address->postalCode = '09234-7854';
    $request->accountHolderDetails->address->stateOrProvince = 'excepturi';
    $request->accountHolderDetails->address->street = '9803 Lydia Bridge';
    $request->accountHolderDetails->bankAccountDetails = [
        new BankAccountDetail(),
        new BankAccountDetail(),
    ];
    $request->accountHolderDetails->bankAggregatorDataReference = 'repellendus';
    $request->accountHolderDetails->businessDetails = new BusinessDetails();
    $request->accountHolderDetails->businessDetails->doingBusinessAs = 'sapiente';
    $request->accountHolderDetails->businessDetails->legalBusinessName = 'quo';
    $request->accountHolderDetails->businessDetails->listedUltimateParentCompany = [
        new UltimateParentCompany(),
    ];
    $request->accountHolderDetails->businessDetails->registrationNumber = 'at';
    $request->accountHolderDetails->businessDetails->shareholders = [
        new ShareholderContact(),
        new ShareholderContact(),
        new ShareholderContact(),
        new ShareholderContact(),
    ];
    $request->accountHolderDetails->businessDetails->signatories = [
        new SignatoryContact(),
        new SignatoryContact(),
        new SignatoryContact(),
        new SignatoryContact(),
    ];
    $request->accountHolderDetails->businessDetails->stockExchange = 'molestiae';
    $request->accountHolderDetails->businessDetails->stockNumber = 'quod';
    $request->accountHolderDetails->businessDetails->stockTicker = 'quod';
    $request->accountHolderDetails->businessDetails->taxId = 'esse';
    $request->accountHolderDetails->email = 'Osborne72@yahoo.com';
    $request->accountHolderDetails->fullPhoneNumber = 'officia';
    $request->accountHolderDetails->individualDetails = new IndividualDetails();
    $request->accountHolderDetails->individualDetails->name = new ViasName();
    $request->accountHolderDetails->individualDetails->name->firstName = 'Kristina';
    $request->accountHolderDetails->individualDetails->name->gender = ViasNameGenderEnum::MALE;
    $request->accountHolderDetails->individualDetails->name->infix = 'deleniti';
    $request->accountHolderDetails->individualDetails->name->lastName = 'Welch';
    $request->accountHolderDetails->individualDetails->personalData = new ViasPersonalData();
    $request->accountHolderDetails->individualDetails->personalData->dateOfBirth = 'optio';
    $request->accountHolderDetails->individualDetails->personalData->documentData = [
        new PersonalDocumentData(),
        new PersonalDocumentData(),
        new PersonalDocumentData(),
    ];
    $request->accountHolderDetails->individualDetails->personalData->nationality = 'beatae';
    $request->accountHolderDetails->lastReviewDate = 'commodi';
    $request->accountHolderDetails->legalArrangements = [
        new LegalArrangementDetail(),
        new LegalArrangementDetail(),
    ];
    $request->accountHolderDetails->merchantCategoryCode = 'modi';
    $request->accountHolderDetails->metadata = [
        'impedit' => 'cum',
    ];
    $request->accountHolderDetails->payoutMethods = [
        new PayoutMethod(),
        new PayoutMethod(),
    ];
    $request->accountHolderDetails->principalBusinessAddress = new ViasAddress();
    $request->accountHolderDetails->principalBusinessAddress->city = 'New Brianne';
    $request->accountHolderDetails->principalBusinessAddress->country = 'Andorra';
    $request->accountHolderDetails->principalBusinessAddress->houseNumberOrName = 'ad';
    $request->accountHolderDetails->principalBusinessAddress->postalCode = '16263-9964';
    $request->accountHolderDetails->principalBusinessAddress->stateOrProvince = 'corporis';
    $request->accountHolderDetails->principalBusinessAddress->street = '4960 Waino Point';
    $request->accountHolderDetails->storeDetails = [
        new StoreDetail(),
        new StoreDetail(),
        new StoreDetail(),
    ];
    $request->accountHolderDetails->webAddress = 'laborum';
    $request->createDefaultAccount = false;
    $request->description = 'dolores';
    $request->legalEntity = CreateAccountHolderRequestLegalEntityEnum::INDIVIDUAL;
    $request->primaryCurrency = 'corporis';
    $request->processingTier = 128926;
    $request->verificationProfile = 'nobis';

    $requestSecurity = new PostCreateAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postCreateAccountHolder($request, $requestSecurity);

    if ($response->createAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetAccountHolder

Returns the details of an account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGetAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountHolderRequest();
    $request->accountCode = 'enim';
    $request->accountHolderCode = 'omnis';
    $request->showDetails = false;

    $requestSecurity = new PostGetAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postGetAccountHolder($request, $requestSecurity);

    if ($response->getAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetTaxForm

Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/marketplaces-and-platforms/classic/tax-forms).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetTaxFormRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGetTaxFormSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaxFormRequest();
    $request->accountHolderCode = 'nemo';
    $request->formType = 'minima';
    $request->year = 570197;

    $requestSecurity = new PostGetTaxFormSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postGetTaxForm($request, $requestSecurity);

    if ($response->getTaxFormResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSuspendAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Suspended**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SuspendAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostSuspendAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuspendAccountHolderRequest();
    $request->accountHolderCode = 'accusantium';

    $requestSecurity = new PostSuspendAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postSuspendAccountHolder($request, $requestSecurity);

    if ($response->suspendAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUnSuspendAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. 
Account holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.

You can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UnSuspendAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUnSuspendAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnSuspendAccountHolderRequest();
    $request->accountHolderCode = 'iure';

    $requestSecurity = new PostUnSuspendAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postUnSuspendAccountHolder($request, $requestSecurity);

    if ($response->unSuspendAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAccountHolder

Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.

When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:

* `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.

When updating any field in the following objects, you must submit all the fields required for validation:

 * `address`

* `fullPhoneNumber`

* `bankAccountDetails.BankAccountDetail`

* `businessDetails.shareholders.ShareholderContact`

 For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.

To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViasAddress;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDetail;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDetails;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompany;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompanyBusinessDetails;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContact;
use \OpenAPI\OpenAPI\Models\Shared\ViasName;
use \OpenAPI\OpenAPI\Models\Shared\ViasNameGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViasPersonalData;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentData;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViasPhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\ViasPhoneNumberPhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContactShareholderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignatoryContact;
use \OpenAPI\OpenAPI\Models\Shared\IndividualDetails;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementDetail;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementEntityDetail;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementEntityDetailLegalArrangementMembersEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementEntityDetailLegalEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementDetailLegalFormEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementDetailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayoutMethod;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetail;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetailShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetailStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderRequestLegalEntityEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountHolderRequest();
    $request->accountHolderCode = 'culpa';
    $request->accountHolderDetails = new AccountHolderDetails();
    $request->accountHolderDetails->address = new ViasAddress();
    $request->accountHolderDetails->address->city = 'West Allis';
    $request->accountHolderDetails->address->country = 'Bhutan';
    $request->accountHolderDetails->address->houseNumberOrName = 'mollitia';
    $request->accountHolderDetails->address->postalCode = '61965';
    $request->accountHolderDetails->address->stateOrProvince = 'numquam';
    $request->accountHolderDetails->address->street = '4426 Eugene Corner';
    $request->accountHolderDetails->bankAccountDetails = [
        new BankAccountDetail(),
        new BankAccountDetail(),
        new BankAccountDetail(),
    ];
    $request->accountHolderDetails->bankAggregatorDataReference = 'animi';
    $request->accountHolderDetails->businessDetails = new BusinessDetails();
    $request->accountHolderDetails->businessDetails->doingBusinessAs = 'enim';
    $request->accountHolderDetails->businessDetails->legalBusinessName = 'odit';
    $request->accountHolderDetails->businessDetails->listedUltimateParentCompany = [
        new UltimateParentCompany(),
        new UltimateParentCompany(),
        new UltimateParentCompany(),
        new UltimateParentCompany(),
    ];
    $request->accountHolderDetails->businessDetails->registrationNumber = 'sequi';
    $request->accountHolderDetails->businessDetails->shareholders = [
        new ShareholderContact(),
        new ShareholderContact(),
        new ShareholderContact(),
        new ShareholderContact(),
    ];
    $request->accountHolderDetails->businessDetails->signatories = [
        new SignatoryContact(),
        new SignatoryContact(),
    ];
    $request->accountHolderDetails->businessDetails->stockExchange = 'id';
    $request->accountHolderDetails->businessDetails->stockNumber = 'possimus';
    $request->accountHolderDetails->businessDetails->stockTicker = 'aut';
    $request->accountHolderDetails->businessDetails->taxId = 'quasi';
    $request->accountHolderDetails->email = 'Rodrigo97@yahoo.com';
    $request->accountHolderDetails->fullPhoneNumber = 'voluptatibus';
    $request->accountHolderDetails->individualDetails = new IndividualDetails();
    $request->accountHolderDetails->individualDetails->name = new ViasName();
    $request->accountHolderDetails->individualDetails->name->firstName = 'Shad';
    $request->accountHolderDetails->individualDetails->name->gender = ViasNameGenderEnum::FEMALE;
    $request->accountHolderDetails->individualDetails->name->infix = 'praesentium';
    $request->accountHolderDetails->individualDetails->name->lastName = 'Wolff';
    $request->accountHolderDetails->individualDetails->personalData = new ViasPersonalData();
    $request->accountHolderDetails->individualDetails->personalData->dateOfBirth = 'ipsa';
    $request->accountHolderDetails->individualDetails->personalData->documentData = [
        new PersonalDocumentData(),
        new PersonalDocumentData(),
        new PersonalDocumentData(),
    ];
    $request->accountHolderDetails->individualDetails->personalData->nationality = 'voluptate';
    $request->accountHolderDetails->lastReviewDate = 'cum';
    $request->accountHolderDetails->legalArrangements = [
        new LegalArrangementDetail(),
    ];
    $request->accountHolderDetails->merchantCategoryCode = 'doloremque';
    $request->accountHolderDetails->metadata = [
        'ut' => 'maiores',
        'dicta' => 'corporis',
    ];
    $request->accountHolderDetails->payoutMethods = [
        new PayoutMethod(),
        new PayoutMethod(),
    ];
    $request->accountHolderDetails->principalBusinessAddress = new ViasAddress();
    $request->accountHolderDetails->principalBusinessAddress->city = 'Birdiechester';
    $request->accountHolderDetails->principalBusinessAddress->country = 'Georgia';
    $request->accountHolderDetails->principalBusinessAddress->houseNumberOrName = 'accusamus';
    $request->accountHolderDetails->principalBusinessAddress->postalCode = '90265';
    $request->accountHolderDetails->principalBusinessAddress->stateOrProvince = 'excepturi';
    $request->accountHolderDetails->principalBusinessAddress->street = '255 Botsford Valleys';
    $request->accountHolderDetails->storeDetails = [
        new StoreDetail(),
        new StoreDetail(),
        new StoreDetail(),
    ];
    $request->accountHolderDetails->webAddress = 'veritatis';
    $request->description = 'itaque';
    $request->legalEntity = UpdateAccountHolderRequestLegalEntityEnum::INDIVIDUAL;
    $request->primaryCurrency = 'enim';
    $request->processingTier = 9356;
    $request->verificationProfile = 'est';

    $requestSecurity = new PostUpdateAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postUpdateAccountHolder($request, $requestSecurity);

    if ($response->updateAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAccountHolderState

Disables or enables the processing or payout state of an account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountHolderStateRequestStateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderStateSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountHolderStateRequest();
    $request->accountHolderCode = 'quibusdam';
    $request->disable = false;
    $request->reason = 'explicabo';
    $request->stateType = UpdateAccountHolderStateRequestStateTypeEnum::LIMITLESS_PROCESSING;

    $requestSecurity = new PostUpdateAccountHolderStateSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postUpdateAccountHolderState($request, $requestSecurity);

    if ($response->getAccountHolderStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

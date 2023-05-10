# accountHolders

### Available Operations

* [postCloseAccountHolder](#postcloseaccountholder) - Close an account holder
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
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDetailWrapper;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDetail;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDetails;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompanyWrapper;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompany;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompanyBusinessDetails;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContactWrapper;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContact;
use \OpenAPI\OpenAPI\Models\Shared\ViasName;
use \OpenAPI\OpenAPI\Models\Shared\ViasNameGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViasPersonalData;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentDataWrapper;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentData;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViasPhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\ViasPhoneNumberPhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContactShareholderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignatoryContactWrapper;
use \OpenAPI\OpenAPI\Models\Shared\SignatoryContact;
use \OpenAPI\OpenAPI\Models\Shared\IndividualDetails;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountHolderRequestLegalEntityEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCreateAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountHolderRequest();
    $request->accountHolderCode = 'distinctio';
    $request->accountHolderDetails = new AccountHolderDetails();
    $request->accountHolderDetails->address = new ViasAddress();
    $request->accountHolderDetails->address->city = 'New Orleans';
    $request->accountHolderDetails->address->country = 'Sweden';
    $request->accountHolderDetails->address->houseNumberOrName = 'corrupti';
    $request->accountHolderDetails->address->postalCode = '46634-2809';
    $request->accountHolderDetails->address->stateOrProvince = 'tempora';
    $request->accountHolderDetails->address->street = '4785 Kenyon Hollow';
    $request->accountHolderDetails->bankAccountDetails = [
        new BankAccountDetailWrapper(),
        new BankAccountDetailWrapper(),
        new BankAccountDetailWrapper(),
        new BankAccountDetailWrapper(),
    ];
    $request->accountHolderDetails->businessDetails = new BusinessDetails();
    $request->accountHolderDetails->businessDetails->doingBusinessAs = 'temporibus';
    $request->accountHolderDetails->businessDetails->legalBusinessName = 'ab';
    $request->accountHolderDetails->businessDetails->listedUltimateParentCompany = [
        new UltimateParentCompanyWrapper(),
        new UltimateParentCompanyWrapper(),
    ];
    $request->accountHolderDetails->businessDetails->registrationNumber = 'veritatis';
    $request->accountHolderDetails->businessDetails->shareholders = [
        new ShareholderContactWrapper(),
        new ShareholderContactWrapper(),
        new ShareholderContactWrapper(),
    ];
    $request->accountHolderDetails->businessDetails->signatories = [
        new SignatoryContactWrapper(),
    ];
    $request->accountHolderDetails->businessDetails->taxId = 'ipsam';
    $request->accountHolderDetails->email = 'Verner87@hotmail.com';
    $request->accountHolderDetails->fullPhoneNumber = 'at';
    $request->accountHolderDetails->individualDetails = new IndividualDetails();
    $request->accountHolderDetails->individualDetails->name = new ViasName();
    $request->accountHolderDetails->individualDetails->name->firstName = 'Wilford';
    $request->accountHolderDetails->individualDetails->name->gender = ViasNameGenderEnum::FEMALE;
    $request->accountHolderDetails->individualDetails->name->infix = 'quod';
    $request->accountHolderDetails->individualDetails->name->lastName = 'Schmidt';
    $request->accountHolderDetails->individualDetails->personalData = new ViasPersonalData();
    $request->accountHolderDetails->individualDetails->personalData->dateOfBirth = 'esse';
    $request->accountHolderDetails->individualDetails->personalData->documentData = [
        new PersonalDocumentDataWrapper(),
        new PersonalDocumentDataWrapper(),
        new PersonalDocumentDataWrapper(),
    ];
    $request->accountHolderDetails->individualDetails->personalData->idNumber = 'porro';
    $request->accountHolderDetails->individualDetails->personalData->nationality = 'dolorum';
    $request->accountHolderDetails->lastReviewDate = 'dicta';
    $request->accountHolderDetails->merchantCategoryCode = 'nam';
    $request->accountHolderDetails->metadata = [
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
        'optio' => 'totam',
    ];
    $request->accountHolderDetails->principalBusinessAddress = new ViasAddress();
    $request->accountHolderDetails->principalBusinessAddress->city = 'South Jarenboro';
    $request->accountHolderDetails->principalBusinessAddress->country = 'Cocos (Keeling) Islands';
    $request->accountHolderDetails->principalBusinessAddress->houseNumberOrName = 'impedit';
    $request->accountHolderDetails->principalBusinessAddress->postalCode = '42510-3616';
    $request->accountHolderDetails->principalBusinessAddress->stateOrProvince = 'dolor';
    $request->accountHolderDetails->principalBusinessAddress->street = '3996 Floy Parkways';
    $request->accountHolderDetails->webAddress = 'iure';
    $request->createDefaultAccount = false;
    $request->description = 'saepe';
    $request->legalEntity = CreateAccountHolderRequestLegalEntityEnum::NON_PROFIT;
    $request->primaryCurrency = 'architecto';
    $request->processingTier = 60225;

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
    $request->accountCode = 'reiciendis';
    $request->accountHolderCode = 'est';
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
    $request->accountHolderCode = 'mollitia';
    $request->formType = 'laborum';
    $request->year = 170909;

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
    $request->accountHolderCode = 'dolorem';

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
    $request->accountHolderCode = 'corporis';

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
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDetailWrapper;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDetail;
use \OpenAPI\OpenAPI\Models\Shared\BusinessDetails;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompanyWrapper;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompany;
use \OpenAPI\OpenAPI\Models\Shared\UltimateParentCompanyBusinessDetails;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContactWrapper;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContact;
use \OpenAPI\OpenAPI\Models\Shared\ViasName;
use \OpenAPI\OpenAPI\Models\Shared\ViasNameGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViasPersonalData;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentDataWrapper;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentData;
use \OpenAPI\OpenAPI\Models\Shared\PersonalDocumentDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViasPhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\ViasPhoneNumberPhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShareholderContactShareholderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignatoryContactWrapper;
use \OpenAPI\OpenAPI\Models\Shared\SignatoryContact;
use \OpenAPI\OpenAPI\Models\Shared\IndividualDetails;
use \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountHolderRequest();
    $request->accountHolderCode = 'explicabo';
    $request->accountHolderDetails = new AccountHolderDetails();
    $request->accountHolderDetails->address = new ViasAddress();
    $request->accountHolderDetails->address->city = 'Halvorsonstead';
    $request->accountHolderDetails->address->country = 'Guinea';
    $request->accountHolderDetails->address->houseNumberOrName = 'minima';
    $request->accountHolderDetails->address->postalCode = '04699-1626';
    $request->accountHolderDetails->address->stateOrProvince = 'consequuntur';
    $request->accountHolderDetails->address->street = '652 Jamil Light';
    $request->accountHolderDetails->bankAccountDetails = [
        new BankAccountDetailWrapper(),
    ];
    $request->accountHolderDetails->businessDetails = new BusinessDetails();
    $request->accountHolderDetails->businessDetails->doingBusinessAs = 'error';
    $request->accountHolderDetails->businessDetails->legalBusinessName = 'quia';
    $request->accountHolderDetails->businessDetails->listedUltimateParentCompany = [
        new UltimateParentCompanyWrapper(),
        new UltimateParentCompanyWrapper(),
    ];
    $request->accountHolderDetails->businessDetails->registrationNumber = 'vitae';
    $request->accountHolderDetails->businessDetails->shareholders = [
        new ShareholderContactWrapper(),
        new ShareholderContactWrapper(),
        new ShareholderContactWrapper(),
    ];
    $request->accountHolderDetails->businessDetails->signatories = [
        new SignatoryContactWrapper(),
        new SignatoryContactWrapper(),
        new SignatoryContactWrapper(),
    ];
    $request->accountHolderDetails->businessDetails->taxId = 'enim';
    $request->accountHolderDetails->email = 'Orlando.Dietrich66@gmail.com';
    $request->accountHolderDetails->fullPhoneNumber = 'possimus';
    $request->accountHolderDetails->individualDetails = new IndividualDetails();
    $request->accountHolderDetails->individualDetails->name = new ViasName();
    $request->accountHolderDetails->individualDetails->name->firstName = 'Adrain';
    $request->accountHolderDetails->individualDetails->name->gender = ViasNameGenderEnum::MALE;
    $request->accountHolderDetails->individualDetails->name->infix = 'error';
    $request->accountHolderDetails->individualDetails->name->lastName = 'Smitham';
    $request->accountHolderDetails->individualDetails->personalData = new ViasPersonalData();
    $request->accountHolderDetails->individualDetails->personalData->dateOfBirth = 'laborum';
    $request->accountHolderDetails->individualDetails->personalData->documentData = [
        new PersonalDocumentDataWrapper(),
    ];
    $request->accountHolderDetails->individualDetails->personalData->idNumber = 'reiciendis';
    $request->accountHolderDetails->individualDetails->personalData->nationality = 'voluptatibus';
    $request->accountHolderDetails->lastReviewDate = 'vero';
    $request->accountHolderDetails->merchantCategoryCode = 'nihil';
    $request->accountHolderDetails->metadata = [
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->accountHolderDetails->principalBusinessAddress = new ViasAddress();
    $request->accountHolderDetails->principalBusinessAddress->city = 'South Easterworth';
    $request->accountHolderDetails->principalBusinessAddress->country = 'Brazil';
    $request->accountHolderDetails->principalBusinessAddress->houseNumberOrName = 'corporis';
    $request->accountHolderDetails->principalBusinessAddress->postalCode = '41638';
    $request->accountHolderDetails->principalBusinessAddress->stateOrProvince = 'commodi';
    $request->accountHolderDetails->principalBusinessAddress->street = '026 Mante Throughway';
    $request->accountHolderDetails->webAddress = 'modi';
    $request->description = 'praesentium';
    $request->primaryCurrency = 'rem';
    $request->processingTier = 916723;

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
    $request->accountHolderCode = 'quasi';
    $request->disable = false;
    $request->reason = 'repudiandae';
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

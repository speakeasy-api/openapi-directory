# accountHolders

### Available Operations

* [getAccountHoldersId](#getaccountholdersid) - Get an account holder
* [getAccountHoldersIdBalanceAccounts](#getaccountholdersidbalanceaccounts) - Get all balance accounts of an account holder
* [patchAccountHoldersId](#patchaccountholdersid) - Update an account holder
* [postAccountHolders](#postaccountholders) - Create an account holder

## getAccountHoldersId

Returns an account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountHoldersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountHoldersIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountHoldersIdRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $requestSecurity = new GetAccountHoldersIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->getAccountHoldersId($request, $requestSecurity);

    if ($response->accountHolder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountHoldersIdBalanceAccounts

Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountHoldersIdBalanceAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountHoldersIdBalanceAccountsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountHoldersIdBalanceAccountsRequest();
    $request->id = 'cb739205-9293-496f-aa75-96eb10faaa23';
    $request->limit = 358152;
    $request->offset = 128926;

    $requestSecurity = new GetAccountHoldersIdBalanceAccountsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->getAccountHoldersIdBalanceAccounts($request, $requestSecurity);

    if ($response->paginatedBalanceAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAccountHoldersId

Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAccountHoldersIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderCapabilityInput;
use \OpenAPI\OpenAPI\Models\Shared\JSONObject;
use \OpenAPI\OpenAPI\Models\Shared\JSONPath;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderCapabilityRequestedLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountSupportingEntityCapabilityInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountSupportingEntityCapabilityRequestedLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactDetails;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Phone;
use \OpenAPI\OpenAPI\Models\Shared\PhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchAccountHoldersIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAccountHoldersIdRequest();
    $request->accountHolderInput = new AccountHolderInput();
    $request->accountHolderInput->balancePlatform = 'nobis';
    $request->accountHolderInput->capabilities = [
        'omnis' => new AccountHolderCapabilityInput(),
        'nemo' => new AccountHolderCapabilityInput(),
    ];
    $request->accountHolderInput->contactDetails = new ContactDetails();
    $request->accountHolderInput->contactDetails->address = new Address();
    $request->accountHolderInput->contactDetails->address->city = 'New Alisa';
    $request->accountHolderInput->contactDetails->address->country = 'Japan';
    $request->accountHolderInput->contactDetails->address->houseNumberOrName = 'culpa';
    $request->accountHolderInput->contactDetails->address->postalCode = '91626-1965';
    $request->accountHolderInput->contactDetails->address->stateOrProvince = 'numquam';
    $request->accountHolderInput->contactDetails->address->street = '4426 Eugene Corner';
    $request->accountHolderInput->contactDetails->email = 'Madison77@hotmail.com';
    $request->accountHolderInput->contactDetails->phone = new Phone();
    $request->accountHolderInput->contactDetails->phone->number = 'sequi';
    $request->accountHolderInput->contactDetails->phone->type = PhoneTypeEnum::MOBILE;
    $request->accountHolderInput->contactDetails->webAddress = 'ipsam';
    $request->accountHolderInput->description = 'id';
    $request->accountHolderInput->legalEntityId = 'possimus';
    $request->accountHolderInput->primaryBalanceAccount = 'aut';
    $request->accountHolderInput->reference = 'quasi';
    $request->accountHolderInput->status = AccountHolderStatusEnum::INACTIVE;
    $request->accountHolderInput->timeZone = 'temporibus';
    $request->id = 'a1ffe78f-097b-4007-8f15-471b5e6e13b9';

    $requestSecurity = new PatchAccountHoldersIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->patchAccountHoldersId($request, $requestSecurity);

    if ($response->accountHolder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccountHolders

Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderCapabilityInput;
use \OpenAPI\OpenAPI\Models\Shared\JSONObject;
use \OpenAPI\OpenAPI\Models\Shared\JSONPath;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderCapabilityRequestedLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountSupportingEntityCapabilityInput;
use \OpenAPI\OpenAPI\Models\Shared\AccountSupportingEntityCapabilityRequestedLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactDetails;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Phone;
use \OpenAPI\OpenAPI\Models\Shared\PhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountHoldersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountHolderInfoInput();
    $request->balancePlatform = 'excepturi';
    $request->capabilities = [
        'modi' => new AccountHolderCapabilityInput(),
        'praesentium' => new AccountHolderCapabilityInput(),
        'rem' => new AccountHolderCapabilityInput(),
        'voluptates' => new AccountHolderCapabilityInput(),
    ];
    $request->contactDetails = new ContactDetails();
    $request->contactDetails->address = new Address();
    $request->contactDetails->address->city = 'Fort Kiraton';
    $request->contactDetails->address->country = 'Uganda';
    $request->contactDetails->address->houseNumberOrName = 'incidunt';
    $request->contactDetails->address->postalCode = '06816';
    $request->contactDetails->address->stateOrProvince = 'distinctio';
    $request->contactDetails->address->street = '221 Kyler Mission';
    $request->contactDetails->email = 'Casimir.Simonis@gmail.com';
    $request->contactDetails->phone = new Phone();
    $request->contactDetails->phone->number = 'fugit';
    $request->contactDetails->phone->type = PhoneTypeEnum::MOBILE;
    $request->contactDetails->webAddress = 'excepturi';
    $request->description = 'tempora';
    $request->legalEntityId = 'facilis';
    $request->reference = 'tempore';
    $request->timeZone = 'labore';

    $requestSecurity = new PostAccountHoldersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postAccountHolders($request, $requestSecurity);

    if ($response->accountHolder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# balanceAccounts

### Available Operations

* [getBalanceAccountsId](#getbalanceaccountsid) - Get a balance account
* [getBalanceAccountsIdPaymentInstruments](#getbalanceaccountsidpaymentinstruments) - Get all payment instruments for a balance account
* [patchBalanceAccountsId](#patchbalanceaccountsid) - Update a balance account
* [postBalanceAccounts](#postbalanceaccounts) - Create a balance account

## getBalanceAccountsId

Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBalanceAccountsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBalanceAccountsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBalanceAccountsIdRequest();
    $request->id = 'f63c969e-9a3e-4fa7-bdfb-14cd66ae395e';

    $requestSecurity = new GetBalanceAccountsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->balanceAccounts->getBalanceAccountsId($request, $requestSecurity);

    if ($response->balanceAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBalanceAccountsIdPaymentInstruments

Returns a paginated list of the payment instruments associated with a balance account. 

To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBalanceAccountsIdPaymentInstrumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBalanceAccountsIdPaymentInstrumentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBalanceAccountsIdPaymentInstrumentsRequest();
    $request->id = 'fb9ba88f-3a66-4997-874b-a4469b6e2141';
    $request->limit = 569965;
    $request->offset = 354047;

    $requestSecurity = new GetBalanceAccountsIdPaymentInstrumentsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->balanceAccounts->getBalanceAccountsIdPaymentInstruments($request, $requestSecurity);

    if ($response->paginatedPaymentInstrumentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchBalanceAccountsId

Updates a balance account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchBalanceAccountsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\BalanceAccountUpdateRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\BalanceAccountUpdateRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SweepConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\SweepConfigurationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\SweepConfigurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchBalanceAccountsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchBalanceAccountsIdRequest();
    $request->balanceAccountUpdateRequestInput = new BalanceAccountUpdateRequestInput();
    $request->balanceAccountUpdateRequestInput->accountHolderId = 'provident';
    $request->balanceAccountUpdateRequestInput->defaultCurrencyCode = 'quos';
    $request->balanceAccountUpdateRequestInput->description = 'sint';
    $request->balanceAccountUpdateRequestInput->reference = 'accusantium';
    $request->balanceAccountUpdateRequestInput->status = BalanceAccountUpdateRequestStatusEnum::INACTIVE;
    $request->balanceAccountUpdateRequestInput->sweepConfigurations = [
        'mollitia' => new SweepConfigurationInput(),
        'ad' => new SweepConfigurationInput(),
        'eum' => new SweepConfigurationInput(),
        'dolor' => new SweepConfigurationInput(),
    ];
    $request->balanceAccountUpdateRequestInput->timeZone = 'necessitatibus';
    $request->id = '2516fe4c-8b71-41e5-b7fd-2ed028921cdd';

    $requestSecurity = new PatchBalanceAccountsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->balanceAccounts->patchBalanceAccountsId($request, $requestSecurity);

    if ($response->balanceAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBalanceAccounts

Creates a balance account that holds the funds of the associated account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BalanceAccountInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\SweepConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\SweepConfigurationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\SweepConfigurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostBalanceAccountsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BalanceAccountInfoInput();
    $request->accountHolderId = 'maxime';
    $request->defaultCurrencyCode = 'ea';
    $request->description = 'excepturi';
    $request->reference = 'odit';
    $request->sweepConfigurations = [
        'accusantium' => new SweepConfigurationInput(),
        'ab' => new SweepConfigurationInput(),
    ];
    $request->timeZone = 'maiores';

    $requestSecurity = new PostBalanceAccountsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->balanceAccounts->postBalanceAccounts($request, $requestSecurity);

    if ($response->balanceAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

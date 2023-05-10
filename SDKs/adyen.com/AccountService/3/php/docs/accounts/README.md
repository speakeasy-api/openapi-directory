# accounts

### Available Operations

* [postCloseAccount](#postcloseaccount) - Close an account
* [postCreateAccount](#postcreateaccount) - Create an account
* [postUpdateAccount](#postupdateaccount) - Update an account

## postCloseAccount

Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CloseAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCloseAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloseAccountRequest();
    $request->accountCode = 'excepturi';

    $requestSecurity = new PostCloseAccountSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accounts->postCloseAccount($request, $requestSecurity);

    if ($response->closeAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateAccount

Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#create-additional-accounts).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountRequestPayoutScheduleEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCreateAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountRequest();
    $request->accountHolderCode = 'pariatur';
    $request->payoutSchedule = CreateAccountRequestPayoutScheduleEnum::DAILY_EU;
    $request->payoutScheduleReason = 'praesentium';

    $requestSecurity = new PostCreateAccountSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accounts->postCreateAccount($request, $requestSecurity);

    if ($response->createAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAccount

Updates the description or payout schedule of an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePayoutScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePayoutScheduleRequestActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePayoutScheduleRequestScheduleEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUpdateAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountRequest();
    $request->accountCode = 'rem';
    $request->payoutSchedule = new UpdatePayoutScheduleRequest();
    $request->payoutSchedule->action = UpdatePayoutScheduleRequestActionEnum::UPDATE;
    $request->payoutSchedule->reason = 'quasi';
    $request->payoutSchedule->schedule = UpdatePayoutScheduleRequestScheduleEnum::WEEKLY_SUN_TO_THU_AU;

    $requestSecurity = new PostUpdateAccountSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accounts->postUpdateAccount($request, $requestSecurity);

    if ($response->updateAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

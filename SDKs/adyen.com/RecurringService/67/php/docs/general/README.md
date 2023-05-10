# general

### Available Operations

* [postCreatePermit](#postcreatepermit) - Create new permits linked to a recurring contract.
* [postDisable](#postdisable) - Disable stored payment details
* [postDisablePermit](#postdisablepermit) - Disable an existing permit.
* [postListRecurringDetails](#postlistrecurringdetails) - Get stored payment details
* [postNotifyShopper](#postnotifyshopper) - Ask issuer to notify the shopper
* [postScheduleAccountUpdater](#postscheduleaccountupdater) - Schedule running the Account Updater

## postCreatePermit

Create permits for a recurring contract, including support for defining restrictions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreatePermitRequest;
use \OpenAPI\OpenAPI\Models\Shared\Permit;
use \OpenAPI\OpenAPI\Models\Shared\PermitRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostCreatePermitSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePermitRequest();
    $request->merchantAccount = 'unde';
    $request->permits = [
        new Permit(),
        new Permit(),
        new Permit(),
        new Permit(),
    ];
    $request->recurringDetailReference = 'corrupti';
    $request->shopperReference = 'illum';

    $requestSecurity = new PostCreatePermitSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postCreatePermit($request, $requestSecurity);

    if ($response->createPermitResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisable

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DisableRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDisableSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableRequest();
    $request->contract = 'vel';
    $request->merchantAccount = 'error';
    $request->recurringDetailReference = 'deserunt';
    $request->shopperReference = 'suscipit';

    $requestSecurity = new PostDisableSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postDisable($request, $requestSecurity);

    if ($response->disableResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisablePermit

Disable a permit that was previously linked to a recurringDetailReference.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DisablePermitRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDisablePermitSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisablePermitRequest();
    $request->merchantAccount = 'iure';
    $request->token = 'magnam';

    $requestSecurity = new PostDisablePermitSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postDisablePermit($request, $requestSecurity);

    if ($response->disablePermitResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListRecurringDetails

Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RecurringDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recurring;
use \OpenAPI\OpenAPI\Models\Shared\RecurringContractEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTokenServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostListRecurringDetailsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecurringDetailsRequest();
    $request->merchantAccount = 'debitis';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::ONECLICK;
    $request->recurring->recurringDetailName = 'delectus';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T01:03:07.567Z');
    $request->recurring->recurringFrequency = 'molestiae';
    $request->recurring->tokenService = RecurringTokenServiceEnum::MCTOKENSERVICE;
    $request->shopperReference = 'placeat';

    $requestSecurity = new PostListRecurringDetailsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postListRecurringDetails($request, $requestSecurity);

    if ($response->recurringDetailsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNotifyShopper

Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\NotifyShopperRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostNotifyShopperSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyShopperRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'voluptatum';
    $request->amount->value = 479977;
    $request->billingDate = 'excepturi';
    $request->billingSequenceNumber = 'nisi';
    $request->displayedReference = 'recusandae';
    $request->merchantAccount = 'temporibus';
    $request->recurringDetailReference = 'ab';
    $request->reference = 'quis';
    $request->shopperReference = 'veritatis';
    $request->storedPaymentMethodId = 'deserunt';

    $requestSecurity = new PostNotifyShopperSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postNotifyShopper($request, $requestSecurity);

    if ($response->notifyShopperResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postScheduleAccountUpdater

When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:
* If the card information is provided, all the sub-fields for `card` are mandatory.
* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleAccountUpdaterRequest;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Operations\PostScheduleAccountUpdaterSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleAccountUpdaterRequest();
    $request->additionalData = [
        'ipsam' => 'repellendus',
    ];
    $request->card = new Card();
    $request->card->cvc = 'sapiente';
    $request->card->expiryMonth = 'quo';
    $request->card->expiryYear = 'odit';
    $request->card->holderName = 'at';
    $request->card->issueNumber = 'at';
    $request->card->number = 'maiores';
    $request->card->startMonth = 'molestiae';
    $request->card->startYear = 'quod';
    $request->merchantAccount = 'quod';
    $request->reference = 'esse';
    $request->selectedRecurringDetailReference = 'totam';
    $request->shopperReference = 'porro';

    $requestSecurity = new PostScheduleAccountUpdaterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postScheduleAccountUpdater($request, $requestSecurity);

    if ($response->scheduleAccountUpdaterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

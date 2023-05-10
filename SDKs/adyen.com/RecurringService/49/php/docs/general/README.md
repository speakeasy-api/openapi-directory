# general

### Available Operations

* [postCreatePermit](#postcreatepermit) - Create new permits linked to a recurring contract.
* [postDisable](#postdisable) - Disable stored payment details
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
    $request->merchantAccount = 'iure';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::ONECLICK;
    $request->recurring->recurringDetailName = 'debitis';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T06:18:51.036Z');
    $request->recurring->recurringFrequency = 'tempora';
    $request->recurring->tokenService = RecurringTokenServiceEnum::VISATOKENSERVICE;
    $request->shopperReference = 'molestiae';

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
    $request->amount->currency = 'minus';
    $request->amount->value = 812169;
    $request->billingDate = 'voluptatum';
    $request->billingSequenceNumber = 'iusto';
    $request->displayedReference = 'excepturi';
    $request->merchantAccount = 'nisi';
    $request->recurringDetailReference = 'recusandae';
    $request->reference = 'temporibus';
    $request->shopperReference = 'ab';
    $request->storedPaymentMethodId = 'quis';

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
        'deserunt' => 'perferendis',
    ];
    $request->card = new Card();
    $request->card->cvc = 'ipsam';
    $request->card->expiryMonth = 'repellendus';
    $request->card->expiryYear = 'sapiente';
    $request->card->holderName = 'quo';
    $request->card->issueNumber = 'odit';
    $request->card->number = 'at';
    $request->card->startMonth = 'at';
    $request->card->startYear = 'maiores';
    $request->merchantAccount = 'molestiae';
    $request->reference = 'quod';
    $request->selectedRecurringDetailReference = 'quod';
    $request->shopperReference = 'esse';

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

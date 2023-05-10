# SDK

## Overview

Additional methods that allow you to manage payment details stored for recurring payments. For more information, refer to [Recurring payments](https://docs.adyen.com/developers/features/recurring-payments).

### Available Operations

* [postDisable](#postdisable) - Disables stored payment details.
* [postListRecurringDetails](#postlistrecurringdetails) - Retrieves stored payment details for a shopper.

## postDisable

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/developers/features/recurring-payments/disable-stored-details).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DisableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableRequest();
    $request->contract = 'unde';
    $request->merchantAccount = 'nulla';
    $request->recurringDetailReference = 'corrupti';
    $request->shopperReference = 'illum';

    $response = $sdk->sdk->postDisable($request);

    if ($response->disableResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListRecurringDetails

Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/developers/features/recurring-payments/retrieve-stored-details).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RecurringDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recurring;
use \OpenAPI\OpenAPI\Models\Shared\RecurringContractEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecurringDetailsRequest();
    $request->merchantAccount = 'vel';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::RECURRING;
    $request->recurring->recurringDetailName = 'deserunt';
    $request->shopperReference = 'suscipit';

    $response = $sdk->sdk->postListRecurringDetails($request);

    if ($response->recurringDetailsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# subscriptions

## Overview

Subscribe to be alerted when events occur. For example receive email notification when a contribution is flagged.

### Available Operations

* [deleteSubscriptionsId](#deletesubscriptionsid) - Delete a subscription.
* [getSubscriptionTypes](#getsubscriptiontypes) - Subscription types
* [getSubscriptions](#getsubscriptions) - List subscriptions for the authorised user.

## deleteSubscriptionsId

Delete a subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionsIdRequest();
    $request->id = '2065e904-f3b1-4194-b8ab-f603a79f9dfe';

    $response = $sdk->subscriptions->deleteSubscriptionsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionTypes

List available subscription types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->subscriptions->getSubscriptionTypes();

    if ($response->subscriptionTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptions

List subscriptions for the authorised user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionSubmission;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionSubmission();
    $request->assignment = 'perferendis';
    $request->email = 'Maurine_Kiehn50@hotmail.com';
    $request->includeBody = false;
    $request->includeThumbenail = false;
    $request->slackChannel = 'mollitia';
    $request->types = [
        'voluptatem',
        'quisquam',
    ];

    $response = $sdk->subscriptions->getSubscriptions($request);

    if ($response->subscriptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

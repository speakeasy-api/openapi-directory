# marketplacesOrdersSubscriptionsSubscriptions

### Available Operations

* [activateSubscription](#activatesubscription) - Activate a subscription to the orders
* [createSubscription](#createsubscription) - Creates a subscription to the orders
* [deactivateSubscription](#deactivatesubscription) - Deactivate a subscription to the orders
* [deleteSubscription](#deletesubscription) - Delete a subscription to the orders
* [getSubscription](#getsubscription) - Get a subscription to the orders
* [getSubscriptionList](#getsubscriptionlist) - Get the subscription list
* [getSubscriptionPushReporting](#getsubscriptionpushreporting) - Get the push reporting related to this subscription
* [retryPushOrders](#retrypushorders) - Force retry push orders immediatly

## activateSubscription

At this moment, BeezUP will ensure that your callback url is respecting this specification: 
- https://api.beezup.com/swaggerhub/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/Verification

After that we will send you the orders related to your subscription, respecting this specification: 
- https://api.beezup.com/swaggerhub/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/PushOrders


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActivateSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateSubscriptionRequest();
    $request->activateSubscriptionRequest = new ActivateSubscriptionRequest();
    $request->activateSubscriptionRequest->recoverBeginPeriodOrderLastModificationUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-18T04:24:04.187Z');
    $request->activateSubscriptionRequest->recoverEndPeriodOrderLastModificationUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T03:00:04.529Z');
    $request->id = 'nisi';

    $response = $sdk->marketplacesOrdersSubscriptionsSubscriptions->activateSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscription

Please take a look at this sequence diagram to understand the subscription process to follow [here](https://www.websequencediagrams.com/files/render?link=SBYbeIc8NGshk6ooCbmjoBLIMl4fIGO1xjJbPBQAglBo0n6BwEReh7NXQiPSjOTX)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriptionRequest();
    $request->createSubscriptionRequest = new CreateSubscriptionRequest();
    $request->createSubscriptionRequest->merchantApplicationName = 'MyApp';
    $request->createSubscriptionRequest->merchantApplicationVersion = '1.0';
    $request->createSubscriptionRequest->merchantEmailAlert = 'paulsimon@mysupercompany.com';
    $request->createSubscriptionRequest->name = 'MySubscriptionName';
    $request->createSubscriptionRequest->targetUrl = 'http://www.mydomain.com';
    $request->id = 'fugit';

    $response = $sdk->marketplacesOrdersSubscriptionsSubscriptions->createSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateSubscription

Deactivate a subscription to the orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateSubscriptionRequest();
    $request->id = 'sapiente';

    $response = $sdk->marketplacesOrdersSubscriptionsSubscriptions->deactivateSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscription

Delete a subscription to the orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionRequest();
    $request->id = 'consequuntur';

    $response = $sdk->marketplacesOrdersSubscriptionsSubscriptions->deleteSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscription

Get a subscription to the orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionRequest();
    $request->id = 'ratione';

    $response = $sdk->marketplacesOrdersSubscriptionsSubscriptions->getSubscription($request);

    if ($response->subscriptionIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionList

Get the subscription list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->marketplacesOrdersSubscriptionsSubscriptions->getSubscriptionList();

    if ($response->subscriptionIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionPushReporting

Get the push reporting related to this subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionPushReportingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionPushReportingRequest();
    $request->id = 'explicabo';
    $request->pageNumber = 903984;
    $request->pageSize = 578922;

    $response = $sdk->marketplacesOrdersSubscriptionsSubscriptions->getSubscriptionPushReporting($request);

    if ($response->subscriptionPushReportings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retryPushOrders

In case your subscription consumption is unavailable and your subscription is still active you can ask to retry immediatly to push orders instead of waiting the next scheduled retry date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetryPushOrdersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetryPushOrdersRequest();
    $request->id = 'atque';

    $response = $sdk->marketplacesOrdersSubscriptionsSubscriptions->retryPushOrders($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

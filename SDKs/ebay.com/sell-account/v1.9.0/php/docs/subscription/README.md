# subscription

### Available Operations

* [getSubscription](#getsubscription) - This method retrieves a list of subscriptions associated with the seller account.

## getSubscription

This method retrieves a list of subscriptions associated with the seller account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionRequest();
    $request->continuationToken = 'modi';
    $request->limit = 'praesentium';

    $requestSecurity = new GetSubscriptionSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscription->getSubscription($request, $requestSecurity);

    if ($response->subscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

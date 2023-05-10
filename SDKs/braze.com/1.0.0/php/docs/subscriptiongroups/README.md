# subscriptionGroups

## Overview

Use the Subscription Group REST APIs to programmatically manage the subscription groups that you have stored on the Braze dashboard, on the Subscription Group page.

### Available Operations

* [listUserSSubscriptionGroupSms](#listuserssubscriptiongroupsms) - List User's Subscription Group - SMS
* [listUserSSubscriptionGroupStatusSms](#listuserssubscriptiongroupstatussms) - List User's  Subscription Group Status - SMS

## listUserSSubscriptionGroupSms

Use the endpoint below to list and get the subscription groups of a certain user.

> If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUserSSubscriptionGroupSmsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserSSubscriptionGroupSmsRequest();
    $request->externalId = '{{external_id}}';
    $request->limit = '100';
    $request->offset = '1';
    $request->phone = '+11112223333';

    $response = $sdk->subscriptionGroups->listUserSSubscriptionGroupSms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserSSubscriptionGroupStatusSms

Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.

> *Either `external_id` or `email` are required.

## Response

All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "status": {
    "1": "Unsubscribed",
    "2": "Subscribed"
  },
  "message": "success"
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUserSSubscriptionGroupStatusSmsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserSSubscriptionGroupStatusSmsRequest();
    $request->externalId = '{{external_identifier}}';
    $request->phone = '+11112223333';
    $request->subscriptionGroupId = '{{subscription_group_id}}';

    $response = $sdk->subscriptionGroups->listUserSSubscriptionGroupStatusSms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

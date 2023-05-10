# subscriptionIPNRequests

## Overview

Requests for creating, deleting and listing existing subscriptions

### Available Operations

* [listFailedIPNs](#listfailedipns) - listFailedIPNs
* [listSubscribedAddresses](#listsubscribedaddresses) - listSubscribedAddresses
* [resendFailedIPN](#resendfailedipn) - resendFailedIPN
* [subscribeAddress](#subscribeaddress) - subscribeAddress
* [unsubscribeAddress](#unsubscribeaddress) - unsubscribeAddress

## listFailedIPNs

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFailedIPNsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFailedIPNsRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->contentType = 'application/json';

    $response = $sdk->subscriptionIPNRequests->listFailedIPNs($request);

    if ($response->listFailedIPNs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubscribedAddresses

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscribedAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubscribedAddressesRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->contentType = 'application/json';

    $response = $sdk->subscriptionIPNRequests->listSubscribedAddresses($request);

    if ($response->listSubscribedAddresses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendFailedIPN

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResendFailedIPNRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendFailedIPNRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendFailedIPNRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->resendFailedIPNRequest = new ResendFailedIPNRequest();
    $request->resendFailedIPNRequest->id = 568434;

    $response = $sdk->subscriptionIPNRequests->resendFailedIPN($request);

    if ($response->resendFailedIPN !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeAddress

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubscribeAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscribeAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribeAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->subscribeAddressRequest = new SubscribeAddressRequest();
    $request->subscribeAddressRequest->contractaddress = 'aspernatur';
    $request->subscribeAddressRequest->ethereumaddress = 'perferendis';
    $request->subscribeAddressRequest->url = 'ad';

    $response = $sdk->subscriptionIPNRequests->subscribeAddress($request);

    if ($response->subscribeAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeAddress

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnsubscribeAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnsubscribeAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsubscribeAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->unsubscribeAddressRequest = new UnsubscribeAddressRequest();
    $request->unsubscribeAddressRequest->contractaddress = 'natus';
    $request->unsubscribeAddressRequest->ethereumaddress = 'sed';
    $request->unsubscribeAddressRequest->url = 'iste';

    $response = $sdk->subscriptionIPNRequests->unsubscribeAddress($request);

    if ($response->unsubscribeAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

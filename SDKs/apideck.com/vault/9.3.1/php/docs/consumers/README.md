# consumers

## Overview

A consumer represents an account or user in your system. All connections to connectors are scoped to a consumer.

### Available Operations

* [consumerRequestCountsAll](#consumerrequestcountsall) - Consumer request counts
* [consumersAdd](#consumersadd) - Create consumer
* [consumersAll](#consumersall) - Get all consumers
* [consumersDelete](#consumersdelete) - Delete consumer
* [consumersOne](#consumersone) - Get consumer
* [consumersUpdate](#consumersupdate) - Update consumer

## consumerRequestCountsAll

Get consumer request counts within a given datetime range.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConsumerRequestCountsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsumerRequestCountsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsumerRequestCountsAllRequest();
    $request->consumerId = 'dolorem';
    $request->endDatetime = 'culpa';
    $request->startDatetime = 'consequuntur';
    $request->xApideckAppId = 'repellat';

    $requestSecurity = new ConsumerRequestCountsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->consumers->consumerRequestCountsAll($request, $requestSecurity);

    if ($response->consumerRequestCountsInDateRangeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consumersAdd

Create a consumer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsumerInput;
use \OpenAPI\OpenAPI\Models\Shared\ConsumerMetadata;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsumersAddRequest();
    $request->consumerInput = new ConsumerInput();
    $request->consumerInput->consumerId = 'test_consumer_id';
    $request->consumerInput->metadata = new ConsumerMetadata();
    $request->consumerInput->metadata->accountName = 'SpaceX';
    $request->consumerInput->metadata->email = 'elon@musk.com';
    $request->consumerInput->metadata->image = 'https://www.spacex.com/static/images/share.jpg';
    $request->consumerInput->metadata->userName = 'Elon Musk';
    $request->xApideckAppId = 'mollitia';

    $requestSecurity = new ConsumersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->consumers->consumersAdd($request, $requestSecurity);

    if ($response->createConsumerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consumersAll

This endpoint includes all application consumers, along with an aggregated count of requests made.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsumersAllRequest();
    $request->cursor = 'occaecati';
    $request->limit = 253291;
    $request->xApideckAppId = 'commodi';

    $requestSecurity = new ConsumersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->consumers->consumersAll($request, $requestSecurity);

    if ($response->getConsumersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consumersDelete

Delete consumer and all their connections, including credentials.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsumersDeleteRequest();
    $request->consumerId = 'quam';
    $request->xApideckAppId = 'molestiae';

    $requestSecurity = new ConsumersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->consumers->consumersDelete($request, $requestSecurity);

    if ($response->deleteConsumerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consumersOne

Consumer detail including their aggregated counts with the connections they have authorized.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsumersOneRequest();
    $request->consumerId = 'velit';
    $request->xApideckAppId = 'error';

    $requestSecurity = new ConsumersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->consumers->consumersOne($request, $requestSecurity);

    if ($response->getConsumerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## consumersUpdate

Update consumer metadata such as name and email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConsumerRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsumerMetadata;
use \OpenAPI\OpenAPI\Models\Operations\ConsumersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConsumersUpdateRequest();
    $request->updateConsumerRequest = new UpdateConsumerRequest();
    $request->updateConsumerRequest->metadata = new ConsumerMetadata();
    $request->updateConsumerRequest->metadata->accountName = 'SpaceX';
    $request->updateConsumerRequest->metadata->email = 'elon@musk.com';
    $request->updateConsumerRequest->metadata->image = 'https://www.spacex.com/static/images/share.jpg';
    $request->updateConsumerRequest->metadata->userName = 'Elon Musk';
    $request->consumerId = 'quia';
    $request->xApideckAppId = 'quis';

    $requestSecurity = new ConsumersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->consumers->consumersUpdate($request, $requestSecurity);

    if ($response->updateConsumerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

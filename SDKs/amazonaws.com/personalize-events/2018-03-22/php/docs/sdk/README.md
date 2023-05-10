# SDK

## Overview

Amazon Personalize can consume real-time user event data, such as <i>stream</i> or <i>click</i> data, and use it for model training either alone or combined with historical data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/personalize-events/>
### Available Operations

* [putEvents](#putevents) - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
* [putItems](#putitems) - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
* [putUsers](#putusers) - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.

## putEvents

Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\MetricAttribution;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEventsRequest();
    $request->requestBody = new PutEventsRequestBody();
    $request->requestBody->eventList = [
        new Event(),
        new Event(),
    ];
    $request->requestBody->sessionId = 'iure';
    $request->requestBody->trackingId = 'magnam';
    $request->requestBody->userId = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->putEvents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putItems

Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutItemsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Item;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutItemsRequest();
    $request->requestBody = new PutItemsRequestBody();
    $request->requestBody->datasetArn = 'voluptatum';
    $request->requestBody->items = [
        new Item(),
        new Item(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->putItems($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsers

Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\User;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersRequest();
    $request->requestBody = new PutUsersRequestBody();
    $request->requestBody->datasetArn = 'deserunt';
    $request->requestBody->users = [
        new User(),
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->putUsers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

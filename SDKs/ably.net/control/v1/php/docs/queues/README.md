# queues

### Available Operations

* [deleteAppsAppIdQueuesQueueId](#deleteappsappidqueuesqueueid) - Deletes a queue
* [getAppsAppIdQueues](#getappsappidqueues) - Lists queues
* [postAppsAppIdQueues](#postappsappidqueues) - Creates a queue

## deleteAppsAppIdQueuesQueueId

Deletes a queue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdQueuesQueueIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdQueuesQueueIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppsAppIdQueuesQueueIdRequest();
    $request->appId = 'dolor';
    $request->queueId = 'debitis';

    $requestSecurity = new DeleteAppsAppIdQueuesQueueIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->queues->deleteAppsAppIdQueuesQueueId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsAppIdQueues

Lists queues

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdQueuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdQueuesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsAppIdQueuesRequest();
    $request->appId = 'a';

    $requestSecurity = new GetAppsAppIdQueuesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->queues->getAppsAppIdQueues($request, $requestSecurity);

    if ($response->queueResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdQueues

Creates a queue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdQueuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Queue;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdQueuesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdQueuesRequest();
    $request->appId = 'dolorum';
    $request->queue = new Queue();
    $request->queue->maxLength = 447125;
    $request->queue->name = 'Angel Wolff II';
    $request->queue->region = 'cumque';
    $request->queue->ttl = 813798;

    $requestSecurity = new PostAppsAppIdQueuesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->queues->postAppsAppIdQueues($request, $requestSecurity);

    if ($response->queueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# queues

## Overview

Queue management, send, get and ack.

### Available Operations

* [ackMessage](#ackmessage) - Acknowledge that Queue Message has been processed.
* [createQueue](#createqueue) - Create new queue.
* [deleteQueue](#deletequeue) - Delete Queue.
* [getListOfQueues](#getlistofqueues) - Get list of all Queues.
* [getMessageData](#getmessagedata) - Get data associated with a Queue Message.
* [getNextMessages](#getnextmessages) - Get next Queue Messages from a Queue
* [getQueueConfig](#getqueueconfig) - Get Queue config.
* [sendMessageBinary](#sendmessagebinary) - Send Queue Message with a binary data (blob) payload.
* [updateQueueConfig](#updatequeueconfig) - Update Queue configuration.

## ackMessage

Acknowledge that Queue Message has been processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AckMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AckMessageRequest();
    $request->queueMessageId = 'distinctio';
    $request->queueName = 'quibusdam';

    $response = $sdk->queues->ackMessage($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createQueue

Create new queue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->queues->createQueue();

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQueue

Delete Queue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQueueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQueueRequest();
    $request->confirm = false;
    $request->queueName = 'unde';

    $response = $sdk->queues->deleteQueue($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListOfQueues

Get list of all Queues.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->queues->getListOfQueues();

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessageData

Get data associated with a Queue Message.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessageDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessageDataRequest();
    $request->queueMessageId = 'nulla';
    $request->queueName = 'corrupti';

    $response = $sdk->queues->getMessageData($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNextMessages

Get next Queue Messages from a Queue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNextMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNextMessagesRequest();
    $request->count = 'illum';
    $request->queueName = 'vel';

    $response = $sdk->queues->getNextMessages($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueueConfig

Get Queue config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQueueConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueueConfigRequest();
    $request->queueName = 'error';

    $response = $sdk->queues->getQueueConfig($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendMessageBinary

Send Queue Message with a binary data (blob) payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendMessageBinaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendMessageBinaryRequest();
    $request->requestBody = 'deserunt';
    $request->contentType = 'suscipit';
    $request->delay = 'iure';
    $request->expiration = 'magnam';
    $request->queueName = 'debitis';
    $request->regions = 'ipsa';

    $response = $sdk->queues->sendMessageBinary($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateQueueConfig

Update Queue configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQueueConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateQueueConfigRequest();
    $request->queueName = 'delectus';

    $response = $sdk->queues->updateQueueConfig($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

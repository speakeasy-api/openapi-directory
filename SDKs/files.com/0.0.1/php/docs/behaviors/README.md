# behaviors

## Overview

Operations about behaviors

### Available Operations

* [behaviorListForPath](#behaviorlistforpath) - List Behaviors by path
* [deleteBehaviorsId](#deletebehaviorsid) - Delete Behavior
* [getBehaviors](#getbehaviors) - List Behaviors
* [getBehaviorsId](#getbehaviorsid) - Show Behavior
* [patchBehaviorsId](#patchbehaviorsid) - Update Behavior
* [postBehaviors](#postbehaviors) - Create Behavior
* [postBehaviorsWebhookTest](#postbehaviorswebhooktest) - Test webhook.

## behaviorListForPath

List Behaviors by path

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BehaviorListForPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BehaviorListForPathRequest();
    $request->behavior = 'minus';
    $request->cursor = 'quam';
    $request->filter = [
        'vero' => 'nostrum',
    ];
    $request->filterPrefix = [
        'recusandae' => 'omnis',
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
    ];
    $request->path = 'error';
    $request->perPage = 50370;
    $request->recursive = 'occaecati';
    $request->sortBy = [
        'adipisci' => 'asperiores',
        'earum' => 'modi',
        'iste' => 'dolorum',
    ];

    $response = $sdk->behaviors->behaviorListForPath($request);

    if ($response->behaviorEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBehaviorsId

Delete Behavior

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBehaviorsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBehaviorsIdRequest();
    $request->id = 535633;

    $response = $sdk->behaviors->deleteBehaviorsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBehaviors

List Behaviors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBehaviorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBehaviorsRequest();
    $request->behavior = 'pariatur';
    $request->cursor = 'provident';
    $request->filter = [
        'libero' => 'delectus',
        'quaerat' => 'quos',
        'aliquid' => 'dolorem',
        'dolorem' => 'dolor',
    ];
    $request->filterPrefix = [
        'ipsum' => 'hic',
    ];
    $request->perPage = 569574;
    $request->sortBy = [
        'voluptate' => 'dignissimos',
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];

    $response = $sdk->behaviors->getBehaviors($request);

    if ($response->behaviorEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBehaviorsId

Show Behavior

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBehaviorsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBehaviorsIdRequest();
    $request->id = 85295;

    $response = $sdk->behaviors->getBehaviorsId($request);

    if ($response->behaviorEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchBehaviorsId

Update Behavior

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchBehaviorsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchBehaviorsIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchBehaviorsIdRequestBodyAttachmentFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchBehaviorsIdRequest();
    $request->requestBody = new PatchBehaviorsIdRequestBody();
    $request->requestBody->attachmentDelete = false;
    $request->requestBody->attachmentFile = new PatchBehaviorsIdRequestBodyAttachmentFile();
    $request->requestBody->attachmentFile->attachmentFile = 'ipsa';
    $request->requestBody->attachmentFile->content = 'ipsa';
    $request->requestBody->behavior = 'webhook';
    $request->requestBody->description = 'example';
    $request->requestBody->name = 'example';
    $request->requestBody->path = 'iure';
    $request->requestBody->value = '{"method": "GET"}';
    $request->id = 487838;

    $response = $sdk->behaviors->patchBehaviorsId($request);

    if ($response->behaviorEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBehaviors

Create Behavior

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBehaviorsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostBehaviorsRequestBodyAttachmentFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBehaviorsRequestBody();
    $request->attachmentFile = new PostBehaviorsRequestBodyAttachmentFile();
    $request->attachmentFile->attachmentFile = 'quaerat';
    $request->attachmentFile->content = 'accusamus';
    $request->behavior = 'webhook';
    $request->description = 'example';
    $request->name = 'example';
    $request->path = 'quidem';
    $request->value = '{"method": "GET"}';

    $response = $sdk->behaviors->postBehaviors($request);

    if ($response->behaviorEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBehaviorsWebhookTest

Test webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBehaviorsWebhookTestRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBehaviorsWebhookTestRequestBody();
    $request->action = 'test';
    $request->body = [
        'voluptas' => 'natus',
        'eos' => 'atque',
        'sit' => 'fugiat',
        'ab' => 'soluta',
    ];
    $request->encoding = 'RAW';
    $request->headers = [
        'iusto' => 'voluptate',
        'dolorum' => 'deleniti',
        'omnis' => 'necessitatibus',
    ];
    $request->method = 'GET';
    $request->url = 'https://www.site.com/...';

    $response = $sdk->behaviors->postBehaviorsWebhookTest($request);

    if ($response->statusEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# externalEvents

## Overview

Operations about external_events

### Available Operations

* [getExternalEvents](#getexternalevents) - List External Events
* [getExternalEventsId](#getexternaleventsid) - Show External Event
* [postExternalEvents](#postexternalevents) - Create External Event

## getExternalEvents

List External Events

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExternalEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExternalEventsRequest();
    $request->cursor = 'quasi';
    $request->filter = [
        'nulla' => 'excepturi',
        'voluptatibus' => 'nostrum',
    ];
    $request->filterGt = [
        'quisquam' => 'saepe',
        'ea' => 'impedit',
        'corporis' => 'veniam',
        'aliquid' => 'inventore',
    ];
    $request->filterGteq = [
        'ea' => 'quo',
        'consectetur' => 'recusandae',
    ];
    $request->filterLt = [
        'minima' => 'eaque',
    ];
    $request->filterLteq = [
        'libero' => 'aut',
        'aut' => 'deleniti',
        'impedit' => 'aliquam',
        'fugit' => 'accusamus',
    ];
    $request->filterPrefix = [
        'non' => 'et',
    ];
    $request->perPage = 677412;
    $request->sortBy = [
        'placeat' => 'velit',
        'eum' => 'autem',
        'nobis' => 'quas',
    ];

    $response = $sdk->externalEvents->getExternalEvents($request);

    if ($response->externalEventEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExternalEventsId

Show External Event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExternalEventsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExternalEventsIdRequest();
    $request->id = 829603;

    $response = $sdk->externalEvents->getExternalEventsId($request);

    if ($response->externalEventEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExternalEvents

Create External Event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostExternalEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostExternalEventsRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostExternalEventsRequestBody();
    $request->body = 'example';
    $request->status = PostExternalEventsRequestBodyStatusEnum::SKIPPED;

    $response = $sdk->externalEvents->postExternalEvents($request);

    if ($response->externalEventEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

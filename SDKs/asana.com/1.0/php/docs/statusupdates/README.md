# statusUpdates

## Overview

A status update is an update on the progress of a particular object,
and is sent out to all followers when created. These updates
include both text describing the update and a `status_type` intended to
represent the overall state of the project. These include: `on_track` for projects that
are on track, `at_risk` for projects at risk, `off_track` for projects that
are behind, and `on_hold` for projects on hold.

Status updates can be created and deleted, but not modified.

### Available Operations

* [createStatusForObject](#createstatusforobject) - Create a status update
* [deleteStatus](#deletestatus) - Delete a status update
* [getStatus](#getstatus) - Get a status update
* [getStatusesForObject](#getstatusesforobject) - Get status updates from an object

## createStatusForObject

Creates a new status update on an object.
Returns the full record of the newly created status update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStatusForObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStatusForObjectRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\StatusUpdateRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\StatusUpdateRequestStatusTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStatusForObjectRequest();
    $request->requestBody = new CreateStatusForObjectRequestBodyInput();
    $request->requestBody->data = new StatusUpdateRequestInput();
    $request->requestBody->data->htmlText = '<body>The project <strong>is</strong> moving forward according to plan...</body>';
    $request->requestBody->data->parent = 'porro';
    $request->requestBody->data->statusType = StatusUpdateRequestStatusTypeEnum::DROPPED;
    $request->requestBody->data->text = 'The project is moving forward according to plan...';
    $request->requestBody->data->title = 'Status Update - Jun 15';
    $request->limit = 281730;
    $request->offset = 'facilis';
    $request->optFields = [
        'qui',
        'quae',
        'laudantium',
    ];
    $request->optPretty = false;

    $response = $sdk->statusUpdates->createStatusForObject($request);

    if ($response->createStatusForObject201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStatus

Deletes a specific, existing status update.

Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStatusRequest();
    $request->optFields = [
        'occaecati',
        'voluptatibus',
    ];
    $request->optPretty = false;
    $request->statusGid = 'quisquam';

    $response = $sdk->statusUpdates->deleteStatus($request);

    if ($response->deleteStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatus

Returns the complete record for a single status update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatusRequest();
    $request->optFields = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->optPretty = false;
    $request->statusGid = 'voluptate';

    $response = $sdk->statusUpdates->getStatus($request);

    if ($response->getStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatusesForObject

Returns the compact status update records for all updates on the object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusesForObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatusesForObjectRequest();
    $request->createdSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T05:06:03.793Z');
    $request->limit = 949319;
    $request->offset = 'dignissimos';
    $request->optFields = [
        'distinctio',
        'quod',
        'odio',
        'similique',
    ];
    $request->optPretty = false;
    $request->parent = 'facilis';

    $response = $sdk->statusUpdates->getStatusesForObject($request);

    if ($response->getStatusesForObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

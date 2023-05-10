# projectStatuses

## Overview

*Deprecated: new integrations should prefer using [status updates](/docs/asana-statuses)*

A project status is an update on the progress of a particular project,
and is sent out to all project followers when created. These updates
include both text describing the update and a color code intended to
represent the overall state of the project: "green" for projects that
are on track, "yellow" for projects at risk, "red" for projects that
are behind, and "blue" for projects on hold.

Project statuses can be created and deleted, but not modified.

### Available Operations

* [createProjectStatusForProject](#createprojectstatusforproject) - Create a project status
* [deleteProjectStatus](#deleteprojectstatus) - Delete a project status
* [getProjectStatus](#getprojectstatus) - Get a project status
* [getProjectStatusesForProject](#getprojectstatusesforproject) - Get statuses from a project

## createProjectStatusForProject

*Deprecated: new integrations should prefer the `/status_updates` route.*

Creates a new status update on the project.

Returns the full record of the newly created project status update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectStatusForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectStatusForProjectRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectStatusRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectStatusRequestColorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectStatusForProjectRequest();
    $request->requestBody = new CreateProjectStatusForProjectRequestBodyInput();
    $request->requestBody->data = new ProjectStatusRequestInput();
    $request->requestBody->data->color = ProjectStatusRequestColorEnum::GREEN;
    $request->requestBody->data->htmlText = '<body>The project <strong>is</strong> moving forward according to plan...</body>';
    $request->requestBody->data->text = 'The project is moving forward according to plan...';
    $request->requestBody->data->title = 'Status Update - Jun 15';
    $request->optFields = [
        'corporis',
        'hic',
        'libero',
        'nobis',
    ];
    $request->optPretty = false;
    $request->projectGid = 'dolores';

    $response = $sdk->projectStatuses->createProjectStatusForProject($request);

    if ($response->createProjectStatusForProject201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProjectStatus

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Deletes a specific, existing project status update.

Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectStatusRequest();
    $request->optFields = [
        'totam',
        'dignissimos',
    ];
    $request->optPretty = false;
    $request->projectStatusGid = 'eaque';

    $response = $sdk->projectStatuses->deleteProjectStatus($request);

    if ($response->deleteProjectStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectStatus

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Returns the complete record for a single status update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectStatusRequest();
    $request->optFields = [
        'nesciunt',
        'eos',
    ];
    $request->optPretty = false;
    $request->projectStatusGid = 'perferendis';

    $response = $sdk->projectStatuses->getProjectStatus($request);

    if ($response->getProjectStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectStatusesForProject

*Deprecated: new integrations should prefer the `/status_updates` route.*

Returns the compact project status update records for all updates on the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectStatusesForProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectStatusesForProjectRequest();
    $request->limit = 170986;
    $request->offset = 'minus';
    $request->optFields = [
        'dolor',
        'vero',
    ];
    $request->optPretty = false;
    $request->projectGid = 'nostrum';

    $response = $sdk->projectStatuses->getProjectStatusesForProject($request);

    if ($response->getProjectStatusesForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

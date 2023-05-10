# webBackend

## Overview

Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not
guaranteeing any backwards compatibility.


### Available Operations

* [getStateType](#getstatetype) - Fetch the current state type for a connection.
* [webBackendCheckUpdates](#webbackendcheckupdates) - Returns a summary of source and destination definitions that could be updated.
* [webBackendCreateConnection](#webbackendcreateconnection) - Create a connection
* [webBackendGetConnection](#webbackendgetconnection) - Get a connection
* [webBackendGetWorkspaceState](#webbackendgetworkspacestate) - Returns the current state of a workspace
* [webBackendListConnectionsForWorkspace](#webbackendlistconnectionsforworkspace) - Returns all non-deleted connections for a workspace.
* [webBackendListGeographies](#webbackendlistgeographies) - Returns available geographies can be selected to run data syncs in a particular geography.
The 'auto' entry indicates that the sync will be automatically assigned to a geography according
to the platform default behavior. Entries other than 'auto' are two-letter country codes that
follow the ISO 3166-1 alpha-2 standard.

* [webBackendUpdateConnection](#webbackendupdateconnection) - Update a connection

## getStateType

Fetch the current state type for a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionIdRequestBody();
    $request->connectionId = 'db55410a-dc66-49af-90a2-6c7cdc981f06';

    $response = $sdk->webBackend->getStateType($request);

    if ($response->connectionStateType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webBackendCheckUpdates

Returns a summary of source and destination definitions that could be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->webBackend->webBackendCheckUpdates();

    if ($response->webBackendCheckUpdatesRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webBackendCreateConnection

Create a connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WebBackendConnectionCreate;
use \OpenAPI\OpenAPI\Models\Shared\GeographyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamespaceDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NonBreakingChangesPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationCreate;
use \OpenAPI\OpenAPI\Models\Shared\OperatorConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OperatorDbt;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalization;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalizationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhook;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookDbtCloud;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookWebhookTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleData;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleDataBasicSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleDataBasicScheduleTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleDataCron;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteCatalog;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStreamAndConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStreamConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DestinationSyncModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelectedFieldInfo;
use \OpenAPI\OpenAPI\Models\Shared\SyncModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStream;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebBackendConnectionCreate();
    $request->destinationId = '8981d6bb-33cf-4aa3-88c3-1bf407ee4fcf';
    $request->geography = GeographyEnum::AUTO;
    $request->name = 'Bradley Collins';
    $request->namespaceDefinition = NamespaceDefinitionTypeEnum::DESTINATION;
    $request->namespaceFormat = '${SOURCE_NAMESPACE}';
    $request->nonBreakingChangesPreference = NonBreakingChangesPreferenceEnum::DISABLE;
    $request->operationIds = [
        '5626398a-0dc7-4663-a4cc-b06c8ca12d02',
    ];
    $request->operations = [
        new OperationCreate(),
        new OperationCreate(),
    ];
    $request->prefix = 'aspernatur';
    $request->resourceRequirements = new ResourceRequirements();
    $request->resourceRequirements->cpuLimit = 'perspiciatis';
    $request->resourceRequirements->cpuRequest = 'magni';
    $request->resourceRequirements->memoryLimit = 'odio';
    $request->resourceRequirements->memoryRequest = 'alias';
    $request->schedule = new ConnectionSchedule();
    $request->schedule->timeUnit = ConnectionScheduleTimeUnitEnum::WEEKS;
    $request->schedule->units = 533457;
    $request->scheduleData = new ConnectionScheduleData();
    $request->scheduleData->basicSchedule = new ConnectionScheduleDataBasicSchedule();
    $request->scheduleData->basicSchedule->timeUnit = ConnectionScheduleDataBasicScheduleTimeUnitEnum::MONTHS;
    $request->scheduleData->basicSchedule->units = 368976;
    $request->scheduleData->cron = new ConnectionScheduleDataCron();
    $request->scheduleData->cron->cronExpression = 'odio';
    $request->scheduleData->cron->cronTimeZone = 'fugit';
    $request->scheduleType = ConnectionScheduleTypeEnum::MANUAL;
    $request->sourceCatalogId = 'dd895b8b-cf24-4db9-9969-3352f7453399';
    $request->sourceId = '4d78de3b-6e93-489f-9abb-7f662550a283';
    $request->status = ConnectionStatusEnum::INACTIVE;
    $request->syncCatalog = new AirbyteCatalog();
    $request->syncCatalog->streams = [
        new AirbyteStreamAndConfiguration(),
    ];

    $response = $sdk->webBackend->webBackendCreateConnection($request);

    if ($response->webBackendConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webBackendGetConnection

Get a connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WebBackendConnectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebBackendConnectionRequestBody();
    $request->connectionId = 'ac483afd-2315-4bba-a501-64e06f5bf6ae';
    $request->withRefreshedCatalog = false;

    $response = $sdk->webBackend->webBackendGetConnection($request);

    if ($response->webBackendConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webBackendGetWorkspaceState

Returns the current state of a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WebBackendWorkspaceState;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebBackendWorkspaceState();
    $request->workspaceId = '591bc8bd-ef36-412b-a3c2-05fda840774a';

    $response = $sdk->webBackend->webBackendGetWorkspaceState($request);

    if ($response->webBackendWorkspaceStateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webBackendListConnectionsForWorkspace

Returns all non-deleted connections for a workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WebBackendConnectionListRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebBackendConnectionListRequestBody();
    $request->destinationId = [
        '8a9a35d0-86b6-4f66-bef0-20e9f443b425',
        '7b992c8d-bda6-4a61-afa2-198258fd0a9e',
    ];
    $request->sourceId = [
        'a47f7d3e-f049-4640-96a1-831c87adf596',
        'fdf1ad83-7ae8-40c1-819c-95ba998678fa',
        '3f696991-af38-48ce-8361-4448c7977a0e',
    ];
    $request->workspaceId = 'f2f53602-8efe-4ef9-b415-2ed7e253f4c1';

    $response = $sdk->webBackend->webBackendListConnectionsForWorkspace($request);

    if ($response->webBackendConnectionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webBackendListGeographies

Returns all available geographies in which a data sync can run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->webBackend->webBackendListGeographies();

    if ($response->webBackendGeographiesListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webBackendUpdateConnection

Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Any operations that lack an ID will be created. Then, the newly created operationId will be applied to the
connection along with the rest of the operationIds in the request body.
Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
with the catalog from the request. This means that to modify a single stream, the entire new catalog
containing the updated stream needs to be sent.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WebBackendConnectionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\GeographyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamespaceDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NonBreakingChangesPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebBackendOperationCreateOrUpdate;
use \OpenAPI\OpenAPI\Models\Shared\OperatorConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OperatorDbt;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalization;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalizationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhook;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookDbtCloud;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookWebhookTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleData;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleDataBasicSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleDataBasicScheduleTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleDataCron;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionScheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteCatalog;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStreamAndConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStreamConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DestinationSyncModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelectedFieldInfo;
use \OpenAPI\OpenAPI\Models\Shared\SyncModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStream;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebBackendConnectionUpdate();
    $request->connectionId = '57deaa71-70f4-445a-8cf6-67aaf9bbad18';
    $request->geography = GeographyEnum::AUTO;
    $request->name = 'Pat Goyette PhD';
    $request->namespaceDefinition = NamespaceDefinitionTypeEnum::DESTINATION;
    $request->namespaceFormat = '${SOURCE_NAMESPACE}';
    $request->nonBreakingChangesPreference = NonBreakingChangesPreferenceEnum::DISABLE;
    $request->notifySchemaChanges = false;
    $request->operations = [
        new WebBackendOperationCreateOrUpdate(),
        new WebBackendOperationCreateOrUpdate(),
        new WebBackendOperationCreateOrUpdate(),
        new WebBackendOperationCreateOrUpdate(),
    ];
    $request->prefix = 'nemo';
    $request->resourceRequirements = new ResourceRequirements();
    $request->resourceRequirements->cpuLimit = 'cumque';
    $request->resourceRequirements->cpuRequest = 'voluptatum';
    $request->resourceRequirements->memoryLimit = 'sequi';
    $request->resourceRequirements->memoryRequest = 'atque';
    $request->schedule = new ConnectionSchedule();
    $request->schedule->timeUnit = ConnectionScheduleTimeUnitEnum::MONTHS;
    $request->schedule->units = 714054;
    $request->scheduleData = new ConnectionScheduleData();
    $request->scheduleData->basicSchedule = new ConnectionScheduleDataBasicSchedule();
    $request->scheduleData->basicSchedule->timeUnit = ConnectionScheduleDataBasicScheduleTimeUnitEnum::WEEKS;
    $request->scheduleData->basicSchedule->units = 516556;
    $request->scheduleData->cron = new ConnectionScheduleDataCron();
    $request->scheduleData->cron->cronExpression = 'quod';
    $request->scheduleData->cron->cronTimeZone = 'aspernatur';
    $request->scheduleType = ConnectionScheduleTypeEnum::MANUAL;
    $request->skipReset = false;
    $request->sourceCatalogId = 'cb67fc4b-425e-499e-a234-c9f7b79dfeb7';
    $request->status = ConnectionStatusEnum::INACTIVE;
    $request->syncCatalog = new AirbyteCatalog();
    $request->syncCatalog->streams = [
        new AirbyteStreamAndConfiguration(),
        new AirbyteStreamAndConfiguration(),
        new AirbyteStreamAndConfiguration(),
    ];

    $response = $sdk->webBackend->webBackendUpdateConnection($request);

    if ($response->webBackendConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

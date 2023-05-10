# internal

### Available Operations

* [createOrUpdateState](#createorupdatestate) - Create or update the state for a connection.
* [getAttemptNormalizationStatusesForJob](#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [saveStats](#savestats) - For worker to set sync stats of a running attempt.
* [saveSyncConfig](#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [setWorkflowInAttempt](#setworkflowinattempt) - For worker to register the workflow id in attempt.
* [writeDiscoverCatalogResult](#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

## createOrUpdateState

Create or update the state for a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionStateCreateOrUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionState;
use \OpenAPI\OpenAPI\Models\Shared\GlobalState;
use \OpenAPI\OpenAPI\Models\Shared\StreamState;
use \OpenAPI\OpenAPI\Models\Shared\StreamDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionStateTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionStateCreateOrUpdate();
    $request->connectionId = 'd525f77b-114e-4eb5-aff7-85fc37814d4c';
    $request->connectionState = new ConnectionState();
    $request->connectionState->connectionId = '98e0c2bb-89eb-475d-ad63-6c600503d8bb';
    $request->connectionState->globalState = new GlobalState();
    $request->connectionState->globalState->sharedState = [
        'quasi' => 'dicta',
    ];
    $request->connectionState->globalState->streamStates = [
        new StreamState(),
        new StreamState(),
        new StreamState(),
    ];
    $request->connectionState->state = [
        'earum' => 'iusto',
    ];
    $request->connectionState->stateType = ConnectionStateTypeEnum::GLOBAL;
    $request->connectionState->streamState = [
        new StreamState(),
        new StreamState(),
        new StreamState(),
    ];

    $response = $sdk->internal->createOrUpdateState($request);

    if ($response->connectionState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\JobIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobIdRequestBody();
    $request->id = 677141;

    $response = $sdk->internal->getAttemptNormalizationStatusesForJob($request);

    if ($response->attemptNormalizationStatusReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveStats

For worker to set sync stats of a running attempt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SaveStatsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AttemptStats;
use \OpenAPI\OpenAPI\Models\Shared\AttemptStreamStats;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveStatsRequestBody();
    $request->attemptNumber = 897956;
    $request->jobId = 592880;
    $request->stats = new AttemptStats();
    $request->stats->bytesEmitted = 920272;
    $request->stats->estimatedBytes = 10063;
    $request->stats->estimatedRecords = 366244;
    $request->stats->recordsCommitted = 475826;
    $request->stats->recordsEmitted = 930840;
    $request->stats->stateMessagesEmitted = 708771;
    $request->streamStats = [
        new AttemptStreamStats(),
        new AttemptStreamStats(),
        new AttemptStreamStats(),
    ];

    $response = $sdk->internal->saveStats($request);

    if ($response->internalOperationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveSyncConfig

For worker to save the AttemptSyncConfig for an attempt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SaveAttemptSyncConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AttemptSyncConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionState;
use \OpenAPI\OpenAPI\Models\Shared\GlobalState;
use \OpenAPI\OpenAPI\Models\Shared\StreamState;
use \OpenAPI\OpenAPI\Models\Shared\StreamDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionStateTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveAttemptSyncConfigRequestBody();
    $request->attemptNumber = 43975;
    $request->jobId = 574092;
    $request->syncConfig = new AttemptSyncConfig();
    $request->syncConfig->destinationConfiguration = 'accusamus';
    $request->syncConfig->sourceConfiguration = 'eos';
    $request->syncConfig->state = new ConnectionState();
    $request->syncConfig->state->connectionId = '810331f3-981d-44c7-80b6-07f3c93c73b9';
    $request->syncConfig->state->globalState = new GlobalState();
    $request->syncConfig->state->globalState->sharedState = [
        'officia' => 'amet',
        'tenetur' => 'aspernatur',
        'quo' => 'itaque',
        'illum' => 'laborum',
    ];
    $request->syncConfig->state->globalState->streamStates = [
        new StreamState(),
        new StreamState(),
    ];
    $request->syncConfig->state->state = [
        'qui' => 'consectetur',
        'repellat' => 'explicabo',
        'explicabo' => 'exercitationem',
        'nihil' => 'non',
    ];
    $request->syncConfig->state->stateType = ConnectionStateTypeEnum::GLOBAL;
    $request->syncConfig->state->streamState = [
        new StreamState(),
    ];

    $response = $sdk->internal->saveSyncConfig($request);

    if ($response->internalOperationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setWorkflowInAttempt

For worker to register the workflow id in attempt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SetWorkflowInAttemptRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetWorkflowInAttemptRequestBody();
    $request->attemptNumber = 943851;
    $request->jobId = 644479;
    $request->processingTaskQueue = 'delectus';
    $request->workflowId = 'non';

    $response = $sdk->internal->setWorkflowInAttempt($request);

    if ($response->internalOperationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## writeDiscoverCatalogResult

Should only called from worker, to write result from discover activity back to DB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDiscoverSchemaWriteRequestBody;
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
    $request = new SourceDiscoverSchemaWriteRequestBody();
    $request->catalog = new AirbyteCatalog();
    $request->catalog->streams = [
        new AirbyteStreamAndConfiguration(),
        new AirbyteStreamAndConfiguration(),
        new AirbyteStreamAndConfiguration(),
    ];
    $request->configurationHash = 'in';
    $request->connectorVersion = 'exercitationem';
    $request->sourceId = '44e472e8-0285-47a5-b404-63a7d575f140';

    $response = $sdk->internal->writeDiscoverCatalogResult($request);

    if ($response->discoverCatalogResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

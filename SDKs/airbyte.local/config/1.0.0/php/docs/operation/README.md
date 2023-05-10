# operation

### Available Operations

* [checkOperation](#checkoperation) - Check if an operation to be created is valid
* [createOperation](#createoperation) - Create an operation to be applied as part of a connection pipeline
* [deleteOperation](#deleteoperation) - Delete an operation
* [getOperation](#getoperation) - Returns an operation
* [listOperationsForConnection](#listoperationsforconnection) - Returns all operations for a connection.
* [updateOperation](#updateoperation) - Update an operation

## checkOperation

Check if an operation to be created is valid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OperatorConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OperatorDbt;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalization;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalizationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhook;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookDbtCloud;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookWebhookTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperatorConfiguration();
    $request->dbt = new OperatorDbt();
    $request->dbt->dbtArguments = 'beatae';
    $request->dbt->dockerImage = 'aliquid';
    $request->dbt->gitRepoBranch = 'modi';
    $request->dbt->gitRepoUrl = 'optio';
    $request->normalization = new OperatorNormalization();
    $request->normalization->option = OperatorNormalizationOptionEnum::BASIC;
    $request->operatorType = OperatorTypeEnum::WEBHOOK;
    $request->webhook = new OperatorWebhook();
    $request->webhook->dbtCloud = new OperatorWebhookDbtCloud();
    $request->webhook->dbtCloud->accountId = 562948;
    $request->webhook->dbtCloud->jobId = 639463;
    $request->webhook->executionBody = 'libero';
    $request->webhook->executionUrl = 'totam';
    $request->webhook->webhookConfigId = '366c723f-fda9-4e06-bee4-825c1fc0e115';
    $request->webhook->webhookType = OperatorWebhookWebhookTypeEnum::DBT_CLOUD;

    $response = $sdk->operation->checkOperation($request);

    if ($response->checkOperationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOperation

Create an operation to be applied as part of a connection pipeline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OperationCreate;
use \OpenAPI\OpenAPI\Models\Shared\OperatorConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OperatorDbt;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalization;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalizationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhook;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookDbtCloud;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookWebhookTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationCreate();
    $request->name = 'Ian Auer';
    $request->operatorConfiguration = new OperatorConfiguration();
    $request->operatorConfiguration->dbt = new OperatorDbt();
    $request->operatorConfiguration->dbt->dbtArguments = 'a';
    $request->operatorConfiguration->dbt->dockerImage = 'iste';
    $request->operatorConfiguration->dbt->gitRepoBranch = 'dicta';
    $request->operatorConfiguration->dbt->gitRepoUrl = 'quos';
    $request->operatorConfiguration->normalization = new OperatorNormalization();
    $request->operatorConfiguration->normalization->option = OperatorNormalizationOptionEnum::BASIC;
    $request->operatorConfiguration->operatorType = OperatorTypeEnum::DBT;
    $request->operatorConfiguration->webhook = new OperatorWebhook();
    $request->operatorConfiguration->webhook->dbtCloud = new OperatorWebhookDbtCloud();
    $request->operatorConfiguration->webhook->dbtCloud->accountId = 295950;
    $request->operatorConfiguration->webhook->dbtCloud->jobId = 266284;
    $request->operatorConfiguration->webhook->executionBody = 'itaque';
    $request->operatorConfiguration->webhook->executionUrl = 'maxime';
    $request->operatorConfiguration->webhook->webhookConfigId = '42defcce-8f19-4777-b3e6-3562a7b408f0';
    $request->operatorConfiguration->webhook->webhookType = OperatorWebhookWebhookTypeEnum::DBT_CLOUD;
    $request->workspaceId = '5e3d48fd-af31-43a1-b5fd-94259c0b36f2';

    $response = $sdk->operation->createOperation($request);

    if ($response->operationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOperation

Delete an operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OperationIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationIdRequestBody();
    $request->operationId = '5ea944f3-b756-4c11-b6c3-7a5126243835';

    $response = $sdk->operation->deleteOperation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOperation

Returns an operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OperationIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationIdRequestBody();
    $request->operationId = 'bbc05a23-a45c-4efc-9fde-10a0ce2169e5';

    $response = $sdk->operation->getOperation($request);

    if ($response->operationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOperationsForConnection

List operations for connection.

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
    $request->connectionId = '10019c6d-c5e3-4476-a799-bfbbe6949fb2';

    $response = $sdk->operation->listOperationsForConnection($request);

    if ($response->operationReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOperation

Update an operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OperationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\OperatorConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OperatorDbt;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalization;
use \OpenAPI\OpenAPI\Models\Shared\OperatorNormalizationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhook;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookDbtCloud;
use \OpenAPI\OpenAPI\Models\Shared\OperatorWebhookWebhookTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationUpdate();
    $request->name = 'Alton Goyette';
    $request->operationId = 'ae6c3d5d-b3ad-4ebd-9dae-a4c506a8aa94';
    $request->operatorConfiguration = new OperatorConfiguration();
    $request->operatorConfiguration->dbt = new OperatorDbt();
    $request->operatorConfiguration->dbt->dbtArguments = 'quo';
    $request->operatorConfiguration->dbt->dockerImage = 'perferendis';
    $request->operatorConfiguration->dbt->gitRepoBranch = 'fugit';
    $request->operatorConfiguration->dbt->gitRepoUrl = 'aliquid';
    $request->operatorConfiguration->normalization = new OperatorNormalization();
    $request->operatorConfiguration->normalization->option = OperatorNormalizationOptionEnum::BASIC;
    $request->operatorConfiguration->operatorType = OperatorTypeEnum::NORMALIZATION;
    $request->operatorConfiguration->webhook = new OperatorWebhook();
    $request->operatorConfiguration->webhook->dbtCloud = new OperatorWebhookDbtCloud();
    $request->operatorConfiguration->webhook->dbtCloud->accountId = 308528;
    $request->operatorConfiguration->webhook->dbtCloud->jobId = 755868;
    $request->operatorConfiguration->webhook->executionBody = 'hic';
    $request->operatorConfiguration->webhook->executionUrl = 'nostrum';
    $request->operatorConfiguration->webhook->webhookConfigId = 'e9d9a457-8adc-41ac-a00d-ec001ac802e2';
    $request->operatorConfiguration->webhook->webhookType = OperatorWebhookWebhookTypeEnum::DBT_CLOUD;

    $response = $sdk->operation->updateOperation($request);

    if ($response->operationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

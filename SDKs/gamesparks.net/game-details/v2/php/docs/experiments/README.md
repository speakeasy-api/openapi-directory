# experiments

## Overview

Experiment Rest Controller

### Available Operations

* [createExperimentUsingPOST](#createexperimentusingpost) - createExperiment
* [deleteExperimentUsingDELETE](#deleteexperimentusingdelete) - deleteExperiment
* [doActionExperimentUsingPOST](#doactionexperimentusingpost) - doActionExperiment
* [getExperimentUsingGET](#getexperimentusingget) - getExperiment
* [getExperimentsUsingGET](#getexperimentsusingget) - getExperiments
* [updateExperimentUsingPUT](#updateexperimentusingput) - updateExperiment

## createExperimentUsingPOST

createExperiment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentModel;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentConfigModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExperimentUsingPOSTRequest();
    $request->experimentModel = new ExperimentModel();
    $request->experimentModel->active = false;
    $request->experimentModel->changedFieldsAndInitialValues = [
        'cum' => 'esse',
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
    ];
    $request->experimentModel->complete = false;
    $request->experimentModel->config = new ExperimentConfigModel();
    $request->experimentModel->config->playerMongoQuery = 'sed';
    $request->experimentModel->config->playerQuery = 'iste';
    $request->experimentModel->config->variants = 'dolor';
    $request->experimentModel->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T20:42:46.563Z');
    $request->experimentModel->id = 943749;
    $request->experimentModel->measurements = 'saepe';
    $request->experimentModel->measurementsEsQuery = 'fuga';
    $request->experimentModel->name = 'Stacy Moore';
    $request->experimentModel->percentHash = 'quidem';
    $request->experimentModel->publishedStages = [
        'ipsa',
    ];
    $request->experimentModel->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-31T21:22:14.646Z');
    $request->apiKey = 'mollitia';

    $response = $sdk->experiments->createExperimentUsingPOST($request);

    if ($response->experimentModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExperimentUsingDELETE

deleteExperiment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DELETEExperimentUsingDELETERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DELETEExperimentUsingDELETERequest();
    $request->apiKey = 'laborum';
    $request->id = 170909;

    $response = $sdk->experiments->deleteExperimentUsingDELETE($request);

    if ($response->messageModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doActionExperimentUsingPOST

doActionExperiment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoActionExperimentUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Operations\DoActionExperimentUsingPOSTActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoActionExperimentUsingPOSTRequest();
    $request->action = DoActionExperimentUsingPOSTActionEnum::START;
    $request->apiKey = 'corporis';
    $request->id = 128926;

    $response = $sdk->experiments->doActionExperimentUsingPOST($request);

    if ($response->experimentModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExperimentUsingGET

getExperiment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETExperimentUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETExperimentUsingGETRequest();
    $request->apiKey = 'nobis';
    $request->id = 315428;

    $response = $sdk->experiments->getExperimentUsingGET($request);

    if ($response->experimentModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExperimentsUsingGET

getExperiments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETExperimentsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETExperimentsUsingGETRequest();
    $request->apiKey = 'omnis';

    $response = $sdk->experiments->getExperimentsUsingGET($request);

    if ($response->experimentModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExperimentUsingPUT

updateExperiment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentUsingPUTRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentModel;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentConfigModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExperimentUsingPUTRequest();
    $request->experimentModel = new ExperimentModel();
    $request->experimentModel->active = false;
    $request->experimentModel->changedFieldsAndInitialValues = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->experimentModel->complete = false;
    $request->experimentModel->config = new ExperimentConfigModel();
    $request->experimentModel->config->playerMongoQuery = 'culpa';
    $request->experimentModel->config->playerQuery = 'doloribus';
    $request->experimentModel->config->variants = 'sapiente';
    $request->experimentModel->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-07T17:33:24.154Z');
    $request->experimentModel->id = 208876;
    $request->experimentModel->measurements = 'culpa';
    $request->experimentModel->measurementsEsQuery = 'consequuntur';
    $request->experimentModel->name = 'Shaun McCullough';
    $request->experimentModel->percentHash = 'quam';
    $request->experimentModel->publishedStages = [
        'velit',
        'error',
    ];
    $request->experimentModel->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T15:03:11.112Z');
    $request->apiKey = 'vitae';
    $request->id = 674752;

    $response = $sdk->experiments->updateExperimentUsingPUT($request);

    if ($response->experimentModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

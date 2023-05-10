# testHarness

## Overview

Test Harness Restv 2 Controller

### Available Operations

* [createTestHarnessScenarioUsingPOST](#createtestharnessscenariousingpost) - createTestHarnessScenario
* [deleteTestHarnessScenarioUsingDELETE](#deletetestharnessscenariousingdelete) - deleteTestHarnessScenario
* [getTestHarnessScenarioUsingGET](#gettestharnessscenariousingget) - getTestHarnessScenario
* [getTestHarnessScenariosUsingGET](#gettestharnessscenariosusingget) - getTestHarnessScenarios
* [updateTestHarnessScenarioUsingPUT](#updatetestharnessscenariousingput) - updateTestHarnessScenario

## createTestHarnessScenarioUsingPOST

createTestHarnessScenario

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTestHarnessScenarioUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestHarnessScenarioModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTestHarnessScenarioUsingPOSTRequest();
    $request->testHarnessScenarioModel = new TestHarnessScenarioModel();
    $request->testHarnessScenarioModel->scenarioJson = [
        'quis' => 'nesciunt',
    ];
    $request->testHarnessScenarioModel->scenarioName = 'eos';
    $request->apiKey = 'perferendis';

    $response = $sdk->testHarness->createTestHarnessScenarioUsingPOST($request);

    if ($response->testHarnessScenarioModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTestHarnessScenarioUsingDELETE

deleteTestHarnessScenario

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DELETETestHarnessScenarioUsingDELETERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DELETETestHarnessScenarioUsingDELETERequest();
    $request->apiKey = 'dolores';
    $request->scenarioName = 'minus';

    $response = $sdk->testHarness->deleteTestHarnessScenarioUsingDELETE($request);

    if ($response->messageModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestHarnessScenarioUsingGET

getTestHarnessScenario

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETTestHarnessScenarioUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTestHarnessScenarioUsingGETRequest();
    $request->apiKey = 'quam';
    $request->scenarioName = 'dolor';

    $response = $sdk->testHarness->getTestHarnessScenarioUsingGET($request);

    if ($response->testHarnessScenarioModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestHarnessScenariosUsingGET

getTestHarnessScenarios

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETTestHarnessScenariosUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTestHarnessScenariosUsingGETRequest();
    $request->apiKey = 'vero';

    $response = $sdk->testHarness->getTestHarnessScenariosUsingGET($request);

    if ($response->testHarnessScenarioModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTestHarnessScenarioUsingPUT

updateTestHarnessScenario

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTestHarnessScenarioUsingPUTRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestHarnessScenarioModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTestHarnessScenarioUsingPUTRequest();
    $request->testHarnessScenarioModel = new TestHarnessScenarioModel();
    $request->testHarnessScenarioModel->scenarioJson = [
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->testHarnessScenarioModel->scenarioName = 'perspiciatis';
    $request->apiKey = 'voluptatem';
    $request->scenarioName = 'porro';

    $response = $sdk->testHarness->updateTestHarnessScenarioUsingPUT($request);

    if ($response->testHarnessScenarioModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

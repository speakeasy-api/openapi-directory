# automationRuns

## Overview

Operations about automation_runs

### Available Operations

* [getAutomationRuns](#getautomationruns) - List Automation Runs
* [getAutomationRunsId](#getautomationrunsid) - Show Automation Run

## getAutomationRuns

List Automation Runs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationRunsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationRunsRequest();
    $request->automationId = 369808;
    $request->cursor = 'alias';
    $request->filter = [
        'dolorum' => 'excepturi',
    ];
    $request->perPage = 270008;
    $request->sortBy = [
        'tempore' => 'labore',
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->userId = 576157;

    $response = $sdk->automationRuns->getAutomationRuns($request);

    if ($response->automationRunEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationRunsId

Show Automation Run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationRunsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationRunsIdRequest();
    $request->id = 396098;

    $response = $sdk->automationRuns->getAutomationRunsId($request);

    if ($response->automationRunEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

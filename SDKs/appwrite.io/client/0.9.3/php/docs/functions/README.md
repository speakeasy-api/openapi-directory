# functions

## Overview

The Functions Service allows you view, create and manage your Cloud Functions.

### Available Operations

* [functionsCreateExecution](#functionscreateexecution) - Create Execution
* [functionsGetExecution](#functionsgetexecution) - Get Execution
* [functionsListExecutions](#functionslistexecutions) - List Executions

## functionsCreateExecution

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateExecutionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsCreateExecutionRequest();
    $request->requestBody = new FunctionsCreateExecutionRequestBody();
    $request->requestBody->data = 'omnis';
    $request->functionId = 'voluptate';

    $requestSecurity = new FunctionsCreateExecutionSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsCreateExecution($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsGetExecution

Get a function execution log by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsGetExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsGetExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsGetExecutionRequest();
    $request->executionId = 'cum';
    $request->functionId = 'perferendis';

    $requestSecurity = new FunctionsGetExecutionSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsGetExecution($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsListExecutions

Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsListExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsListExecutionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsListExecutionsRequest();
    $request->functionId = 'doloremque';
    $request->limit = 441711;
    $request->offset = 282807;
    $request->orderType = 'maiores';
    $request->search = 'dicta';

    $requestSecurity = new FunctionsListExecutionsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsListExecutions($request, $requestSecurity);

    if ($response->executionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

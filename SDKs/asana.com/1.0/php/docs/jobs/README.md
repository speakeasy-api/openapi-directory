# jobs

## Overview

Jobs represent processes that handle asynchronous work. A job created when an endpoint requests an action that will be handled asynchronously, such as project or task duplication.

Only the creator of the duplication process can access the duplication status of the new object.

*Note*: With any work that is handled asynchronously (e.g., [project instantation from a template](/docs/instantiate-a-project-from-a-project-template), duplicating a [task](/docs/duplicate-a-task) or [project](/docs/duplicate-a-project), etc.), the *intermittent states* of newly-created objects may not be consistent. That is, object properties may return different values each time when polled until the job `status` has returned a `succeeded` value.

### Available Operations

* [getJob](#getjob) - Get a job by id

## getJob

Returns the full record for a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobRequest();
    $request->jobGid = 'dolorum';
    $request->optFields = [
        'in',
        'illum',
    ];
    $request->optPretty = false;

    $response = $sdk->jobs->getJob($request);

    if ($response->getJob200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

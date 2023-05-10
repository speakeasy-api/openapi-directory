# logs

## Overview

A log represents a request made for a given consumer. Logs include requests made to unified APIs, connectors and the Vault API.

### Available Operations

* [logsAll](#logsall) - Get all consumer request logs

## logsAll

This endpoint includes all consumer request logs.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LogsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\LogsFilter;
use \OpenAPI\OpenAPI\Models\Operations\LogsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LogsAllRequest();
    $request->cursor = 'vitae';
    $request->filter = new LogsFilter();
    $request->filter->connectorId = 'crm+salesforce';
    $request->filter->excludeUnifiedApis = 'vault,proxy';
    $request->filter->statusCode = 201;
    $request->limit = 674752;
    $request->xApideckAppId = 'animi';
    $request->xApideckConsumerId = 'enim';

    $requestSecurity = new LogsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->logs->logsAll($request, $requestSecurity);

    if ($response->getLogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# historyExportResults

## Overview

Operations about history_export_results

### Available Operations

* [getHistoryExportResults](#gethistoryexportresults) - List History Export Results

## getHistoryExportResults

List History Export Results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHistoryExportResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHistoryExportResultsRequest();
    $request->cursor = 'adipisci';
    $request->historyExportId = 249420;
    $request->perPage = 228263;
    $request->userId = 105906;

    $response = $sdk->historyExportResults->getHistoryExportResults($request);

    if ($response->historyExportResultEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

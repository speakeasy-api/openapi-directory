# actionNotificationExportResults

## Overview

Operations about action_notification_export_results

### Available Operations

* [getActionNotificationExportResults](#getactionnotificationexportresults) - List Action Notification Export Results

## getActionNotificationExportResults

List Action Notification Export Results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActionNotificationExportResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionNotificationExportResultsRequest();
    $request->actionNotificationExportId = 602763;
    $request->cursor = 'nulla';
    $request->perPage = 544883;
    $request->userId = 847252;

    $response = $sdk->actionNotificationExportResults->getActionNotificationExportResults($request);

    if ($response->actionNotificationExportResultEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

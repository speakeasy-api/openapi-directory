# historyExports

## Overview

Operations about history_exports

### Available Operations

* [getHistoryExportsId](#gethistoryexportsid) - Show History Export
* [postHistoryExports](#posthistoryexports) - Create History Export

## getHistoryExportsId

Show History Export

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHistoryExportsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHistoryExportsIdRequest();
    $request->id = 489509;

    $response = $sdk->historyExports->getHistoryExportsId($request);

    if ($response->historyExportEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postHistoryExports

Create History Export

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostHistoryExportsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostHistoryExportsRequestBody();
    $request->endAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->queryAction = 'read';
    $request->queryDestination = 'DestFolder';
    $request->queryFailureType = 'bad_password';
    $request->queryFileId = '1';
    $request->queryFolder = 'Folder';
    $request->queryInterface = 'ftp';
    $request->queryIp = '127.0.0.1';
    $request->queryParentId = '1';
    $request->queryPath = 'MyFile.txt';
    $request->querySrc = 'SrcFolder';
    $request->queryTargetId = '1';
    $request->queryTargetName = 'full';
    $request->queryTargetPermission = 'full';
    $request->queryTargetPermissionSet = 'desktop_app';
    $request->queryTargetPlatform = 'windows';
    $request->queryTargetUserId = '1';
    $request->queryTargetUsername = 'jerry';
    $request->queryUserId = '1';
    $request->queryUsername = 'jerry';
    $request->startAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->userId = 950953;

    $response = $sdk->historyExports->postHistoryExports($request);

    if ($response->historyExportEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

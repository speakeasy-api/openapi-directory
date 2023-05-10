# actionNotificationExports

## Overview

Operations about action_notification_exports

### Available Operations

* [getActionNotificationExportsId](#getactionnotificationexportsid) - Show Action Notification Export
* [postActionNotificationExports](#postactionnotificationexports) - Create Action Notification Export

## getActionNotificationExportsId

Show Action Notification Export

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActionNotificationExportsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionNotificationExportsIdRequest();
    $request->id = 423655;

    $response = $sdk->actionNotificationExports->getActionNotificationExportsId($request);

    if ($response->actionNotificationExportEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postActionNotificationExports

Create Action Notification Export

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostActionNotificationExportsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostActionNotificationExportsRequestBody();
    $request->endAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->queryFolder = 'MyFolder';
    $request->queryMessage = 'Connection Refused';
    $request->queryPath = 'MyFile.txt';
    $request->queryRequestMethod = 'GET';
    $request->queryRequestUrl = 'http://example.com/webhook';
    $request->queryStatus = '200';
    $request->querySuccess = true;
    $request->startAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->userId = 623564;

    $response = $sdk->actionNotificationExports->postActionNotificationExports($request);

    if ($response->actionNotificationExportEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# auditLogs

## Overview

The Audit Logs API endpoints allow you to query audit log events across a
namespace.

For more information, see [Audit Log](https://docs.docker.com/docker-hub/audit-log/)


### Available Operations

* [auditLogsGetAuditActions](#auditlogsgetauditactions) - Returns list of audit log actions.
* [auditLogsGetAuditLogs](#auditlogsgetauditlogs) - Returns list of audit log  events.

## auditLogsGetAuditActions

Get audit log actions for a namespace to be used as a filter for querying audit events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuditLogsGetAuditActionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuditLogsGetAuditActionsRequest();
    $request->account = 'sequi';

    $response = $sdk->auditLogs->auditLogsGetAuditActions($request);

    if ($response->getAuditActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## auditLogsGetAuditLogs

Get audit log events for a given namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuditLogsGetAuditLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuditLogsGetAuditLogsRequest();
    $request->account = 'tenetur';
    $request->action = 'ipsam';
    $request->actor = 'id';
    $request->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T03:20:13.120Z');
    $request->name = 'Sabrina Smitham DVM';
    $request->page = 976460;
    $request->pageSize = 878194;
    $request->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-28T23:41:25.321Z');

    $response = $sdk->auditLogs->auditLogsGetAuditLogs($request);

    if ($response->getAuditLogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

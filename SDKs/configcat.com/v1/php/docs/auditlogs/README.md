# auditLogs

## Overview

Access audit log entries.

### Available Operations

* [getAuditlogs](#getauditlogs) - List Audit log items for Product
* [getDeletedSettings](#getdeletedsettings) - List Deleted Settings
* [getOrganizationAuditlogs](#getorganizationauditlogs) - List Audit log items for Organization

## getAuditlogs

This endpoint returns the list of Audit log items for a given Product 
and the result can be optionally filtered by Config and/or Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditlogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditlogsAuditLogTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuditlogsRequest();
    $request->auditLogType = GetAuditlogsAuditLogTypeEnum::WEB_HOOK_CREATED;
    $request->configId = '5907aff1-a3a2-4fa9-8677-39251aa52c3f';
    $request->environmentId = '5ad019da-1ffe-478f-897b-0074f15471b5';
    $request->fromUtcDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-04T09:10:06.610Z');
    $request->productId = 'e13b99d4-88e1-4e91-a450-ad2abd442698';
    $request->toUtcDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T19:07:16.800Z');

    $response = $sdk->auditLogs->getAuditlogs($request);

    if ($response->auditLogItemModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeletedSettings

This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeletedSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeletedSettingsRequest();
    $request->configId = 'd502a94b-b4f6-43c9-a9e9-a3efa77dfb14';

    $response = $sdk->auditLogs->getDeletedSettings($request);

    if ($response->settingModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAuditlogs

This endpoint returns the list of Audit log items for a given Organization 
and the result can be optionally filtered by Product and/or Config and/or Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAuditlogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAuditlogsAuditLogTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAuditlogsRequest();
    $request->auditLogType = GetOrganizationAuditlogsAuditLogTypeEnum::DOMAIN_ADDED;
    $request->configId = 'd66ae395-efb9-4ba8-8f3a-66997074ba44';
    $request->environmentId = '69b6e214-1959-4890-afa5-63e2516fe4c8';
    $request->fromUtcDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T00:19:59.821Z');
    $request->organizationId = '11e5b7fd-2ed0-4289-a1cd-dc692601fb57';
    $request->productId = '6b0d5f0d-30c5-4fbb-a587-053202c73d5f';
    $request->toUtcDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-05T23:06:52.311Z');

    $response = $sdk->auditLogs->getOrganizationAuditlogs($request);

    if ($response->auditLogItemModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

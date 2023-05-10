# inboxRegistrations

## Overview

Operations about inbox_registrations

### Available Operations

* [getInboxRegistrations](#getinboxregistrations) - List Inbox Registrations

## getInboxRegistrations

List Inbox Registrations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInboxRegistrationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInboxRegistrationsRequest();
    $request->cursor = 'minima';
    $request->folderBehaviorId = 748789;
    $request->perPage = 680116;

    $response = $sdk->inboxRegistrations->getInboxRegistrations($request);

    if ($response->inboxRegistrationEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

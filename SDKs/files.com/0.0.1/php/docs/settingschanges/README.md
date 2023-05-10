# settingsChanges

## Overview

Operations about settings_changes

### Available Operations

* [getSettingsChanges](#getsettingschanges) - List Settings Changes

## getSettingsChanges

List Settings Changes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsChangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsChangesRequest();
    $request->apiKeyId = 'possimus';
    $request->cursor = 'animi';
    $request->filter = [
        'aliquid' => 'accusantium',
        'repellat' => 'doloribus',
    ];
    $request->perPage = 351893;
    $request->sortBy = [
        'nam' => 'earum',
        'officia' => 'laborum',
    ];
    $request->userId = 'placeat';

    $response = $sdk->settingsChanges->getSettingsChanges($request);

    if ($response->settingsChangeEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

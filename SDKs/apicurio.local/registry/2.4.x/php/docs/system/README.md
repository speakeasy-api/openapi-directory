# system

## Overview

System level functionality, including versioning and status information.

### Available Operations

* [getResourceLimits](#getresourcelimits) - Get resource limits information
* [getSystemInfo](#getsysteminfo) - Get system information

## getResourceLimits

This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->system->getResourceLimits();

    if ($response->limits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSystemInfo

This operation retrieves information about the running registry system, such as the version
of the software and when it was built.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->system->getSystemInfo();

    if ($response->systemInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

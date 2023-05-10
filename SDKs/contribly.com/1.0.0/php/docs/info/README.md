# info

### Available Operations

* [getArtifactFormats](#getartifactformats) - Artifact formats
* [getChangeLog](#getchangelog) - Recent changes
* [getEventTypes](#geteventtypes) - Event types

## getArtifactFormats

List the available artifact formats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->info->getArtifactFormats();

    if ($response->artifactFormats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChangeLog

The Contribly change log.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->info->getChangeLog();

    if ($response->changeLogItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventTypes

List available notification event types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->info->getEventTypes();

    if ($response->eventTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

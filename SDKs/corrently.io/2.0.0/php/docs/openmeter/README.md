# openMETER

## Overview

Alternative access to OpenMeter Data.

### Available Operations

* [omActivities](#omactivities) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [omMeters](#ommeters) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [omReadings](#omreadings) - Public shared smart meters installed in Germany and available for subservices and exploration.

## omActivities

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->openMETER->omActivities();

    if ($response->ommeters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## omMeters

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->openMETER->omMeters();

    if ($response->ommeters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## omReadings

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->openMETER->omReadings();

    if ($response->ommeters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# region

## Overview

Region Restv 2 Controller

### Available Operations

* [getGameRegionOptionsUsingGET](#getgameregionoptionsusingget) - getGameRegionOptions
* [getRegionOptionsUsingGET](#getregionoptionsusingget) - getRegionOptions
* [setGameRegionUsingPOST](#setgameregionusingpost) - setGameRegion

## getGameRegionOptionsUsingGET

getGameRegionOptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGameRegionOptionsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGameRegionOptionsUsingGETRequest();
    $request->gameApiKey = 'in';

    $response = $sdk->region->getGameRegionOptionsUsingGET($request);

    if ($response->gameRegionOptionsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegionOptionsUsingGET

getRegionOptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->region->getRegionOptionsUsingGET();

    if ($response->gameRegionOptionsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setGameRegionUsingPOST

setGameRegion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetGameRegionUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetGameRegionUsingPOSTRequest();
    $request->gameApiKey = 'architecto';
    $request->regionCode = 'architecto';

    $response = $sdk->region->setGameRegionUsingPOST($request);

    if ($response->regionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

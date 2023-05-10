# SDK

## Overview

This REST-API enables you to query information about travel centers in Germany.

### Available Operations

* [getReisezentren](#getreisezentren) - Get all station infos
* [getReisezentrenLocLatLon](#getreisezentrenloclatlon) - Get information about a station near a location
* [getReisezentrenLocLatLonDist](#getreisezentrenloclatlondist) - Get stations in a given radius
* [getReisezentrenId](#getreisezentrenid) - Get information about a specific station

## getReisezentren

Get all station infos

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReisezentrenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReisezentrenRequest();
    $request->name = 'Johnnie Stamm';

    $response = $sdk->sdk->getReisezentren($request);

    if ($response->travelCenterList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReisezentrenLocLatLon

Get information about a station near a location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReisezentrenLocLatLonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReisezentrenLocLatLonRequest();
    $request->lat = 6458.94;
    $request->lon = 3843.82;

    $response = $sdk->sdk->getReisezentrenLocLatLon($request);

    if ($response->travelCenter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReisezentrenLocLatLonDist

Get stations in a given radius

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReisezentrenLocLatLonDistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReisezentrenLocLatLonDistRequest();
    $request->dist = 4375.87;
    $request->lat = 2975.34;
    $request->lon = 8917.73;

    $response = $sdk->sdk->getReisezentrenLocLatLonDist($request);

    if ($response->travelCenter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReisezentrenId

Get information about a specific station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReisezentrenIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReisezentrenIdRequest();
    $request->id = '0f467cc8-796e-4d15-9a05-dfc2ddf7cc78';

    $response = $sdk->sdk->getReisezentrenId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

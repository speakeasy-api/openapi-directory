# SDK

## Overview

An API that provides names for colors based on their hex value

### Available Operations

* [get](#get) - Get all colors of the default color name list
* [getLists](#getlists) - Get all colors of the default color name list
* [getNames](#getnames) - Get all colors of the default color name list
* [getSwatch](#getswatch) - Generate a color swatch for any color

## get

Get all colors of the default color name list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Shared\PossibleListsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->list = PossibleListsEnum::SANZO_WADA_I;
    $request->noduplicates = false;
    $request->values = 'quibusdam';

    $response = $sdk->sdk->get($request);

    if ($response->get200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLists

Get all colors of the default color name list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getLists();

    if ($response->getLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNames

Get all colors of the default color name list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PossibleListsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesRequest();
    $request->list = PossibleListsEnum::NTC;
    $request->name = 'Johnnie Stamm';

    $response = $sdk->sdk->getNames($request);

    if ($response->getNames200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSwatch

Generate a color swatch for any color

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSwatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSwatchRequest();
    $request->color = 'deserunt';
    $request->name = 'Willie Gulgowski DVM';

    $response = $sdk->sdk->getSwatch($request);

    if ($response->getSwatch200ImageSvgPlusXmlString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

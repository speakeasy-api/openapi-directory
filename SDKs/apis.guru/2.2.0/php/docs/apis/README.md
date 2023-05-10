# apIs

## Overview

Actions relating to APIs in the collection

### Available Operations

* [getAPI](#getapi) - Retrieve one version of a particular API
* [getMetrics](#getmetrics) - Get basic metrics
* [getProvider](#getprovider) - List all APIs for a particular provider
* [getProviders](#getproviders) - List all providers
* [getServiceAPI](#getserviceapi) - Retrieve one version of a particular API with a serviceName.
* [getServices](#getservices) - List all serviceNames for a particular provider
* [listAPIs](#listapis) - List all APIs

## getAPI

Returns the API entry for one specific version of an API where there is no serviceName.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAPIRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAPIRequest();
    $request->api = '2.1.0';
    $request->provider = 'apis.guru';

    $response = $sdk->apIs->getAPI($request);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMetrics

Some basic metrics for the entire directory.
Just stunning numbers to put on a front page and are intended purely for WoW effect :)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apIs->getMetrics();

    if ($response->metrics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvider

List all APIs in the directory for a particular providerName
Returns links to the individual API entry for each API.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProviderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProviderRequest();
    $request->provider = 'apis.guru';

    $response = $sdk->apIs->getProvider($request);

    if ($response->apIs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProviders

List all the providers in the directory


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apIs->getProviders();

    if ($response->getProviders200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceAPI

Returns the API entry for one specific version of an API where there is a serviceName.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceAPIRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceAPIRequest();
    $request->api = '2.1.0';
    $request->provider = 'apis.guru';
    $request->service = 'graph';

    $response = $sdk->apIs->getServiceAPI($request);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServices

List all serviceNames in the directory for a particular providerName


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServicesRequest();
    $request->provider = 'apis.guru';

    $response = $sdk->apIs->getServices($request);

    if ($response->getServices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAPIs

List all APIs in the directory.
Returns links to the OpenAPI definitions for each API in the directory.
If API exist in multiple versions `preferred` one is explicitly marked.
Some basic info from the OpenAPI definition is cached inside each object.
This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apIs->listAPIs();

    if ($response->apIs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

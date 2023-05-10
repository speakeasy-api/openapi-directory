# as2Stations

## Overview

Operations about as2_stations

### Available Operations

* [deleteAs2StationsId](#deleteas2stationsid) - Delete As2 Station
* [getAs2Stations](#getas2stations) - List As2 Stations
* [getAs2StationsId](#getas2stationsid) - Show As2 Station
* [patchAs2StationsId](#patchas2stationsid) - Update As2 Station
* [postAs2Stations](#postas2stations) - Create As2 Station

## deleteAs2StationsId

Delete As2 Station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAs2StationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAs2StationsIdRequest();
    $request->id = 575947;

    $response = $sdk->as2Stations->deleteAs2StationsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAs2Stations

List As2 Stations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAs2StationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAs2StationsRequest();
    $request->cursor = 'veritatis';
    $request->perPage = 929297;

    $response = $sdk->as2Stations->getAs2Stations($request);

    if ($response->as2StationEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAs2StationsId

Show As2 Station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAs2StationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAs2StationsIdRequest();
    $request->id = 277718;

    $response = $sdk->as2Stations->getAs2StationsId($request);

    if ($response->as2StationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAs2StationsId

Update As2 Station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAs2StationsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchAs2StationsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAs2StationsIdRequest();
    $request->requestBody = new PatchAs2StationsIdRequestBody();
    $request->requestBody->name = 'Elizabeth Orn';
    $request->requestBody->privateKey = 'deserunt';
    $request->requestBody->privateKeyPassword = 'distinctio';
    $request->requestBody->publicCertificate = 'quibusdam';
    $request->id = 289406;

    $response = $sdk->as2Stations->patchAs2StationsId($request);

    if ($response->as2StationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAs2Stations

Create As2 Station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAs2StationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAs2StationsRequestBody();
    $request->name = 'Tina Jacobi';
    $request->privateKey = 'perferendis';
    $request->privateKeyPassword = 'magni';
    $request->publicCertificate = 'assumenda';

    $response = $sdk->as2Stations->postAs2Stations($request);

    if ($response->as2StationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

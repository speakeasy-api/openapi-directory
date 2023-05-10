# ipAddresses

## Overview

Operations about ip_addresses

### Available Operations

* [getIpAddresses](#getipaddresses) - List IP Addresses associated with the current site
* [getIpAddressesExavaultReserved](#getipaddressesexavaultreserved) - List all possible public ExaVault IP addresses
* [getIpAddressesReserved](#getipaddressesreserved) - List all possible public IP addresses

## getIpAddresses

List IP Addresses associated with the current site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIpAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIpAddressesRequest();
    $request->cursor = 'perferendis';
    $request->perPage = 546885;

    $response = $sdk->ipAddresses->getIpAddresses($request);

    if ($response->ipAddressEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIpAddressesExavaultReserved

List all possible public ExaVault IP addresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIpAddressesExavaultReservedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIpAddressesExavaultReservedRequest();
    $request->cursor = 'maiores';
    $request->perPage = 274823;

    $response = $sdk->ipAddresses->getIpAddressesExavaultReserved($request);

    if ($response->publicIpAddressEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIpAddressesReserved

List all possible public IP addresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIpAddressesReservedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIpAddressesReservedRequest();
    $request->cursor = 'sed';
    $request->perPage = 592231;

    $response = $sdk->ipAddresses->getIpAddressesReserved($request);

    if ($response->publicIpAddressEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

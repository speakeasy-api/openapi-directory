# vaults

## Overview

Access 1Password Vaults

### Available Operations

* [getVaultById](#getvaultbyid) - Get Vault details and metadata
* [getVaults](#getvaults) - Get all Vaults

## getVaultById

Get Vault details and metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVaultByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVaultByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVaultByIdRequest();
    $request->vaultUuid = 'pariatur';

    $requestSecurity = new GetVaultByIdSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->vaults->getVaultById($request, $requestSecurity);

    if ($response->vault !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVaults

Get all Vaults

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVaultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVaultsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVaultsRequest();
    $request->filter = 'name eq "Some Vault Name"';

    $requestSecurity = new GetVaultsSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->vaults->getVaults($request, $requestSecurity);

    if ($response->vaults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

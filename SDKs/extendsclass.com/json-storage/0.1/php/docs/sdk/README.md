# SDK

## Overview

JSON storage API

### Available Operations

* [deleteBinId](#deletebinid) - Delete a json bin
* [getBinId](#getbinid) - Return a json bin
* [patchBinId](#patchbinid) - Partially update a json bin with JSON Merge Patch
* [postBin](#postbin) - Create a json bin
* [putBinId](#putbinid) - Update a json bin

## deleteBinId

Delete a json bin

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBinIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBinIdRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->sdk->deleteBinId($request);

    if ($response->deleteStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBinId

Return a json bin

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBinIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBinIdRequest();
    $request->id = 'cb739205-9293-496f-aa75-96eb10faaa23';

    $response = $sdk->sdk->getBinId($request);

    if ($response->getBinId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchBinId

Partially update a json bin with JSON Merge Patch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchBinIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchBinIdRequest();
    $request->id = '52c59559-07af-4f1a-ba2f-a9467739251a';

    $response = $sdk->sdk->patchBinId($request);

    if ($response->updateStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBin

Create a json bin

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postBin();

    if ($response->createStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putBinId

Update a json bin

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutBinIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutBinIdRequest();
    $request->id = 'a52c3f5a-d019-4da1-bfe7-8f097b0074f1';

    $response = $sdk->sdk->putBinId($request);

    if ($response->updateStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

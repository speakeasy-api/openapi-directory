# locks

## Overview

Operations about locks

### Available Operations

* [deleteLocksPath](#deletelockspath) - Delete Lock
* [lockListForPath](#locklistforpath) - List Locks by path
* [postLocksPath](#postlockspath) - Create Lock

## deleteLocksPath

Delete Lock

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocksPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLocksPathRequest();
    $request->path = 'eius';
    $request->token = 'necessitatibus';

    $response = $sdk->locks->deleteLocksPath($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lockListForPath

List Locks by path

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LockListForPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LockListForPathRequest();
    $request->cursor = 'ipsum';
    $request->includeChildren = false;
    $request->path = 'ea';
    $request->perPage = 579912;

    $response = $sdk->locks->lockListForPath($request);

    if ($response->lockEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLocksPath

Create Lock

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLocksPathRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLocksPathRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLocksPathRequest();
    $request->requestBody = new PostLocksPathRequestBody();
    $request->requestBody->allowAccessByAnyUser = false;
    $request->requestBody->exclusive = false;
    $request->requestBody->recursive = 'quos';
    $request->requestBody->timeout = 975752;
    $request->path = 'tempora';

    $response = $sdk->locks->postLocksPath($request);

    if ($response->lockEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

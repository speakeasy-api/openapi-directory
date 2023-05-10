# fileActions

## Overview

Operations about file_actions

### Available Operations

* [fileActionBeginUpload](#fileactionbeginupload) - Begin file upload
* [fileActionCopy](#fileactioncopy) - Copy file/folder
* [fileActionFind](#fileactionfind) - Find file/folder by path
* [fileActionMove](#fileactionmove) - Move file/folder

## fileActionBeginUpload

Begin file upload

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileActionBeginUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\FileActionBeginUploadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileActionBeginUploadRequest();
    $request->requestBody = new FileActionBeginUploadRequestBody();
    $request->requestBody->mkdirParents = false;
    $request->requestBody->part = 379034;
    $request->requestBody->parts = 727044;
    $request->requestBody->ref = 'quasi';
    $request->requestBody->restart = 270328;
    $request->requestBody->size = 256139;
    $request->requestBody->withRename = false;
    $request->path = 'explicabo';

    $response = $sdk->fileActions->fileActionBeginUpload($request);

    if ($response->fileUploadPartEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileActionCopy

Copy file/folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileActionCopyRequest;
use \OpenAPI\OpenAPI\Models\Operations\FileActionCopyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileActionCopyRequest();
    $request->requestBody = new FileActionCopyRequestBody();
    $request->requestBody->destination = 'provident';
    $request->requestBody->structure = false;
    $request->path = 'ipsa';

    $response = $sdk->fileActions->fileActionCopy($request);

    if ($response->fileActionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileActionFind

Find file/folder by path

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileActionFindRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileActionFindRequest();
    $request->path = 'molestiae';
    $request->previewSize = 'magnam';
    $request->withPreviews = false;
    $request->withPriorityColor = false;

    $response = $sdk->fileActions->fileActionFind($request);

    if ($response->fileEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileActionMove

Move file/folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileActionMoveRequest;
use \OpenAPI\OpenAPI\Models\Operations\FileActionMoveRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileActionMoveRequest();
    $request->requestBody = new FileActionMoveRequestBody();
    $request->requestBody->destination = 'odio';
    $request->path = 'eius';

    $response = $sdk->fileActions->fileActionMove($request);

    if ($response->fileActionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

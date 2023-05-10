# files

## Overview

Operations about files

### Available Operations

* [deleteFilesPath](#deletefilespath) - Delete file/folder
* [fileDownload](#filedownload) - Download file
* [patchFilesPath](#patchfilespath) - Update file/folder metadata
* [postFilesPath](#postfilespath) - Upload file

## deleteFilesPath

Delete file/folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilesPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFilesPathRequest();
    $request->path = 'quisquam';
    $request->recursive = false;

    $response = $sdk->files->deleteFilesPath($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileDownload

Download file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileDownloadRequest();
    $request->action = 'veritatis';
    $request->path = 'ipsa';
    $request->previewSize = 'id';
    $request->withPreviews = false;
    $request->withPriorityColor = false;

    $response = $sdk->files->fileDownload($request);

    if ($response->fileEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchFilesPath

Update file/folder metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchFilesPathRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchFilesPathRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchFilesPathRequest();
    $request->requestBody = new PatchFilesPathRequestBody();
    $request->requestBody->priorityColor = 'red';
    $request->requestBody->providedMtime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-03T04:27:44.236Z');
    $request->path = 'quo';

    $response = $sdk->files->patchFilesPath($request);

    if ($response->fileEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFilesPath

Upload file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFilesPathRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFilesPathRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFilesPathRequest();
    $request->requestBody = new PostFilesPathRequestBody();
    $request->requestBody->action = 'illum';
    $request->requestBody->etagsEtag = [
        'fuga',
        'eius',
        'eos',
        'voluptas',
    ];
    $request->requestBody->etagsPart = [
        587600,
    ];
    $request->requestBody->length = 9688;
    $request->requestBody->mkdirParents = false;
    $request->requestBody->part = 272822;
    $request->requestBody->parts = 892050;
    $request->requestBody->providedMtime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T06:50:40.250Z');
    $request->requestBody->ref = 'sequi';
    $request->requestBody->restart = 779192;
    $request->requestBody->size = 459856;
    $request->requestBody->structure = 'recusandae';
    $request->requestBody->withRename = false;
    $request->path = 'aperiam';

    $response = $sdk->files->postFilesPath($request);

    if ($response->fileEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

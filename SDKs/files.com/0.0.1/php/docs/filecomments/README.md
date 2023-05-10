# fileComments

## Overview

Operations about file_comments

### Available Operations

* [deleteFileCommentsId](#deletefilecommentsid) - Delete File Comment
* [fileCommentListForPath](#filecommentlistforpath) - List File Comments by path
* [patchFileCommentsId](#patchfilecommentsid) - Update File Comment
* [postFileComments](#postfilecomments) - Create File Comment

## deleteFileCommentsId

Delete File Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileCommentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFileCommentsIdRequest();
    $request->id = 442015;

    $response = $sdk->fileComments->deleteFileCommentsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileCommentListForPath

List File Comments by path

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileCommentListForPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileCommentListForPathRequest();
    $request->cursor = 'quidem';
    $request->path = 'fugiat';
    $request->perPage = 283519;

    $response = $sdk->fileComments->fileCommentListForPath($request);

    if ($response->fileCommentEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchFileCommentsId

Update File Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchFileCommentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchFileCommentsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchFileCommentsIdRequest();
    $request->requestBody = new PatchFileCommentsIdRequestBody();
    $request->requestBody->body = 'eum';
    $request->id = 379927;

    $response = $sdk->fileComments->patchFileCommentsId($request);

    if ($response->fileCommentEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFileComments

Create File Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFileCommentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFileCommentsRequestBody();
    $request->body = 'assumenda';
    $request->path = 'eos';

    $response = $sdk->fileComments->postFileComments($request);

    if ($response->fileCommentEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

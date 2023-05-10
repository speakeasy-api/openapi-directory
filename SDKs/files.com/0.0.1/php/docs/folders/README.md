# folders

## Overview

Operations about folders

### Available Operations

* [folderListForPath](#folderlistforpath) - List Folders by path
* [postFoldersPath](#postfolderspath) - Create folder

## folderListForPath

List Folders by path

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FolderListForPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FolderListForPathRequest();
    $request->cursor = 'distinctio';
    $request->filter = 'quod';
    $request->path = 'dignissimos';
    $request->perPage = 76956;
    $request->previewSize = 'nihil';
    $request->search = 'totam';
    $request->searchAll = false;
    $request->sortBy = [
        'aliquam' => 'odio',
        'occaecati' => 'commodi',
        'sapiente' => 'dolores',
        'deserunt' => 'molestiae',
    ];
    $request->withPreviews = false;
    $request->withPriorityColor = false;

    $response = $sdk->folders->folderListForPath($request);

    if ($response->fileEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFoldersPath

Create folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFoldersPathRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFoldersPathRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFoldersPathRequest();
    $request->requestBody = new PostFoldersPathRequestBody();
    $request->requestBody->mkdirParents = false;
    $request->requestBody->providedMtime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T23:14:37.473Z');
    $request->path = 'eum';

    $response = $sdk->folders->postFoldersPath($request);

    if ($response->fileEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

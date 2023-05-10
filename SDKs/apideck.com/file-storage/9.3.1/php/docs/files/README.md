# files

## Overview

Files resource represents files stored in the cloud storage services. It provides methods for managing and accessing the files, such as uploading, downloading, and deleting files. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Available Operations

* [filesAll](#filesall) - List Files
* [filesDelete](#filesdelete) - Delete File
* [filesDownload](#filesdownload) - Download File
* [filesOne](#filesone) - Get File
* [filesSearch](#filessearch) - Search Files
* [filesUpdate](#filesupdate) - Rename or move File

## filesAll

List Files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FilesAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilesSort;
use \OpenAPI\OpenAPI\Models\Shared\FilesSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\FilesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilesAllRequest();
    $request->cursor = 'cumque';
    $request->fields = 'facere';
    $request->filter = new FilesFilter();
    $request->filter->driveId = '1234';
    $request->filter->folderId = 'root';
    $request->filter->shared = false;
    $request->limit = 411820;
    $request->passThrough = [
        'laborum' => 'accusamus',
        'non' => 'occaecati',
    ];
    $request->raw = false;
    $request->sort = new FilesSort();
    $request->sort->by = FilesSortByEnum::UPDATED_AT;
    $request->sort->direction = SortDirectionEnum::ASC;
    $request->xApideckAppId = 'accusamus';
    $request->xApideckConsumerId = 'delectus';
    $request->xApideckServiceId = 'quidem';

    $requestSecurity = new FilesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->files->filesAll($request, $requestSecurity);

    if ($response->getFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## filesDelete

Delete File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FilesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\FilesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilesDeleteRequest();
    $request->id = '9ba88f3a-6699-4707-8ba4-469b6e214195';
    $request->raw = false;
    $request->xApideckAppId = 'provident';
    $request->xApideckConsumerId = 'quos';
    $request->xApideckServiceId = 'sint';

    $requestSecurity = new FilesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->files->filesDelete($request, $requestSecurity);

    if ($response->deleteFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## filesDownload

Download File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FilesDownloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\FilesDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilesDownloadRequest();
    $request->fields = 'accusantium';
    $request->id = 'afa563e2-516f-4e4c-8b71-1e5b7fd2ed02';
    $request->xApideckAppId = 'praesentium';
    $request->xApideckConsumerId = 'natus';
    $request->xApideckServiceId = 'magni';

    $requestSecurity = new FilesDownloadSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->files->filesDownload($request, $requestSecurity);

    if ($response->filesDownload200WildcardBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## filesOne

Get File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FilesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\FilesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilesOneRequest();
    $request->fields = 'sunt';
    $request->id = 'cddc6926-01fb-4576-b0d5-f0d30c5fbb25';
    $request->raw = false;
    $request->xApideckAppId = 'totam';
    $request->xApideckConsumerId = 'dignissimos';
    $request->xApideckServiceId = 'eaque';

    $requestSecurity = new FilesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->files->filesOne($request, $requestSecurity);

    if ($response->getFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## filesSearch

Search Files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FilesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesSearch;
use \OpenAPI\OpenAPI\Models\Operations\FilesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilesSearchRequest();
    $request->filesSearch = new FilesSearch();
    $request->filesSearch->driveId = '1234';
    $request->filesSearch->query = 'logo jpg';
    $request->fields = 'quis';
    $request->passThrough = [
        'eos' => 'perferendis',
    ];
    $request->xApideckAppId = 'dolores';
    $request->xApideckConsumerId = 'minus';
    $request->xApideckServiceId = 'quam';

    $requestSecurity = new FilesSearchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->files->filesSearch($request, $requestSecurity);

    if ($response->getFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## filesUpdate

Rename or move File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\FilesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilesUpdateRequest();
    $request->updateFileRequest = new UpdateFileRequest();
    $request->updateFileRequest->description = 'Renamed PDF Document';
    $request->updateFileRequest->name = 'New Name.pdf';
    $request->updateFileRequest->parentFolderId = '1234';
    $request->id = '3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486';
    $request->raw = false;
    $request->xApideckAppId = 'dolorem';
    $request->xApideckConsumerId = 'dolorem';
    $request->xApideckServiceId = 'dolor';

    $requestSecurity = new FilesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->files->filesUpdate($request, $requestSecurity);

    if ($response->updateFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# storage

## Overview

The Storage service allows you to manage your project files.

### Available Operations

* [storageCreateFile](#storagecreatefile) - Create File
* [storageDeleteFile](#storagedeletefile) - Delete File
* [storageGetFile](#storagegetfile) - Get File
* [storageGetFileDownload](#storagegetfiledownload) - Get File for Download
* [storageGetFilePreview](#storagegetfilepreview) - Get File Preview
* [storageGetFileView](#storagegetfileview) - Get File for View
* [storageListFiles](#storagelistfiles) - List Files
* [storageUpdateFile](#storageupdatefile) - Update File

## storageCreateFile

Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageCreateFileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StorageCreateFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageCreateFileRequestBody();
    $request->file = 'corporis';
    $request->read = [
        'iusto',
        'dicta',
    ];
    $request->write = [
        'enim',
        'accusamus',
        'commodi',
    ];

    $requestSecurity = new StorageCreateFileSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->storage->storageCreateFile($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageDeleteFile

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageDeleteFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\StorageDeleteFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDeleteFileRequest();
    $request->fileId = 'repudiandae';

    $requestSecurity = new StorageDeleteFileSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->storage->storageDeleteFile($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageGetFile

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageGetFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\StorageGetFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageGetFileRequest();
    $request->fileId = 'quae';

    $requestSecurity = new StorageGetFileSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->storage->storageGetFile($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageGetFileDownload

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageGetFileDownloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\StorageGetFileDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageGetFileDownloadRequest();
    $request->fileId = 'ipsum';

    $requestSecurity = new StorageGetFileDownloadSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->storage->storageGetFileDownload($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageGetFilePreview

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageGetFilePreviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\StorageGetFilePreviewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageGetFilePreviewRequest();
    $request->background = 'quidem';
    $request->borderColor = 'molestias';
    $request->borderRadius = 566602;
    $request->borderWidth = 865103;
    $request->fileId = 'modi';
    $request->gravity = 'praesentium';
    $request->height = 523248;
    $request->opacity = 9167.23;
    $request->output = 'quasi';
    $request->quality = 921158;
    $request->rotation = 575947;
    $request->width = 83112;

    $requestSecurity = new StorageGetFilePreviewSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->storage->storageGetFilePreview($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageGetFileView

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageGetFileViewRequest;
use \OpenAPI\OpenAPI\Models\Operations\StorageGetFileViewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageGetFileViewRequest();
    $request->fileId = 'itaque';

    $requestSecurity = new StorageGetFileViewSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->storage->storageGetFileView($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageListFiles

Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageListFilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\StorageListFilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageListFilesRequest();
    $request->limit = 277718;
    $request->offset = 318569;
    $request->orderType = 'consequatur';
    $request->search = 'est';

    $requestSecurity = new StorageListFilesSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->storage->storageListFiles($request, $requestSecurity);

    if ($response->fileList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageUpdateFile

Update a file by its unique ID. Only users with write permissions have access to update this resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageUpdateFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\StorageUpdateFileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StorageUpdateFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageUpdateFileRequest();
    $request->requestBody = new StorageUpdateFileRequestBody();
    $request->requestBody->read = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->write = [
        'modi',
        'qui',
    ];
    $request->fileId = 'aliquid';

    $requestSecurity = new StorageUpdateFileSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->storage->storageUpdateFile($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

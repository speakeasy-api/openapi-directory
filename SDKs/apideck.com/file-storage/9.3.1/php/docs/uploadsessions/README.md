# uploadSessions

## Overview

Upload sessions resource represents the sessions used for uploading files to the cloud storage service. It provides methods for managing and accessing the upload sessions, such as creating and resuming upload sessions. An upload session allows for efficient uploading of large files by breaking them into smaller chunks and uploading each chunk individually.

### Available Operations

* [uploadSessionsAdd](#uploadsessionsadd) - Start Upload Session
* [uploadSessionsDelete](#uploadsessionsdelete) - Abort Upload Session
* [uploadSessionsFinish](#uploadsessionsfinish) - Finish Upload Session
* [uploadSessionsOne](#uploadsessionsone) - Get Upload Session
* [uploadSessionsUpload](#uploadsessionsupload) - Upload part of File to Upload Session

## uploadSessionsAdd

Start an Upload Session. Upload sessions are used to upload large files, use the [Upload File](#operation/filesUpload) endpoint to upload smaller files (up to 100MB). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUploadSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadSessionsAddRequest();
    $request->createUploadSessionRequest = new CreateUploadSessionRequest();
    $request->createUploadSessionRequest->driveId = '1234';
    $request->createUploadSessionRequest->name = 'Documents';
    $request->createUploadSessionRequest->parentFolderId = '1234';
    $request->createUploadSessionRequest->size = 1810673;
    $request->raw = false;
    $request->xApideckAppId = 'explicabo';
    $request->xApideckConsumerId = 'provident';
    $request->xApideckServiceId = 'ipsa';

    $requestSecurity = new UploadSessionsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploadSessions->uploadSessionsAdd($request, $requestSecurity);

    if ($response->createUploadSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadSessionsDelete

Abort Upload Session. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadSessionsDeleteRequest();
    $request->id = '7474778a-7bd4-466d-a8c1-0ab3cdca4251';
    $request->raw = false;
    $request->xApideckAppId = 'cupiditate';
    $request->xApideckConsumerId = 'consequatur';
    $request->xApideckServiceId = 'tempora';

    $requestSecurity = new UploadSessionsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploadSessions->uploadSessionsDelete($request, $requestSecurity);

    if ($response->deleteUploadSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadSessionsFinish

Finish Upload Session. Only call this endpoint after all File parts have been uploaded to [Upload part of File](#operation/uploadSessionsUpload). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsFinishRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsFinishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadSessionsFinishRequest();
    $request->requestBody = [
        'ipsam' => 'aspernatur',
        'sequi' => 'quo',
        'esse' => 'recusandae',
        'aperiam' => 'distinctio',
    ];
    $request->digest = 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=';
    $request->id = 'c7178e47-96f2-4a70-8688-282aa482562f';
    $request->raw = false;
    $request->xApideckAppId = 'consequuntur';
    $request->xApideckConsumerId = 'ratione';
    $request->xApideckServiceId = 'explicabo';

    $requestSecurity = new UploadSessionsFinishSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploadSessions->uploadSessionsFinish($request, $requestSecurity);

    if ($response->getFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadSessionsOne

Get Upload Session. Use the `part_size` to split your file into parts. Upload the parts to the [Upload part of File](#operation/uploadSessionsUpload) endpoint. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadSessionsOneRequest();
    $request->fields = 'saepe';
    $request->id = '9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4';
    $request->raw = false;
    $request->xApideckAppId = 'sapiente';
    $request->xApideckConsumerId = 'consectetur';
    $request->xApideckServiceId = 'esse';

    $requestSecurity = new UploadSessionsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploadSessions->uploadSessionsOne($request, $requestSecurity);

    if ($response->getUploadSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadSessionsUpload

Upload part of File to Upload Session (max 100MB). Get `part_size` from [Get Upload Session](#operation/uploadSessionsOne) first. Every File part (except the last one) uploaded to this endpoint should have Content-Length equal to `part_size`. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadSessionsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadSessionsUploadRequest();
    $request->requestBody = 'blanditiis';
    $request->digest = 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=';
    $request->id = '9fd871f9-9dd2-4efd-921a-a6f1e674bdb0';
    $request->partNumber = 3069.86;
    $request->raw = false;
    $request->xApideckAppId = 'sapiente';
    $request->xApideckConsumerId = 'dicta';
    $request->xApideckServiceId = 'ullam';

    $requestSecurity = new UploadSessionsUploadSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->uploadSessions->uploadSessionsUpload($request, $requestSecurity);

    if ($response->updateUploadSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

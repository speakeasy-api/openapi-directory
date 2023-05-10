# media

### Available Operations

* [createMedia](#createmedia) - Create media
* [findMedia](#findmedia) - Find media
* [getMedia](#getmedia) - Get a specific media
* [getMediaData](#getmediadata) - Download media by extension
* [getMediaDataBinary](#getmediadatabinary) - Download a MP3 media
* [getMediaDataByKey](#getmediadatabykey) - Download media by extension

## createMedia

Uploads media file to account, acceptable media formats: bmp, gif, jpg, m4a, mp3, mp4, png, wav

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMediaRequestBody();
    $request->file = new CreateMediaRequestBodyFile();
    $request->file->content = 'ipsum';
    $request->file->file = 'voluptate';
    $request->name = 'Elbert Gislason I';

    $requestSecurity = new CreateMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->media->createMedia($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findMedia

Find media files created by user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindMediaRequest();
    $request->fields = 'optio';
    $request->filter = 'accusamus';
    $request->limit = 320017;
    $request->offset = 904425;

    $requestSecurity = new FindMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->media->findMedia($request, $requestSecurity);

    if ($response->mediaPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMedia

Get media resource by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMediaRequest();
    $request->fields = 'suscipit';
    $request->id = 645785;

    $requestSecurity = new GetMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->media->getMedia($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMediaData

Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMediaDataRequest();
    $request->extension = 'provident';
    $request->id = 324683;

    $requestSecurity = new GetMediaDataSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->media->getMediaData($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMediaDataBinary

Download a MP3 media, endpoint returns application/binary content-type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaDataBinaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaDataBinarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMediaDataBinaryRequest();
    $request->id = 831049;

    $requestSecurity = new GetMediaDataBinarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->media->getMediaDataBinary($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMediaDataByKey

Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaDataByKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaDataByKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMediaDataByKeyRequest();
    $request->extension = 'totam';
    $request->key = 'similique';

    $requestSecurity = new GetMediaDataByKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->media->getMediaDataByKey($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

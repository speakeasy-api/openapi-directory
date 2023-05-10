# files

### Available Operations

* [downloadFileByID](#downloadfilebyid) - Get the content of a File
* [getDetailsOfFileById](#getdetailsoffilebyid) - Get the details of a File
* [getItemFiles](#getitemfiles) - Get all the files inside an Item

## downloadFileByID

Get the content of a File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DownloadFileByIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\DownloadFileByIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadFileByIDRequest();
    $request->fileUuid = 'corrupti';
    $request->itemUuid = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->vaultUuid = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';

    $requestSecurity = new DownloadFileByIDSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->files->downloadFileByID($request, $requestSecurity);

    if ($response->downloadFileByID200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetailsOfFileById

Get the details of a File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDetailsOfFileByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDetailsOfFileByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDetailsOfFileByIdRequest();
    $request->fileUuid = 'b7392059-2939-46fe-a759-6eb10faaa235';
    $request->inlineFiles = true;
    $request->itemUuid = '2c595590-7aff-41a3-a2fa-9467739251aa';
    $request->vaultUuid = '52c3f5ad-019d-4a1f-be78-f097b0074f15';

    $requestSecurity = new GetDetailsOfFileByIdSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->files->getDetailsOfFileById($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemFiles

Get all the files inside an Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemFilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItemFilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemFilesRequest();
    $request->inlineFiles = true;
    $request->itemUuid = '471b5e6e-13b9-49d4-88e1-e91e450ad2ab';
    $request->vaultUuid = 'd4426980-2d50-42a9-8bb4-f63c969e9a3e';

    $requestSecurity = new GetItemFilesSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->files->getItemFiles($request, $requestSecurity);

    if ($response->files !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

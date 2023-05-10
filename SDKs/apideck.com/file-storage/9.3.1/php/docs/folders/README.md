# folders

## Overview

Folders resource represents the folders within a drive in the cloud storage service. It provides methods for managing and accessing the folders, such as creating, deleting, and listing files & folders in a given folder.

### Available Operations

* [foldersAdd](#foldersadd) - Create Folder
* [foldersCopy](#folderscopy) - Copy Folder
* [foldersDelete](#foldersdelete) - Delete Folder
* [foldersOne](#foldersone) - Get Folder
* [foldersUpdate](#foldersupdate) - Rename or move Folder

## foldersAdd

Create Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FoldersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFolderRequestInput;
use \OpenAPI\OpenAPI\Models\Operations\FoldersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FoldersAddRequest();
    $request->createFolderRequestInput = new CreateFolderRequestInput();
    $request->createFolderRequestInput->description = 'My Personal Documents';
    $request->createFolderRequestInput->driveId = '1234';
    $request->createFolderRequestInput->name = 'Documents';
    $request->createFolderRequestInput->parentFolderId = '1234';
    $request->fields = 'qui';
    $request->raw = false;
    $request->xApideckAppId = 'ipsum';
    $request->xApideckConsumerId = 'hic';
    $request->xApideckServiceId = 'excepturi';

    $requestSecurity = new FoldersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->folders->foldersAdd($request, $requestSecurity);

    if ($response->createFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## foldersCopy

Copy Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FoldersCopyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyFolderRequestInput;
use \OpenAPI\OpenAPI\Models\Operations\FoldersCopySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FoldersCopyRequest();
    $request->copyFolderRequestInput = new CopyFolderRequestInput();
    $request->copyFolderRequestInput->name = 'Documents';
    $request->copyFolderRequestInput->parentFolderId = '1234';
    $request->fields = 'cum';
    $request->id = '77f3a410-0674-4ebf-a928-0d1ba77a89eb';
    $request->raw = false;
    $request->xApideckAppId = 'asperiores';
    $request->xApideckConsumerId = 'nihil';
    $request->xApideckServiceId = 'ipsum';

    $requestSecurity = new FoldersCopySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->folders->foldersCopy($request, $requestSecurity);

    if ($response->updateFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## foldersDelete

Delete Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FoldersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\FoldersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FoldersDeleteRequest();
    $request->id = '7ae4203c-e5e6-4a95-98a0-d446ce2af7a7';
    $request->raw = false;
    $request->xApideckAppId = 'ipsum';
    $request->xApideckConsumerId = 'quisquam';
    $request->xApideckServiceId = 'tenetur';

    $requestSecurity = new FoldersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->folders->foldersDelete($request, $requestSecurity);

    if ($response->deleteFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## foldersOne

Get Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FoldersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\FoldersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FoldersOneRequest();
    $request->fields = 'amet';
    $request->id = 'be453f87-0b32-46b5-a734-29cdb1a8422b';
    $request->raw = false;
    $request->xApideckAppId = 'facilis';
    $request->xApideckConsumerId = 'aliquid';
    $request->xApideckServiceId = 'quam';

    $requestSecurity = new FoldersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->folders->foldersOne($request, $requestSecurity);

    if ($response->getFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## foldersUpdate

Rename or move Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FoldersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFolderRequestInput;
use \OpenAPI\OpenAPI\Models\Operations\FoldersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FoldersUpdateRequest();
    $request->updateFolderRequestInput = new UpdateFolderRequestInput();
    $request->updateFolderRequestInput->description = 'My Personal Documents';
    $request->updateFolderRequestInput->name = 'Documents';
    $request->updateFolderRequestInput->parentFolderId = '1234';
    $request->id = '9d232271-5bf0-4cbb-9e31-b8b90f3443a1';
    $request->raw = false;
    $request->xApideckAppId = 'quae';
    $request->xApideckConsumerId = 'aut';
    $request->xApideckServiceId = 'quas';

    $requestSecurity = new FoldersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->folders->foldersUpdate($request, $requestSecurity);

    if ($response->updateFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# drives

## Overview

Drives resource represents logical containers for storing folders and files in the cloud storage service. It provides methods for managing and accessing the drives, such as creating, deleting, and listing drives.

### Available Operations

* [drivesAdd](#drivesadd) - Create Drive
* [drivesAll](#drivesall) - List Drives
* [drivesDelete](#drivesdelete) - Delete Drive
* [drivesOne](#drivesone) - Get Drive
* [drivesUpdate](#drivesupdate) - Update Drive

## drivesAdd

Create Drive

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DrivesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\DriveInput;
use \OpenAPI\OpenAPI\Models\Operations\DrivesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivesAddRequest();
    $request->driveInput = new DriveInput();
    $request->driveInput->description = 'A description';
    $request->driveInput->name = 'Project Resources';
    $request->raw = false;
    $request->xApideckAppId = 'commodi';
    $request->xApideckConsumerId = 'quam';
    $request->xApideckServiceId = 'molestiae';

    $requestSecurity = new DrivesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->drives->drivesAdd($request, $requestSecurity);

    if ($response->createDriveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivesAll

List Drives

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DrivesAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\DrivesFilter;
use \OpenAPI\OpenAPI\Models\Operations\DrivesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivesAllRequest();
    $request->cursor = 'velit';
    $request->fields = 'error';
    $request->filter = new DrivesFilter();
    $request->filter->groupId = '1234';
    $request->limit = 158969;
    $request->raw = false;
    $request->xApideckAppId = 'quis';
    $request->xApideckConsumerId = 'vitae';
    $request->xApideckServiceId = 'laborum';

    $requestSecurity = new DrivesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->drives->drivesAll($request, $requestSecurity);

    if ($response->getDrivesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivesDelete

Delete Drive

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DrivesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DrivesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivesDeleteRequest();
    $request->id = 'a52c3f5a-d019-4da1-bfe7-8f097b0074f1';
    $request->raw = false;
    $request->xApideckAppId = 'corporis';
    $request->xApideckConsumerId = 'dolore';
    $request->xApideckServiceId = 'iusto';

    $requestSecurity = new DrivesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->drives->drivesDelete($request, $requestSecurity);

    if ($response->deleteDriveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivesOne

Get Drive

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DrivesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\DrivesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivesOneRequest();
    $request->fields = 'dicta';
    $request->id = 'b5e6e13b-99d4-488e-9e91-e450ad2abd44';
    $request->raw = false;
    $request->xApideckAppId = 'qui';
    $request->xApideckConsumerId = 'aliquid';
    $request->xApideckServiceId = 'cupiditate';

    $requestSecurity = new DrivesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->drives->drivesOne($request, $requestSecurity);

    if ($response->getDriveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivesUpdate

Update Drive

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DrivesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DriveInput;
use \OpenAPI\OpenAPI\Models\Operations\DrivesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivesUpdateRequest();
    $request->driveInput = new DriveInput();
    $request->driveInput->description = 'A description';
    $request->driveInput->name = 'Project Resources';
    $request->id = '802d502a-94bb-44f6-bc96-9e9a3efa77df';
    $request->raw = false;
    $request->xApideckAppId = 'rerum';
    $request->xApideckConsumerId = 'dicta';
    $request->xApideckServiceId = 'magnam';

    $requestSecurity = new DrivesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->drives->drivesUpdate($request, $requestSecurity);

    if ($response->updateDriveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

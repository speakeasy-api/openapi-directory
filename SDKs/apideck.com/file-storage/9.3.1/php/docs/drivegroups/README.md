# driveGroups

## Overview

Drive Groups resource represents the groups of drives in the cloud storage service. It provides methods for managing and accessing the drive groups, such as creating, deleting, and listing drive groups. A drive group is a logical grouping of drives, which can be used to manage the drives in the cloud storage service.

### Available Operations

* [driveGroupsAdd](#drivegroupsadd) - Create DriveGroup
* [driveGroupsAll](#drivegroupsall) - List DriveGroups
* [driveGroupsDelete](#drivegroupsdelete) - Delete DriveGroup
* [driveGroupsOne](#drivegroupsone) - Get DriveGroup
* [driveGroupsUpdate](#drivegroupsupdate) - Update DriveGroup

## driveGroupsAdd

Create DriveGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\DriveGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveGroupsAddRequest();
    $request->driveGroupInput = new DriveGroupInput();
    $request->driveGroupInput->description = 'A description';
    $request->driveGroupInput->displayName = 'accounting';
    $request->driveGroupInput->name = 'accounting';
    $request->raw = false;
    $request->xApideckAppId = 'quibusdam';
    $request->xApideckConsumerId = 'unde';
    $request->xApideckServiceId = 'nulla';

    $requestSecurity = new DriveGroupsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->driveGroups->driveGroupsAdd($request, $requestSecurity);

    if ($response->createDriveGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveGroupsAll

List DriveGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\DriveGroupsFilter;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveGroupsAllRequest();
    $request->cursor = 'corrupti';
    $request->fields = 'illum';
    $request->filter = new DriveGroupsFilter();
    $request->filter->parentGroupId = '1234';
    $request->limit = 423655;
    $request->raw = false;
    $request->xApideckAppId = 'error';
    $request->xApideckConsumerId = 'deserunt';
    $request->xApideckServiceId = 'suscipit';

    $requestSecurity = new DriveGroupsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->driveGroups->driveGroupsAll($request, $requestSecurity);

    if ($response->getDriveGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveGroupsDelete

Delete DriveGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveGroupsDeleteRequest();
    $request->id = '74e0f467-cc87-496e-9151-a05dfc2ddf7c';
    $request->raw = false;
    $request->xApideckAppId = 'quod';
    $request->xApideckConsumerId = 'esse';
    $request->xApideckServiceId = 'totam';

    $requestSecurity = new DriveGroupsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->driveGroups->driveGroupsDelete($request, $requestSecurity);

    if ($response->deleteDriveGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveGroupsOne

Get DriveGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveGroupsOneRequest();
    $request->fields = 'porro';
    $request->id = 'a1ba928f-c816-4742-8b73-9205929396fe';
    $request->raw = false;
    $request->xApideckAppId = 'fuga';
    $request->xApideckConsumerId = 'in';
    $request->xApideckServiceId = 'corporis';

    $requestSecurity = new DriveGroupsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->driveGroups->driveGroupsOne($request, $requestSecurity);

    if ($response->getDriveGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveGroupsUpdate

Update DriveGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DriveGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DriveGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveGroupsUpdateRequest();
    $request->driveGroupInput = new DriveGroupInput();
    $request->driveGroupInput->description = 'A description';
    $request->driveGroupInput->displayName = 'accounting';
    $request->driveGroupInput->name = 'accounting';
    $request->id = '96eb10fa-aa23-452c-9955-907aff1a3a2f';
    $request->raw = false;
    $request->xApideckAppId = 'mollitia';
    $request->xApideckConsumerId = 'occaecati';
    $request->xApideckServiceId = 'numquam';

    $requestSecurity = new DriveGroupsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->driveGroups->driveGroupsUpdate($request, $requestSecurity);

    if ($response->updateDriveGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

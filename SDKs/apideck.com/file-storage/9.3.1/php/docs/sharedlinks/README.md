# sharedLinks

## Overview

Shared links resource represents the links to files and folders in the cloud storage service that have been shared with other users. It provides methods for managing and accessing the shared links, such as creating, deleting, and listing shared links. A shared link allows other users to access the file or folder that it points to, either by viewing it online or by downloading it.

### Available Operations

* [sharedLinksAdd](#sharedlinksadd) - Create Shared Link
* [sharedLinksAll](#sharedlinksall) - List SharedLinks
* [sharedLinksDelete](#sharedlinksdelete) - Delete Shared Link
* [sharedLinksOne](#sharedlinksone) - Get Shared Link
* [sharedLinksUpdate](#sharedlinksupdate) - Update Shared Link

## sharedLinksAdd

Create Shared Link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\SharedLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\SharedLinkScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SharedLinksAddRequest();
    $request->sharedLinkInput = new SharedLinkInput();
    $request->sharedLinkInput->downloadUrl = 'https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg';
    $request->sharedLinkInput->password = 'itaque';
    $request->sharedLinkInput->scope = SharedLinkScopeEnum::COMPANY;
    $request->sharedLinkInput->targetId = 'consequatur';
    $request->raw = false;
    $request->xApideckAppId = 'est';
    $request->xApideckConsumerId = 'repellendus';
    $request->xApideckServiceId = 'porro';

    $requestSecurity = new SharedLinksAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sharedLinks->sharedLinksAdd($request, $requestSecurity);

    if ($response->createSharedLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sharedLinksAll

List SharedLinks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SharedLinksAllRequest();
    $request->cursor = 'doloribus';
    $request->fields = 'ut';
    $request->limit = 703495;
    $request->raw = false;
    $request->xApideckAppId = 'cupiditate';
    $request->xApideckConsumerId = 'qui';
    $request->xApideckServiceId = 'quae';

    $requestSecurity = new SharedLinksAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sharedLinks->sharedLinksAll($request, $requestSecurity);

    if ($response->getSharedLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sharedLinksDelete

Delete Shared Link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SharedLinksDeleteRequest();
    $request->id = '879fce95-3f73-4ef7-bbc7-abd74dd39c0f';
    $request->raw = false;
    $request->xApideckAppId = 'exercitationem';
    $request->xApideckConsumerId = 'nulla';
    $request->xApideckServiceId = 'fugit';

    $requestSecurity = new SharedLinksDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sharedLinks->sharedLinksDelete($request, $requestSecurity);

    if ($response->deleteSharedLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sharedLinksOne

Get Shared Link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SharedLinksOneRequest();
    $request->fields = 'porro';
    $request->id = 'ff7c70a4-5626-4d43-a813-f16d9f5fce6c';
    $request->raw = false;
    $request->xApideckAppId = 'corporis';
    $request->xApideckConsumerId = 'veniam';
    $request->xApideckServiceId = 'aliquid';

    $requestSecurity = new SharedLinksOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sharedLinks->sharedLinksOne($request, $requestSecurity);

    if ($response->getSharedLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sharedLinksUpdate

Update Shared Link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SharedLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\SharedLinkScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SharedLinksUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SharedLinksUpdateRequest();
    $request->sharedLinkInput = new SharedLinkInput();
    $request->sharedLinkInput->downloadUrl = 'https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg';
    $request->sharedLinkInput->password = 'inventore';
    $request->sharedLinkInput->scope = SharedLinkScopeEnum::COMPANY;
    $request->sharedLinkInput->targetId = 'magnam';
    $request->id = '6c3e250f-b008-4c42-a141-aac366c8dd6b';
    $request->raw = false;
    $request->xApideckAppId = 'quasi';
    $request->xApideckConsumerId = 'tempora';
    $request->xApideckServiceId = 'numquam';

    $requestSecurity = new SharedLinksUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sharedLinks->sharedLinksUpdate($request, $requestSecurity);

    if ($response->updateSharedLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

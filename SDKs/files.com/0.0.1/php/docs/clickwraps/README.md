# clickwraps

## Overview

Operations about clickwraps

### Available Operations

* [deleteClickwrapsId](#deleteclickwrapsid) - Delete Clickwrap
* [getClickwraps](#getclickwraps) - List Clickwraps
* [getClickwrapsId](#getclickwrapsid) - Show Clickwrap
* [patchClickwrapsId](#patchclickwrapsid) - Update Clickwrap
* [postClickwraps](#postclickwraps) - Create Clickwrap

## deleteClickwrapsId

Delete Clickwrap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClickwrapsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClickwrapsIdRequest();
    $request->id = 269479;

    $response = $sdk->clickwraps->deleteClickwrapsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClickwraps

List Clickwraps

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClickwrapsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClickwrapsRequest();
    $request->cursor = 'ipsam';
    $request->perPage = 410492;

    $response = $sdk->clickwraps->getClickwraps($request);

    if ($response->clickwrapEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClickwrapsId

Show Clickwrap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClickwrapsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClickwrapsIdRequest();
    $request->id = 136900;

    $response = $sdk->clickwraps->getClickwrapsId($request);

    if ($response->clickwrapEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchClickwrapsId

Update Clickwrap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchClickwrapsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchClickwrapsIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchClickwrapsIdRequestBodyUseWithBundlesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchClickwrapsIdRequestBodyUseWithInboxesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchClickwrapsIdRequestBodyUseWithUsersEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchClickwrapsIdRequest();
    $request->requestBody = new PatchClickwrapsIdRequestBody();
    $request->requestBody->body = '[Legal body text]';
    $request->requestBody->name = 'Example Site NDA for Files.com Use';
    $request->requestBody->useWithBundles = PatchClickwrapsIdRequestBodyUseWithBundlesEnum::AVAILABLE;
    $request->requestBody->useWithInboxes = PatchClickwrapsIdRequestBodyUseWithInboxesEnum::REQUIRE;
    $request->requestBody->useWithUsers = PatchClickwrapsIdRequestBodyUseWithUsersEnum::NONE;
    $request->id = 189848;

    $response = $sdk->clickwraps->patchClickwrapsId($request);

    if ($response->clickwrapEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postClickwraps

Create Clickwrap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostClickwrapsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostClickwrapsRequestBodyUseWithBundlesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostClickwrapsRequestBodyUseWithInboxesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostClickwrapsRequestBodyUseWithUsersEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostClickwrapsRequestBody();
    $request->body = '[Legal body text]';
    $request->name = 'Example Site NDA for Files.com Use';
    $request->useWithBundles = PostClickwrapsRequestBodyUseWithBundlesEnum::AVAILABLE;
    $request->useWithInboxes = PostClickwrapsRequestBodyUseWithInboxesEnum::AVAILABLE;
    $request->useWithUsers = PostClickwrapsRequestBodyUseWithUsersEnum::NONE;

    $response = $sdk->clickwraps->postClickwraps($request);

    if ($response->clickwrapEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

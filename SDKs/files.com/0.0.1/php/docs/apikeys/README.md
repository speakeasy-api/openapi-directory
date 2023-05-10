# apiKeys

## Overview

Operations about api_keys

### Available Operations

* [deleteApiKeysId](#deleteapikeysid) - Delete Api Key
* [getApiKeys](#getapikeys) - List Api Keys
* [getApiKeysId](#getapikeysid) - Show Api Key
* [patchApiKeysId](#patchapikeysid) - Update Api Key
* [postApiKeys](#postapikeys) - Create Api Key

## deleteApiKeysId

Delete Api Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiKeysIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiKeysIdRequest();
    $request->id = 384382;

    $response = $sdk->apiKeys->deleteApiKeysId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiKeys

List Api Keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiKeysRequest();
    $request->cursor = 'iure';
    $request->filter = [
        'debitis' => 'ipsa',
        'delectus' => 'tempora',
    ];
    $request->filterGt = [
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->filterGteq = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->filterLt = [
        'quis' => 'veritatis',
    ];
    $request->filterLteq = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->perPage = 870013;
    $request->sortBy = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->userId = 118274;

    $response = $sdk->apiKeys->getApiKeys($request);

    if ($response->apiKeyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiKeysId

Show Api Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiKeysIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiKeysIdRequest();
    $request->id = 720633;

    $response = $sdk->apiKeys->getApiKeysId($request);

    if ($response->apiKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchApiKeysId

Update Api Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchApiKeysIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchApiKeysIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchApiKeysIdRequestBodyPermissionSetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchApiKeysIdRequest();
    $request->requestBody = new PatchApiKeysIdRequestBody();
    $request->requestBody->description = 'example';
    $request->requestBody->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->requestBody->name = 'My Main API Key';
    $request->requestBody->permissionSet = PatchApiKeysIdRequestBodyPermissionSetEnum::FULL;
    $request->id = 639921;

    $response = $sdk->apiKeys->patchApiKeysId($request);

    if ($response->apiKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiKeys

Create Api Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiKeysRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiKeysRequestBodyPermissionSetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiKeysRequestBody();
    $request->description = 'example';
    $request->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->name = 'My Main API Key';
    $request->path = 'shared/docs';
    $request->permissionSet = PostApiKeysRequestBodyPermissionSetEnum::FULL;
    $request->userId = 582020;

    $response = $sdk->apiKeys->postApiKeys($request);

    if ($response->apiKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

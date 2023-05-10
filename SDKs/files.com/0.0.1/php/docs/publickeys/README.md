# publicKeys

## Overview

Operations about public_keys

### Available Operations

* [deletePublicKeysId](#deletepublickeysid) - Delete Public Key
* [getPublicKeys](#getpublickeys) - List Public Keys
* [getPublicKeysId](#getpublickeysid) - Show Public Key
* [patchPublicKeysId](#patchpublickeysid) - Update Public Key
* [postPublicKeys](#postpublickeys) - Create Public Key

## deletePublicKeysId

Delete Public Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePublicKeysIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePublicKeysIdRequest();
    $request->id = 922348;

    $response = $sdk->publicKeys->deletePublicKeysId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicKeys

List Public Keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicKeysRequest();
    $request->cursor = 'atque';
    $request->perPage = 541381;
    $request->userId = 120919;

    $response = $sdk->publicKeys->getPublicKeys($request);

    if ($response->publicKeyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicKeysId

Show Public Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicKeysIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicKeysIdRequest();
    $request->id = 923306;

    $response = $sdk->publicKeys->getPublicKeysId($request);

    if ($response->publicKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPublicKeysId

Update Public Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchPublicKeysIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchPublicKeysIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPublicKeysIdRequest();
    $request->requestBody = new PatchPublicKeysIdRequestBody();
    $request->requestBody->title = 'My Main Key';
    $request->id = 680697;

    $response = $sdk->publicKeys->patchPublicKeysId($request);

    if ($response->publicKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPublicKeys

Create Public Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPublicKeysRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPublicKeysRequestBody();
    $request->publicKey = 'repellendus';
    $request->title = 'My Main Key';
    $request->userId = 287119;

    $response = $sdk->publicKeys->postPublicKeys($request);

    if ($response->publicKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

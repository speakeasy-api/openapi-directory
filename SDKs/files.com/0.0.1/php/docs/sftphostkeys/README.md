# sftpHostKeys

## Overview

Operations about sftp_host_keys

### Available Operations

* [deleteSftpHostKeysId](#deletesftphostkeysid) - Delete Sftp Host Key
* [getSftpHostKeys](#getsftphostkeys) - List Sftp Host Keys
* [getSftpHostKeysId](#getsftphostkeysid) - Show Sftp Host Key
* [patchSftpHostKeysId](#patchsftphostkeysid) - Update Sftp Host Key
* [postSftpHostKeys](#postsftphostkeys) - Create Sftp Host Key

## deleteSftpHostKeysId

Delete Sftp Host Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSftpHostKeysIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSftpHostKeysIdRequest();
    $request->id = 266697;

    $response = $sdk->sftpHostKeys->deleteSftpHostKeysId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSftpHostKeys

List Sftp Host Keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSftpHostKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSftpHostKeysRequest();
    $request->cursor = 'voluptatibus';
    $request->perPage = 564064;

    $response = $sdk->sftpHostKeys->getSftpHostKeys($request);

    if ($response->sftpHostKeyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSftpHostKeysId

Show Sftp Host Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSftpHostKeysIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSftpHostKeysIdRequest();
    $request->id = 889794;

    $response = $sdk->sftpHostKeys->getSftpHostKeysId($request);

    if ($response->sftpHostKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchSftpHostKeysId

Update Sftp Host Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchSftpHostKeysIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchSftpHostKeysIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchSftpHostKeysIdRequest();
    $request->requestBody = new PatchSftpHostKeysIdRequestBody();
    $request->requestBody->name = 'Noel Bruen';
    $request->requestBody->privateKey = 'quis';
    $request->id = 82057;

    $response = $sdk->sftpHostKeys->patchSftpHostKeysId($request);

    if ($response->sftpHostKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSftpHostKeys

Create Sftp Host Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSftpHostKeysRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSftpHostKeysRequestBody();
    $request->name = 'Mrs. Erma Berge';
    $request->privateKey = 'eum';

    $response = $sdk->sftpHostKeys->postSftpHostKeys($request);

    if ($response->sftpHostKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

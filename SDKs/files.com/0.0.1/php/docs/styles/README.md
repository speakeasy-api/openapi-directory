# styles

## Overview

Operations about styles

### Available Operations

* [deleteStylesPath](#deletestylespath) - Delete Style
* [getStylesPath](#getstylespath) - Show Style
* [patchStylesPath](#patchstylespath) - Update Style

## deleteStylesPath

Delete Style

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStylesPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStylesPathRequest();
    $request->path = 'ipsa';

    $response = $sdk->styles->deleteStylesPath($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStylesPath

Show Style

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStylesPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStylesPathRequest();
    $request->path = 'quas';

    $response = $sdk->styles->getStylesPath($request);

    if ($response->styleEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchStylesPath

Update Style

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchStylesPathRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchStylesPathRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchStylesPathRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchStylesPathRequest();
    $request->requestBody = new PatchStylesPathRequestBody();
    $request->requestBody->file = new PatchStylesPathRequestBodyFile();
    $request->requestBody->file->content = 'eveniet';
    $request->requestBody->file->file = 'impedit';
    $request->path = 'officiis';

    $response = $sdk->styles->patchStylesPath($request);

    if ($response->styleEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

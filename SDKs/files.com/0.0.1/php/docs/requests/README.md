# requests

## Overview

Operations about requests

### Available Operations

* [deleteRequestsId](#deleterequestsid) - Delete Request
* [getRequests](#getrequests) - List Requests
* [getRequestsFoldersPath](#getrequestsfolderspath) - List Requests
* [postRequests](#postrequests) - Create Request

## deleteRequestsId

Delete Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRequestsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRequestsIdRequest();
    $request->id = 293144;

    $response = $sdk->requests->deleteRequestsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRequests

List Requests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequestsRequest();
    $request->cursor = 'dolorum';
    $request->mine = false;
    $request->path = 'nesciunt';
    $request->perPage = 63207;
    $request->sortBy = [
        'omnis' => 'quaerat',
        'molestiae' => 'ex',
        'ut' => 'culpa',
        'adipisci' => 'debitis',
    ];

    $response = $sdk->requests->getRequests($request);

    if ($response->requestEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRequestsFoldersPath

List Requests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequestsFoldersPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequestsFoldersPathRequest();
    $request->cursor = 'laudantium';
    $request->mine = false;
    $request->path = 'eum';
    $request->perPage = 367927;
    $request->sortBy = [
        'esse' => 'provident',
        'quis' => 'eum',
        'reiciendis' => 'provident',
        'aspernatur' => 'ullam',
    ];

    $response = $sdk->requests->getRequestsFoldersPath($request);

    if ($response->requestEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRequests

Create Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRequestsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRequestsRequestBody();
    $request->destination = 'quasi';
    $request->groupIds = 'animi';
    $request->path = 'nostrum';
    $request->userIds = 'mollitia';

    $response = $sdk->requests->postRequests($request);

    if ($response->requestEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

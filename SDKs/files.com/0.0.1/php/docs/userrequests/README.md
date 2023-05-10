# userRequests

## Overview

Operations about user_requests

### Available Operations

* [deleteUserRequestsId](#deleteuserrequestsid) - Delete User Request
* [getUserRequests](#getuserrequests) - List User Requests
* [getUserRequestsId](#getuserrequestsid) - Show User Request
* [postUserRequests](#postuserrequests) - Create User Request

## deleteUserRequestsId

Delete User Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequestsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequestsIdRequest();
    $request->id = 216457;

    $response = $sdk->userRequests->deleteUserRequestsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserRequests

List User Requests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequestsRequest();
    $request->cursor = 'impedit';
    $request->perPage = 166047;

    $response = $sdk->userRequests->getUserRequests($request);

    if ($response->userRequestEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserRequestsId

Show User Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequestsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequestsIdRequest();
    $request->id = 746585;

    $response = $sdk->userRequests->getUserRequestsId($request);

    if ($response->userRequestEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUserRequests

Create User Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUserRequestsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUserRequestsRequestBody();
    $request->details = 'repudiandae';
    $request->email = 'Eldred.Kub@hotmail.com';
    $request->name = 'Gladys Satterfield';

    $response = $sdk->userRequests->postUserRequests($request);

    if ($response->userRequestEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

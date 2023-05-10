# user

## Overview

Manage users

### Available Operations

* [getUsers](#getusers) - List users
* [getUsersId](#getusersid) - Retrieve a single user by id
* [getUsersIdLinkedType](#getusersidlinkedtype) - Retrieve a users linked profile by type

## getUsers

List users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->assignment = 'recusandae';
    $request->country = 'Kenya';
    $request->linkedProfile = 'provident';
    $request->minimumContributions = 3374.77;
    $request->ownedBy = 'eum';
    $request->submittedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-22T21:44:03.640Z');
    $request->submittedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T14:31:36.261Z');
    $request->username = 'Ava_OKon';

    $response = $sdk->user->getUsers($request);

    if ($response->users !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersId

Retrieve a single user by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdRequest();
    $request->id = '9da660ff-57bf-4aad-8f9e-fc1b4512c103';

    $response = $sdk->user->getUsersId($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdLinkedType

Retrieve a users linked profile by type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdLinkedTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdLinkedTypeRequest();
    $request->id = '2648dc2f-6151-499e-bfd0-e9fe6c632ca3';
    $request->type = 'animi';

    $response = $sdk->user->getUsersIdLinkedType($request);

    if ($response->linkedProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

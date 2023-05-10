# attendeesSignins

## Overview

Endpoints related to attendees signing in on the premises

### Available Operations

* [deleteSigninSigninId](#deletesigninsigninid) - Delete a signin record
* [getSigninSigninId](#getsigninsigninid) - Retrieve the information associated with a signin record
* [getSignins](#getsignins) - Get signin info
* [postSignin](#postsignin) - Create a new signin record
* [putSigninSigninId](#putsigninsigninid) - Update a signin record

## deleteSigninSigninId

Delete a signin record      


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSigninSigninIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSigninSigninIdRequest();
    $request->signinId = 1;

    $response = $sdk->attendeesSignins->deleteSigninSigninId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSigninSigninId

Retrieve the information associated with a signin record


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSigninSigninIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSigninSigninIdRequest();
    $request->signinId = 1;

    $response = $sdk->attendeesSignins->getSigninSigninId($request);

    if ($response->signin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSignins

Returns a list of signin objects sorted by signin ID descending.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSigninsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSigninsRequest();
    $request->lessThan = 548814;
    $request->returnCount = 592845;

    $response = $sdk->attendeesSignins->getSignins($request);

    if ($response->signins !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSignin

Create a new signin record

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Signin;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Signin();
    $request->dt = 1593409124.23;
    $request->email = 'jqp@example.com';
    $request->id = 125;
    $request->name = 'John Q. Public';
    $request->phone = '(111)222-3333';

    $response = $sdk->attendeesSignins->postSignin($request);

    if ($response->signinResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSigninSigninId

Update a signin record


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSigninSigninIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Signin;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSigninSigninIdRequest();
    $request->signin = new Signin();
    $request->signin->dt = 1593409124.23;
    $request->signin->email = 'jqp@example.com';
    $request->signin->id = 125;
    $request->signin->name = 'John Q. Public';
    $request->signin->phone = '(111)222-3333';
    $request->signinId = 1;

    $response = $sdk->attendeesSignins->putSigninSigninId($request);

    if ($response->userRecord !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# privateRiddles

## Overview

Store and Retrive your Riddles

Find out more
<http://fungenerators.com/api/riddle>
### Available Operations

* [deleteRiddle](#deleteriddle) - Create a random Riddle entry.
* [getRiddle](#getriddle) - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
* [postRiddle](#postriddle) - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
* [putRiddle](#putriddle) - Create a random Riddle entry.

## deleteRiddle

Create a random Riddle entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRiddleRequest();
    $request->id = 'provident';

    $requestSecurity = new DeleteRiddleSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateRiddles->deleteRiddle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRiddle

Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRiddleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRiddleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRiddleRequest();
    $request->id = 'distinctio';

    $requestSecurity = new GetRiddleSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateRiddles->getRiddle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRiddle

Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRiddleRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRiddleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRiddleRequest();
    $request->answer = 'quibusdam';
    $request->category = 'unde';
    $request->question = 'nulla';

    $requestSecurity = new PostRiddleSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateRiddles->postRiddle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRiddle

Create a random Riddle entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRiddleRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRiddleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRiddleRequest();
    $request->answer = 'corrupti';
    $request->category = 'illum';
    $request->question = 'vel';

    $requestSecurity = new PutRiddleSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateRiddles->putRiddle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# scope

### Available Operations

* [signConfirm](#signconfirm) - this is a scope confirmation
* [signDelete](#signdelete) - delete a verification job
* [signRequest](#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [signRetrieve](#signretrieve) - get the status / current content of a verification job
* [signRetrieveHead](#signretrievehead) - HEAD to get the status of a verification job
* [signUpdate](#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


## signConfirm

this is a scope confirmation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignConfirmRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignConfirmRequest();
    $request->job = 'natus';

    $response = $sdk->scope->signConfirm($request);

    if ($response->signConfirm202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signDelete

delete a verification job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignDeleteRequest();
    $request->job = 'laboriosam';

    $response = $sdk->scope->signDelete($request);

    if ($response->signDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signRequest

scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignRequestRequest();
    $request->requestBody = 'hic';
    $request->test = 902599;

    $response = $sdk->scope->signRequest($request);

    if ($response->signRequest201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signRetrieve

get the status / current content of a verification job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignRetrieveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignRetrieveRequest();
    $request->job = 'fuga';

    $response = $sdk->scope->signRetrieve($request);

    if ($response->jwt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signRetrieveHead

HEAD to get the status of a verification job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignRetrieveHeadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignRetrieveHeadRequest();
    $request->job = 'in';

    $response = $sdk->scope->signRetrieveHead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signUpdate

authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignUpdateRequest();
    $request->job = 'corporis';

    $response = $sdk->scope->signUpdate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

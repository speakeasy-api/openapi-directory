# session

### Available Operations

* [createSessionUsingGET](#createsessionusingget) - creates a new session. validUntil is an unix timestamp in seconds
* [createSessionUsingPOST](#createsessionusingpost) - creates a new session. validUntil is an unix timestamp in seconds
* [deleteSessionUsingGET](#deletesessionusingget) - deletes a session
* [deleteSessionUsingPOST](#deletesessionusingpost) - deletes a session
* [getSessionInfoUsingGET](#getsessioninfousingget) - returns informations about a session
* [getSessionInfoUsingPOST](#getsessioninfousingpost) - returns informations about a session

## createSessionUsingGET

creates a new session. validUntil is an unix timestamp in seconds

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSessionUsingGETRequest();
    $request->authorID = 'maiores';
    $request->groupID = 'dicta';
    $request->validUntil = 'corporis';

    $response = $sdk->session->createSessionUsingGET($request);

    if ($response->createSessionUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSessionUsingPOST

creates a new session. validUntil is an unix timestamp in seconds

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSessionUsingPOSTRequest();
    $request->authorID = 'dolore';
    $request->groupID = 'iusto';
    $request->validUntil = 'dicta';

    $response = $sdk->session->createSessionUsingPOST($request);

    if ($response->createSessionUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSessionUsingGET

deletes a session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSessionUsingGETRequest();
    $request->sessionID = 'harum';

    $response = $sdk->session->deleteSessionUsingGET($request);

    if ($response->deleteSessionUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSessionUsingPOST

deletes a session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSessionUsingPOSTRequest();
    $request->sessionID = 'enim';

    $response = $sdk->session->deleteSessionUsingPOST($request);

    if ($response->deleteSessionUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSessionInfoUsingGET

returns informations about a session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSessionInfoUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSessionInfoUsingGETRequest();
    $request->sessionID = 'accusamus';

    $response = $sdk->session->getSessionInfoUsingGET($request);

    if ($response->getSessionInfoUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSessionInfoUsingPOST

returns informations about a session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionInfoUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionInfoUsingPOSTRequest();
    $request->sessionID = 'commodi';

    $response = $sdk->session->getSessionInfoUsingPOST($request);

    if ($response->getSessionInfoUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

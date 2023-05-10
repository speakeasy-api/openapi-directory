# onThisDay

## Overview

On this day historical events for birth, death and other events.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [getFactOnthisdayBorn](#getfactonthisdayborn) - Returns a random ( famous/ relatively famous ) person born on a given day and month
* [getFactOnthisdayDied](#getfactonthisdaydied) - Returns a random ( famous/ relatively famous ) person died on a given day and month
* [getFactOnthisdayEvent](#getfactonthisdayevent) - Returns a random ( famous/ relatively famous ) historic event on a given day and month

## getFactOnthisdayBorn

Returns a random ( famous/ relatively famous ) person born on a given day and month

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactOnthisdayBornRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactOnthisdayBornSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactOnthisdayBornRequest();
    $request->day = 'quibusdam';
    $request->month = 'unde';

    $requestSecurity = new GetFactOnthisdayBornSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->onThisDay->getFactOnthisdayBorn($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFactOnthisdayDied

Returns a random ( famous/ relatively famous ) person died on a given day and month

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactOnthisdayDiedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactOnthisdayDiedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactOnthisdayDiedRequest();
    $request->day = 'nulla';
    $request->month = 'corrupti';

    $requestSecurity = new GetFactOnthisdayDiedSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->onThisDay->getFactOnthisdayDied($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFactOnthisdayEvent

Returns a random ( famous/ relatively famous ) historic event on a given day and month

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactOnthisdayEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactOnthisdayEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactOnthisdayEventRequest();
    $request->day = 'illum';
    $request->month = 'vel';

    $requestSecurity = new GetFactOnthisdayEventSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->onThisDay->getFactOnthisdayEvent($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

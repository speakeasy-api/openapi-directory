# userListOfValuesLOV

### Available Operations

* [getUserListOfValues](#getuserlistofvalues) - Get the list of values related to this list name
* [getUserLovIndex](#getuserlovindex) - Get all list names

## getUserListOfValues

Get the list of values related to this list name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserListOfValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserListOfValuesRequest();
    $request->acceptLanguage = [
        'voluptate',
        'unde',
        'reiciendis',
    ];
    $request->ifNoneMatch = 'provident';
    $request->listName = 'repellendus';

    $response = $sdk->userListOfValuesLOV->getUserListOfValues($request);

    if ($response->userListOfValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserLovIndex

Get all list names

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->userListOfValuesLOV->getUserLovIndex();

    if ($response->userLovIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# users

### Available Operations

* [collectionUsersAll](#collectionusersall) - List Users
* [collectionUsersOne](#collectionusersone) - Get user

## collectionUsersAll

List Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionUsersAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionUsersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionUsersAllRequest();
    $request->collectionId = 'apideck-io';
    $request->cursor = 'quasi';
    $request->fields = 'repudiandae';
    $request->limit = 575947;
    $request->raw = false;
    $request->xApideckAppId = 'veritatis';
    $request->xApideckConsumerId = 'itaque';
    $request->xApideckServiceId = 'incidunt';

    $requestSecurity = new CollectionUsersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->collectionUsersAll($request, $requestSecurity);

    if ($response->getCollectionUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionUsersOne

Get user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionUsersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionUsersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionUsersOneRequest();
    $request->collectionId = 'apideck-io';
    $request->fields = 'enim';
    $request->id = '0ad2abd4-4269-4802-9502-a94bb4f63c96';
    $request->raw = false;
    $request->xApideckAppId = 'provident';
    $request->xApideckConsumerId = 'necessitatibus';
    $request->xApideckServiceId = 'sint';

    $requestSecurity = new CollectionUsersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->collectionUsersOne($request, $requestSecurity);

    if ($response->getCollectionUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

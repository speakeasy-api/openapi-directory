# user

### Available Operations

* [getUserProjects](#getuserprojects) - List all active projects for the user

## getUserProjects

List all active projects for the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserProjectsRequest();
    $request->page = 868126;
    $request->size = 37559;
    $request->username = 'Carroll.Lang';

    $response = $sdk->user->getUserProjects($request);

    if ($response->getUserProjects200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

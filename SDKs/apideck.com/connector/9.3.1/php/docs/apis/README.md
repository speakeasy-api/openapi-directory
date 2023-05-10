# apIs

### Available Operations

* [apisAll](#apisall) - List APIs
* [apisOne](#apisone) - Get API

## apisAll

List APIs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApisAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApisFilter;
use \OpenAPI\OpenAPI\Models\Shared\ApiStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApisAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApisAllRequest();
    $request->cursor = 'minima';
    $request->filter = new ApisFilter();
    $request->filter->status = ApiStatusEnum::DEVELOPMENT;
    $request->limit = 38425;
    $request->xApideckAppId = 'iure';

    $requestSecurity = new ApisAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->apisAll($request, $requestSecurity);

    if ($response->getApisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apisOne

Get API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApisOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApisOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApisOneRequest();
    $request->id = 'aff1a3a2-fa94-4677-b925-1aa52c3f5ad0';
    $request->xApideckAppId = 'quasi';

    $requestSecurity = new ApisOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->apisOne($request, $requestSecurity);

    if ($response->getApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

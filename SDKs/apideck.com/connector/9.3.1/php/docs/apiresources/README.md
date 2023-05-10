# apiResources

### Available Operations

* [apiResourceCoverageOne](#apiresourcecoverageone) - Get API Resource Coverage
* [apiResourcesOne](#apiresourcesone) - Get API Resource

## apiResourceCoverageOne

Get API Resource Coverage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApiResourceCoverageOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiResourceCoverageOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiResourceCoverageOneRequest();
    $request->id = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';
    $request->resourceId = 'esse';
    $request->xApideckAppId = 'ipsum';

    $requestSecurity = new ApiResourceCoverageOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiResources->apiResourceCoverageOne($request, $requestSecurity);

    if ($response->getApiResourceCoverageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiResourcesOne

Get API Resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApiResourcesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiResourcesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiResourcesOneRequest();
    $request->id = '92059293-96fe-4a75-96eb-10faaa2352c5';
    $request->resourceId = 'omnis';
    $request->xApideckAppId = 'nemo';

    $requestSecurity = new ApiResourcesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiResources->apiResourcesOne($request, $requestSecurity);

    if ($response->getApiResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

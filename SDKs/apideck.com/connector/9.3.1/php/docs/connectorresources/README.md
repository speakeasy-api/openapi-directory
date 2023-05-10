# connectorResources

### Available Operations

* [connectorResourcesOne](#connectorresourcesone) - Get Connector Resource

## connectorResourcesOne

Get Connector Resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorResourcesOneRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnifiedApiIdEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorResourcesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorResourcesOneRequest();
    $request->id = '9d488e1e-91e4-450a-92ab-d44269802d50';
    $request->resourceId = 'fugit';
    $request->unifiedApi = UnifiedApiIdEnum::CRM;
    $request->xApideckAppId = 'dolorum';

    $requestSecurity = new ConnectorResourcesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connectorResources->connectorResourcesOne($request, $requestSecurity);

    if ($response->getConnectorResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

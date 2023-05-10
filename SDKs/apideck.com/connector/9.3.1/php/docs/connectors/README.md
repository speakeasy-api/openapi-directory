# connectors

### Available Operations

* [connectorsAll](#connectorsall) - List Connectors
* [connectorsOne](#connectorsone) - Get Connector

## connectorsAll

List Connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorsFilter;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnifiedApiIdEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsAllRequest();
    $request->cursor = 'excepturi';
    $request->filter = new ConnectorsFilter();
    $request->filter->status = ConnectorStatusEnum::BETA;
    $request->filter->unifiedApi = UnifiedApiIdEnum::CRM;
    $request->limit = 703737;
    $request->xApideckAppId = 'tempore';

    $requestSecurity = new ConnectorsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connectors->connectorsAll($request, $requestSecurity);

    if ($response->getConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsOne

Get Connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsOneRequest();
    $request->id = '4f63c969-e9a3-4efa-b7df-b14cd66ae395';
    $request->xApideckAppId = 'accusamus';

    $requestSecurity = new ConnectorsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connectors->connectorsOne($request, $requestSecurity);

    if ($response->getConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# connectors

### Available Operations

* [deleteConnector](#deleteconnector) - Delete a connector
* [getConnector](#getconnector) - Get a connector
* [getConnectors](#getconnectors) - List connectors
* [patchConnector](#patchconnector) - Update a connector's data
* [postConnectors](#postconnectors) - Create a new connector

## deleteConnector

Delete a connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectorRequest();
    $request->id = '2601fb57-6b0d-45f0-930c-5fbb25870532';

    $response = $sdk->connectors->deleteConnector($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnector

Get a connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorRequest();
    $request->id = '02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb';
    $request->includeEvse = false;
    $request->includeOrganization = false;
    $request->includeRate = false;

    $response = $sdk->connectors->getConnector($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectors

List connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsRequest();
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-24T10:05:07.174Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T07:10:00.236Z');
    $request->includeEvse = false;
    $request->includeOrganization = false;
    $request->includeRate = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 212390;
    $request->paginatePage = 'dolorem';
    $request->sortBy = 'dolor';
    $request->sortOrder = SortOrder1Enum::DESC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-21T07:17:52.299Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-10T03:04:11.898Z');

    $response = $sdk->connectors->getConnectors($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchConnector

Update a connector's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchConnectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchConnectorRequest();
    $request->requestBody = new PatchConnectorRequestBody();
    $request->requestBody->chargestation = 'voluptate';
    $request->requestBody->format = 'dignissimos';
    $request->requestBody->power = 970237;
    $request->requestBody->powerType = 'amet';
    $request->requestBody->rate = 'dolorum';
    $request->requestBody->type = 'numquam';
    $request->id = '100674eb-f692-480d-9ba7-7a89ebf737ae';

    $response = $sdk->connectors->patchConnector($request);

    if ($response->patchConnector201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConnectors

Create a new connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConnectorsRequestBody();
    $request->chargestation = 'eius';
    $request->format = 'aspernatur';
    $request->power = 20651;
    $request->powerType = 'amet';
    $request->rate = 'optio';
    $request->type = 'accusamus';

    $response = $sdk->connectors->postConnectors($request);

    if ($response->postConnectors200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

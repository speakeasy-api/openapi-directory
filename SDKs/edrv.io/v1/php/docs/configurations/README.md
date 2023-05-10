# configurations

### Available Operations

* [getConfiguration](#getconfiguration) - Get one Configuration data
* [getConfigurations](#getconfigurations) - Get Configurations data
* [postConfigurations](#postconfigurations) - Create connector with parameters

## getConfiguration

Get one Configuration data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigurationRequest();
    $request->id = '9890afa5-63e2-4516-be4c-8b711e5b7fd2';

    $response = $sdk->configurations->getConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigurations

Get Configurations data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigurationsRequest();
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-25T09:38:49.528Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-02T16:33:42.080Z');
    $request->paginateEnabled = false;
    $request->paginateLimit = 508315;
    $request->paginatePage = 'natus';
    $request->sortBy = 'magni';
    $request->sortOrder = SortOrder1Enum::DESC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-16T10:20:37.479Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-30T23:39:27.609Z');

    $response = $sdk->configurations->getConfigurations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigurations

Create connector with parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigurationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigurationsRequestBody();
    $request->key = 'ea';
    $request->value = 'excepturi';

    $response = $sdk->configurations->postConfigurations($request);

    if ($response->postConfigurations201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

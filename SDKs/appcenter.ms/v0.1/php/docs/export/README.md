# export

### Available Operations

* [exportConfigurationsCreate](#exportconfigurationscreate) - Create new export configuration
* [exportConfigurationsDelete](#exportconfigurationsdelete) - Delete export configuration.
* [exportConfigurationsDisable](#exportconfigurationsdisable) - Disable export configuration.
* [exportConfigurationsEnable](#exportconfigurationsenable) - Enable export configuration.
* [exportConfigurationsGet](#exportconfigurationsget) - Get export configuration.
* [exportConfigurationsList](#exportconfigurationslist) - List export configurations.
* [exportConfigurationsPartialUpdate](#exportconfigurationspartialupdate) - Partially update export configuration.

## exportConfigurationsCreate

Create new export configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreateRequestBodyExportEntitiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreateRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportConfigurationsCreateRequest();
    $request->requestBody = new ExportConfigurationsCreateRequestBody();
    $request->requestBody->backfill = false;
    $request->requestBody->exportEntities = [
        ExportConfigurationsCreateRequestBodyExportEntitiesEnum::ATTACHMENTS,
    ];
    $request->requestBody->resourceGroup = 'ratione';
    $request->requestBody->resourceName = 'labore';
    $request->requestBody->type = ExportConfigurationsCreateRequestBodyTypeEnum::BLOB_STORAGE_LINKED_SUBSCRIPTION;
    $request->appName = 'occaecati';
    $request->ownerName = 'voluptas';

    $requestSecurity = new ExportConfigurationsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->export->exportConfigurationsCreate($request, $requestSecurity);

    if ($response->exportConfigurationsCreate202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportConfigurationsDelete

Delete export configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportConfigurationsDeleteRequest();
    $request->appName = 'quo';
    $request->exportConfigurationId = 'velit';
    $request->ownerName = 'minus';

    $requestSecurity = new ExportConfigurationsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->export->exportConfigurationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportConfigurationsDisable

Disable export configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsDisableRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsDisableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportConfigurationsDisableRequest();
    $request->appName = 'fuga';
    $request->exportConfigurationId = 'nostrum';
    $request->ownerName = 'est';

    $requestSecurity = new ExportConfigurationsDisableSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->export->exportConfigurationsDisable($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportConfigurationsEnable

Enable export configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsEnableRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsEnableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportConfigurationsEnableRequest();
    $request->appName = 'impedit';
    $request->exportConfigurationId = 'delectus';
    $request->ownerName = 'tempore';

    $requestSecurity = new ExportConfigurationsEnableSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->export->exportConfigurationsEnable($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportConfigurationsGet

Get export configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportConfigurationsGetRequest();
    $request->appName = 'vero';
    $request->exportConfigurationId = 'odit';
    $request->ownerName = 'repellat';

    $requestSecurity = new ExportConfigurationsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->export->exportConfigurationsGet($request, $requestSecurity);

    if ($response->exportConfigurationsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportConfigurationsList

List export configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportConfigurationsListRequest();
    $request->appName = 'pariatur';
    $request->ownerName = 'nemo';

    $requestSecurity = new ExportConfigurationsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->export->exportConfigurationsList($request, $requestSecurity);

    if ($response->exportConfigurationsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportConfigurationsPartialUpdate

Partially update export configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsPartialUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsPartialUpdateRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportConfigurationsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportConfigurationsPartialUpdateRequest();
    $request->requestBody = new ExportConfigurationsPartialUpdateRequestBody();
    $request->requestBody->backfill = false;
    $request->requestBody->exportEntities = [
        ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum::CRASHES,
        ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum::ERRORS,
    ];
    $request->requestBody->resourceGroup = 'minima';
    $request->requestBody->resourceName = 'in';
    $request->requestBody->type = ExportConfigurationsPartialUpdateRequestBodyTypeEnum::APPLICATION_INSIGHTS_INSTRUMENTATION_KEY;
    $request->appName = 'excepturi';
    $request->exportConfigurationId = 'dolores';
    $request->ownerName = 'error';

    $requestSecurity = new ExportConfigurationsPartialUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->export->exportConfigurationsPartialUpdate($request, $requestSecurity);

    if ($response->exportConfigurationsPartialUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# configs

## Overview

With these endpoints you can manage your Configs.
This also can be used to manage [Feature Flags and Settings](#tag/Feature-Flags-and-Settings) and their 
[served values](#tag/Feature-Flag-and-Setting-values) through this API.

<a href="https://configcat.com/docs/main-concepts/#config" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Configs.

### Available Operations

* [createConfig](#createconfig) - Create Config
* [deleteConfig](#deleteconfig) - Delete Config
* [getConfig](#getconfig) - Get Config
* [getConfigs](#getconfigs) - List Configs
* [updateConfig](#updateconfig) - Update Config

## createConfig

This endpoint creates a new Config in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigRequest();
    $request->createConfigRequest = new CreateConfigRequest();
    $request->createConfigRequest->description = 'accusamus';
    $request->createConfigRequest->name = 'Jenna Hoppe';
    $request->productId = '5d8a0d44-6ce2-4af7-a73c-f3be453f870b';

    $response = $sdk->configs->createConfig($request);

    if ($response->configModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfig

This endpoint removes a Config identified by the `configId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigRequest();
    $request->configId = '326b5a73-429c-4db1-a842-2bb679d23227';

    $response = $sdk->configs->deleteConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfig

This endpoint returns the metadata of a Config
identified by the `configId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigRequest();
    $request->configId = '15bf0cbb-1e31-4b8b-90f3-443a1108e0ad';

    $response = $sdk->configs->getConfig($request);

    if ($response->configModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigs

This endpoint returns the list of the Configs that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigsRequest();
    $request->productId = 'cf4b9218-79fc-4e95-bf73-ef7fbc7abd74';

    $response = $sdk->configs->getConfigs($request);

    if ($response->configModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfig

This endpoint updates a Config identified by the `configId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfigRequest();
    $request->updateConfigRequest = new UpdateConfigRequest();
    $request->updateConfigRequest->description = 'quibusdam';
    $request->updateConfigRequest->name = 'Earl Mosciski DVM';
    $request->configId = '5d2cff7c-70a4-4562-ad43-6813f16d9f5f';

    $response = $sdk->configs->updateConfig($request);

    if ($response->configModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

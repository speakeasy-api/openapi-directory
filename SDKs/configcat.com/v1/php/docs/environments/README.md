# environments

## Overview

With these endpoints you can update existing Environments or add new ones into your selected [Product](#tag/Products). 

<a href="https://configcat.com/docs/main-concepts/#environment" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Environments.

### Available Operations

* [createEnvironment](#createenvironment) - Create Environment
* [deleteEnvironment](#deleteenvironment) - Delete Environment
* [getEnvironment](#getenvironment) - Get Environment
* [getEnvironments](#getenvironments) - List Environments
* [updateEnvironment](#updateenvironment) - Update Environment

## createEnvironment

This endpoint creates a new Environment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->createEnvironmentModel = new CreateEnvironmentModel();
    $request->createEnvironmentModel->color = 'quisquam';
    $request->createEnvironmentModel->description = 'saepe';
    $request->createEnvironmentModel->name = 'Krista Herzog';
    $request->productId = '146c3e25-0fb0-408c-82e1-41aac366c8dd';

    $response = $sdk->environments->createEnvironment($request);

    if ($response->environmentModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironment

This endpoint removes an Environment identified by the `environmentId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentRequest();
    $request->environmentId = '6b144290-7474-4778-a7bd-466d28c10ab3';

    $response = $sdk->environments->deleteEnvironment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironment

This endpoint returns the metadata of an Environment 
identified by the `environmentId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentRequest();
    $request->environmentId = 'cdca4251-904e-4523-87e0-bc7178e4796f';

    $response = $sdk->environments->getEnvironment($request);

    if ($response->environmentModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironments

This endpoint returns the list of the Environments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentsRequest();
    $request->productId = '2a70c688-282a-4a48-a562-f222e9817ee1';

    $response = $sdk->environments->getEnvironments($request);

    if ($response->environmentModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironment

This endpoint updates an Environment identified by the `environmentId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEnvironmentModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentRequest();
    $request->updateEnvironmentModel = new UpdateEnvironmentModel();
    $request->updateEnvironmentModel->color = 'esse';
    $request->updateEnvironmentModel->description = 'quod';
    $request->updateEnvironmentModel->name = 'Dr. Ignacio Jacobi';
    $request->environmentId = 'b7b95bc0-ab3c-420c-8f37-89fd871f99dd';

    $response = $sdk->environments->updateEnvironment($request);

    if ($response->environmentModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

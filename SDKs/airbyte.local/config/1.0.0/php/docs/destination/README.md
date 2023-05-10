# destination

## Overview

Destination related resources.

### Available Operations

* [checkConnectionToDestination](#checkconnectiontodestination) - Check connection to the destination
* [checkConnectionToDestinationForUpdate](#checkconnectiontodestinationforupdate) - Check connection for a proposed update to a destination
* [cloneDestination](#clonedestination) - Clone destination
* [createDestination](#createdestination) - Create a destination
* [deleteDestination](#deletedestination) - Delete the destination
* [getDestination](#getdestination) - Get configured destination
* [listDestinationsForWorkspace](#listdestinationsforworkspace) - List configured destinations for a workspace
* [searchDestinations](#searchdestinations) - Search destinations
* [updateDestination](#updatedestination) - Update a destination

## checkConnectionToDestination

Check connection to the destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationIdRequestBody();
    $request->destinationId = '394c2607-1f93-4f5f-8642-dac7af515cc4';

    $response = $sdk->destination->checkConnectionToDestination($request);

    if ($response->checkConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkConnectionToDestinationForUpdate

Check connection for a proposed update to a destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationUpdate();
    $request->connectionConfiguration = 'ab';
    $request->destinationId = '3aa63aae-8d67-4864-9bb6-75fd5e60b375';
    $request->name = 'Carroll Gerhold';

    $response = $sdk->destination->checkConnectionToDestinationForUpdate($request);

    if ($response->checkConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloneDestination

Clone destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationCloneRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DestinationCloneConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationCloneRequestBody();
    $request->destinationCloneId = 'fbee41f3-3317-4fe3-9b60-eb1ea426555b';
    $request->destinationConfiguration = new DestinationCloneConfiguration();
    $request->destinationConfiguration->connectionConfiguration = 'dolorum';
    $request->destinationConfiguration->name = 'Bethany D'Amore';

    $response = $sdk->destination->cloneDestination($request);

    if ($response->destinationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDestination

Create a destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationCreate();
    $request->connectionConfiguration = 'dolore';
    $request->destinationDefinitionId = '4ed53b88-f3a8-4d8f-9c0b-2f2fb7b194a2';
    $request->name = 'Tonya Predovic';
    $request->workspaceId = '916fe1f0-8f42-494e-b698-f447f603e8b4';

    $response = $sdk->destination->createDestination($request);

    if ($response->destinationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDestination

Delete the destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationIdRequestBody();
    $request->destinationId = '45e80ca5-5efd-420e-857e-1858b6a89fbe';

    $response = $sdk->destination->deleteDestination($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDestination

Get configured destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationIdRequestBody();
    $request->destinationId = '3a5aa8e4-824d-40ab-8075-088e51862065';

    $response = $sdk->destination->getDestination($request);

    if ($response->destinationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDestinationsForWorkspace

List configured destinations for a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkspaceIdRequestBody();
    $request->workspaceId = 'e904f3b1-194b-48ab-b603-a79f9dfe0ab7';

    $response = $sdk->destination->listDestinationsForWorkspace($request);

    if ($response->destinationReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchDestinations

Search destinations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationSearch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationSearch();
    $request->connectionConfiguration = 'facere';
    $request->destinationDefinitionId = 'a8a50ce1-87f8-46bc-973d-689eee9526f8';
    $request->destinationId = 'd986e881-ead4-4f0e-9012-563f94e29e97';
    $request->destinationName = 'adipisci';
    $request->name = 'Tracy Cronin';
    $request->workspaceId = '57a15be3-e060-4807-a2b6-e3ab8845f059';

    $response = $sdk->destination->searchDestinations($request);

    if ($response->destinationReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDestination

Update a destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationUpdate();
    $request->connectionConfiguration = 'nihil';
    $request->destinationId = 'a60ff2a5-4a31-4e94-b64a-3e865e7956f9';
    $request->name = 'Marion Boyer';

    $response = $sdk->destination->updateDestination($request);

    if ($response->destinationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# destinationDefinition

## Overview

DestinationDefinition related resources.

### Available Operations

* [createCustomDestinationDefinition](#createcustomdestinationdefinition) - Creates a custom destinationDefinition for the given workspace
* [deleteDestinationDefinition](#deletedestinationdefinition) - Delete a destination definition
* [getDestinationDefinition](#getdestinationdefinition) - Get destinationDefinition
* [getDestinationDefinitionForWorkspace](#getdestinationdefinitionforworkspace) - Get a destinationDefinition that is configured for the given workspace
* [grantDestinationDefinitionToWorkspace](#grantdestinationdefinitiontoworkspace) - grant a private, non-custom destinationDefinition to a given workspace
* [listDestinationDefinitions](#listdestinationdefinitions) - List all the destinationDefinitions the current Airbyte deployment is configured to use
* [listDestinationDefinitionsForWorkspace](#listdestinationdefinitionsforworkspace) - List all the destinationDefinitions the given workspace is configured to use
* [listLatestDestinationDefinitions](#listlatestdestinationdefinitions) - List the latest destinationDefinitions Airbyte supports
* [listPrivateDestinationDefinitions](#listprivatedestinationdefinitions) - List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [revokeDestinationDefinitionFromWorkspace](#revokedestinationdefinitionfromworkspace) - revoke a grant to a private, non-custom destinationDefinition from a given workspace
* [updateDestinationDefinition](#updatedestinationdefinition) - Update destinationDefinition

## createCustomDestinationDefinition

Creates a custom destinationDefinition for the given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CustomDestinationDefinitionCreate;
use \OpenAPI\OpenAPI\Models\Shared\DestinationDefinitionCreate;
use \OpenAPI\OpenAPI\Models\Shared\ActorDefinitionResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeResourceLimit;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomDestinationDefinitionCreate();
    $request->destinationDefinition = new DestinationDefinitionCreate();
    $request->destinationDefinition->dockerImageTag = 'mollitia';
    $request->destinationDefinition->dockerRepository = 'provident';
    $request->destinationDefinition->documentationUrl = 'https://punctual-grove.info';
    $request->destinationDefinition->icon = 'accusantium';
    $request->destinationDefinition->name = 'Domingo Herman';
    $request->destinationDefinition->resourceRequirements = new ActorDefinitionResourceRequirements();
    $request->destinationDefinition->resourceRequirements->default = new ResourceRequirements();
    $request->destinationDefinition->resourceRequirements->default->cpuLimit = 'earum';
    $request->destinationDefinition->resourceRequirements->default->cpuRequest = 'officia';
    $request->destinationDefinition->resourceRequirements->default->memoryLimit = 'laborum';
    $request->destinationDefinition->resourceRequirements->default->memoryRequest = 'placeat';
    $request->destinationDefinition->resourceRequirements->jobSpecific = [
        new JobTypeResourceLimit(),
        new JobTypeResourceLimit(),
    ];
    $request->workspaceId = 'f9efc1b4-512c-4103-a648-dc2f615199eb';

    $response = $sdk->destinationDefinition->createCustomDestinationDefinition($request);

    if ($response->destinationDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDestinationDefinition

Delete a destination definition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationDefinitionIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationDefinitionIdRequestBody();
    $request->destinationDefinitionId = 'fd0e9fe6-c632-4ca3-aed0-117996312fde';

    $response = $sdk->destinationDefinition->deleteDestinationDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDestinationDefinition

Get destinationDefinition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationDefinitionIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationDefinitionIdRequestBody();
    $request->destinationDefinitionId = '04771778-ff61-4d01-b476-360a15db6a66';

    $response = $sdk->destinationDefinition->getDestinationDefinition($request);

    if ($response->destinationDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDestinationDefinitionForWorkspace

Get a destinationDefinition that is configured for the given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationDefinitionIdWithWorkspaceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationDefinitionIdWithWorkspaceId();
    $request->destinationDefinitionId = '0659a1ad-eaab-4585-9d6c-645b08b61891';
    $request->workspaceId = 'baa0fe1a-de00-48e6-b8c5-f350d8cdb5a3';

    $response = $sdk->destinationDefinition->getDestinationDefinitionForWorkspace($request);

    if ($response->destinationDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## grantDestinationDefinitionToWorkspace

grant a private, non-custom destinationDefinition to a given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationDefinitionIdWithWorkspaceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationDefinitionIdWithWorkspaceId();
    $request->destinationDefinitionId = '41814301-0421-4813-9520-8ece7e253b66';
    $request->workspaceId = '8451c6c6-e205-4e16-9eab-3fec9578a645';

    $response = $sdk->destinationDefinition->grantDestinationDefinitionToWorkspace($request);

    if ($response->privateDestinationDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDestinationDefinitions

List all the destinationDefinitions the current Airbyte deployment is configured to use

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->destinationDefinition->listDestinationDefinitions();

    if ($response->destinationDefinitionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDestinationDefinitionsForWorkspace

List all the destinationDefinitions the given workspace is configured to use

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
    $request->workspaceId = '84273a84-18d1-4623-89fb-0929921aefb9';

    $response = $sdk->destinationDefinition->listDestinationDefinitionsForWorkspace($request);

    if ($response->destinationDefinitionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLatestDestinationDefinitions

Guaranteed to retrieve the latest information on supported destinations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->destinationDefinition->listLatestDestinationDefinitions();

    if ($response->destinationDefinitionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPrivateDestinationDefinitions

List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

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
    $request->workspaceId = 'f58c4d86-e68e-44be-8560-13f59da757a5';

    $response = $sdk->destinationDefinition->listPrivateDestinationDefinitions($request);

    if ($response->privateDestinationDefinitionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeDestinationDefinitionFromWorkspace

revoke a grant to a private, non-custom destinationDefinition from a given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationDefinitionIdWithWorkspaceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationDefinitionIdWithWorkspaceId();
    $request->destinationDefinitionId = '9ecfef66-ef1c-4aa3-b83c-2beb477373c8';
    $request->workspaceId = 'd72f64d1-db1f-42c4-b106-61e96349e1cf';

    $response = $sdk->destinationDefinition->revokeDestinationDefinitionFromWorkspace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDestinationDefinition

Update destinationDefinition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationDefinitionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ActorDefinitionResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeResourceLimit;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationDefinitionUpdate();
    $request->destinationDefinitionId = '9e06e3a4-3700-40ae-ab6b-c9b8f759eac5';
    $request->dockerImageTag = 'corporis';
    $request->resourceRequirements = new ActorDefinitionResourceRequirements();
    $request->resourceRequirements->default = new ResourceRequirements();
    $request->resourceRequirements->default->cpuLimit = 'est';
    $request->resourceRequirements->default->cpuRequest = 'error';
    $request->resourceRequirements->default->memoryLimit = 'esse';
    $request->resourceRequirements->default->memoryRequest = 'labore';
    $request->resourceRequirements->jobSpecific = [
        new JobTypeResourceLimit(),
    ];

    $response = $sdk->destinationDefinition->updateDestinationDefinition($request);

    if ($response->destinationDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

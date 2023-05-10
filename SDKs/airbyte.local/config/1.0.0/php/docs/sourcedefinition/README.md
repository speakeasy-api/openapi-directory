# sourceDefinition

## Overview

SourceDefinition related resources.

### Available Operations

* [createCustomSourceDefinition](#createcustomsourcedefinition) - Creates a custom sourceDefinition for the given workspace
* [deleteSourceDefinition](#deletesourcedefinition) - Delete a source definition
* [getSourceDefinition](#getsourcedefinition) - Get source
* [getSourceDefinitionForWorkspace](#getsourcedefinitionforworkspace) - Get a sourceDefinition that is configured for the given workspace
* [grantSourceDefinitionToWorkspace](#grantsourcedefinitiontoworkspace) - grant a private, non-custom sourceDefinition to a given workspace
* [listLatestSourceDefinitions](#listlatestsourcedefinitions) - List the latest sourceDefinitions Airbyte supports
* [listPrivateSourceDefinitions](#listprivatesourcedefinitions) - List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [listSourceDefinitions](#listsourcedefinitions) - List all the sourceDefinitions the current Airbyte deployment is configured to use
* [listSourceDefinitionsForWorkspace](#listsourcedefinitionsforworkspace) - List all the sourceDefinitions the given workspace is configured to use
* [revokeSourceDefinitionFromWorkspace](#revokesourcedefinitionfromworkspace) - revoke a grant to a private, non-custom sourceDefinition from a given workspace
* [updateSourceDefinition](#updatesourcedefinition) - Update a sourceDefinition

## createCustomSourceDefinition

Creates a custom sourceDefinition for the given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CustomSourceDefinitionCreate;
use \OpenAPI\OpenAPI\Models\Shared\SourceDefinitionCreate;
use \OpenAPI\OpenAPI\Models\Shared\ActorDefinitionResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeResourceLimit;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomSourceDefinitionCreate();
    $request->sourceDefinition = new SourceDefinitionCreate();
    $request->sourceDefinition->dockerImageTag = 'tempore';
    $request->sourceDefinition->dockerRepository = 'amet';
    $request->sourceDefinition->documentationUrl = 'https://silent-work.org';
    $request->sourceDefinition->icon = 'id';
    $request->sourceDefinition->name = 'Ellis Balistreri';
    $request->sourceDefinition->resourceRequirements = new ActorDefinitionResourceRequirements();
    $request->sourceDefinition->resourceRequirements->default = new ResourceRequirements();
    $request->sourceDefinition->resourceRequirements->default->cpuLimit = 'aliquam';
    $request->sourceDefinition->resourceRequirements->default->cpuRequest = 'provident';
    $request->sourceDefinition->resourceRequirements->default->memoryLimit = 'vero';
    $request->sourceDefinition->resourceRequirements->default->memoryRequest = 'earum';
    $request->sourceDefinition->resourceRequirements->jobSpecific = [
        new JobTypeResourceLimit(),
    ];
    $request->workspaceId = '3004978a-61fa-41cf-a068-8f77c1ffc71d';

    $response = $sdk->sourceDefinition->createCustomSourceDefinition($request);

    if ($response->sourceDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSourceDefinition

Delete a source definition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDefinitionIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDefinitionIdRequestBody();
    $request->sourceDefinitionId = 'ca163f2a-3c80-4a97-bf33-4cddf857a9e6';

    $response = $sdk->sourceDefinition->deleteSourceDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSourceDefinition

Get source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDefinitionIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDefinitionIdRequestBody();
    $request->sourceDefinitionId = '1876c6ab-21d2-49df-894d-6fecd7993900';

    $response = $sdk->sourceDefinition->getSourceDefinition($request);

    if ($response->sourceDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSourceDefinitionForWorkspace

Get a sourceDefinition that is configured for the given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDefinitionIdWithWorkspaceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDefinitionIdWithWorkspaceId();
    $request->sourceDefinitionId = '66a6d2d0-0035-4533-8cec-086fa21e9152';
    $request->workspaceId = 'cb311916-7b8e-43c8-9b03-408d6d364ffd';

    $response = $sdk->sourceDefinition->getSourceDefinitionForWorkspace($request);

    if ($response->sourceDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## grantSourceDefinitionToWorkspace

grant a private, non-custom sourceDefinition to a given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDefinitionIdWithWorkspaceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDefinitionIdWithWorkspaceId();
    $request->sourceDefinitionId = '455906d1-263d-448e-935c-2c9e81f30be3';
    $request->workspaceId = 'e43202d7-2165-4765-8664-1870d9d21f9a';

    $response = $sdk->sourceDefinition->grantSourceDefinitionToWorkspace($request);

    if ($response->privateSourceDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLatestSourceDefinitions

Guaranteed to retrieve the latest information on supported sources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sourceDefinition->listLatestSourceDefinitions();

    if ($response->sourceDefinitionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPrivateSourceDefinitions

List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

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
    $request->workspaceId = 'd030c4ec-c11a-4083-a429-068b8502a55e';

    $response = $sdk->sourceDefinition->listPrivateSourceDefinitions($request);

    if ($response->privateSourceDefinitionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceDefinitions

List all the sourceDefinitions the current Airbyte deployment is configured to use

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sourceDefinition->listSourceDefinitions();

    if ($response->sourceDefinitionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceDefinitionsForWorkspace

List all the sourceDefinitions the given workspace is configured to use

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
    $request->workspaceId = '7f73bc84-5e32-40a3-99f4-badf947c9a86';

    $response = $sdk->sourceDefinition->listSourceDefinitionsForWorkspace($request);

    if ($response->sourceDefinitionReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeSourceDefinitionFromWorkspace

revoke a grant to a private, non-custom sourceDefinition from a given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDefinitionIdWithWorkspaceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDefinitionIdWithWorkspaceId();
    $request->sourceDefinitionId = '7bc42426-6658-416d-9ca8-ef51fcb4c593';
    $request->workspaceId = 'ec12cdaa-d0ec-47af-adbd-80df448a47f9';

    $response = $sdk->sourceDefinition->revokeSourceDefinitionFromWorkspace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSourceDefinition

Update a sourceDefinition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDefinitionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ActorDefinitionResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeResourceLimit;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDefinitionUpdate();
    $request->dockerImageTag = 'amet';
    $request->resourceRequirements = new ActorDefinitionResourceRequirements();
    $request->resourceRequirements->default = new ResourceRequirements();
    $request->resourceRequirements->default->cpuLimit = 'occaecati';
    $request->resourceRequirements->default->cpuRequest = 'aut';
    $request->resourceRequirements->default->memoryLimit = 'impedit';
    $request->resourceRequirements->default->memoryRequest = 'minima';
    $request->resourceRequirements->jobSpecific = [
        new JobTypeResourceLimit(),
        new JobTypeResourceLimit(),
        new JobTypeResourceLimit(),
    ];
    $request->sourceDefinitionId = '880983da-bf9e-4f3f-bdd9-f7f079af4d35';

    $response = $sdk->sourceDefinition->updateSourceDefinition($request);

    if ($response->sourceDefinitionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

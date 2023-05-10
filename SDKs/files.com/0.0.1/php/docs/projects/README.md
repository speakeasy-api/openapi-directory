# projects

## Overview

Operations about projects

### Available Operations

* [deleteProjectsId](#deleteprojectsid) - Delete Project
* [getProjects](#getprojects) - List Projects
* [getProjectsId](#getprojectsid) - Show Project
* [patchProjectsId](#patchprojectsid) - Update Project
* [postProjects](#postprojects) - Create Project

## deleteProjectsId

Delete Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectsIdRequest();
    $request->id = 404425;

    $response = $sdk->projects->deleteProjectsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjects

List Projects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectsRequest();
    $request->cursor = 'maiores';
    $request->perPage = 544647;

    $response = $sdk->projects->getProjects($request);

    if ($response->projectEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectsId

Show Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectsIdRequest();
    $request->id = 871786;

    $response = $sdk->projects->getProjectsId($request);

    if ($response->projectEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchProjectsId

Update Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchProjectsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchProjectsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchProjectsIdRequest();
    $request->requestBody = new PatchProjectsIdRequestBody();
    $request->requestBody->globalAccess = 'error';
    $request->id = 502721;

    $response = $sdk->projects->patchProjectsId($request);

    if ($response->projectEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjects

Create Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectsRequestBody();
    $request->globalAccess = 'suscipit';

    $response = $sdk->projects->postProjects($request);

    if ($response->projectEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

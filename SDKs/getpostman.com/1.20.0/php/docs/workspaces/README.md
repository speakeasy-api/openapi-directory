# workspaces

### Available Operations

* [allWorkspaces](#allworkspaces) - All workspaces
* [createWorkspace](#createworkspace) - Create Workspace
* [deleteWorkspace](#deleteworkspace) - Delete Workspace
* [singleWorkspace](#singleworkspace) - Single workspace
* [updateWorkspace](#updateworkspace) - Update Workspace

## allWorkspaces

The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.

The response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->workspaces->allWorkspaces();

    if ($response->allWorkspaces200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspace

This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.

On successful creation of the workspace, the response returns the workspcae `name` and `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyWorkspace;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyWorkspaceCollections;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyWorkspaceEnvironments;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyWorkspaceMocks;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyWorkspaceMonitors;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkspaceRequestBody();
    $request->workspace = new CreateWorkspaceRequestBodyWorkspace();
    $request->workspace->collections = [
        new CreateWorkspaceRequestBodyWorkspaceCollections(),
        new CreateWorkspaceRequestBodyWorkspaceCollections(),
        new CreateWorkspaceRequestBodyWorkspaceCollections(),
    ];
    $request->workspace->description = 'Some description';
    $request->workspace->environments = [
        new CreateWorkspaceRequestBodyWorkspaceEnvironments(),
    ];
    $request->workspace->mocks = [
        new CreateWorkspaceRequestBodyWorkspaceMocks(),
        new CreateWorkspaceRequestBodyWorkspaceMocks(),
        new CreateWorkspaceRequestBodyWorkspaceMocks(),
    ];
    $request->workspace->monitors = [
        new CreateWorkspaceRequestBodyWorkspaceMonitors(),
    ];
    $request->workspace->name = 'New Workspace';
    $request->workspace->type = 'personal';

    $response = $sdk->workspaces->createWorkspace($request);

    if ($response->createWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspace

This endpoint allows you to delete an existing workspace.

On successful deletion of the workspace, the response returns the `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceRequest();
    $request->workspaceId = 'repellat';

    $response = $sdk->workspaces->deleteWorkspace($request);

    if ($response->deleteWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## singleWorkspace

Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SingleWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SingleWorkspaceRequest();
    $request->workspaceId = 'mollitia';

    $response = $sdk->workspaces->singleWorkspace($request);

    if ($response->singleWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspace

This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.

On successful updation of the workspace, the response returns the workspcae `name` and `id`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

**Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.

For eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyWorkspace;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyWorkspaceCollections;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyWorkspaceEnvironments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyWorkspaceMocks;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyWorkspaceMonitors;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceRequest();
    $request->requestBody = new UpdateWorkspaceRequestBody();
    $request->requestBody->workspace = new UpdateWorkspaceRequestBodyWorkspace();
    $request->requestBody->workspace->collections = [
        new UpdateWorkspaceRequestBodyWorkspaceCollections(),
        new UpdateWorkspaceRequestBodyWorkspaceCollections(),
        new UpdateWorkspaceRequestBodyWorkspaceCollections(),
    ];
    $request->requestBody->workspace->description = 'Some description';
    $request->requestBody->workspace->environments = [
        new UpdateWorkspaceRequestBodyWorkspaceEnvironments(),
        new UpdateWorkspaceRequestBodyWorkspaceEnvironments(),
    ];
    $request->requestBody->workspace->mocks = [
        new UpdateWorkspaceRequestBodyWorkspaceMocks(),
        new UpdateWorkspaceRequestBodyWorkspaceMocks(),
    ];
    $request->requestBody->workspace->monitors = [
        new UpdateWorkspaceRequestBodyWorkspaceMonitors(),
        new UpdateWorkspaceRequestBodyWorkspaceMonitors(),
    ];
    $request->requestBody->workspace->name = 'New Workspace updated';
    $request->workspaceId = 'molestiae';

    $response = $sdk->workspaces->updateWorkspace($request);

    if ($response->updateWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

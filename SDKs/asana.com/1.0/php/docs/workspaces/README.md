# workspaces

## Overview

A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.

An *organization* is a special kind of workspace that represents a company. In an organization, you can group your projects into teams. You can read more about how organizations work on the Asana Guide. To tell if your workspace is an organization or not, check its `is_organization` property.

Over time, we intend to migrate most workspaces into organizations and to release more organization-specific functionality. We may eventually deprecate using workspace-based APIs for organizations. Currently, and until after some reasonable grace period following any further announcements, you can still reference organizations in any `workspace` parameter.

### Available Operations

* [addUserForWorkspace](#adduserforworkspace) - Add a user to a workspace or organization
* [getWorkspace](#getworkspace) - Get a workspace
* [getWorkspaces](#getworkspaces) - Get multiple workspaces
* [removeUserForWorkspace](#removeuserforworkspace) - Remove a user from a workspace or organization
* [updateWorkspace](#updateworkspace) - Update a workspace

## addUserForWorkspace

Add a user to a workspace or organization.
The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddUserForWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddUserForWorkspaceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceAddUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddUserForWorkspaceRequest();
    $request->requestBody = new AddUserForWorkspaceRequestBody();
    $request->requestBody->data = new WorkspaceAddUserRequest();
    $request->requestBody->data->user = '12345';
    $request->optFields = [
        'reprehenderit',
        'facere',
        'fuga',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'praesentium';

    $response = $sdk->workspaces->addUserForWorkspace($request);

    if ($response->addUserForWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspace

Returns the full workspace record for a single workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceRequest();
    $request->optFields = [
        'veniam',
        'voluptatem',
        'quisquam',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'repudiandae';

    $response = $sdk->workspaces->getWorkspace($request);

    if ($response->getWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaces

Returns the compact records for all workspaces visible to the authorized user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspacesRequest();
    $request->limit = 97243;
    $request->offset = 'atque';
    $request->optFields = [
        'asperiores',
        'totam',
    ];
    $request->optPretty = false;

    $response = $sdk->workspaces->getWorkspaces($request);

    if ($response->getWorkspaces200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeUserForWorkspace

Remove a user from a workspace or organization.
The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveUserForWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveUserForWorkspaceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceRemoveUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveUserForWorkspaceRequest();
    $request->requestBody = new RemoveUserForWorkspaceRequestBody();
    $request->requestBody->data = new WorkspaceRemoveUserRequest();
    $request->requestBody->data->user = '12345';
    $request->optFields = [
        'quidem',
        'maxime',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'et';

    $response = $sdk->workspaces->removeUserForWorkspace($request);

    if ($response->removeUserForWorkspace204ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspace

A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
Currently the only field that can be modified for a workspace is its name.
Returns the complete, updated workspace record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceRequestInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceRequest();
    $request->requestBody = new UpdateWorkspaceRequestBodyInput();
    $request->requestBody->data = new WorkspaceRequestInput();
    $request->requestBody->data->name = 'My Company Workspace';
    $request->optFields = [
        'amet',
        'assumenda',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'ea';

    $response = $sdk->workspaces->updateWorkspace($request);

    if ($response->updateWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

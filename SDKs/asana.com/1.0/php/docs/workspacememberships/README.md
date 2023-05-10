# workspaceMemberships

## Overview

This object determines if a user is a member of a workspace.

### Available Operations

* [getWorkspaceMembership](#getworkspacemembership) - Get a workspace membership
* [getWorkspaceMembershipsForUser](#getworkspacemembershipsforuser) - Get workspace memberships for a user
* [getWorkspaceMembershipsForWorkspace](#getworkspacemembershipsforworkspace) - Get the workspace memberships for a workspace

## getWorkspaceMembership

Returns the complete workspace record for a single workspace membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceMembershipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceMembershipRequest();
    $request->optFields = [
        'atque',
        'laborum',
        'nam',
    ];
    $request->optPretty = false;
    $request->workspaceMembershipGid = 'tenetur';

    $response = $sdk->workspaceMemberships->getWorkspaceMembership($request);

    if ($response->getWorkspaceMembership200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceMembershipsForUser

Returns the compact workspace membership records for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceMembershipsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceMembershipsForUserRequest();
    $request->limit = 388867;
    $request->offset = 'alias';
    $request->optFields = [
        'deserunt',
    ];
    $request->optPretty = false;
    $request->userGid = 'voluptate';

    $response = $sdk->workspaceMemberships->getWorkspaceMembershipsForUser($request);

    if ($response->getWorkspaceMembershipsForUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceMembershipsForWorkspace

Returns the compact workspace membership records for the workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceMembershipsForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceMembershipsForWorkspaceRequest();
    $request->limit = 600392;
    $request->offset = 'reiciendis';
    $request->optFields = [
        'repellendus',
        'delectus',
        'voluptates',
    ];
    $request->optPretty = false;
    $request->user = 'perferendis';
    $request->workspaceGid = 'est';

    $response = $sdk->workspaceMemberships->getWorkspaceMembershipsForWorkspace($request);

    if ($response->getWorkspaceMembershipsForWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

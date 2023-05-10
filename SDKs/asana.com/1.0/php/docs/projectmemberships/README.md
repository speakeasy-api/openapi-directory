# projectMemberships

## Overview

With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (i.e., whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.

### Available Operations

* [getProjectMembership](#getprojectmembership) - Get a project membership
* [getProjectMembershipsForProject](#getprojectmembershipsforproject) - Get memberships from a project

## getProjectMembership

Returns the complete project record for a single project membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectMembershipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectMembershipRequest();
    $request->optFields = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->optPretty = false;
    $request->projectMembershipGid = 'nam';

    $response = $sdk->projectMemberships->getProjectMembership($request);

    if ($response->getProjectMembership200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectMembershipsForProject

Returns the compact project membership records for the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectMembershipsForProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectMembershipsForProjectRequest();
    $request->limit = 50588;
    $request->offset = 'pariatur';
    $request->optFields = [
        'voluptatibus',
        'perferendis',
    ];
    $request->optPretty = false;
    $request->projectGid = 'fugiat';
    $request->user = 'amet';

    $response = $sdk->projectMemberships->getProjectMembershipsForProject($request);

    if ($response->getProjectMembershipsForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

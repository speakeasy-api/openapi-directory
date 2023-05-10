# teamMemberships

## Overview

This object determines if a user is a member of a team.

### Available Operations

* [getTeamMembership](#getteammembership) - Get a team membership
* [getTeamMemberships](#getteammemberships) - Get team memberships
* [getTeamMembershipsForTeam](#getteammembershipsforteam) - Get memberships from a team
* [getTeamMembershipsForUser](#getteammembershipsforuser) - Get memberships from a user

## getTeamMembership

Returns the complete team membership record for a single team membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMembershipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMembershipRequest();
    $request->optFields = [
        'harum',
        'laboriosam',
    ];
    $request->optPretty = false;
    $request->teamMembershipGid = 'ipsa';

    $response = $sdk->teamMemberships->getTeamMembership($request);

    if ($response->getTeamMembership200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMemberships

Returns compact team membership records.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMembershipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMembershipsRequest();
    $request->limit = 916727;
    $request->offset = 'libero';
    $request->optFields = [
        'accusamus',
    ];
    $request->optPretty = false;
    $request->team = 'similique';
    $request->user = 'tempora';
    $request->workspace = 'aspernatur';

    $response = $sdk->teamMemberships->getTeamMemberships($request);

    if ($response->getTeamMemberships200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMembershipsForTeam

Returns the compact team memberships for the team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMembershipsForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMembershipsForTeamRequest();
    $request->limit = 379057;
    $request->offset = 'voluptas';
    $request->optFields = [
        'minima',
        'nobis',
    ];
    $request->optPretty = false;
    $request->teamGid = 'dolorum';

    $response = $sdk->teamMemberships->getTeamMembershipsForTeam($request);

    if ($response->getTeamMembershipsForTeam200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMembershipsForUser

Returns the compact team membership records for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMembershipsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMembershipsForUserRequest();
    $request->limit = 237807;
    $request->offset = 'minus';
    $request->optFields = [
        'blanditiis',
    ];
    $request->optPretty = false;
    $request->userGid = 'in';
    $request->workspace = 'dolore';

    $response = $sdk->teamMemberships->getTeamMembershipsForUser($request);

    if ($response->getTeamMembershipsForUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

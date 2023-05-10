# teams

## Overview

A team is used to group related projects and people together within an organization. Each project in an organization is associated with a team.

### Available Operations

* [addUserForTeam](#adduserforteam) - Add a user to a team
* [createTeam](#createteam) - Create a team
* [getTeam](#getteam) - Get a team
* [getTeamsForUser](#getteamsforuser) - Get teams for a user
* [getTeamsForWorkspace](#getteamsforworkspace) - Get teams in a workspace
* [removeUserForTeam](#removeuserforteam) - Remove a user from a team
* [updateTeam](#updateteam) - Update a team

## addUserForTeam

The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.

Returns the complete team membership record for the newly added user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddUserForTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddUserForTeamRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TeamAddUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddUserForTeamRequest();
    $request->requestBody = new AddUserForTeamRequestBody();
    $request->requestBody->data = new TeamAddUserRequest();
    $request->requestBody->data->user = '12345';
    $request->optFields = [
        'officiis',
        'temporibus',
    ];
    $request->optPretty = false;
    $request->teamGid = 'ullam';

    $response = $sdk->teams->addUserForTeam($request);

    if ($response->addUserForTeam200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTeam

Creates a team within the current workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTeamRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\TeamRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TeamRequestVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTeamRequest();
    $request->requestBody = new CreateTeamRequestBodyInput();
    $request->requestBody->data = new TeamRequestInput();
    $request->requestBody->data->description = 'All developers should be members of this team.';
    $request->requestBody->data->htmlDescription = '<body><em>All</em> developers should be members of this team.</body>';
    $request->requestBody->data->name = 'Marketing';
    $request->requestBody->data->organization = '123456789';
    $request->requestBody->data->visibility = TeamRequestVisibilityEnum::SECRET;
    $request->limit = 738391;
    $request->offset = 'blanditiis';
    $request->optFields = [
        'hic',
        'nesciunt',
        'culpa',
    ];
    $request->optPretty = false;

    $response = $sdk->teams->createTeam($request);

    if ($response->createTeam201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeam

Returns the full record for a single team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamRequest();
    $request->limit = 548519;
    $request->offset = 'pariatur';
    $request->optFields = [
        'hic',
        'exercitationem',
        'nobis',
    ];
    $request->optPretty = false;
    $request->teamGid = 'sit';

    $response = $sdk->teams->getTeam($request);

    if ($response->getTeam200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamsForUser

Returns the compact records for all teams to which the given user is assigned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsForUserRequest();
    $request->limit = 699575;
    $request->offset = 'sed';
    $request->optFields = [
        'explicabo',
        'asperiores',
        'facilis',
        'voluptate',
    ];
    $request->optPretty = false;
    $request->organization = 'expedita';
    $request->userGid = 'ab';

    $response = $sdk->teams->getTeamsForUser($request);

    if ($response->getTeamsForUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamsForWorkspace

Returns the compact records for all teams in the workspace visible to the authorized user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsForWorkspaceRequest();
    $request->limit = 611749;
    $request->offset = 'dolore';
    $request->optFields = [
        'sed',
        'in',
        'commodi',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'quidem';

    $response = $sdk->teams->getTeamsForWorkspace($request);

    if ($response->getTeamsForWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeUserForTeam

The user making this call must be a member of the team in order to remove themselves or others.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveUserForTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveUserForTeamRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TeamRemoveUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveUserForTeamRequest();
    $request->requestBody = new RemoveUserForTeamRequestBody();
    $request->requestBody->data = new TeamRemoveUserRequest();
    $request->requestBody->data->user = '12345';
    $request->optFields = [
        'voluptas',
    ];
    $request->optPretty = false;
    $request->teamGid = 'unde';

    $response = $sdk->teams->removeUserForTeam($request);

    if ($response->removeUserForTeam204ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTeam

Updates a team within the current workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTeamRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\TeamRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TeamRequestVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTeamRequest();
    $request->requestBody = new UpdateTeamRequestBodyInput();
    $request->requestBody->data = new TeamRequestInput();
    $request->requestBody->data->description = 'All developers should be members of this team.';
    $request->requestBody->data->htmlDescription = '<body><em>All</em> developers should be members of this team.</body>';
    $request->requestBody->data->name = 'Marketing';
    $request->requestBody->data->organization = '123456789';
    $request->requestBody->data->visibility = TeamRequestVisibilityEnum::SECRET;
    $request->limit = 382808;
    $request->offset = 'sapiente';
    $request->optFields = [
        'illo',
        'reiciendis',
        'perferendis',
        'corrupti',
    ];
    $request->optPretty = false;

    $response = $sdk->teams->updateTeam($request);

    if ($response->updateTeam200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

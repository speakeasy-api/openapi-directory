# teams

## Overview

The Teams service allows you to group users of your project and to enable them to share read and write access to your project resources

### Available Operations

* [teamsCreate](#teamscreate) - Create Team
* [teamsCreateMembership](#teamscreatemembership) - Create Team Membership
* [teamsDelete](#teamsdelete) - Delete Team
* [teamsDeleteMembership](#teamsdeletemembership) - Delete Team Membership
* [teamsGet](#teamsget) - Get Team
* [teamsGetMemberships](#teamsgetmemberships) - Get Team Memberships
* [teamsList](#teamslist) - List Teams
* [teamsUpdate](#teamsupdate) - Update Team
* [teamsUpdateMembershipRoles](#teamsupdatemembershiproles) - Update Membership Roles
* [teamsUpdateMembershipStatus](#teamsupdatemembershipstatus) - Update Team Membership Status

## teamsCreate

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateRequestBody();
    $request->name = 'Dorothy Kovacek';
    $request->roles = [
        'labore',
        'labore',
        'suscipit',
    ];

    $requestSecurity = new TeamsCreateSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsCreate($request, $requestSecurity);

    if ($response->team !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCreateMembership

Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.

Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.

Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateMembershipRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateMembershipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateMembershipRequest();
    $request->requestBody = new TeamsCreateMembershipRequestBody();
    $request->requestBody->email = 'Nellie.Keebler10@yahoo.com';
    $request->requestBody->name = 'Frances Marks';
    $request->requestBody->roles = [
        'sint',
        'accusantium',
        'mollitia',
    ];
    $request->requestBody->url = 'reiciendis';
    $request->teamId = 'mollitia';

    $requestSecurity = new TeamsCreateMembershipSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsCreateMembership($request, $requestSecurity);

    if ($response->membership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDelete

Delete a team by its unique ID. Only team owners have write access for this resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteRequest();
    $request->teamId = 'ad';

    $requestSecurity = new TeamsDeleteSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDeleteMembership

This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteMembershipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteMembershipRequest();
    $request->membershipId = 'eum';
    $request->teamId = 'dolor';

    $requestSecurity = new TeamsDeleteMembershipSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsDeleteMembership($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGet

Get a team by its unique ID. All team members have read access for this resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetRequest();
    $request->teamId = 'necessitatibus';

    $requestSecurity = new TeamsGetSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsGet($request, $requestSecurity);

    if ($response->team !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetMemberships

Get a team members by the team unique ID. All team members have read access for this list of resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetMembershipsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetMembershipsRequest();
    $request->limit = 141264;
    $request->offset = 367562;
    $request->orderType = 'quasi';
    $request->search = 'iure';
    $request->teamId = 'doloribus';

    $requestSecurity = new TeamsGetMembershipsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsGetMemberships($request, $requestSecurity);

    if ($response->membershipList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsList

Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListRequest();
    $request->limit = 891924;
    $request->offset = 260341;
    $request->orderType = 'maxime';
    $request->search = 'deleniti';

    $requestSecurity = new TeamsListSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsList($request, $requestSecurity);

    if ($response->teamList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdate

Update a team by its unique ID. Only team owners have write access for this resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateRequest();
    $request->requestBody = new TeamsUpdateRequestBody();
    $request->requestBody->name = 'Dr. Arnold Bradtke';
    $request->teamId = 'expedita';

    $requestSecurity = new TeamsUpdateSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsUpdate($request, $requestSecurity);

    if ($response->team !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdateMembershipRoles

Update Membership Roles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateMembershipRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateMembershipRolesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateMembershipRolesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateMembershipRolesRequest();
    $request->requestBody = new TeamsUpdateMembershipRolesRequestBody();
    $request->requestBody->roles = [
        'repellat',
        'quibusdam',
    ];
    $request->membershipId = 'sed';
    $request->teamId = 'saepe';

    $requestSecurity = new TeamsUpdateMembershipRolesSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsUpdateMembershipRoles($request, $requestSecurity);

    if ($response->membership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdateMembershipStatus

Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateMembershipStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateMembershipStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateMembershipStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateMembershipStatusRequest();
    $request->requestBody = new TeamsUpdateMembershipStatusRequestBody();
    $request->requestBody->secret = 'pariatur';
    $request->requestBody->userId = 'accusantium';
    $request->membershipId = 'consequuntur';
    $request->teamId = 'praesentium';

    $requestSecurity = new TeamsUpdateMembershipStatusSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->teams->teamsUpdateMembershipStatus($request, $requestSecurity);

    if ($response->membership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

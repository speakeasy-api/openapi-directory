# teams

## Overview

Team information

### Available Operations

* [getFbsTeams](#getfbsteams) - FBS team list
* [getRoster](#getroster) - Team rosters
* [getTalent](#gettalent) - Team talent composite rankings
* [getTeamMatchup](#getteammatchup) - Team matchup history
* [getTeams](#getteams) - Team information

## getFbsTeams

Information on major division teams

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFbsTeamsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFbsTeamsRequest();
    $request->year = 289406;

    $response = $sdk->teams->getFbsTeams($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRoster

Roster data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRosterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRosterRequest();
    $request->team = 'modi';
    $request->year = 183191;

    $response = $sdk->teams->getRoster($request);

    if ($response->players !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTalent

Team talent composite

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTalentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTalentRequest();
    $request->year = 397821;

    $response = $sdk->teams->getTalent($request);

    if ($response->teamTalents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMatchup

Matchup history

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMatchupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMatchupRequest();
    $request->maxYear = 586513;
    $request->minYear = 552822;
    $request->team1 = 'perferendis';
    $request->team2 = 'magni';

    $response = $sdk->teams->getTeamMatchup($request);

    if ($response->teamMatchup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeams

Get team information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamsRequest();
    $request->conference = 'assumenda';

    $response = $sdk->teams->getTeams($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

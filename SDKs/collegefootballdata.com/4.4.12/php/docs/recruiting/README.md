# recruiting

## Overview

Recruiting rankings and data

### Available Operations

* [getRecruitingGroups](#getrecruitinggroups) - Recruit position group ratings
* [getRecruitingPlayers](#getrecruitingplayers) - Player recruiting ratings and rankings
* [getRecruitingTeams](#getrecruitingteams) - Team recruiting rankings and ratings

## getRecruitingGroups

Gets a list of aggregated statistics by team and position grouping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecruitingGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecruitingGroupsRequest();
    $request->conference = 'repudiandae';
    $request->endYear = 64147;
    $request->startYear = 216822;
    $request->team = 'quidem';

    $response = $sdk->recruiting->getRecruitingGroups($request);

    if ($response->positionGroupRecruitingRatings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecruitingPlayers

Get player recruiting rankings and data. Requires either a year or team to be specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecruitingPlayersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecruitingPlayersRequest();
    $request->classification = 'molestias';
    $request->position = 'excepturi';
    $request->state = 'pariatur';
    $request->team = 'modi';
    $request->year = 508969;

    $response = $sdk->recruiting->getRecruitingPlayers($request);

    if ($response->recruits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecruitingTeams

Team recruiting rankings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecruitingTeamsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecruitingTeamsRequest();
    $request->team = 'rem';
    $request->year = 916723;

    $response = $sdk->recruiting->getRecruitingTeams($request);

    if ($response->teamRecruitingRanks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

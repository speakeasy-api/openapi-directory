# players

## Overview

Player information and data

### Available Operations

* [getPlayerSeasonStats](#getplayerseasonstats) - Player stats by season
* [getPlayerUsage](#getplayerusage) - Player usage metrics broken down by season
* [getReturningProduction](#getreturningproduction) - Team returning production metrics
* [getTransferPortal](#gettransferportal) - Transfer portal by season
* [playerSearch](#playersearch) - Search for player information

## getPlayerSeasonStats

Season player stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlayerSeasonStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlayerSeasonStatsRequest();
    $request->category = 'culpa';
    $request->conference = 'consequuntur';
    $request->endWeek = 995300;
    $request->seasonType = 'mollitia';
    $request->startWeek = 581850;
    $request->team = 'numquam';
    $request->year = 414369;

    $response = $sdk->players->getPlayerSeasonStats($request);

    if ($response->playerSeasonStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlayerUsage

Player usage metrics by season

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlayerUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlayerUsageRequest();
    $request->conference = 'quam';
    $request->excludeGarbageTime = false;
    $request->playerId = 474697;
    $request->position = 'velit';
    $request->team = 'error';
    $request->year = 158969;

    $response = $sdk->players->getPlayerUsage($request);

    if ($response->playerUsages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReturningProduction

Returning production metrics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReturningProductionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReturningProductionRequest();
    $request->conference = 'quis';
    $request->team = 'vitae';
    $request->year = 674752;

    $response = $sdk->players->getReturningProduction($request);

    if ($response->returningProductions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransferPortal

Transfer portal by season

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransferPortalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransferPortalRequest();
    $request->year = 656330;

    $response = $sdk->players->getTransferPortal($request);

    if ($response->portalPlayers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playerSearch

Search for players

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlayerSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayerSearchRequest();
    $request->position = 'enim';
    $request->searchTerm = 'odit';
    $request->team = 'quo';
    $request->year = 196582;

    $response = $sdk->players->playerSearch($request);

    if ($response->playerSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

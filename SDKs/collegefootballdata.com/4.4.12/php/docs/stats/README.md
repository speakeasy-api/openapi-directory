# stats

## Overview

Statistical data

### Available Operations

* [getAdvancedTeamGameStats](#getadvancedteamgamestats) - Advanced team metrics by game
* [getAdvancedTeamSeasonStats](#getadvancedteamseasonstats) - Advanced team metrics by season
* [getStatCategories](#getstatcategories) - Team stat categories
* [getTeamSeasonStats](#getteamseasonstats) - Team statistics by season

## getAdvancedTeamGameStats

Advanced team game stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdvancedTeamGameStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdvancedTeamGameStatsRequest();
    $request->excludeGarbageTime = false;
    $request->opponent = 'quasi';
    $request->seasonType = 'repudiandae';
    $request->team = 'sint';
    $request->week = 83112;
    $request->year = 929297;

    $response = $sdk->stats->getAdvancedTeamGameStats($request);

    if ($response->advancedGameStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdvancedTeamSeasonStats

Advanced team season stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdvancedTeamSeasonStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdvancedTeamSeasonStatsRequest();
    $request->endWeek = 277718;
    $request->excludeGarbageTime = false;
    $request->startWeek = 318569;
    $request->team = 'consequatur';
    $request->year = 667411;

    $response = $sdk->stats->getAdvancedTeamSeasonStats($request);

    if ($response->advancedSeasonStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatCategories

Stat category list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stats->getStatCategories();

    if ($response->getStatCategories200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamSeasonStats

Team season stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamSeasonStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamSeasonStatsRequest();
    $request->conference = 'quibusdam';
    $request->endWeek = 131797;
    $request->startWeek = 647174;
    $request->team = 'distinctio';
    $request->year = 841386;

    $response = $sdk->stats->getTeamSeasonStats($request);

    if ($response->teamSeasonStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

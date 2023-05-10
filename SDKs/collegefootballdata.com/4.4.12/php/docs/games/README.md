# games

## Overview

Games scores and statistics

### Available Operations

* [getAdvancedBoxScore](#getadvancedboxscore) - Advanced box scores
* [getCalendar](#getcalendar) - Season calendar
* [getGameMedia](#getgamemedia) - Game media information and schedules
* [getGameWeather](#getgameweather) - Game weather information (Patreon only)
* [getGames](#getgames) - Games and results
* [getPlayerGameStats](#getplayergamestats) - Player game stats
* [getScoreboard](#getscoreboard) - Live game results (Patreon only)
* [getTeamGameStats](#getteamgamestats) - Team game stats
* [getTeamRecords](#getteamrecords) - Team records

## getAdvancedBoxScore

Get advanced box score data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdvancedBoxScoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdvancedBoxScoreRequest();
    $request->gameId = 140350;

    $response = $sdk->games->getAdvancedBoxScore($request);

    if ($response->boxScore !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalendar

Get calendar of weeks by season

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalendarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalendarRequest();
    $request->year = 870013;

    $response = $sdk->games->getCalendar($request);

    if ($response->weeks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGameMedia

Game media information (TV, radio, etc)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGameMediaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGameMediaRequest();
    $request->classification = 'at';
    $request->conference = 'maiores';
    $request->mediaType = 'molestiae';
    $request->seasonType = 'quod';
    $request->team = 'quod';
    $request->week = 461479;
    $request->year = 520478;

    $response = $sdk->games->getGameMedia($request);

    if ($response->gameMedias !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGameWeather

Weather information for the hour of kickoff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGameWeatherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGameWeatherRequest();
    $request->classification = 'porro';
    $request->conference = 'dolorum';
    $request->gameId = 118274;
    $request->seasonType = 'nam';
    $request->team = 'officia';
    $request->week = 582020;
    $request->year = 143353;

    $response = $sdk->games->getGameWeather($request);

    if ($response->gameWeathers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGames

Get game results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGamesRequest();
    $request->away = 'deleniti';
    $request->conference = 'hic';
    $request->division = 'optio';
    $request->home = 'totam';
    $request->id = 105907;
    $request->seasonType = 'commodi';
    $request->team = 'molestiae';
    $request->week = 264555;
    $request->year = 186332;

    $response = $sdk->games->getGames($request);

    if ($response->games !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlayerGameStats

Player stats broken down by game

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlayerGameStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlayerGameStatsRequest();
    $request->category = 'impedit';
    $request->conference = 'cum';
    $request->gameId = 456150;
    $request->seasonType = 'ipsum';
    $request->team = 'excepturi';
    $request->week = 135218;
    $request->year = 18789;

    $response = $sdk->games->getPlayerGameStats($request);

    if ($response->playerGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreboard

Get live game results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreboardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreboardRequest();
    $request->classification = 'ad';
    $request->conference = 'natus';

    $response = $sdk->games->getScoreboard($request);

    if ($response->scoreboardGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamGameStats

Team stats broken down by game

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamGameStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamGameStatsRequest();
    $request->classification = 'sed';
    $request->conference = 'iste';
    $request->gameId = 222321;
    $request->seasonType = 'natus';
    $request->team = 'laboriosam';
    $request->week = 943749;
    $request->year = 902599;

    $response = $sdk->games->getTeamGameStats($request);

    if ($response->teamGames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamRecords

Get team records by year

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamRecordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamRecordsRequest();
    $request->conference = 'fuga';
    $request->team = 'in';
    $request->year = 359508;

    $response = $sdk->games->getTeamRecords($request);

    if ($response->teamRecords !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

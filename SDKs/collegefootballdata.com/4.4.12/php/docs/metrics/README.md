# metrics

## Overview

Data relating to Predicted Points and other metrics

### Available Operations

* [getGamePPA](#getgameppa) - Team Predicated Points Added (PPA/EPA) by game
* [getPlayerGamePPA](#getplayergameppa) - Player Predicated Points Added (PPA/EPA) broken down by game
* [getPlayerSeasonPPA](#getplayerseasonppa) - Player Predicated Points Added (PPA/EPA) broken down by season
* [getPredictedPoints](#getpredictedpoints) - Predicted Points (i.e. Expected Points or EP)
* [getPregameWinProbabilities](#getpregamewinprobabilities) - Pregame win probability data
* [getTeamPPA](#getteamppa) - Predicted Points Added (PPA/EPA) data by team
* [getWinProbabilityData](#getwinprobabilitydata) - Win probability chart data

## getGamePPA

Predicted Points Added (PPA) by game

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGamePPARequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGamePPARequest();
    $request->conference = 'iste';
    $request->excludeGarbageTime = false;
    $request->seasonType = 'iure';
    $request->team = 'saepe';
    $request->week = 697631;
    $request->year = 99280;

    $response = $sdk->metrics->getGamePPA($request);

    if ($response->gamePPAS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlayerGamePPA

Predicted Points Added (PPA) by player game

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlayerGamePPARequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlayerGamePPARequest();
    $request->excludeGarbageTime = false;
    $request->playerId = 60225;
    $request->position = 'reiciendis';
    $request->seasonType = 'est';
    $request->team = 'mollitia';
    $request->threshold = 'laborum';
    $request->week = 170909;
    $request->year = 210382;

    $response = $sdk->metrics->getPlayerGamePPA($request);

    if ($response->playerGamePPAS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlayerSeasonPPA

Predicted Points Added (PPA) by player season

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlayerSeasonPPARequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlayerSeasonPPARequest();
    $request->conference = 'corporis';
    $request->excludeGarbageTime = false;
    $request->playerId = 128926;
    $request->position = 'nobis';
    $request->team = 'enim';
    $request->threshold = 'omnis';
    $request->year = 363711;

    $response = $sdk->metrics->getPlayerSeasonPPA($request);

    if ($response->playerSeasonPPAS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPredictedPoints

Predicted Points

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPredictedPointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPredictedPointsRequest();
    $request->distance = 325047;
    $request->down = 570197;

    $response = $sdk->metrics->getPredictedPoints($request);

    if ($response->predictedPoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPregameWinProbabilities

Pregame win probabilities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPregameWinProbabilitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPregameWinProbabilitiesRequest();
    $request->seasonType = 'accusantium';
    $request->team = 'iure';
    $request->week = 634274;
    $request->year = 988374;

    $response = $sdk->metrics->getPregameWinProbabilities($request);

    if ($response->pregameWPS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamPPA

Predicted Points Added (PPA)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamPPARequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamPPARequest();
    $request->conference = 'sapiente';
    $request->excludeGarbageTime = false;
    $request->team = 'architecto';
    $request->year = 652790;

    $response = $sdk->metrics->getTeamPPA($request);

    if ($response->teamPPAS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWinProbabilityData

Win probability data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWinProbabilityDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWinProbabilityDataRequest();
    $request->gameId = 208876;

    $response = $sdk->metrics->getWinProbabilityData($request);

    if ($response->playWPS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

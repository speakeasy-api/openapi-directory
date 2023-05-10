# plays

## Overview

Play by play data

### Available Operations

* [getLivePlays](#getliveplays) - Live metrics and PBP (Patreon only)
* [getPlayStatTypes](#getplaystattypes) - Types of player play stats
* [getPlayStats](#getplaystats) - Play stats by play
* [getPlayTypes](#getplaytypes) - Play types
* [getPlays](#getplays) - Play by play data

## getLivePlays

Get live metrics and PBP

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLivePlaysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLivePlaysRequest();
    $request->id = 949572;

    $response = $sdk->plays->getLivePlays($request);

    if ($response->livePlayByPlay !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlayStatTypes

Type of play stats

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
    $response = $sdk->plays->getPlayStatTypes();

    if ($response->playStatTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlayStats

Gets player stats associated by play (limit 1000)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlayStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlayStatsRequest();
    $request->athleteId = 368725;
    $request->conference = 'id';
    $request->gameId = 820994;
    $request->seasonType = 'aut';
    $request->statTypeId = 97101;
    $request->team = 'error';
    $request->week = 837945;
    $request->year = 673660;

    $response = $sdk->plays->getPlayStats($request);

    if ($response->playStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlayTypes

Types of plays

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
    $response = $sdk->plays->getPlayTypes();

    if ($response->playTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlays

Get play data and results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaysRequest();
    $request->classification = 'quasi';
    $request->conference = 'reiciendis';
    $request->defense = 'voluptatibus';
    $request->defenseConference = 'vero';
    $request->offense = 'nihil';
    $request->offenseConference = 'praesentium';
    $request->playType = 976762;
    $request->seasonType = 'ipsa';
    $request->team = 'omnis';
    $request->week = 451159;
    $request->year = 739264;

    $response = $sdk->plays->getPlays($request);

    if ($response->plays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

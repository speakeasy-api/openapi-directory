# ratings

## Overview

Team rating data

### Available Operations

* [getConferenceSPRatings](#getconferencespratings) - Historical SP+ ratings by conference
* [getEloRatings](#geteloratings) - Historical Elo ratings
* [getSPRatings](#getspratings) - Historical SP+ ratings
* [getSRSRatings](#getsrsratings) - Historical SRS ratings

## getConferenceSPRatings

Get average SP+ historical rating data by conference

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConferenceSPRatingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConferenceSPRatingsRequest();
    $request->conference = 'ut';
    $request->year = 979587;

    $response = $sdk->ratings->getConferenceSPRatings($request);

    if ($response->conferenceSPRatings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEloRatings

Elo rating data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEloRatingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEloRatingsRequest();
    $request->conference = 'dicta';
    $request->team = 'corporis';
    $request->week = 296140;
    $request->year = 480894;

    $response = $sdk->ratings->getEloRatings($request);

    if ($response->teamEloRatings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSPRatings

SP+ rating data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSPRatingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSPRatingsRequest();
    $request->team = 'dicta';
    $request->year = 688661;

    $response = $sdk->ratings->getSPRatings($request);

    if ($response->teamSPRatings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSRSRatings

SRS rating data (requires either a year or team specified)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSRSRatingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSRSRatingsRequest();
    $request->conference = 'enim';
    $request->team = 'accusamus';
    $request->year = 414263;

    $response = $sdk->ratings->getSRSRatings($request);

    if ($response->teamSRSRatings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# draft

## Overview

NFL Draft data

### Available Operations

* [getDraftPicks](#getdraftpicks) - List of NFL Draft picks
* [getNFLPositions](#getnflpositions) - List of NFL positions
* [getNFLTeams](#getnflteams) - List of NFL teams

## getDraftPicks

List of NFL Draft picks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDraftPicksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDraftPicksRequest();
    $request->college = 'voluptatum';
    $request->conference = 'iusto';
    $request->nflTeam = 'excepturi';
    $request->position = 'nisi';
    $request->year = 925597;

    $response = $sdk->draft->getDraftPicks($request);

    if ($response->draftPicks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNFLPositions

List of NFL positions

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
    $response = $sdk->draft->getNFLPositions();

    if ($response->draftPositions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNFLTeams

List of NFL teams

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
    $response = $sdk->draft->getNFLTeams();

    if ($response->draftTeams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

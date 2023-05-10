# games

### Available Operations

* [allGamesExampleParameters](#allgamesexampleparameters) - all games (example parameters)
* [specificGame](#specificgame) - specific game

## allGamesExampleParameters

all games (example parameters)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllGamesExampleParametersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllGamesExampleParametersRequest();
    $request->seasons = '2018';
    $request->teamIds = '1';

    $response = $sdk->games->allGamesExampleParameters($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## specificGame

specific game

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->games->specificGame();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

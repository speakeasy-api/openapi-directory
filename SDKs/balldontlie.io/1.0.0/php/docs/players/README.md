# players

### Available Operations

* [allPlayersSearch](#allplayerssearch) - all players (search)
* [specificPlayer](#specificplayer) - specific player

## allPlayersSearch

all players (search)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllPlayersSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllPlayersSearchRequest();
    $request->search = 'lebron';

    $response = $sdk->players->allPlayersSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## specificPlayer

specific player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->players->specificPlayer();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

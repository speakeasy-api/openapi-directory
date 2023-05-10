# gamesAdmin

## Overview

Games Admin Restv 2 Controller

### Available Operations

* [getGamesEndpointsUsingGET](#getgamesendpointsusingget) - getGamesEndpoints
* [listDeletedUsingGET](#listdeletedusingget) - listDeleted
* [listUsingGET](#listusingget) - list
* [restoreDeletedGameUsingPOST](#restoredeletedgameusingpost) - restoreDeletedGame

## getGamesEndpointsUsingGET

getGamesEndpoints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGamesEndpointsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGamesEndpointsUsingGETRequest();
    $request->apiKey = 'animi';

    $response = $sdk->gamesAdmin->getGamesEndpointsUsingGET($request);

    if ($response->gameEndpointsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeletedUsingGET

listDeleted

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->gamesAdmin->listDeletedUsingGET();

    if ($response->deletedGameModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsingGET

list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->gamesAdmin->listUsingGET();

    if ($response->gameModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreDeletedGameUsingPOST

restoreDeletedGame

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RestoreDeletedGameUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreDeletedGameUsingPOSTRequest();
    $request->apiKey = 'enim';

    $response = $sdk->gamesAdmin->restoreDeletedGameUsingPOST($request);

    if ($response->messageModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

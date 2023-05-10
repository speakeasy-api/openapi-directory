# randomRiddle

## Overview

Generate Random Riddles

Find out more
<http://fungenerators.com/api/riddle>
### Available Operations

* [getRiddleRandom](#getriddlerandom) - Get a random riddle for a given category(optional)
* [getRiddleSearch](#getriddlesearch) - Search for random riddle which has the text in the query, for a given category(optional).

## getRiddleRandom

Get a random riddle for a given category(optional)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRiddleRandomRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRiddleRandomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRiddleRandomRequest();
    $request->category = 'error';

    $requestSecurity = new GetRiddleRandomSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->randomRiddle->getRiddleRandom($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRiddleSearch

Search for random riddle which has the text in the query, for a given category(optional).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRiddleSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRiddleSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRiddleSearchRequest();
    $request->category = 'deserunt';
    $request->query = 'suscipit';

    $requestSecurity = new GetRiddleSearchSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->randomRiddle->getRiddleSearch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

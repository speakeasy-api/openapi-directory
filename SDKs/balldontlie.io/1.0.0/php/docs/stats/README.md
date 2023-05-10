# stats

### Available Operations

* [allStatsExampleParameters](#allstatsexampleparameters) - all stats (example parameters)

## allStatsExampleParameters

all stats (example parameters)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllStatsExampleParametersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllStatsExampleParametersRequest();
    $request->playerIds = '237';
    $request->season = '2018';

    $response = $sdk->stats->allStatsExampleParameters($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

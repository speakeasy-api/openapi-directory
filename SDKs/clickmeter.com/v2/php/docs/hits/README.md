# hits

### Available Operations

* [hitsGetHits](#hitsgethits) - Retrieve the list of events related to this account.

## hitsGetHits

Retrieve the list of events related to this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HitsGetHitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\HitsGetHitsFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\HitsGetHitsTimeframeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HitsGetHitsRequest();
    $request->filter = HitsGetHitsFilterEnum::CONVERSIONS;
    $request->fromDay = 'ullam';
    $request->limit = 237742;
    $request->offset = 'cum';
    $request->timeframe = HitsGetHitsTimeframeEnum::PREVIOUSMONTH;
    $request->toDay = 'quas';

    $response = $sdk->hits->hitsGetHits($request);

    if ($response->apiCoreDtoClickStreamHitListPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

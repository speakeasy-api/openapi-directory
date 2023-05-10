# clickStream

### Available Operations

* [clickStreamGet](#clickstreamget) - Retrieve the latest list of events of this account. Limited to last 100.

## clickStreamGet

Retrieve the latest list of events of this account. Limited to last 100.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClickStreamGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClickStreamGetFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClickStreamGetRequest();
    $request->conversion = 730856;
    $request->datapoint = 880298;
    $request->filter = ClickStreamGetFilterEnum::SPIDERS;
    $request->group = 313692;
    $request->pageSize = 213312;

    $response = $sdk->clickStream->clickStreamGet($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# listing

### Available Operations

* [listingsAll](#listingsall) - List listings
* [listingsOne](#listingsone) - Get listing

## listingsAll

List listings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListingsAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListingsAllRequest();
    $request->cursor = 'nihil';
    $request->ecosystemId = 'praesentium';
    $request->externalId = 'voluptatibus';
    $request->limit = 55714;

    $response = $sdk->listing->listingsAll($request);

    if ($response->getListingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listingsOne

Get listing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListingsOneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListingsOneRequest();
    $request->ecosystemId = 'omnis';
    $request->id = '7b0074f1-5471-4b5e-ae13-b99d488e1e91';

    $response = $sdk->listing->listingsOne($request);

    if ($response->getListingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

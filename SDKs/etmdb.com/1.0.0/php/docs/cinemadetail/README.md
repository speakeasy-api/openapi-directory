# cinemaDetail

### Available Operations

* [cinemaDetailSearchRead](#cinemadetailsearchread) - Return cinema details search result

## cinemaDetailSearchRead

Return cinema details search result

### Response Class (Status 200)

* __{cinema_name}__: Used as a key word to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CinemaDetailSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CinemaDetailSearchReadRequest();
    $request->cinemaName = 'impedit';

    $response = $sdk->cinemaDetail->cinemaDetailSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

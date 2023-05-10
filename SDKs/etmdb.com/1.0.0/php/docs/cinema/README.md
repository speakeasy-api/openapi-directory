# cinema

### Available Operations

* [cinemaSearchRead](#cinemasearchread) - Return cinema search result

## cinemaSearchRead

Return cinema search result

### Response Class (Status 200)

* __{id}__: Used as a key to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CinemaSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CinemaSearchReadRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->cinema->cinemaSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

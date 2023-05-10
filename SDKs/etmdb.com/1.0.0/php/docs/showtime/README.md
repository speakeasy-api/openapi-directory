# showtime

### Available Operations

* [showtimeSearchallRead](#showtimesearchallread) - Return showtime search result

## showtimeSearchallRead

Return showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* show time or
* day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]

For more details about showtime, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ShowtimeSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowtimeSearchallReadRequest();
    $request->param = 'reiciendis';

    $response = $sdk->showtime->showtimeSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

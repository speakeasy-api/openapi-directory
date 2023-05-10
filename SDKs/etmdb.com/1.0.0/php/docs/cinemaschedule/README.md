# cinemaSchedule

### Available Operations

* [cinemaScheduleSearchRead](#cinemaschedulesearchread) - Return cinema schedule search result
* [cinemaScheduleSearchallRead](#cinemaschedulesearchallread) - Return cinema schedule search result

## cinemaScheduleSearchRead

Return cinema schedule search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CinemaScheduleSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CinemaScheduleSearchReadRequest();
    $request->movieTitle = 'cum';

    $response = $sdk->cinemaSchedule->cinemaScheduleSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cinemaScheduleSearchallRead

Return cinema schedule search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CinemaScheduleSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CinemaScheduleSearchallReadRequest();
    $request->param = 'esse';

    $response = $sdk->cinemaSchedule->cinemaScheduleSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

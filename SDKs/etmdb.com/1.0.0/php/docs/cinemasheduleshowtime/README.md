# cinemaSheduleShowtime

### Available Operations

* [cinemaSheduleShowtimeSearchRead](#cinemasheduleshowtimesearchread) - Return cinema schedule and showtime search result
* [cinemaSheduleShowtimeSearchallRead](#cinemasheduleshowtimesearchallread) - Return cinema schedule and showtime search result

## cinemaSheduleShowtimeSearchRead

Return cinema schedule and showtime search result

### Response Class (Status 200)
* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CinemaSheduleShowtimeSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CinemaSheduleShowtimeSearchReadRequest();
    $request->movieTitle = 'ipsum';

    $response = $sdk->cinemaSheduleShowtime->cinemaSheduleShowtimeSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cinemaSheduleShowtimeSearchallRead

Return cinema schedule and showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name
* showtime starting date
* showtime ending date or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CinemaSheduleShowtimeSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CinemaSheduleShowtimeSearchallReadRequest();
    $request->param = 'excepturi';

    $response = $sdk->cinemaSheduleShowtime->cinemaSheduleShowtimeSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

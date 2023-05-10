# movie

### Available Operations

* [movieSearchRead](#moviesearchread) - Return movie search result

## movieSearchRead

Return movie search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MovieSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MovieSearchReadRequest();
    $request->movieTitle = 'iure';

    $response = $sdk->movie->movieSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# genre

### Available Operations

* [genreSearchRead](#genresearchread) - Return movie genre search result
* [genreSearchallRead](#genresearchallread) - Return movie genre search result

## genreSearchRead

Return movie genre search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie genres
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenreSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenreSearchReadRequest();
    $request->movieTitle = 'dolor';

    $response = $sdk->genre->genreSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## genreSearchallRead

Return movie genre search result

### Response Class (Status 200)

* __{movie_genre_type}__: Used as a key word to search movie genres

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenreSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenreSearchallReadRequest();
    $request->movieGenreType = 'natus';

    $response = $sdk->genre->genreSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

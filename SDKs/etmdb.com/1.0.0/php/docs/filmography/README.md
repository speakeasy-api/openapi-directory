# filmography

### Available Operations

* [filmographySearchRead](#filmographysearchread) - Return filmography search result
* [filmographySearchallRead](#filmographysearchallread) - Return filmography search result

## filmographySearchRead

Return filmography search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how filmographies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FilmographySearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilmographySearchReadRequest();
    $request->movieTitle = 'natus';

    $response = $sdk->filmography->filmographySearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## filmographySearchallRead

Return filmography search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* filmography description (such as director, actor, producer, etc)

For more details on how filmographies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FilmographySearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilmographySearchallReadRequest();
    $request->param = 'sed';

    $response = $sdk->filmography->filmographySearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

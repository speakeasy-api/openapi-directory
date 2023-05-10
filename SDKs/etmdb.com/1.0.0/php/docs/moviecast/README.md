# movieCast

### Available Operations

* [movieCastSearchRead](#moviecastsearchread) - Return movie cast search result
* [movieCastSearchallRead](#moviecastsearchallread) - Return movie cast search result

## movieCastSearchRead

Return movie cast search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details on how movie casts are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MovieCastSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MovieCastSearchReadRequest();
    $request->movieTitle = 'saepe';

    $response = $sdk->movieCast->movieCastSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## movieCastSearchallRead

Return movie cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* character name

For more details on how movie casts are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MovieCastSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MovieCastSearchallReadRequest();
    $request->param = 'quidem';

    $response = $sdk->movieCast->movieCastSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

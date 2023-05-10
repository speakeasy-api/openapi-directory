# genreType

### Available Operations

* [genreTypeSearchRead](#genretypesearchread) - Return genre type search result

## genreTypeSearchRead

Return genre type search result

### Response Class (Status 200)

* __{genre_description}__: Used as a key word to search genre types

For more details on how genre types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenreTypeSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenreTypeSearchReadRequest();
    $request->genreDescription = 'laboriosam';

    $response = $sdk->genreType->genreTypeSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

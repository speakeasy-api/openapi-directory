# filmographyType

### Available Operations

* [filmographyTypeSearchRead](#filmographytypesearchread) - Return filmography type search result

## filmographyTypeSearchRead

Return filmography type search result

### Response Class (Status 200)

* __{filmography_description}__: Used as a key word to search filmography types

For more details on how filmography types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FilmographyTypeSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilmographyTypeSearchReadRequest();
    $request->filmographyDescription = 'iste';

    $response = $sdk->filmographyType->filmographyTypeSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

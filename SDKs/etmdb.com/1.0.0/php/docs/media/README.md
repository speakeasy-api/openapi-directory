# media

### Available Operations

* [mediaSearchRead](#mediasearchread) - Return movie media search result
* [mediaSearchallRead](#mediasearchallread) - Return cast media search result

## mediaSearchRead

Return movie media search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search media for movies
* You can use both Amharic or English charset/font to search

For more details on how media is listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MediaSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MediaSearchReadRequest();
    $request->movieTitle = 'corporis';

    $response = $sdk->media->mediaSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mediaSearchallRead

Return cast media search result

### Response Class (Status 200)
__{user}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast media is listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MediaSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MediaSearchallReadRequest();
    $request->user = 'iste';

    $response = $sdk->media->mediaSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

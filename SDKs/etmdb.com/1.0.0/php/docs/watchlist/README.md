# watchlist

### Available Operations

* [watchlistSearchRead](#watchlistsearchread) - Return watchlist search result
* [watchlistSearchallRead](#watchlistsearchallread) - Return watchlist search result

## watchlistSearchRead

Return watchlist search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies on watchlist
* You can use both Amharic or English charset/font to search

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WatchlistSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistSearchReadRequest();
    $request->movieTitle = 'est';

    $response = $sdk->watchlist->watchlistSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## watchlistSearchallRead

Return watchlist search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WatchlistSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WatchlistSearchallReadRequest();
    $request->param = 'mollitia';

    $response = $sdk->watchlist->watchlistSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

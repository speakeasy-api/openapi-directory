# song

### Available Operations

* [srcSearchlyApiV1ControllersSongSearch](#srcsearchlyapiv1controllerssongsearch) - API endpoint to search songs from the database given a query

## srcSearchlyApiV1ControllersSongSearch

Endpoint for an end-user client to search songs from the database given a String query.

If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:

```
https://searchly.asuarez.dev/api/v1/song/search
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SrcSearchlyApiV1ControllersSongSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SrcSearchlyApiV1ControllersSongSearchRequest();
    $request->query = 'quibusdam';

    $response = $sdk->song->srcSearchlyApiV1ControllersSongSearch($request);

    if ($response->apiResponseSong !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

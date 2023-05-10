# search

### Available Operations

* [getSearchAspectIdFullsearch](#getsearchaspectidfullsearch) - A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository

## getSearchAspectIdFullsearch

A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAspectIdFullsearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAspectIDFullsearchAspectIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchAspectIdFullsearchRequest();
    $request->aspectId = GetSearchAspectIDFullsearchAspectIDEnum::BCGAZ2;
    $request->e = 477665;
    $request->lFrag = 791725;
    $request->nFrag = 812169;
    $request->q = 'voluptatum';
    $request->s = 'iusto';

    $response = $sdk->search->getSearchAspectIdFullsearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

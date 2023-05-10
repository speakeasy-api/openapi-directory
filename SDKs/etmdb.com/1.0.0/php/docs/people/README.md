# people

### Available Operations

* [peopleSearchRead](#peoplesearchread) - Return cast search result

## peopleSearchRead

Return cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast are listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleSearchReadRequest();
    $request->user = 'ipsa';

    $response = $sdk->people->peopleSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

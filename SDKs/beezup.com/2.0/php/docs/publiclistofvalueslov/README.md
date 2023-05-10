# publicListOfValuesLOV

### Available Operations

* [getPublicListOfValues](#getpubliclistofvalues) - Get the list of values related to this list name
* [getPublicLovIndex](#getpubliclovindex) - Get all list names

## getPublicListOfValues

Get the list of values related to this list name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicListOfValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicListOfValuesRequest();
    $request->acceptLanguage = [
        'laborum',
        'nam',
        'tenetur',
    ];
    $request->ifNoneMatch = 'laboriosam';
    $request->listName = 'alias';

    $response = $sdk->publicListOfValuesLOV->getPublicListOfValues($request);

    if ($response->publicListOfValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicLovIndex

Get all list names

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicLovIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicLovIndexRequest();
    $request->ifNoneMatch = 'amet';

    $response = $sdk->publicListOfValuesLOV->getPublicLovIndex($request);

    if ($response->publicLovIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

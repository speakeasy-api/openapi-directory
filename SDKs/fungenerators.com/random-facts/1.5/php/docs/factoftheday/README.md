# factOfTheDay

## Overview

Get fact of the day on various categories. This is refreshed daily.

Find out more
<http://fungenerators.com/api/facts#fact-of-the-day>
### Available Operations

* [getFactFod](#getfactfod) - Get fact of the day for the given category.
* [getFactFodCategories](#getfactfodcategories) - Get the list of supported fact of the day categories.

## getFactFod

Get fact of the day for the given category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactFodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactFodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactFodRequest();
    $request->category = 'provident';

    $requestSecurity = new GetFactFodSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->factOfTheDay->getFactFod($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFactFodCategories

Get the list of supported fact of the day categories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactFodCategoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetFactFodCategoriesSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->factOfTheDay->getFactFodCategories($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

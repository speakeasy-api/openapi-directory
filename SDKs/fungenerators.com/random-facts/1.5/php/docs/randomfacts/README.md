# randomFacts

## Overview

Get random facts based on category and other criteria.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [getFact](#getfact) - Get a Fact belonging to the id.
* [getFactCategories](#getfactcategories) - Get a random Fact.
* [getFactRandom](#getfactrandom) - Get a random Fact for a given category(optional) and subcategory(optional).
* [getFactSearch](#getfactsearch) - Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).

## getFact

Get a Fact belonging to the id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactRequest();
    $request->id = 'ipsa';

    $requestSecurity = new GetFactSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->randomFacts->getFact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFactCategories

Get a random Fact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactCategoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactCategoriesRequest();
    $request->start = 963663;

    $requestSecurity = new GetFactCategoriesSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->randomFacts->getFactCategories($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFactRandom

Get a random Fact for a given category(optional) and subcategory(optional).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactRandomRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactRandomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactRandomRequest();
    $request->category = 'tempora';
    $request->subcategory = 'suscipit';

    $requestSecurity = new GetFactRandomSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->randomFacts->getFactRandom($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFactSearch

Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactSearchRequest();
    $request->category = 'molestiae';
    $request->query = 'minus';
    $request->subcategory = 'placeat';

    $requestSecurity = new GetFactSearchSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->randomFacts->getFactSearch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

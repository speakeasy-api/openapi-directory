# privateFacts

## Overview

Store and manage your own Facts online

Find out more
<http://fungenerators.com/api/facts#private>
### Available Operations

* [deleteFact](#deletefact) - Delete a Fact entry identified by the id.
* [getFact](#getfact) - Get a Fact belonging to the id.
* [putFact](#putfact) - Add a Fact entry to the database (private collection).

## deleteFact

Delete a Fact entry identified by the id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFactRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFactRequest();
    $request->id = 'error';

    $requestSecurity = new DeleteFactSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateFacts->deleteFact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->id = 'deserunt';

    $requestSecurity = new GetFactSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateFacts->getFact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFact

Add a Fact entry to the database (private collection).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutFactRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFactRequest();
    $request->category = 'suscipit';
    $request->fact = 'iure';
    $request->subcategory = 'magnam';
    $request->tags = 'debitis';

    $requestSecurity = new PutFactSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateFacts->putFact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

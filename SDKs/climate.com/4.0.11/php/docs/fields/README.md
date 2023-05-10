# fields

## Overview

Field data endpoints.

### Available Operations

* [fetchAllFields](#fetchallfields) - Retrieve list of all Fields the user has access to.
* [fetchFieldById](#fetchfieldbyid) - Retrieve a specific Field by ID
* [fetchFields](#fetchfields) - Retrieve list of Fields

## fetchAllFields

Retrieve all fields the authenticated user has access to, including fields shared with the authenticated user from other resource owners. Filter the results by field name if the `fieldName` query parameter is specified.
A 409 will be returned if the X-Next-Token has expired. When receiving a 409, the client should discard the X-Next-Token, discard all currently persisted fields for the user, and re-fetch fields from /fields/all.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAllFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAllFieldsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAllFieldsRequest();
    $request->xLimit = 428769;
    $request->xNextToken = 'vero';
    $request->fieldName = 'aspernatur';

    $requestSecurity = new FetchAllFieldsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->fields->fetchAllFields($request, $requestSecurity);

    if ($response->fields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFieldById

Retrieve a given **Field** by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFieldByIdRequest();
    $request->fieldId = '14195989-0afa-4563-a251-6fe4c8b711e5';

    $requestSecurity = new FetchFieldByIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->fields->fetchFieldById($request, $requestSecurity);

    if ($response->field !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFields

Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFieldsRequest();
    $request->xLimit = 714242;
    $request->xNextToken = 'nihil';
    $request->fieldName = 'repellat';

    $requestSecurity = new FetchFieldsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->fields->fetchFields($request, $requestSecurity);

    if ($response->fields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

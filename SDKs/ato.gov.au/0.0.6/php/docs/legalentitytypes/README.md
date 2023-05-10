# legalEntityTypes

## Overview

A classification scheme for parties (individuals and organisations).


### Available Operations

* [getClassificationsLegalEntityTypes](#getclassificationslegalentitytypes) - Retrieve a list of legal entity types

## getClassificationsLegalEntityTypes

Retrieve a list of legal entity types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsLegalEntityTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsLegalEntityTypesRequest();
    $request->apiKey = 'quia';

    $response = $sdk->legalEntityTypes->getClassificationsLegalEntityTypes($request);

    if ($response->legalEntityTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

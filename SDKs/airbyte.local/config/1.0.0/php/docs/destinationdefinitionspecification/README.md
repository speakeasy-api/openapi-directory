# destinationDefinitionSpecification

## Overview

DestinationDefinitionSpecification related resources.

### Available Operations

* [getDestinationDefinitionSpecification](#getdestinationdefinitionspecification) - Get specification for a destinationDefinition

## getDestinationDefinitionSpecification

Get specification for a destinationDefinition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationDefinitionIdWithWorkspaceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationDefinitionIdWithWorkspaceId();
    $request->destinationDefinitionId = 'd3113529-65bb-48a7-a026-11435e139dbc';
    $request->workspaceId = '2259b1ab-da8c-4070-a108-4cb0672d1ad8';

    $response = $sdk->destinationDefinitionSpecification->getDestinationDefinitionSpecification($request);

    if ($response->destinationDefinitionSpecificationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# sourceDefinitionSpecification

## Overview

SourceDefinition specification related resources.

### Available Operations

* [getSourceDefinitionSpecification](#getsourcedefinitionspecification) - Get specification for a SourceDefinition.

## getSourceDefinitionSpecification

Get specification for a SourceDefinition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDefinitionIdWithWorkspaceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDefinitionIdWithWorkspaceId();
    $request->sourceDefinitionId = '724cdb0f-4d28-4118-bd56-844eded85a90';
    $request->workspaceId = '65e628bd-fc20-432b-ac87-9923b7e13584';

    $response = $sdk->sourceDefinitionSpecification->getSourceDefinitionSpecification($request);

    if ($response->sourceDefinitionSpecificationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# artifactType

### Available Operations

* [listArtifactTypes](#listartifacttypes) - List artifact types

## listArtifactTypes

Gets a list of all the configured artifact types.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->artifactType->listArtifactTypes();

    if ($response->artifactTypeInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

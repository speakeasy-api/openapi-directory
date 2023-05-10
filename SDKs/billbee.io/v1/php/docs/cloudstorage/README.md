# cloudStorage

### Available Operations

* [cloudStorageApiGetList](#cloudstorageapigetlist) - Gets a list of all connected cloud storage devices

## cloudStorageApiGetList

Gets a list of all connected cloud storage devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->cloudStorage->cloudStorageApiGetList();

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

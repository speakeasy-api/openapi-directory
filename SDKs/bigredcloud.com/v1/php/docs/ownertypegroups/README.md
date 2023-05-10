# ownerTypeGroups

### Available Operations

* [ownerTypeGroupsGet](#ownertypegroupsget) - Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## ownerTypeGroupsGet

Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->ownerTypeGroups->ownerTypeGroupsGet();

    if ($response->pageResultOwnerTypeGroupDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

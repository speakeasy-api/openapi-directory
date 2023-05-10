# organization

### Available Operations

* [getOrganizationData](#getorganizationdata) - Retrieve a organization data.

## getOrganizationData

Retrieves the data of organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->organization->getOrganizationData();

    if ($response->organizationData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

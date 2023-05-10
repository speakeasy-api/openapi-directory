# organizations

## Overview

With these endpoints you can get useful information about your Organizations.
This also can be used to manage your [Products](#tag/Products).

<a href="https://configcat.com/docs/organization/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the Organizations.

### Available Operations

* [getOrganizations](#getorganizations) - List Organizations

## getOrganizations

This endpoint returns the list of the Organizations that belongs to the user.

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
    $response = $sdk->organizations->getOrganizations();

    if ($response->organizationModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

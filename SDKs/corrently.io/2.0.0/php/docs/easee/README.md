# easee

## Overview

Alternative access to EASEE.cloud Data.

### Available Operations

* [easeeSessions](#easeesessions) - Returns lastSession info for all easee wallboxes (chargers) given user has access to.

## easeeSessions

Refer to easee.cloud API for details.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EaseeSessionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EaseeSessionsRequest();
    $request->password = 'explicabo';
    $request->username = 'Nestor.Halvorson';

    $response = $sdk->easee->easeeSessions($request);

    if ($response->easeeChargers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

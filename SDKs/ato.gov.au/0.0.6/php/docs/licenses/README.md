# licenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [getLicenses](#getlicenses) - Retrieve a list of licenses

## getLicenses

Retrieve a list of licenses


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLicensesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicensesRequest();
    $request->apiKey = 'laborum';

    $response = $sdk->licenses->getLicenses($request);

    if ($response->licenses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

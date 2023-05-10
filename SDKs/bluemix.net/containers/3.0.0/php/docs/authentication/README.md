# authentication

### Available Operations

* [getTlskey](#gettlskey) - Retrieve the TLS Certificate
* [putTlskeyRefresh](#puttlskeyrefresh) - Refresh the TLS Certificate

## getTlskey

This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTlskeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTlskeyRequest();
    $request->xAuthProjectId = 'unde';
    $request->xAuthToken = 'nulla';

    $response = $sdk->authentication->getTlskey($request);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTlskeyRefresh

This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutTlskeyRefreshRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTlskeyRefreshRequest();
    $request->xAuthProjectId = 'corrupti';
    $request->xAuthToken = 'illum';

    $response = $sdk->authentication->putTlskeyRefresh($request);

    if ($response->certificateRefresh !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

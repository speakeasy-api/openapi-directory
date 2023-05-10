<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhArtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhArtRequest();
    $request->acceptVersion = 'corrupti';
    $request->xApiKey = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->excludedetails = 'perferendis';
    $request->hasfake = 'ipsam';
    $request->thumbsize = 832620;

    $response = $sdk->getNhArt($request);

    if ($response->nhArtworks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
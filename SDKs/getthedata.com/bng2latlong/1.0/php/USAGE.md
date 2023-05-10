<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBng2latlongEastingNorthingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBng2latlongEastingNorthingRequest();
    $request->easting = 548814;
    $request->northing = 592845;

    $response = $sdk->getBng2latlongEastingNorthing($request);

    if ($response->getBng2latlongEastingNorthing200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
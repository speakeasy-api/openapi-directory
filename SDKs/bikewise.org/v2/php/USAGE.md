<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionIncidentsFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionIncidentsFormatIncidentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVersionIncidentsFormatRequest();
    $request->incidentType = GETVersionIncidentsFormatIncidentTypeEnum::UNCONFIRMED;
    $request->occurredAfter = 592845;
    $request->occurredBefore = 715190;
    $request->page = 844266;
    $request->perPage = 602763;
    $request->proximity = 'nulla';
    $request->proximitySquare = 544883;
    $request->query = 'illum';

    $response = $sdk->incidents->getVersionIncidentsFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
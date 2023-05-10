<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLinesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinesRequest();
    $request->away = 'corrupti';
    $request->conference = 'provident';
    $request->gameId = 715190;
    $request->home = 'quibusdam';
    $request->seasonType = 'unde';
    $request->team = 'nulla';
    $request->week = 544883;
    $request->year = 847252;

    $response = $sdk->betting->getLines($request);

    if ($response->gameLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
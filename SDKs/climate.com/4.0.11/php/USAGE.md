<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BoundariesQuery;
use \OpenAPI\OpenAPI\Models\Operations\FetchBoundariesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoundariesQuery();
    $request->ids = [
        '9bd9d8d6-9a67-44e0-b467-cc8796ed151a',
        '05dfc2dd-f7cc-478c-a1ba-928fc816742c',
        'b7392059-2939-46fe-a759-6eb10faaa235',
    ];

    $requestSecurity = new FetchBoundariesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->boundaries->fetchBoundaries($request, $requestSecurity);

    if ($response->boundaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
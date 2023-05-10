<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUrlsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlsQuery;
use \OpenAPI\OpenAPI\Models\Operations\CreateUrlsExportAreaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUrlsExportRequest();
    $request->urlsQuery = new UrlsQuery();
    $request->urlsQuery->fields = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->urlsQuery->filters = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->urlsQuery->sort = [
        [
            'magnam' => 'debitis',
            'ipsa' => 'delectus',
        ],
        [
            'suscipit' => 'molestiae',
            'minus' => 'placeat',
        ],
    ];
    $request->analysisSlug = 'voluptatum';
    $request->area = CreateUrlsExportAreaEnum::DISAPPEARED;
    $request->projectSlug = 'excepturi';
    $request->username = 'Glen.Walsh33';

    $response = $sdk->analysis->createUrlsExport($request);

    if ($response->csvExportStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
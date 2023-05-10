<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemFeedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItemFeedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemFeedRequest();
    $request->accept = 'corrupti';
    $request->range = 'provident';
    $request->xEbayCMarketplaceId = 'distinctio';
    $request->categoryId = 'quibusdam';
    $request->date = 'unde';
    $request->feedScope = 'nulla';

    $requestSecurity = new GetItemFeedSecurity();
    $requestSecurity->clientCredentials = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->item->getItemFeed($request, $requestSecurity);

    if ($response->itemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
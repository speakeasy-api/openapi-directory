<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ChromeHtmlToPdfRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChromeAdvancedOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromeHtmlToPdfRequest();
    $request->fileName = 'test.pdf';
    $request->html = '<p>Hello World</p>';
    $request->inlinePdf = true;
    $request->options = new ChromeAdvancedOptions();
    $request->options->landscape = 'true';
    $request->options->printBackground = false;

    $response = $sdk->headlessChrome->chromeFromHtmlPost($request);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
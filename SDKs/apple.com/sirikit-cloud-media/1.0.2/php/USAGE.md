<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExtensionConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExtensionConfigurationRequest();
    $request->acceptLanguage = 'corrupti';
    $request->cacheControl = 'provident';
    $request->ifNoneMatch = 'distinctio';
    $request->requestTimeout = 8442.66;
    $request->userAgent = 'unde';
    $request->xApplecloudextensionRetryCount = 8579.46;
    $request->xApplecloudextensionSessionId = 'corrupti';

    $response = $sdk->config->extensionConfiguration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
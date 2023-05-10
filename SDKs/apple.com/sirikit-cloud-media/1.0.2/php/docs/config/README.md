# config

### Available Operations

* [extensionConfiguration](#extensionconfiguration) - Configuration Resource

## extensionConfiguration

Configuration Resource

### Example Usage

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
    $request->acceptLanguage = 'illum';
    $request->cacheControl = 'vel';
    $request->ifNoneMatch = 'error';
    $request->requestTimeout = 6458.94;
    $request->userAgent = 'suscipit';
    $request->xApplecloudextensionRetryCount = 4375.87;
    $request->xApplecloudextensionSessionId = 'magnam';

    $response = $sdk->config->extensionConfiguration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

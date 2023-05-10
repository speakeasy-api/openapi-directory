# connectorDocs

### Available Operations

* [connectorDocsOne](#connectordocsone) - Get Connector Doc content

## connectorDocsOne

Get Connector Doc content

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorDocsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorDocsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorDocsOneRequest();
    $request->docId = 'error';
    $request->id = 'da1ffe78-f097-4b00-b4f1-5471b5e6e13b';
    $request->xApideckAppId = 'molestias';

    $requestSecurity = new ConnectorDocsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connectorDocs->connectorDocsOne($request, $requestSecurity);

    if ($response->connectorDocsOne200TextMarkdownMarkdownString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

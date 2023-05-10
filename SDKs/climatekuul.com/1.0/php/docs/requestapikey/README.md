# requestApiKey

### Available Operations

* [requestApiKey](#requestapikey) - requestApiKey

## requestApiKey

requestApiKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RequestApiKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestApiKeyRequestBody();
    $request->apiKeyL1 = 'qNahlSrEaduQ';
    $request->apiKeyL2 = 'eCqMeAfaDBWG';
    $request->email = 'abcd@gmail.com';
    $request->password = 234;
    $request->userFirstName = 'usman';
    $request->userLastName = 'ch';

    $response = $sdk->requestApiKey->requestApiKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizeRequest();
    $request->clientId = 'corrupti';
    $request->display = 'provident';
    $request->maxAge = 715190;
    $request->nonce = 'quibusdam';
    $request->prompt = 'unde';
    $request->redirectUri = 'nulla';
    $request->responseMode = 'corrupti';
    $request->responseType = 'illum';
    $request->scope = 'vel';
    $request->state = 'error';
    $request->uiLocales = 'deserunt';

    $response = $sdk->authentication->authorize($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
# sns

### Available Operations

* [snsGetSnsGet](#snsgetsnsget) - Sns Get
* [snsPostSnsPost](#snspostsnspost) - Sns Post

## snsGetSnsGet

Sns Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SnsGetSnsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SnsGetSnsGetRequest();
    $request->authorization = 'voluptatum';
    $request->base64Message = 'iusto';
    $request->message = 'excepturi';

    $response = $sdk->sns->snsGetSnsGet($request);

    if ($response->snsGetSnsGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## snsPostSnsPost

Sns Post

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SnsPostSnsPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\SnsMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SnsPostSnsPostRequest();
    $request->snsMessageRequest = new SnsMessageRequest();
    $request->snsMessageRequest->base64Message = 'nisi';
    $request->snsMessageRequest->message = 'recusandae';
    $request->authorization = 'temporibus';

    $response = $sdk->sns->snsPostSnsPost($request);

    if ($response->snsPostSnsPost200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

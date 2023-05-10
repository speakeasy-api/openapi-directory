# authentication

### Available Operations

* [requestAccessToken](#requestaccesstoken) - Request an access token

## requestAccessToken

This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RequestAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestAccessTokenRequest();
    $request->requestBody = new TokenRequest();
    $request->requestBody->capability = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ];
    $request->requestBody->clientId = 'nisi';
    $request->requestBody->keyName = 'xVLyHw.LMJZxw';
    $request->requestBody->nonce = 'recusandae';
    $request->requestBody->timestamp = 836079;
    $request->xAblyVersion = 'ab';
    $request->format = ResponseFormatEnum::JSONP;
    $request->keyName = 'veritatis';

    $response = $sdk->authentication->requestAccessToken($request);

    if ($response->tokenDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# sessionManagement

### Available Operations

* [authorizeIframe](#authorizeiframe) - Include a session iframe

## authorizeIframe

An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.

The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes.


OIDC OP Session Management Iframe
<http://openid.net/specs/openid-connect-session-1_0.html#OPiframe>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeIframeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizeIframeRequest();
    $request->clientId = 'saepe';

    $response = $sdk->sessionManagement->authorizeIframe($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

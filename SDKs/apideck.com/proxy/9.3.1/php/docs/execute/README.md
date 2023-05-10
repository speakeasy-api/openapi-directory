# execute

### Available Operations

* [deleteProxy](#deleteproxy) - DELETE
* [getProxy](#getproxy) - GET
* [optionsProxy](#optionsproxy) - OPTIONS
* [patchProxy](#patchproxy) - PATCH
* [postProxy](#postproxy) - POST
* [putProxy](#putproxy) - PUT

## deleteProxy

Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProxySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProxyRequest();
    $request->xApideckAppId = 'nulla';
    $request->xApideckConsumerId = 'corrupti';
    $request->xApideckDownstreamAuthorization = 'illum';
    $request->xApideckDownstreamUrl = 'vel';
    $request->xApideckServiceId = 'error';

    $requestSecurity = new DeleteProxySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->execute->deleteProxy($request, $requestSecurity);

    if ($response->deleteProxy200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProxy

Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProxySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProxyRequest();
    $request->xApideckAppId = 'deserunt';
    $request->xApideckConsumerId = 'suscipit';
    $request->xApideckDownstreamAuthorization = 'iure';
    $request->xApideckDownstreamUrl = 'magnam';
    $request->xApideckServiceId = 'debitis';

    $requestSecurity = new GetProxySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->execute->getProxy($request, $requestSecurity);

    if ($response->getProxy200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsProxy

Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OptionsProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\OptionsProxySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsProxyRequest();
    $request->xApideckAppId = 'ipsa';
    $request->xApideckConsumerId = 'delectus';
    $request->xApideckDownstreamAuthorization = 'tempora';
    $request->xApideckDownstreamUrl = 'suscipit';
    $request->xApideckServiceId = 'molestiae';

    $requestSecurity = new OptionsProxySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->execute->optionsProxy($request, $requestSecurity);

    if ($response->optionsProxy200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchProxy

Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchProxySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchProxyRequest();
    $request->requestBody = 'minus';
    $request->xApideckAppId = 'placeat';
    $request->xApideckConsumerId = 'voluptatum';
    $request->xApideckDownstreamAuthorization = 'iusto';
    $request->xApideckDownstreamUrl = 'excepturi';
    $request->xApideckServiceId = 'nisi';

    $requestSecurity = new PatchProxySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->execute->patchProxy($request, $requestSecurity);

    if ($response->patchProxy200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProxy

Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostProxySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProxyRequest();
    $request->requestBody = 'recusandae';
    $request->xApideckAppId = 'temporibus';
    $request->xApideckConsumerId = 'ab';
    $request->xApideckDownstreamAuthorization = 'quis';
    $request->xApideckDownstreamUrl = 'veritatis';
    $request->xApideckServiceId = 'deserunt';

    $requestSecurity = new PostProxySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->execute->postProxy($request, $requestSecurity);

    if ($response->postProxy200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProxy

Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutProxySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProxyRequest();
    $request->requestBody = 'perferendis';
    $request->xApideckAppId = 'ipsam';
    $request->xApideckConsumerId = 'repellendus';
    $request->xApideckDownstreamAuthorization = 'sapiente';
    $request->xApideckDownstreamUrl = 'quo';
    $request->xApideckServiceId = 'odit';

    $requestSecurity = new PutProxySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->execute->putProxy($request, $requestSecurity);

    if ($response->putProxy200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

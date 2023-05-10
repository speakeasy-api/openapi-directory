# delete

### Available Operations

* [keyRevoke](#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [keyRevokeNosecret](#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [signDelete](#signdelete) - delete a verification job

## keyRevoke

Revoke an Identity (Key) with a revocation secret

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeyRevokeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyRevokeRequest();
    $request->pk = 'distinctio';
    $request->secret = 'quibusdam';

    $response = $sdk->delete->keyRevoke($request);

    if ($response->keyRevoke200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keyRevokeNosecret

Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeyRevokeNosecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyRevokeNosecretRequest();
    $request->code = 'unde';
    $request->email = 'Karley_Stamm@hotmail.com';
    $request->phone = '1-542-909-2347 x8545';

    $response = $sdk->delete->keyRevokeNosecret($request);

    if ($response->keyRevokeNosecret200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signDelete

delete a verification job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignDeleteRequest();
    $request->job = 'nisi';

    $response = $sdk->delete->signDelete($request);

    if ($response->signDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

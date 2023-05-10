# post

### Available Operations

* [keyRegister](#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyUpdate](#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [pushLoginRequest](#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [signConfirm](#signconfirm) - this is a scope confirmation
* [signRequest](#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


## keyRegister

Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'cum'

    $response = $sdk->post->keyRegister($request);

    if ($response->keyRegister201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keyUpdate

update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeyUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyUpdateRequest();
    $request->pk = 'esse';
    $request->requestBody = 'ipsum';

    $response = $sdk->post->keyUpdate($request);

    if ($response->keyUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pushLoginRequest

push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PushLoginRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PushLoginRequestRequest();
    $request->requestBody = 'excepturi';
    $request->callback = 'aspernatur';

    $response = $sdk->post->pushLoginRequest($request);

    if ($response->pushLoginRequest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signConfirm

this is a scope confirmation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignConfirmRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignConfirmRequest();
    $request->job = 'perferendis';

    $response = $sdk->post->signConfirm($request);

    if ($response->signConfirm202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signRequest

scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignRequestRequest();
    $request->requestBody = 'ad';
    $request->test = 617636;

    $response = $sdk->post->signRequest($request);

    if ($response->signRequest201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

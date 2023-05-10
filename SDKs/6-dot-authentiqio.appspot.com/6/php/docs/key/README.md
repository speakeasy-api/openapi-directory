# key

### Available Operations

* [headKeyPK](#headkeypk) - HEAD info on Authentiq ID

* [keyBind](#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyRegister](#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyRetrieve](#keyretrieve) - Get public details of an Authentiq ID.

* [keyRevoke](#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [keyRevokeNosecret](#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [keyUpdate](#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


## headKeyPK

HEAD info on Authentiq ID


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadKeyPKRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadKeyPKRequest();
    $request->pk = 'veritatis';

    $response = $sdk->key->headKeyPK($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keyBind

Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeyBindRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyBindRequest();
    $request->pk = 'deserunt';
    $request->requestBody = 'perferendis';

    $response = $sdk->key->keyBind($request);

    if ($response->keyBind200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
'ipsam'

    $response = $sdk->key->keyRegister($request);

    if ($response->keyRegister201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## keyRetrieve

Get public details of an Authentiq ID.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeyRetrieveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyRetrieveRequest();
    $request->pk = 'repellendus';

    $response = $sdk->key->keyRetrieve($request);

    if ($response->jwt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->pk = 'sapiente';
    $request->secret = 'quo';

    $response = $sdk->key->keyRevoke($request);

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
    $request->code = 'odit';
    $request->email = 'Sarah_Wolff@hotmail.com';
    $request->phone = '557-717-6515 x97514';

    $response = $sdk->key->keyRevokeNosecret($request);

    if ($response->keyRevokeNosecret200ApplicationJSONObject !== null) {
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
    $request->pk = 'molestiae';
    $request->requestBody = 'modi';

    $response = $sdk->key->keyUpdate($request);

    if ($response->keyUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

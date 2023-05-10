# authentication

### Available Operations

* [deleteAuthToken](#deleteauthtoken) - Remove user access
* [deleteUsersIdUser](#deleteusersiduser) - Delete the user
* [getAuthTokenCode](#getauthtokencode) - Generate a user temporary token
* [getCertificateType](#getcertificatetype) - Get the latest certificate of a type
* [getUsersIdUser](#getusersiduser) - Get a user
* [getWebauth](#getwebauth) - First step to establish an oAuth2 connection.
* [postAdminJwt](#postadminjwt) - Generate a jwt manage token
* [postAuthInit](#postauthinit) - Create a new anonymous user
* [postAuthJwt](#postauthjwt) - Generate a user jwt token
* [postAuthRenew](#postauthrenew) - Get a new access token given an user id and client credentials
* [postAuthTokenAccess](#postauthtokenaccess) - Transform a temporary code to a access_token
* [postUsersIdUserToken](#postusersidusertoken) - Create a token

## deleteAuthToken

This endpoint removes the token in use.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->authentication->deleteAuthToken();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUser

This endpoint deletes the user.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserRequest();
    $request->expand = 'laborum';
    $request->idUser = 'animi';

    $response = $sdk->authentication->deleteUsersIdUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthTokenCode

This endpoint generates a new temporary token for the user.<br><br>In case the access_token is used by a trusted device, and you want to let another one (for example a web browser) access to user resources, use this service to create a token which will expire in 30 minutes.<br><br>Additionally, you can also generate a temporary single-use token by specifying 'type=singleAccess' as query parameter. A single-use token can only be used once no matter the endpoint being accessed.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->authentication->getAuthTokenCode();

    if ($response->getAuthTokenCode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificateType

Get the latest certificate of a type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificateTypeRequest();
    $request->expand = 'enim';
    $request->type = 'odit';

    $response = $sdk->authentication->getCertificateType($request);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUser

Get a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserRequest();
    $request->expand = 'quo';
    $request->idUser = 'sequi';

    $response = $sdk->authentication->getUsersIdUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebauth

The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebauthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebauthRequestBody();
    $request->clientId = 949572;
    $request->idTransfer = 368725;
    $request->redirectUri = 'id';
    $request->state = 'possimus';

    $response = $sdk->authentication->getWebauth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminJwt

This endpoint generates a new jwt manage token. It requires an admin manage token to be used<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminJwtRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminJwtRequestBody();
    $request->duration = 13571;
    $request->scope = 'quasi';

    $response = $sdk->authentication->postAdminJwt($request);

    if ($response->postAdminJwt200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthInit

This endpoint creates a new temporary token related to a new anonymous user.<br><br>It will expire 30 minutes after.<br><br>Note: if you supply client_id and client_secret, or if you call this endpoint with the manage_token, the token will be permanent.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthInitRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthInitRequestBody();
    $request->clientId = 'error';
    $request->clientSecret = 'temporibus';

    $response = $sdk->authentication->postAuthInit($request);

    if ($response->postAuthInit200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthJwt

This endpoint generates a new jwt token for the user. This token will last the time in minutes given by the config key auth.default_token_expire (permanent if this the parameter expire=False is given)<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthJwtRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthJwtRequestBody();
    $request->clientId = 'laborum';
    $request->clientSecret = 'quasi';
    $request->expire = false;
    $request->idUser = 971945;
    $request->scope = 'voluptatibus';

    $response = $sdk->authentication->postAuthJwt($request);

    if ($response->postAuthJwt200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthRenew

Get a new access token given an user id and client credentials

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthRenewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthRenewRequestBody();
    $request->clientId = 'vero';
    $request->clientSecret = 'nihil';
    $request->grantType = 'praesentium';
    $request->idUser = 976762;
    $request->revokePrevious = false;

    $response = $sdk->authentication->postAuthRenew($request);

    if ($response->postAuthRenew200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthTokenAccess

In order to register a new user with the OAuth 2 process, the client has to call this endpoint to request a granted access_token with the received temporary code.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthTokenAccessRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthTokenAccessRequestBody();
    $request->clientId = 'ipsa';
    $request->clientSecret = 'omnis';
    $request->code = 'voluptate';
    $request->grantType = 'cum';
    $request->redirectUri = 'perferendis';

    $response = $sdk->authentication->postAuthTokenAccess($request);

    if ($response->postAuthTokenAccess200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserToken

Create an access_token for this user and get it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserTokenRequest();
    $request->requestBody = new PostUsersIdUserTokenRequestBody();
    $request->requestBody->application = 'doloremque';
    $request->idUser = 'reprehenderit';

    $response = $sdk->authentication->postUsersIdUserToken($request);

    if ($response->postUsersIdUserToken200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

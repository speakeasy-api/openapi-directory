# authentication

### Available Operations

* [authorize](#authorize) - Authenticate a user
* [token](#token) - Obtain an ID Token
* [userInfo](#userinfo) - Retrieve a user profile

## authorize

Start a session with Authentiq Connect to authenticate a user.

```
GET https://connect.authentiq.io/authorize?client_id=<your-client-id>&response_type=code+id_token&scope=openid+email&redirect_uri=<your-redirect-uri>&state=0123456789
```

This endpoint also supports the POST method.


OIDC Authorization Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint>

### Example Usage

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
    $request->clientId = 'suscipit';
    $request->display = 'iure';
    $request->maxAge = 297534;
    $request->nonce = 'debitis';
    $request->prompt = 'ipsa';
    $request->redirectUri = 'delectus';
    $request->responseMode = 'tempora';
    $request->responseType = 'suscipit';
    $request->scope = 'molestiae';
    $request->state = 'minus';
    $request->uiLocales = 'placeat';

    $response = $sdk->authentication->authorize($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## token

Exchange en authorization code for an ID Token or Access Token.

This endpoint supports both `client_secret_basic` (default) and `client_secret_basic` authentication methods, as specified by the client's `token_endpoint_auth_method`.


OIDC Token Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\TokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokenRequest();
    $request->authorization = 'voluptatum';
    $request->requestBody = new TokenRequestBody();
    $request->requestBody->clientId = 'iusto';
    $request->requestBody->clientSecret = 'excepturi';
    $request->requestBody->code = 'nisi';
    $request->requestBody->grantType = 'recusandae';
    $request->requestBody->redirectUri = 'temporibus';

    $response = $sdk->authentication->token($request);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userInfo

Use this endpoint to retrieve a user's profile in case you are unable to parse an ID Token or you've not already obtained enough details from the ID Token via the Token Endpoint.


OIDC UserInfo Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#UserInfo>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserInfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new UserInfoSecurity();
    $requestSecurity->oauthCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->authentication->userInfo($requestSecurity);

    if ($response->userInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

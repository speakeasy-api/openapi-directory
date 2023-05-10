# auth

## Overview

Please note that in keeping with the OAuth standard, parameters are underscored however all other API parameters are camelCase.

### Available Operations

* [postOauthAccessToken](#postoauthaccesstoken) - Generate an Access Token

## postOauthAccessToken

By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is "password" include the `username` and `password`, if however your `grant_type` is "refresh_token" the username/password are not required, instead set the `refresh_token`

More Information on Refresh Tokens
<#section/Getting-Started/Perpetuating-Access>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3();
    $request->clientId = 'temporibus';
    $request->clientSecret = 'ab';
    $request->grantType = PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum::PASSWORD;
    $request->refreshToken = 'veritatis';
    $request->scope = PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum::OMS;

    $response = $sdk->auth->postOauthAccessToken($request);

    if ($response->accessTokenResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# account

## Overview

These API endpoints are related to the Flat account you are currently using. When using an OAuth2 access token, you can use [`GET /me`](#operation/getAuthenticatedUser) to get information about the account.


### Available Operations

* [getAuthenticatedUser](#getauthenticateduser) - Get current user profile

## getAuthenticatedUser

Get details about the current authenticated User.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthenticatedUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthenticatedUserRequest();
    $request->onlyId = false;

    $requestSecurity = new GetAuthenticatedUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getAuthenticatedUser($request, $requestSecurity);

    if ($response->userDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

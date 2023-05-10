# userManagement

### Available Operations

* [deleteUsersUserid](#deleteusersuserid) - Unlink User
* [deleteUsersUseridAuthorization](#deleteusersuseridauthorization) - Deauthorize User
* [postUsersUseridLink](#postusersuseridlink) - Link User

## deleteUsersUserid

Deletes a User and all of their data permanently, and invalidates any associated sessions, authorization codes, and access/refresh tokens

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersUseridRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersUseridSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersUseridRequest();
    $request->userId = 'placeat';

    $requestSecurity = new DeleteUsersUseridSecurity();
    $requestSecurity->clientAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userManagement->deleteUsersUserid($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersUseridAuthorization

Deletes the User's stored vendor authorizations and credentials, invalidates any associated sessions, authorization codes, and access/refresh tokens.

All other User data is retained, and if the User is sent through the Link User flow in the future their account will be just as they left it.

No webhook events will be generated for a deauthorized user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersUseridAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersUseridAuthorizationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersUseridAuthorizationRequest();
    $request->userId = 'voluptatum';

    $requestSecurity = new DeleteUsersUseridAuthorizationSecurity();
    $requestSecurity->clientAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userManagement->deleteUsersUseridAuthorization($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersUseridLink

Creates an Enode Link session attached to the provided User ID. If this User does not exist, it will be created. The returned `linkState` gives the user short-lived access to Enode Link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUseridLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUseridLinkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUseridLinkRequestBodyVendorEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUseridLinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersUseridLinkRequest();
    $request->requestBody = new PostUsersUseridLinkRequestBody();
    $request->requestBody->forceLanguage = 'nb-NO';
    $request->requestBody->linkMultiple = false;
    $request->requestBody->userImage = 'https://cdn.website.example/user/x/profile.jpg';
    $request->requestBody->userName = 'Ola';
    $request->requestBody->vendor = PostUsersUseridLinkRequestBodyVendorEnum::TESLA;
    $request->userId = 'iusto';

    $requestSecurity = new PostUsersUseridLinkSecurity();
    $requestSecurity->clientAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userManagement->postUsersUseridLink($request, $requestSecurity);

    if ($response->postUsersUseridLink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

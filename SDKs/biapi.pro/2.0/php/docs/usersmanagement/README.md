# usersManagement

### Available Operations

* [deleteUsersIdUser](#deleteusersiduser) - Delete the user
* [deleteUsersIdUserConfig](#deleteusersiduserconfig) - Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
* [getUsers](#getusers) - Get users
* [getUsersIdUser](#getusersiduser) - Get a user
* [getUsersIdUserConfig](#getusersiduserconfig) - Get configuration of a user.
* [getUsersIdUserProfiles](#getusersiduserprofiles) - Get profiles
* [getUsersIdUserProfilesMain](#getusersiduserprofilesmain) - Get the main profile
* [getUsersIdUserProfilesIdProfile](#getusersiduserprofilesidprofile) - Get a profile
* [postUsersIdUserConfig](#postusersiduserconfig) - Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
* [postUsersIdUserToken](#postusersidusertoken) - Create a token

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
    $request->expand = 'dolorem';
    $request->idUser = 'harum';

    $response = $sdk->usersManagement->deleteUsersIdUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConfig

- keys (string): list of coma separated keys to be deleted.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConfigRequest();
    $request->idUser = 'dicta';

    $response = $sdk->usersManagement->deleteUsersIdUserConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Get users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->expand = 'architecto';
    $request->search = 'occaecati';

    $response = $sdk->usersManagement->getUsers($request);

    if ($response->getUsers200ApplicationJSONObject !== null) {
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
    $request->expand = 'labore';
    $request->idUser = 'quidem';

    $response = $sdk->usersManagement->getUsersIdUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConfig

<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConfigRequest();
    $request->idUser = 'atque';

    $response = $sdk->usersManagement->getUsersIdUserConfig($request);

    if ($response->getUsersIdUserConfig200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserProfiles

Get profiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserProfilesRequest();
    $request->expand = 'laborum';
    $request->idUser = 'nam';

    $response = $sdk->usersManagement->getUsersIdUserProfiles($request);

    if ($response->getUsersIdUserProfiles200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserProfilesMain

Get the main profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserProfilesMainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserProfilesMainRequest();
    $request->expand = 'tenetur';
    $request->idUser = 'laboriosam';

    $response = $sdk->usersManagement->getUsersIdUserProfilesMain($request);

    if ($response->profile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserProfilesIdProfile

Get a profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserProfilesIdProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserProfilesIdProfileRequest();
    $request->expand = 'alias';
    $request->idProfile = 227084;
    $request->idUser = 'deserunt';

    $response = $sdk->usersManagement->getUsersIdUserProfilesIdProfile($request);

    if ($response->profile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConfig

Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConfigRequest();
    $request->idUser = 'voluptate';

    $response = $sdk->usersManagement->postUsersIdUserConfig($request);

    if ($response->statusCode === 200) {
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
    $request->requestBody->application = 'unde';
    $request->idUser = 'reiciendis';

    $response = $sdk->usersManagement->postUsersIdUserToken($request);

    if ($response->postUsersIdUserToken200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

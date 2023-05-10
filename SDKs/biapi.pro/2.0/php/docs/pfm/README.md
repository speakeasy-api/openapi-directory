# pfm

### Available Operations

* [deleteAuthToken](#deleteauthtoken) - Remove user access
* [getUsersIdUser](#getusersiduser) - Get a user
* [getUsersIdUserForecast](#getusersiduserforecast) - Get forecast
* [getUsersIdUserProfiles](#getusersiduserprofiles) - Get profiles
* [getUsersIdUserProfilesMain](#getusersiduserprofilesmain) - Get the main profile
* [getUsersIdUserProfilesIdProfile](#getusersiduserprofilesidprofile) - Get a profile
* [postAuthToken](#postauthtoken) - Login to API with credentials

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
    $response = $sdk->pfm->deleteAuthToken();

    if ($response->statusCode === 200) {
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
    $request->expand = 'voluptas';
    $request->idUser = 'asperiores';

    $response = $sdk->pfm->getUsersIdUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserForecast

Get forecast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserForecastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserForecastRequest();
    $request->idUser = 'aperiam';

    $response = $sdk->pfm->getUsersIdUserForecast($request);

    if ($response->statusCode === 200) {
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
    $request->expand = 'ea';
    $request->idUser = 'quaerat';

    $response = $sdk->pfm->getUsersIdUserProfiles($request);

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
    $request->expand = 'consequuntur';
    $request->idUser = 'repellendus';

    $response = $sdk->pfm->getUsersIdUserProfilesMain($request);

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
    $request->expand = 'officia';
    $request->idProfile = 807023;
    $request->idUser = 'dignissimos';

    $response = $sdk->pfm->getUsersIdUserProfilesIdProfile($request);

    if ($response->profile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthToken

Request a new user token by giving an username and a password. Or a manage payment token by giving a client<br><br><br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthTokenRequestBody();
    $request->application = 'officia';
    $request->grantType = 'asperiores';
    $request->password = 'nemo';
    $request->scope = 'quae';
    $request->username = 'Elwyn.Sawayn7';

    $response = $sdk->pfm->postAuthToken($request);

    if ($response->postAuthToken200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

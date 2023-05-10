# passwords

## Overview

Endpoints related to changing and resetting passwords

### Available Operations

* [postChangePassword](#postchangepassword) - Used for changing your password
* [postRequestPasswordReset](#postrequestpasswordreset) - Used for requesting a password reset code
* [postVerifyPasswordChange](#postverifypasswordchange) - Used for resetting your password when you forgot it

## postChangePassword

Pass in your old password and your new password

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostChangePasswordSample;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostChangePasswordSample();
    $request->oldPassword = 'hunter3';
    $request->password = 'hunter4';

    $response = $sdk->passwords->postChangePassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRequestPasswordReset

The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostRequestPasswordResetSample;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRequestPasswordResetSample();
    $request->email = 'user@example.com';

    $response = $sdk->passwords->postRequestPasswordReset($request);

    if ($response->requestPasswordResetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVerifyPasswordChange

Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostVerifyPasswordChangeSample;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVerifyPasswordChangeSample();
    $request->guid = 'd5e53b3a-ffc1-4436-b085-04aaed5ec861';
    $request->password = 'hunter3';

    $response = $sdk->passwords->postVerifyPasswordChange($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

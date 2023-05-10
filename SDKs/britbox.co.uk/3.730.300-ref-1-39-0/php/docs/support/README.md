# support

### Available Operations

* [forgotPassword](#forgotpassword) - Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.

* [getSubscriptionData](#getsubscriptiondata) - Returns the details of subscription data for a user with specified id.
* [resetPassword](#resetpassword) - When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use. 
It should then be submitted to this endpoint,
along with the reset token from the email link. 
The token should be provided in the body as resetToken property.

* [verifyEmail](#verifyemail) - When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.


## forgotPassword

Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForgotPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordResetEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForgotPasswordRequest();
    $request->passwordResetEmailRequest = new PasswordResetEmailRequest();
    $request->passwordResetEmailRequest->email = 'Clementine77@yahoo.com';
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::IDP,
    ];
    $request->lang = 'voluptatibus';

    $response = $sdk->support->forgotPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionData

Returns the details of subscription data for a user with specified id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionDataRequest();
    $request->id = '64d1db1f-2c43-4106-a1e9-6349e1cf9e06';

    $response = $sdk->support->getSubscriptionData($request);

    if ($response->subscriptionDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetPassword

When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use. 
It should then be submitted to this endpoint,
along with the reset token from the email link. 
The token should be provided in the body as resetToken property.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetPasswordRequest();
    $request->passwordResetRequest = new PasswordResetRequest();
    $request->passwordResetRequest->password = 'itaque';
    $request->passwordResetRequest->resetToken = 'velit';
    $request->ff = [
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::IDP,
        FeatureFlagsEnum::HB,
    ];
    $request->lang = 'sit';

    $response = $sdk->support->resetPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifyEmail

When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifyEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\VerifyEmailSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyEmailRequest();
    $request->ff = [
        FeatureFlagsEnum::ALL,
    ];
    $request->lang = 'officia';

    $requestSecurity = new VerifyEmailSecurity();
    $requestSecurity->verifyEmailAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->support->verifyEmail($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

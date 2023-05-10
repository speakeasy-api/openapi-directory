# account

## Overview

The Account service allows you to authenticate and manage a user account.

### Available Operations

* [accountCreateRecovery](#accountcreaterecovery) - Create Password Recovery
* [accountCreateVerification](#accountcreateverification) - Create Email Verification
* [accountDelete](#accountdelete) - Delete Account
* [accountDeleteSession](#accountdeletesession) - Delete Account Session
* [accountDeleteSessions](#accountdeletesessions) - Delete All Account Sessions
* [accountGet](#accountget) - Get Account
* [accountGetLogs](#accountgetlogs) - Get Account Logs
* [accountGetPrefs](#accountgetprefs) - Get Account Preferences
* [accountGetSession](#accountgetsession) - Get Session By ID
* [accountGetSessions](#accountgetsessions) - Get Account Sessions
* [accountUpdateEmail](#accountupdateemail) - Update Account Email
* [accountUpdateName](#accountupdatename) - Update Account Name
* [accountUpdatePassword](#accountupdatepassword) - Update Account Password
* [accountUpdatePrefs](#accountupdateprefs) - Update Account Preferences
* [accountUpdateRecovery](#accountupdaterecovery) - Complete Password Recovery
* [accountUpdateVerification](#accountupdateverification) - Complete Email Verification

## accountCreateRecovery

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateRecoveryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateRecoverySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCreateRecoveryRequestBody();
    $request->email = 'Henry.Mueller@hotmail.com';
    $request->url = 'iure';

    $requestSecurity = new AccountCreateRecoverySecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountCreateRecovery($request, $requestSecurity);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountCreateVerification

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateVerificationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateVerificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCreateVerificationRequestBody();
    $request->url = 'magnam';

    $requestSecurity = new AccountCreateVerificationSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountCreateVerification($request, $requestSecurity);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountDelete

Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AccountDeleteSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountDelete($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountDeleteSession

Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountDeleteSessionRequest();
    $request->sessionId = 'debitis';

    $requestSecurity = new AccountDeleteSessionSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountDeleteSession($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountDeleteSessions

Delete all sessions from the user account and remove any sessions cookies from the end client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteSessionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AccountDeleteSessionsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountDeleteSessions($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGet

Get currently logged in user data as JSON object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AccountGetSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountGet($requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetLogs

Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AccountGetLogsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountGetLogs($requestSecurity);

    if ($response->logList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetPrefs

Get currently logged in user preferences as a key-value object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetPrefsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AccountGetPrefsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountGetPrefs($requestSecurity);

    if ($response->preferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetSession

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGetSessionRequest();
    $request->sessionId = 'ipsa';

    $requestSecurity = new AccountGetSessionSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountGetSession($request, $requestSecurity);

    if ($response->session !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetSessions

Get currently logged in user list of active sessions across different devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetSessionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AccountGetSessionsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountGetSessions($requestSecurity);

    if ($response->sessionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountUpdateEmail

Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdateEmailRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdateEmailSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountUpdateEmailRequestBody();
    $request->email = 'Donny_Hoppe@hotmail.com';
    $request->password = 'placeat';

    $requestSecurity = new AccountUpdateEmailSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountUpdateEmail($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountUpdateName

Update currently logged in user account name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdateNameRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdateNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountUpdateNameRequestBody();
    $request->name = 'Ted Mante';

    $requestSecurity = new AccountUpdateNameSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountUpdateName($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountUpdatePassword

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdatePasswordRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdatePasswordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountUpdatePasswordRequestBody();
    $request->oldPassword = 'temporibus';
    $request->password = 'ab';

    $requestSecurity = new AccountUpdatePasswordSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountUpdatePassword($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountUpdatePrefs

Update currently logged in user account preferences. You can pass only the specific settings you wish to update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdatePrefsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdatePrefsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountUpdatePrefsRequestBody();
    $request->prefs = [
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
    ];

    $requestSecurity = new AccountUpdatePrefsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountUpdatePrefs($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountUpdateRecovery

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdateRecoveryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdateRecoverySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountUpdateRecoveryRequestBody();
    $request->password = 'repellendus';
    $request->passwordAgain = 'sapiente';
    $request->secret = 'quo';
    $request->userId = 'odit';

    $requestSecurity = new AccountUpdateRecoverySecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountUpdateRecovery($request, $requestSecurity);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountUpdateVerification

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdateVerificationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountUpdateVerificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountUpdateVerificationRequestBody();
    $request->secret = 'at';
    $request->userId = 'at';

    $requestSecurity = new AccountUpdateVerificationSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountUpdateVerification($request, $requestSecurity);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

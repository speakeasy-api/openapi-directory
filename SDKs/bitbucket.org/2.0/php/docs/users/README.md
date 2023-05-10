# users

## Overview

The users resource allows you to access public information
associated with a user account. Most resources in the users
endpoint have been deprecated in favor of workspaces.


### Available Operations

* [getUser](#getuser) - Get current user
* [getUserEmails](#getuseremails) - List email addresses for current user
* [getUserEmailsEmail](#getuseremailsemail) - Get an email address for current user
* [getUsersSelectedUser](#getusersselecteduser) - Get a user

## getUser

Returns the currently logged in user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetUserSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUser($requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserEmails

Returns all the authenticated user's email addresses. Both
confirmed and unconfirmed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserEmailsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetUserEmailsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUserEmails($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserEmailsEmail

Returns details about a specific one of the authenticated user's
email addresses.

Details describe whether the address has been confirmed by the user and
whether it is the user's primary address or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserEmailsEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserEmailsEmailSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserEmailsEmailRequest();
    $request->email = 'Americo_Weber@hotmail.com';

    $requestSecurity = new GetUserEmailsEmailSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUserEmailsEmail($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersSelectedUser

Gets the public information associated with a user account.

If the user's profile is private, `location`, `website` and
`created_on` elements are omitted.

Note that the user object returned by this operation is changing significantly, due to privacy changes.
See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersSelectedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersSelectedUserSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersSelectedUserRequest();
    $request->selectedUser = 'debitis';

    $requestSecurity = new GetUsersSelectedUserSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsersSelectedUser($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSigninSigninIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSigninSigninIdRequest();
    $request->signinId = 1;

    $response = $sdk->attendeesSignins->deleteSigninSigninId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [attendeesSignins](docs/attendeessignins/README.md)

* [deleteSigninSigninId](docs/attendeessignins/README.md#deletesigninsigninid) - Delete a signin record
* [getSigninSigninId](docs/attendeessignins/README.md#getsigninsigninid) - Retrieve the information associated with a signin record
* [getSignins](docs/attendeessignins/README.md#getsignins) - Get signin info
* [postSignin](docs/attendeessignins/README.md#postsignin) - Create a new signin record
* [putSigninSigninId](docs/attendeessignins/README.md#putsigninsigninid) - Update a signin record

### [authentication](docs/authentication/README.md)

* [postLogin](docs/authentication/README.md#postlogin) - Log in to get an API token
* [postLogout](docs/authentication/README.md#postlogout) - Log out

### [passwords](docs/passwords/README.md)

* [postChangePassword](docs/passwords/README.md#postchangepassword) - Used for changing your password
* [postRequestPasswordReset](docs/passwords/README.md#postrequestpasswordreset) - Used for requesting a password reset code
* [postVerifyPasswordChange](docs/passwords/README.md#postverifypasswordchange) - Used for resetting your password when you forgot it

### [teamMembers](docs/teammembers/README.md)

* [deleteUserUserId](docs/teammembers/README.md#deleteuseruserid) - Delete a team member's user record
* [getUserUserId](docs/teammembers/README.md#getuseruserid) - Retrieve the information associated with a team member's user record
* [getUsers](docs/teammembers/README.md#getusers) - Retrieve the information associated with all team members' user records
* [postUser](docs/teammembers/README.md#postuser) - Create a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

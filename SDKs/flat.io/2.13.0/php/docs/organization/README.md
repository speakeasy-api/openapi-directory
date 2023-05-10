# organization

## Overview

Flat for Education organizations

### Available Operations

* [countOrgaUsers](#countorgausers) - Count the organization users using the provided filters
* [createLtiCredentials](#createlticredentials) - Create a new couple of LTI 1.x credentials
* [createOrganizationInvitation](#createorganizationinvitation) - Create a new invitation to join the organization
* [createOrganizationUser](#createorganizationuser) - Create a new user account
* [listLtiCredentials](#listlticredentials) - List LTI 1.x credentials
* [listOrganizationInvitations](#listorganizationinvitations) - List the organization invitations
* [listOrganizationUsers](#listorganizationusers) - List the organization users
* [removeOrganizationInvitation](#removeorganizationinvitation) - Remove an organization invitation
* [removeOrganizationUser](#removeorganizationuser) - Remove an account from Flat
* [revokeLtiCredentials](#revokelticredentials) - Revoke LTI 1.x credentials
* [updateOrganizationUser](#updateorganizationuser) - Update account information

## countOrgaUsers

Count the organization users using the provided filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CountOrgaUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\CountOrgaUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountOrgaUsersRequest();
    $request->group = [
        'praesentium',
        'voluptatibus',
    ];
    $request->noActiveLicense = false;
    $request->q = 'ipsa';
    $request->role = [
        RoleEnum::TEACHER,
        RoleEnum::ADMIN,
        RoleEnum::USER,
    ];

    $requestSecurity = new CountOrgaUsersSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->countOrgaUsers($request, $requestSecurity);

    if ($response->countOrgaUsers200ApplicationJSONInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLtiCredentials

Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\LtiCredentialsCreation;
use \OpenAPI\OpenAPI\Models\Shared\LmsNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLtiCredentialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LtiCredentialsCreation();
    $request->lms = LmsNameEnum::CANVAS;
    $request->name = 'Mrs. April Wuckert';

    $requestSecurity = new CreateLtiCredentialsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->createLtiCredentials($request, $requestSecurity);

    if ($response->ltiCredentials !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationInvitation

This method creates and sends invitation for teachers and admins.

Invitations can only be used by new Flat users or users who are not part of the organization yet.

If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInvitationCreation;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationRolesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInvitationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrganizationInvitationCreation();
    $request->email = 'Birdie88@yahoo.com';
    $request->organizationRole = OrganizationRolesEnum::BILLING;

    $requestSecurity = new CreateOrganizationInvitationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->createOrganizationInvitation($request, $requestSecurity);

    if ($response->organizationInvitation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationUser

Create a new user account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UserCreation;
use \OpenAPI\OpenAPI\Models\Shared\FlatLocalesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserCreation();
    $request->email = 'Anissa_Emmerich56@hotmail.com';
    $request->firstname = 'Samantha';
    $request->lastname = 'Gleason';
    $request->locale = FlatLocalesEnum::NL;
    $request->password = 'rem';
    $request->username = 'Terence_Botsford8';

    $requestSecurity = new CreateOrganizationUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->createOrganizationUser($request, $requestSecurity);

    if ($response->userDetailsAdmin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLtiCredentials

List LTI 1.x credentials

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLtiCredentialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListLtiCredentialsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->listLtiCredentials($requestSecurity);

    if ($response->ltiCredentials !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrganizationInvitations

List the organization invitations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationInvitationsRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationInvitationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrganizationInvitationsRequest();
    $request->limit = 929297;
    $request->next = 'incidunt';
    $request->previous = 'enim';
    $request->role = ListOrganizationInvitationsRoleEnum::USER;

    $requestSecurity = new ListOrganizationInvitationsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->listOrganizationInvitations($request, $requestSecurity);

    if ($response->organizationInvitations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrganizationUsers

List the organization users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrganizationUsersRequest();
    $request->direction = SortDirectionEnum::DESC;
    $request->group = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->licenseExpirationDate = [
        'modi',
        'qui',
    ];
    $request->limit = 397821;
    $request->next = 'cupiditate';
    $request->noActiveLicense = false;
    $request->onlyIds = false;
    $request->previous = 'quos';
    $request->q = 'perferendis';
    $request->role = [
        RoleEnum::ADMIN,
    ];
    $request->sort = 'ipsam';

    $requestSecurity = new ListOrganizationUsersSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->listOrganizationUsers($request, $requestSecurity);

    if ($response->userDetailsAdmins !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeOrganizationInvitation

Remove an organization invitation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveOrganizationInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveOrganizationInvitationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveOrganizationInvitationRequest();
    $request->invitation = 'alias';

    $requestSecurity = new RemoveOrganizationInvitationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->removeOrganizationInvitation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeOrganizationUser

This operation removes an account from Flat and its data, including:
* The music scores created by this user (documents, history, comments, collaboration information)
* Education related data (assignments and classroom information)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveOrganizationUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveOrganizationUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveOrganizationUserRequest();
    $request->convertToIndividual = false;
    $request->user = 'fugit';

    $requestSecurity = new RemoveOrganizationUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->removeOrganizationUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeLtiCredentials

Revoke LTI 1.x credentials

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RevokeLtiCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RevokeLtiCredentialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevokeLtiCredentialsRequest();
    $request->credentials = 'dolorum';

    $requestSecurity = new RevokeLtiCredentialsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->revokeLtiCredentials($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationUser

Update account information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserAdminUpdate;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationRolesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationUserRequest();
    $request->userAdminUpdate = new UserAdminUpdate();
    $request->userAdminUpdate->email = 'Dominique.Prosacco96@yahoo.com';
    $request->userAdminUpdate->firstname = 'Horacio';
    $request->userAdminUpdate->lastname = 'Franey';
    $request->userAdminUpdate->organizationRole = OrganizationRolesEnum::USER;
    $request->userAdminUpdate->password = 'sint';
    $request->userAdminUpdate->username = 'Grace_Medhurst63';
    $request->user = 'dolor';

    $requestSecurity = new UpdateOrganizationUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organization->updateOrganizationUser($request, $requestSecurity);

    if ($response->userDetailsAdmin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

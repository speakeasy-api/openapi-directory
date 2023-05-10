# account

### Available Operations

* [usersGetUserMetadata](#usersgetusermetadata)
* [appApiTokensDelete](#appapitokensdelete) - Delete the App Api Token object with the specific ID
* [appApiTokensList](#appapitokenslist) - Returns App API tokens for the app
* [appApiTokensNew](#appapitokensnew) - Creates a new App API token
* [appInvitationsAccept](#appinvitationsaccept) - Accepts a pending invitation for the specified user
* [appInvitationsCreate](#appinvitationscreate) - Invites a new or existing user to an app
* [~~appInvitationsCreateByEmail~~](#appinvitationscreatebyemail) - Invites a new or existing user to an app :warning: **Deprecated**
* [appInvitationsDelete](#appinvitationsdelete) - Removes a user's invitation to an app
* [appInvitationsList](#appinvitationslist) - Gets the pending invitations for the app
* [appInvitationsReject](#appinvitationsreject) - Rejects a pending invitation for the specified user
* [appInvitationsUpdatePermissions](#appinvitationsupdatepermissions) - Update pending invitation permission
* [appsCreate](#appscreate) - Creates a new app and returns it to the caller
* [appsCreateForOrg](#appscreatefororg) - Creates a new app for the organization and returns it to the caller
* [appsDelete](#appsdelete) - Delete an app
* [appsDeleteAvatar](#appsdeleteavatar) - Deletes the uploaded app avatar
* [appsGet](#appsget) - Return a specific app with the given app name which belongs to the given owner.
* [appsGetForOrgUser](#appsgetfororguser) - Get a user apps information from an organization by name
* [appsGetTeams](#appsgetteams) - Returns the details of all teams that have access to the app.
* [appsList](#appslist) - Returns a list of apps
* [appsListForOrg](#appslistfororg) - Returns a list of apps for the organization
* [appsListTesters](#appslisttesters) - Returns the testers associated with the app specified with the given app name which belongs to the given owner.
* [appsRemoveUser](#appsremoveuser) - Removes the user from the app
* [appsTransferOwnershipJson](#appstransferownershipjson) - Transfers ownership of an app to a different user or organization
* [appsTransferOwnershipRaw](#appstransferownershipraw) - Transfers ownership of an app to a different user or organization
* [appsTransferToOrg](#appstransfertoorg) - Transfers ownership of an app to a new organization
* [appsUpdate](#appsupdate) - Partially updates a single app
* [appsUpdateAvatar](#appsupdateavatar) - Sets the app avatar
* [appsUpdateUserPermissions](#appsupdateuserpermissions) - Update user permission for the app
* [azureSubscriptionDeleteForApp](#azuresubscriptiondeleteforapp) - Delete the azure subscriptions for the app
* [azureSubscriptionLinkForApp](#azuresubscriptionlinkforapp) - Link azure subscription to an app
* [azureSubscriptionListForApp](#azuresubscriptionlistforapp) - Returns a list of azure subscriptions for the app
* [azureSubscriptionListForOrg](#azuresubscriptionlistfororg) - Returns a list of azure subscriptions for the organization
* [azureSubscriptionListForUser](#azuresubscriptionlistforuser) - Returns a list of azure subscriptions for the user
* [distributionGroupInvitationsAcceptAll](#distributiongroupinvitationsacceptall) - Accepts all pending invitations to distribution groups for the specified user
* [distributionGroupsAddApps](#distributiongroupsaddapps) - Add apps to distribution group in an org
* [distributionGroupsAddUser](#distributiongroupsadduser) - Adds the members to the specified distribution group
* [distributionGroupsAddUsersForOrg](#distributiongroupsaddusersfororg) - Accepts an array of user email addresses to get added to the specified group
* [distributionGroupsBulkDeleteApps](#distributiongroupsbulkdeleteapps) - Delete apps from distribution group in an org
* [distributionGroupsBulkDeleteUsers](#distributiongroupsbulkdeleteusers) - Delete testers from distribution group in an org
* [distributionGroupsCreate](#distributiongroupscreate) - Creates a new distribution group and returns it to the caller
* [distributionGroupsCreateForOrg](#distributiongroupscreatefororg) - Creates a disribution goup which can be shared across apps under an organization
* [distributionGroupsDelete](#distributiongroupsdelete) - Deletes a distribution group
* [distributionGroupsDeleteForOrg](#distributiongroupsdeletefororg) - Deletes a single distribution group from an org with a given distribution group name
* [distributionGroupsDetailsForOrg](#distributiongroupsdetailsfororg) - Returns a list of distribution groups with details for an organization
* [distributionGroupsGet](#distributiongroupsget) - Returns a single distribution group for a given distribution group name
* [distributionGroupsGetApps](#distributiongroupsgetapps) - Get apps from a distribution group in an org
* [distributionGroupsGetForOrg](#distributiongroupsgetfororg) - Returns a single distribution group in org for a given distribution group name
* [distributionGroupsList](#distributiongroupslist) - Returns a list of distribution groups in the app specified
* [distributionGroupsListAllTestersForOrg](#distributiongroupslistalltestersfororg) - Returns a unique list of users including the whole organization members plus testers in any shared group of that org
* [distributionGroupsListForOrg](#distributiongroupslistfororg) - Returns a list of distribution groups in the org specified
* [distributionGroupsListUsers](#distributiongroupslistusers) - Returns a list of member details in the distribution group specified
* [distributionGroupsListUsersForOrg](#distributiongroupslistusersfororg) - Returns a list of member in the distribution group specified
* [distributionGroupsPatchForOrg](#distributiongroupspatchfororg) - Update one given distribution group name in an org
* [distributionGroupsRemoveUser](#distributiongroupsremoveuser) - Remove the users from the distribution group
* [distributionGroupsResendInvite](#distributiongroupsresendinvite) - Resend distribution group app invite notification to previously invited testers
* [distributionGroupsResendSharedInvite](#distributiongroupsresendsharedinvite) - Resend shared distribution group invite notification to previously invited testers
* [distributionGroupsUpdate](#distributiongroupsupdate) - Updates the attributes of distribution group
* [invitationsSent](#invitationssent) - Returns all invitations sent by the caller
* [orgInvitations](#orginvitations) - Removes a user's invitation to an organization
* [orgInvitationsAccept](#orginvitationsaccept) - Accepts a pending organization invitation for the specified user
* [orgInvitationsCreate](#orginvitationscreate) - Invites a new or existing user to an organization
* [orgInvitationsDelete](#orginvitationsdelete) - Removes a user's invitation to an organization
* [orgInvitationsListPending](#orginvitationslistpending) - Gets the pending invitations for the organization
* [orgInvitationsReject](#orginvitationsreject) - Rejects a pending organization invitation
* [orgInvitationsSendNewInvitation](#orginvitationssendnewinvitation) - Cancels an existing organization invitation for the user and sends a new one
* [orgInvitationsUpdate](#orginvitationsupdate) - Allows the role of an invited user to be changed
* [organizationDeleteAvatar](#organizationdeleteavatar) - Deletes the uploaded organization avatar
* [organizationUpdateAvatar](#organizationupdateavatar) - Sets the organization avatar
* [organizationsCreateOrUpdate](#organizationscreateorupdate) - Creates a new organization and returns it to the caller
* [organizationsDelete](#organizationsdelete) - Deletes a single organization
* [organizationsGet](#organizationsget) - Returns the details of a single organization
* [organizationsList](#organizationslist) - Returns a list of organizations the requesting user has access to
* [organizationsListAdministered](#organizationslistadministered) - Returns a list organizations in which the requesting user is an admin
* [organizationsUpdate](#organizationsupdate) - Returns a list of organizations the requesting user has access to
* [sharedconnectionConnections](#sharedconnectionconnections) - Gets all service connections of the service type for GDPR export.
* [teamsAddApp](#teamsaddapp) - Adds an app to a team
* [teamsAddUser](#teamsadduser) - Adds a new user to a team that is owned by an organization
* [teamsCreateTeam](#teamscreateteam) - Creates a team and returns it
* [teamsDelete](#teamsdelete) - Deletes a single team
* [teamsGetTeam](#teamsgetteam) - Returns the details of a single team
* [teamsGetUsers](#teamsgetusers) - Returns the users of a team which is owned by an organization
* [teamsListAll](#teamslistall) - Returns the list of all teams in this org
* [teamsListApps](#teamslistapps) - Returns the apps a team has access to
* [teamsRemoveApp](#teamsremoveapp) - Removes an app from a team
* [teamsRemoveUser](#teamsremoveuser) - Removes a user from a team that is owned by an organization
* [teamsUpdate](#teamsupdate) - Updates a single team
* [teamsUpdatePermissions](#teamsupdatepermissions) - Updates the permissions the team has to the app
* [userApiTokensDelete](#userapitokensdelete) - Delete the user api_token object with the specific id
* [userApiTokensList](#userapitokenslist) - Returns api tokens for the authenticated user
* [userApiTokensNew](#userapitokensnew) - Creates a new User API token
* [usersGet](#usersget) - Returns the user profile data
* [usersGetForOrg](#usersgetfororg) - Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission
* [usersList](#userslist) - Returns the users associated with the app specified with the given app name which belongs to the given owner.
* [usersListForOrg](#userslistfororg) - Returns a list of users that belong to an organization
* [usersRemoveFromOrg](#usersremovefromorg) - Removes a user from an organization.
* [usersUpdate](#usersupdate) - Updates the user profile and returns the updated user data
* [usersUpdateOrgRole](#usersupdateorgrole) - Updates the given organization user

## usersGetUserMetadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetUserMetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new UsersGetUserMetadataSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->usersGetUserMetadata($requestSecurity);

    if ($response->usersGetUserMetadata200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appApiTokensDelete

Delete the App Api Token object with the specific ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppApiTokensDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppApiTokensDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppApiTokensDeleteRequest();
    $request->apiTokenId = 'corrupti';
    $request->appName = 'provident';
    $request->ownerName = 'distinctio';

    $requestSecurity = new AppApiTokensDeleteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->account->appApiTokensDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appApiTokensList

Returns App API tokens for the app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppApiTokensListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppApiTokensListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppApiTokensListRequest();
    $request->appName = 'quibusdam';
    $request->ownerName = 'unde';

    $requestSecurity = new AppApiTokensListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->account->appApiTokensList($request, $requestSecurity);

    if ($response->appApiTokensList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appApiTokensNew

Creates a new App API token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppApiTokensNewRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppApiTokensNewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppApiTokensNewRequestBodyScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppApiTokensNewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppApiTokensNewRequest();
    $request->requestBody = new AppApiTokensNewRequestBody();
    $request->requestBody->description = 'nulla';
    $request->requestBody->scope = [
        AppApiTokensNewRequestBodyScopeEnum::VIEWER,
        AppApiTokensNewRequestBodyScopeEnum::ALL,
        AppApiTokensNewRequestBodyScopeEnum::VIEWER,
    ];
    $request->appName = 'deserunt';
    $request->ownerName = 'suscipit';

    $requestSecurity = new AppApiTokensNewSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->account->appApiTokensNew($request, $requestSecurity);

    if ($response->appApiTokensNew201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appInvitationsAccept

Accepts a pending invitation for the specified user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsAcceptRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsAcceptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppInvitationsAcceptRequest();
    $request->requestBody = [
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->invitationToken = 'tempora';

    $requestSecurity = new AppInvitationsAcceptSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appInvitationsAccept($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appInvitationsCreate

Invites a new or existing user to an app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsCreateRequestBodyRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppInvitationsCreateRequest();
    $request->requestBody = new AppInvitationsCreateRequestBody();
    $request->requestBody->role = AppInvitationsCreateRequestBodyRoleEnum::COLLABORATOR;
    $request->requestBody->userEmail = 'molestiae';
    $request->appName = 'minus';
    $request->ownerName = 'placeat';

    $requestSecurity = new AppInvitationsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appInvitationsCreate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appInvitationsCreateByEmail~~

Invites a new or existing user to an app

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsCreateByEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsCreateByEmailRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsCreateByEmailRequestBodyRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsCreateByEmailSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppInvitationsCreateByEmailRequest();
    $request->requestBody = new AppInvitationsCreateByEmailRequestBody();
    $request->requestBody->role = AppInvitationsCreateByEmailRequestBodyRoleEnum::COLLABORATOR;
    $request->appName = 'iusto';
    $request->ownerName = 'excepturi';
    $request->userEmail = 'nisi';

    $requestSecurity = new AppInvitationsCreateByEmailSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appInvitationsCreateByEmail($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appInvitationsDelete

Removes a user's invitation to an app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppInvitationsDeleteRequest();
    $request->appName = 'recusandae';
    $request->ownerName = 'temporibus';
    $request->userEmail = 'ab';

    $requestSecurity = new AppInvitationsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appInvitationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appInvitationsList

Gets the pending invitations for the app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppInvitationsListRequest();
    $request->appName = 'quis';
    $request->ownerName = 'veritatis';

    $requestSecurity = new AppInvitationsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appInvitationsList($request, $requestSecurity);

    if ($response->appInvitationsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appInvitationsReject

Rejects a pending invitation for the specified user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsRejectRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsRejectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppInvitationsRejectRequest();
    $request->requestBody = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->invitationToken = 'at';

    $requestSecurity = new AppInvitationsRejectSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appInvitationsReject($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appInvitationsUpdatePermissions

Update pending invitation permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsUpdatePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsUpdatePermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppInvitationsUpdatePermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppInvitationsUpdatePermissionsRequest();
    $request->requestBody = new AppInvitationsUpdatePermissionsRequestBody();
    $request->requestBody->permissions = [
        AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum::VIEWER,
        AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum::DEVELOPER,
        AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum::VIEWER,
        AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum::VIEWER,
    ];
    $request->appName = 'esse';
    $request->ownerName = 'totam';
    $request->userEmail = 'porro';

    $requestSecurity = new AppInvitationsUpdatePermissionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appInvitationsUpdatePermissions($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreate

Creates a new app and returns it to the caller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateRequestBodyOsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateRequestBodyPlatformEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCreateRequestBody();
    $request->description = 'dolorum';
    $request->displayName = 'dicta';
    $request->name = 'Luke McCullough';
    $request->os = AppsCreateRequestBodyOsEnum::CUSTOM;
    $request->platform = AppsCreateRequestBodyPlatformEnum::WPF;
    $request->releaseType = 'totam';

    $requestSecurity = new AppsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsCreate($request, $requestSecurity);

    if ($response->appsCreate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateForOrg

Creates a new app for the organization and returns it to the caller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateForOrgRequestBodyOsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateForOrgRequestBodyPlatformEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCreateForOrgRequest();
    $request->requestBody = new AppsCreateForOrgRequestBody();
    $request->requestBody->description = 'beatae';
    $request->requestBody->displayName = 'commodi';
    $request->requestBody->name = 'Pauline Dibbert';
    $request->requestBody->os = AppsCreateForOrgRequestBodyOsEnum::TIZEN;
    $request->requestBody->platform = AppsCreateForOrgRequestBodyPlatformEnum::UWP;
    $request->requestBody->releaseType = 'excepturi';
    $request->orgName = 'aspernatur';

    $requestSecurity = new AppsCreateForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsCreateForOrg($request, $requestSecurity);

    if ($response->appsCreateForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDelete

Delete an app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsDeleteRequest();
    $request->appName = 'perferendis';
    $request->ownerName = 'ad';

    $requestSecurity = new AppsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteAvatar

Deletes the uploaded app avatar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteAvatarRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteAvatarSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsDeleteAvatarRequest();
    $request->appName = 'natus';
    $request->ownerName = 'sed';

    $requestSecurity = new AppsDeleteAvatarSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsDeleteAvatar($request, $requestSecurity);

    if ($response->appsDeleteAvatar200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGet

Return a specific app with the given app name which belongs to the given owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetRequest();
    $request->appName = 'iste';
    $request->ownerName = 'dolor';

    $requestSecurity = new AppsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsGet($request, $requestSecurity);

    if ($response->appsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetForOrgUser

Get a user apps information from an organization by name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetForOrgUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetForOrgUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetForOrgUserRequest();
    $request->orgName = 'natus';
    $request->userName = 'Gertrude_Welch44';

    $requestSecurity = new AppsGetForOrgUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsGetForOrgUser($request, $requestSecurity);

    if ($response->appsGetForOrgUser200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetTeams

Returns the details of all teams that have access to the app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetTeamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetTeamsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetTeamsRequest();
    $request->appName = 'corporis';
    $request->ownerName = 'iste';

    $requestSecurity = new AppsGetTeamsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsGetTeams($request, $requestSecurity);

    if ($response->appsGetTeams200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsList

Returns a list of apps

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsListDollarOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListRequest();
    $request->dollarOrderBy = AppsListDollarOrderByEnum::DISPLAY_NAME;

    $requestSecurity = new AppsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsList($request, $requestSecurity);

    if ($response->appsList200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListForOrg

Returns a list of apps for the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsListForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListForOrgRequest();
    $request->orgName = 'saepe';

    $requestSecurity = new AppsListForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsListForOrg($request, $requestSecurity);

    if ($response->appsListForOrg200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListTesters

Returns the testers associated with the app specified with the given app name which belongs to the given owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListTestersRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsListTestersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListTestersRequest();
    $request->appName = 'quidem';
    $request->ownerName = 'architecto';

    $requestSecurity = new AppsListTestersSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsListTesters($request, $requestSecurity);

    if ($response->appsListTesters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsRemoveUser

Removes the user from the app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsRemoveUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsRemoveUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsRemoveUserRequest();
    $request->appName = 'ipsa';
    $request->ownerName = 'reiciendis';
    $request->userEmail = 'est';

    $requestSecurity = new AppsRemoveUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsRemoveUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsTransferOwnershipJson

Transfers ownership of an app to a different user or organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsTransferOwnershipJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsTransferOwnershipJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsTransferOwnershipJsonRequest();
    $request->requestBody = [
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->appName = 'enim';
    $request->destinationOwnerName = 'omnis';
    $request->ownerName = 'nemo';

    $requestSecurity = new AppsTransferOwnershipJsonSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsTransferOwnershipJson($request, $requestSecurity);

    if ($response->appsTransferOwnershipJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsTransferOwnershipRaw

Transfers ownership of an app to a different user or organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsTransferOwnershipRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsTransferOwnershipRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsTransferOwnershipRawRequest();
    $request->requestBody = 'minima';
    $request->appName = 'excepturi';
    $request->destinationOwnerName = 'accusantium';
    $request->ownerName = 'iure';

    $requestSecurity = new AppsTransferOwnershipRawSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsTransferOwnershipRaw($request, $requestSecurity);

    if ($response->appsTransferOwnershipRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsTransferToOrg

Transfers ownership of an app to a new organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsTransferToOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsTransferToOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsTransferToOrgRequest();
    $request->requestBody = [
        'doloribus' => 'sapiente',
        'architecto' => 'mollitia',
        'dolorem' => 'culpa',
    ];
    $request->appName = 'consequuntur';
    $request->ownerName = 'repellat';

    $requestSecurity = new AppsTransferToOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsTransferToOrg($request, $requestSecurity);

    if ($response->appsTransferToOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsUpdate

Partially updates a single app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsUpdateRequest();
    $request->requestBody = new AppsUpdateRequestBody();
    $request->requestBody->description = 'mollitia';
    $request->requestBody->displayName = 'occaecati';
    $request->requestBody->iconAssetId = '46773925-1aa5-42c3-b5ad-019da1ffe78f';
    $request->requestBody->iconUrl = 'ipsa';
    $request->requestBody->name = 'Mr. Jared Ritchie';
    $request->requestBody->releaseType = 'ut';
    $request->appName = 'maiores';
    $request->ownerName = 'dicta';

    $requestSecurity = new AppsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsUpdate($request, $requestSecurity);

    if ($response->appsUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsUpdateAvatar

Sets the app avatar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateAvatarRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateAvatarRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateAvatarRequestBodyAvatar;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateAvatarSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsUpdateAvatarRequest();
    $request->requestBody = new AppsUpdateAvatarRequestBody();
    $request->requestBody->avatar = new AppsUpdateAvatarRequestBodyAvatar();
    $request->requestBody->avatar->avatar = 'corporis';
    $request->requestBody->avatar->content = 'dolore';
    $request->appName = 'iusto';
    $request->ownerName = 'dicta';

    $requestSecurity = new AppsUpdateAvatarSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsUpdateAvatar($request, $requestSecurity);

    if ($response->appsUpdateAvatar200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsUpdateUserPermissions

Update user permission for the app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateUserPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateUserPermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateUserPermissionsRequestBodyPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateUserPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsUpdateUserPermissionsRequest();
    $request->requestBody = new AppsUpdateUserPermissionsRequestBody();
    $request->requestBody->permissions = [
        AppsUpdateUserPermissionsRequestBodyPermissionsEnum::MANAGER,
        AppsUpdateUserPermissionsRequestBodyPermissionsEnum::VIEWER,
        AppsUpdateUserPermissionsRequestBodyPermissionsEnum::DEVELOPER,
    ];
    $request->appName = 'repudiandae';
    $request->ownerName = 'quae';
    $request->userEmail = 'ipsum';

    $requestSecurity = new AppsUpdateUserPermissionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->appsUpdateUserPermissions($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## azureSubscriptionDeleteForApp

Delete the azure subscriptions for the app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionDeleteForAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionDeleteForAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AzureSubscriptionDeleteForAppRequest();
    $request->appName = 'quidem';
    $request->azureSubscriptionId = '99d488e1-e91e-4450-ad2a-bd44269802d5';
    $request->ownerName = 'alias';

    $requestSecurity = new AzureSubscriptionDeleteForAppSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->azureSubscriptionDeleteForApp($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## azureSubscriptionLinkForApp

Link azure subscription to an app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionLinkForAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionLinkForAppRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionLinkForAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AzureSubscriptionLinkForAppRequest();
    $request->requestBody = new AzureSubscriptionLinkForAppRequestBody();
    $request->requestBody->subscriptionId = '2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6';
    $request->appName = 'aliquid';
    $request->ownerName = 'laborum';

    $requestSecurity = new AzureSubscriptionLinkForAppSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->azureSubscriptionLinkForApp($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## azureSubscriptionListForApp

Returns a list of azure subscriptions for the app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionListForAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionListForAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AzureSubscriptionListForAppRequest();
    $request->appName = 'accusamus';
    $request->ownerName = 'non';

    $requestSecurity = new AzureSubscriptionListForAppSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->azureSubscriptionListForApp($request, $requestSecurity);

    if ($response->azureSubscriptionListForApp200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## azureSubscriptionListForOrg

Returns a list of azure subscriptions for the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionListForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AzureSubscriptionListForOrgRequest();
    $request->orgName = 'occaecati';

    $requestSecurity = new AzureSubscriptionListForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->azureSubscriptionListForOrg($request, $requestSecurity);

    if ($response->azureSubscriptionListForOrg200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## azureSubscriptionListForUser

Returns a list of azure subscriptions for the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AzureSubscriptionListForUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AzureSubscriptionListForUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->azureSubscriptionListForUser($requestSecurity);

    if ($response->azureSubscriptionListForUser200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupInvitationsAcceptAll

Accepts all pending invitations to distribution groups for the specified user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupInvitationsAcceptAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'accusamus' => 'delectus',
        'quidem' => 'provident',
    ]

    $requestSecurity = new DistributionGroupInvitationsAcceptAllSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupInvitationsAcceptAll($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsAddApps

Add apps to distribution group in an org

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddAppsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddAppsRequestBodyApps;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsAddAppsRequest();
    $request->requestBody = new DistributionGroupsAddAppsRequestBody();
    $request->requestBody->apps = [
        new DistributionGroupsAddAppsRequestBodyApps(),
        new DistributionGroupsAddAppsRequestBodyApps(),
        new DistributionGroupsAddAppsRequestBodyApps(),
    ];
    $request->distributionGroupName = 'id';
    $request->orgName = 'blanditiis';

    $requestSecurity = new DistributionGroupsAddAppsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsAddApps($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsAddUser

Adds the members to the specified distribution group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsAddUserRequest();
    $request->requestBody = new DistributionGroupsAddUserRequestBody();
    $request->requestBody->userEmails = [
        'sapiente',
        'amet',
        'deserunt',
    ];
    $request->appName = 'nisi';
    $request->distributionGroupName = 'vel';
    $request->ownerName = 'natus';

    $requestSecurity = new DistributionGroupsAddUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsAddUser($request, $requestSecurity);

    if ($response->distributionGroupsAddUser200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsAddUsersForOrg

Accepts an array of user email addresses to get added to the specified group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddUsersForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddUsersForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsAddUsersForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsAddUsersForOrgRequest();
    $request->requestBody = new DistributionGroupsAddUsersForOrgRequestBody();
    $request->requestBody->userEmails = [
        'molestiae',
        'perferendis',
        'nihil',
    ];
    $request->distributionGroupName = 'magnam';
    $request->orgName = 'distinctio';

    $requestSecurity = new DistributionGroupsAddUsersForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsAddUsersForOrg($request, $requestSecurity);

    if ($response->distributionGroupsAddUsersForOrg200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsBulkDeleteApps

Delete apps from distribution group in an org

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsBulkDeleteAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsBulkDeleteAppsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsBulkDeleteAppsRequestBodyApps;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsBulkDeleteAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsBulkDeleteAppsRequest();
    $request->requestBody = new DistributionGroupsBulkDeleteAppsRequestBody();
    $request->requestBody->apps = [
        new DistributionGroupsBulkDeleteAppsRequestBodyApps(),
        new DistributionGroupsBulkDeleteAppsRequestBodyApps(),
        new DistributionGroupsBulkDeleteAppsRequestBodyApps(),
    ];
    $request->distributionGroupName = 'labore';
    $request->orgName = 'labore';

    $requestSecurity = new DistributionGroupsBulkDeleteAppsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsBulkDeleteApps($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsBulkDeleteUsers

Delete testers from distribution group in an org

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsBulkDeleteUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsBulkDeleteUsersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsBulkDeleteUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsBulkDeleteUsersRequest();
    $request->requestBody = new DistributionGroupsBulkDeleteUsersRequestBody();
    $request->requestBody->userEmails = [
        'natus',
        'nobis',
    ];
    $request->distributionGroupName = 'eum';
    $request->orgName = 'vero';

    $requestSecurity = new DistributionGroupsBulkDeleteUsersSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsBulkDeleteUsers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsCreate

Creates a new distribution group and returns it to the caller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsCreateRequest();
    $request->requestBody = new DistributionGroupsCreateRequestBody();
    $request->requestBody->displayName = 'aspernatur';
    $request->requestBody->name = 'Danielle Bosco';
    $request->appName = 'provident';
    $request->ownerName = 'quos';

    $requestSecurity = new DistributionGroupsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsCreate($request, $requestSecurity);

    if ($response->distributionGroupsCreate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsCreateForOrg

Creates a disribution goup which can be shared across apps under an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsCreateForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsCreateForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsCreateForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsCreateForOrgRequest();
    $request->requestBody = new DistributionGroupsCreateForOrgRequestBody();
    $request->requestBody->displayName = 'sint';
    $request->requestBody->name = 'Angie Wisozk';
    $request->orgName = 'eum';

    $requestSecurity = new DistributionGroupsCreateForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsCreateForOrg($request, $requestSecurity);

    if ($response->distributionGroupsCreateForOrg201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsDelete

Deletes a distribution group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsDeleteRequest();
    $request->appName = 'dolor';
    $request->distributionGroupName = 'necessitatibus';
    $request->ownerName = 'odit';

    $requestSecurity = new DistributionGroupsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsDeleteForOrg

Deletes a single distribution group from an org with a given distribution group name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsDeleteForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsDeleteForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsDeleteForOrgRequest();
    $request->distributionGroupName = 'nemo';
    $request->orgName = 'quasi';

    $requestSecurity = new DistributionGroupsDeleteForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsDeleteForOrg($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsDetailsForOrg

Returns a list of distribution groups with details for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsDetailsForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsDetailsForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsDetailsForOrgRequest();
    $request->appsLimit = 4358.65;
    $request->orgName = 'doloribus';

    $requestSecurity = new DistributionGroupsDetailsForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsDetailsForOrg($request, $requestSecurity);

    if ($response->distributionGroupsDetailsForOrg200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsGet

Returns a single distribution group for a given distribution group name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsGetRequest();
    $request->appName = 'debitis';
    $request->distributionGroupName = 'eius';
    $request->ownerName = 'maxime';

    $requestSecurity = new DistributionGroupsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsGet($request, $requestSecurity);

    if ($response->distributionGroupsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsGetApps

Get apps from a distribution group in an org

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsGetAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsGetAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsGetAppsRequest();
    $request->distributionGroupName = 'deleniti';
    $request->orgName = 'facilis';

    $requestSecurity = new DistributionGroupsGetAppsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsGetApps($request, $requestSecurity);

    if ($response->distributionGroupsGetApps200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsGetForOrg

Returns a single distribution group in org for a given distribution group name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsGetForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsGetForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsGetForOrgRequest();
    $request->distributionGroupName = 'in';
    $request->orgName = 'architecto';

    $requestSecurity = new DistributionGroupsGetForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsGetForOrg($request, $requestSecurity);

    if ($response->distributionGroupsGetForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsList

Returns a list of distribution groups in the app specified

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsListRequest();
    $request->appName = 'architecto';
    $request->ownerName = 'repudiandae';

    $requestSecurity = new DistributionGroupsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsList($request, $requestSecurity);

    if ($response->distributionGroupsList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsListAllTestersForOrg

Returns a unique list of users including the whole organization members plus testers in any shared group of that org

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListAllTestersForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListAllTestersForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsListAllTestersForOrgRequest();
    $request->orgName = 'ullam';

    $requestSecurity = new DistributionGroupsListAllTestersForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsListAllTestersForOrg($request, $requestSecurity);

    if ($response->distributionGroupsListAllTestersForOrg200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsListForOrg

Returns a list of distribution groups in the org specified

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsListForOrgRequest();
    $request->orgName = 'expedita';

    $requestSecurity = new DistributionGroupsListForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsListForOrg($request, $requestSecurity);

    if ($response->distributionGroupsListForOrg201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsListUsers

Returns a list of member details in the distribution group specified

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsListUsersRequest();
    $request->appName = 'nihil';
    $request->distributionGroupName = 'repellat';
    $request->excludePendingInvitations = false;
    $request->ownerName = 'quibusdam';

    $requestSecurity = new DistributionGroupsListUsersSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsListUsers($request, $requestSecurity);

    if ($response->distributionGroupsListUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsListUsersForOrg

Returns a list of member in the distribution group specified

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListUsersForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsListUsersForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsListUsersForOrgRequest();
    $request->distributionGroupName = 'sed';
    $request->orgName = 'saepe';

    $requestSecurity = new DistributionGroupsListUsersForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsListUsersForOrg($request, $requestSecurity);

    if ($response->distributionGroupsListUsersForOrg200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsPatchForOrg

Update one given distribution group name in an org

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsPatchForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsPatchForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsPatchForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsPatchForOrgRequest();
    $request->requestBody = new DistributionGroupsPatchForOrgRequestBody();
    $request->requestBody->isPublic = false;
    $request->requestBody->name = 'Edward Crooks';
    $request->distributionGroupName = 'magni';
    $request->orgName = 'sunt';

    $requestSecurity = new DistributionGroupsPatchForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsPatchForOrg($request, $requestSecurity);

    if ($response->distributionGroupsPatchForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsRemoveUser

Remove the users from the distribution group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsRemoveUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsRemoveUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsRemoveUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsRemoveUserRequest();
    $request->requestBody = new DistributionGroupsRemoveUserRequestBody();
    $request->requestBody->userEmails = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->appName = 'excepturi';
    $request->distributionGroupName = 'odit';
    $request->ownerName = 'ea';

    $requestSecurity = new DistributionGroupsRemoveUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsRemoveUser($request, $requestSecurity);

    if ($response->distributionGroupsRemoveUser200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsResendInvite

Resend distribution group app invite notification to previously invited testers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsResendInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsResendInviteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsResendInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsResendInviteRequest();
    $request->requestBody = new DistributionGroupsResendInviteRequestBody();
    $request->requestBody->userEmails = [
        'ab',
    ];
    $request->appName = 'maiores';
    $request->distributionGroupName = 'quidem';
    $request->ownerName = 'ipsam';

    $requestSecurity = new DistributionGroupsResendInviteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsResendInvite($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsResendSharedInvite

Resend shared distribution group invite notification to previously invited testers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsResendSharedInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsResendSharedInviteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsResendSharedInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsResendSharedInviteRequest();
    $request->requestBody = new DistributionGroupsResendSharedInviteRequestBody();
    $request->requestBody->userEmails = [
        'autem',
        'nam',
    ];
    $request->distributionGroupName = 'eaque';
    $request->orgName = 'pariatur';

    $requestSecurity = new DistributionGroupsResendSharedInviteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsResendSharedInvite($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distributionGroupsUpdate

Updates the attributes of distribution group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistributionGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistributionGroupsUpdateRequest();
    $request->requestBody = new DistributionGroupsUpdateRequestBody();
    $request->requestBody->isPublic = false;
    $request->requestBody->name = 'Camille Armstrong';
    $request->appName = 'aut';
    $request->distributionGroupName = 'cumque';
    $request->ownerName = 'corporis';

    $requestSecurity = new DistributionGroupsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->distributionGroupsUpdate($request, $requestSecurity);

    if ($response->distributionGroupsUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invitationsSent

Returns all invitations sent by the caller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvitationsSentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new InvitationsSentSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->invitationsSent($requestSecurity);

    if ($response->invitationsSent200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgInvitations

Removes a user's invitation to an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgInvitationsRequest();
    $request->requestBody = [
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->email = 'Chelsea79@gmail.com';
    $request->orgName = 'quam';

    $requestSecurity = new OrgInvitationsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->orgInvitations($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgInvitationsAccept

Accepts a pending organization invitation for the specified user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsAcceptRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsAcceptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgInvitationsAcceptRequest();
    $request->requestBody = [
        'vero' => 'nostrum',
    ];
    $request->invitationToken = 'hic';

    $requestSecurity = new OrgInvitationsAcceptSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->orgInvitationsAccept($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgInvitationsCreate

Invites a new or existing user to an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsCreateRequestBodyRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgInvitationsCreateRequest();
    $request->requestBody = new OrgInvitationsCreateRequestBody();
    $request->requestBody->role = OrgInvitationsCreateRequestBodyRoleEnum::MEMBER;
    $request->requestBody->userEmail = 'omnis';
    $request->orgName = 'facilis';

    $requestSecurity = new OrgInvitationsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->orgInvitationsCreate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgInvitationsDelete

Removes a user's invitation to an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsDeleteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgInvitationsDeleteRequest();
    $request->requestBody = new OrgInvitationsDeleteRequestBody();
    $request->requestBody->userEmail = 'perspiciatis';
    $request->orgName = 'voluptatem';

    $requestSecurity = new OrgInvitationsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->orgInvitationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgInvitationsListPending

Gets the pending invitations for the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsListPendingRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsListPendingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgInvitationsListPendingRequest();
    $request->orgName = 'porro';

    $requestSecurity = new OrgInvitationsListPendingSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->orgInvitationsListPending($request, $requestSecurity);

    if ($response->orgInvitationsListPending200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgInvitationsReject

Rejects a pending organization invitation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsRejectRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsRejectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgInvitationsRejectRequest();
    $request->requestBody = [
        'blanditiis' => 'error',
    ];
    $request->invitationToken = 'eaque';

    $requestSecurity = new OrgInvitationsRejectSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->orgInvitationsReject($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgInvitationsSendNewInvitation

Cancels an existing organization invitation for the user and sends a new one

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsSendNewInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsSendNewInvitationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsSendNewInvitationRequestBodyRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsSendNewInvitationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgInvitationsSendNewInvitationRequest();
    $request->requestBody = new OrgInvitationsSendNewInvitationRequestBody();
    $request->requestBody->role = OrgInvitationsSendNewInvitationRequestBodyRoleEnum::COLLABORATOR;
    $request->email = 'David.Zemlak61@hotmail.com';
    $request->orgName = 'dolorum';

    $requestSecurity = new OrgInvitationsSendNewInvitationSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->orgInvitationsSendNewInvitation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgInvitationsUpdate

Allows the role of an invited user to be changed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsUpdateRequestBodyRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgInvitationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgInvitationsUpdateRequest();
    $request->requestBody = new OrgInvitationsUpdateRequestBody();
    $request->requestBody->role = OrgInvitationsUpdateRequestBodyRoleEnum::COLLABORATOR;
    $request->email = 'Lambert_Rolfson31@hotmail.com';
    $request->orgName = 'quos';

    $requestSecurity = new OrgInvitationsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->orgInvitationsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## organizationDeleteAvatar

Deletes the uploaded organization avatar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationDeleteAvatarRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationDeleteAvatarSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrganizationDeleteAvatarRequest();
    $request->orgName = 'aliquid';

    $requestSecurity = new OrganizationDeleteAvatarSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->organizationDeleteAvatar($request, $requestSecurity);

    if ($response->organizationDeleteAvatar200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## organizationUpdateAvatar

Sets the organization avatar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationUpdateAvatarRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationUpdateAvatarRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationUpdateAvatarRequestBodyAvatar;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationUpdateAvatarSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrganizationUpdateAvatarRequest();
    $request->requestBody = new OrganizationUpdateAvatarRequestBody();
    $request->requestBody->avatar = new OrganizationUpdateAvatarRequestBodyAvatar();
    $request->requestBody->avatar->avatar = 'dolorem';
    $request->requestBody->avatar->content = 'dolorem';
    $request->orgName = 'dolor';

    $requestSecurity = new OrganizationUpdateAvatarSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->organizationUpdateAvatar($request, $requestSecurity);

    if ($response->organizationUpdateAvatar200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## organizationsCreateOrUpdate

Creates a new organization and returns it to the caller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsCreateOrUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsCreateOrUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrganizationsCreateOrUpdateRequestBody();
    $request->displayName = 'qui';
    $request->name = 'Mindy Marks';

    $requestSecurity = new OrganizationsCreateOrUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->organizationsCreateOrUpdate($request, $requestSecurity);

    if ($response->organizationsCreateOrUpdate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## organizationsDelete

Deletes a single organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrganizationsDeleteRequest();
    $request->orgName = 'dignissimos';

    $requestSecurity = new OrganizationsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->organizationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## organizationsGet

Returns the details of a single organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrganizationsGetRequest();
    $request->orgName = 'reiciendis';

    $requestSecurity = new OrganizationsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->organizationsGet($request, $requestSecurity);

    if ($response->organizationsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## organizationsList

Returns a list of organizations the requesting user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new OrganizationsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->organizationsList($requestSecurity);

    if ($response->organizationsList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## organizationsListAdministered

Returns a list organizations in which the requesting user is an admin

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsListAdministeredSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new OrganizationsListAdministeredSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->organizationsListAdministered($requestSecurity);

    if ($response->organizationsListAdministered200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## organizationsUpdate

Returns a list of organizations the requesting user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrganizationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrganizationsUpdateRequest();
    $request->requestBody = new OrganizationsUpdateRequestBody();
    $request->requestBody->displayName = 'amet';
    $request->requestBody->name = 'Mr. Bradley Bogan';
    $request->orgName = 'odio';

    $requestSecurity = new OrganizationsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->organizationsUpdate($request, $requestSecurity);

    if ($response->organizationsUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sharedconnectionConnections

Gets all service connections of the service type for GDPR export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SharedconnectionConnectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SharedconnectionConnectionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->sharedconnectionConnections($requestSecurity);

    if ($response->sharedconnectionConnections200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAddApp

Adds an app to a team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddAppRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddAppRequest();
    $request->requestBody = new TeamsAddAppRequestBody();
    $request->requestBody->name = 'Sophia Predovic';
    $request->orgName = 'natus';
    $request->teamName = 'eos';

    $requestSecurity = new TeamsAddAppSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsAddApp($request, $requestSecurity);

    if ($response->teamsAddApp201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAddUser

Adds a new user to a team that is owned by an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddUserRequest();
    $request->requestBody = new TeamsAddUserRequestBody();
    $request->requestBody->userEmail = 'atque';
    $request->orgName = 'sit';
    $request->teamName = 'fugiat';

    $requestSecurity = new TeamsAddUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsAddUser($request, $requestSecurity);

    if ($response->teamsAddUser201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCreateTeam

Creates a team and returns it

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateTeamRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateTeamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateTeamRequest();
    $request->requestBody = new TeamsCreateTeamRequestBody();
    $request->requestBody->description = 'ab';
    $request->requestBody->displayName = 'soluta';
    $request->requestBody->name = 'Ted Kling';
    $request->orgName = 'omnis';

    $requestSecurity = new TeamsCreateTeamSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsCreateTeam($request, $requestSecurity);

    if ($response->teamsCreateTeam201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDelete

Deletes a single team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteRequest();
    $request->orgName = 'necessitatibus';
    $request->teamName = 'distinctio';

    $requestSecurity = new TeamsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetTeam

Returns the details of a single team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetTeamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetTeamRequest();
    $request->orgName = 'asperiores';
    $request->teamName = 'nihil';

    $requestSecurity = new TeamsGetTeamSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsGetTeam($request, $requestSecurity);

    if ($response->teamsGetTeam200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetUsers

Returns the users of a team which is owned by an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetUsersRequest();
    $request->orgName = 'ipsum';
    $request->teamName = 'voluptate';

    $requestSecurity = new TeamsGetUsersSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsGetUsers($request, $requestSecurity);

    if ($response->teamsGetUsers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListAll

Returns the list of all teams in this org

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListAllRequest();
    $request->orgName = 'id';

    $requestSecurity = new TeamsListAllSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsListAll($request, $requestSecurity);

    if ($response->teamsListAll200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListApps

Returns the apps a team has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListAppsRequest();
    $request->orgName = 'saepe';
    $request->teamName = 'eius';

    $requestSecurity = new TeamsListAppsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsListApps($request, $requestSecurity);

    if ($response->teamsListApps200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsRemoveApp

Removes an app from a team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveAppRequest();
    $request->appName = 'aspernatur';
    $request->orgName = 'perferendis';
    $request->teamName = 'amet';

    $requestSecurity = new TeamsRemoveAppSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsRemoveApp($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsRemoveUser

Removes a user from a team that is owned by an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveUserRequest();
    $request->orgName = 'optio';
    $request->teamName = 'accusamus';
    $request->userName = 'Emmanuelle_Turner';

    $requestSecurity = new TeamsRemoveUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsRemoveUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdate

Updates a single team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateRequest();
    $request->requestBody = new TeamsUpdateRequestBody();
    $request->requestBody->displayName = 'provident';
    $request->orgName = 'minima';
    $request->teamName = 'repellendus';

    $requestSecurity = new TeamsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsUpdate($request, $requestSecurity);

    if ($response->teamsUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdatePermissions

Updates the permissions the team has to the app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdatePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdatePermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdatePermissionsRequestBodyPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdatePermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdatePermissionsRequest();
    $request->requestBody = new TeamsUpdatePermissionsRequestBody();
    $request->requestBody->permissions = [
        TeamsUpdatePermissionsRequestBodyPermissionsEnum::DEVELOPER,
        TeamsUpdatePermissionsRequestBodyPermissionsEnum::MANAGER,
        TeamsUpdatePermissionsRequestBodyPermissionsEnum::VIEWER,
    ];
    $request->appName = 'quaerat';
    $request->orgName = 'tempora';
    $request->teamName = 'vel';

    $requestSecurity = new TeamsUpdatePermissionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->teamsUpdatePermissions($request, $requestSecurity);

    if ($response->teamsUpdatePermissions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userApiTokensDelete

Delete the user api_token object with the specific id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserApiTokensDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UserApiTokensDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserApiTokensDeleteRequest();
    $request->apiTokenId = 'quod';

    $requestSecurity = new UserApiTokensDeleteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->account->userApiTokensDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userApiTokensList

Returns api tokens for the authenticated user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserApiTokensListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new UserApiTokensListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->account->userApiTokensList($requestSecurity);

    if ($response->userApiTokensList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userApiTokensNew

Creates a new User API token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserApiTokensNewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UserApiTokensNewRequestBodyScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UserApiTokensNewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserApiTokensNewRequestBody();
    $request->description = 'officiis';
    $request->scope = [
        UserApiTokensNewRequestBodyScopeEnum::VIEWER,
    ];

    $requestSecurity = new UserApiTokensNewSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->account->userApiTokensNew($request, $requestSecurity);

    if ($response->userApiTokensNew201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGet

Returns the user profile data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new UsersGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->usersGet($requestSecurity);

    if ($response->usersGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetForOrg

Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetForOrgRequest();
    $request->orgName = 'a';
    $request->userName = 'Jacky.Pfeffer';

    $requestSecurity = new UsersGetForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->usersGetForOrg($request, $requestSecurity);

    if ($response->usersGetForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersList

Returns the users associated with the app specified with the given app name which belongs to the given owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListRequest();
    $request->appName = 'quisquam';
    $request->ownerName = 'tenetur';

    $requestSecurity = new UsersListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->usersList($request, $requestSecurity);

    if ($response->usersList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListForOrg

Returns a list of users that belong to an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersListForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListForOrgRequest();
    $request->orgName = 'amet';

    $requestSecurity = new UsersListForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->usersListForOrg($request, $requestSecurity);

    if ($response->usersListForOrg200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersRemoveFromOrg

Removes a user from an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersRemoveFromOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersRemoveFromOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersRemoveFromOrgRequest();
    $request->orgName = 'tempore';
    $request->userName = 'Shania21';

    $requestSecurity = new UsersRemoveFromOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->usersRemoveFromOrg($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersUpdate

Updates the user profile and returns the updated user data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersUpdateRequestBody();
    $request->displayName = 'sapiente';

    $requestSecurity = new UsersUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->usersUpdate($request, $requestSecurity);

    if ($response->usersUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersUpdateOrgRole

Updates the given organization user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateOrgRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateOrgRoleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateOrgRoleRequestBodyRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateOrgRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersUpdateOrgRoleRequest();
    $request->requestBody = new UsersUpdateOrgRoleRequestBody();
    $request->requestBody->role = UsersUpdateOrgRoleRequestBodyRoleEnum::COLLABORATOR;
    $request->orgName = 'nihil';
    $request->userName = 'Alden15';

    $requestSecurity = new UsersUpdateOrgRoleSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->usersUpdateOrgRole($request, $requestSecurity);

    if ($response->usersUpdateOrgRole200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

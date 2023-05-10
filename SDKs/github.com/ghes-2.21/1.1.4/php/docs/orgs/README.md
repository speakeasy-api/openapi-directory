# orgs

## Overview

Interact with GitHub Orgs.

### Available Operations

* [orgsCheckMembershipForUser](#orgscheckmembershipforuser) - Check organization membership for a user
* [orgsCheckPublicMembershipForUser](#orgscheckpublicmembershipforuser) - Check public organization membership for a user
* [orgsConvertMemberToOutsideCollaborator](#orgsconvertmembertooutsidecollaborator) - Convert an organization member to outside collaborator
* [orgsCreateWebhook](#orgscreatewebhook) - Create an organization webhook
* [orgsDeleteWebhook](#orgsdeletewebhook) - Delete an organization webhook
* [orgsGet](#orgsget) - Get an organization
* [orgsGetMembershipForAuthenticatedUser](#orgsgetmembershipforauthenticateduser) - Get an organization membership for the authenticated user
* [orgsGetMembershipForUser](#orgsgetmembershipforuser) - Get organization membership for a user
* [orgsGetWebhook](#orgsgetwebhook) - Get an organization webhook
* [orgsList](#orgslist) - List organizations
* [orgsListAppInstallations](#orgslistappinstallations) - List app installations for an organization
* [orgsListForAuthenticatedUser](#orgslistforauthenticateduser) - List organizations for the authenticated user
* [orgsListForUser](#orgslistforuser) - List organizations for a user
* [orgsListMembers](#orgslistmembers) - List organization members
* [orgsListMembershipsForAuthenticatedUser](#orgslistmembershipsforauthenticateduser) - List organization memberships for the authenticated user
* [orgsListOutsideCollaborators](#orgslistoutsidecollaborators) - List outside collaborators for an organization
* [orgsListPublicMembers](#orgslistpublicmembers) - List public organization members
* [orgsListWebhooks](#orgslistwebhooks) - List organization webhooks
* [orgsPingWebhook](#orgspingwebhook) - Ping an organization webhook
* [orgsRemoveMember](#orgsremovemember) - Remove an organization member
* [orgsRemoveMembershipForUser](#orgsremovemembershipforuser) - Remove organization membership for a user
* [orgsRemoveOutsideCollaborator](#orgsremoveoutsidecollaborator) - Remove outside collaborator from an organization
* [orgsRemovePublicMembershipForAuthenticatedUser](#orgsremovepublicmembershipforauthenticateduser) - Remove public organization membership for the authenticated user
* [orgsSetMembershipForUser](#orgssetmembershipforuser) - Set organization membership for a user
* [orgsSetPublicMembershipForAuthenticatedUser](#orgssetpublicmembershipforauthenticateduser) - Set public organization membership for the authenticated user
* [orgsUpdate](#orgsupdate) - Update an organization
* [orgsUpdateMembershipForAuthenticatedUser](#orgsupdatemembershipforauthenticateduser) - Update an organization membership for the authenticated user
* [orgsUpdateWebhook](#orgsupdatewebhook) - Update an organization webhook

## orgsCheckMembershipForUser

Check if a user is, publicly or privately, a member of the organization.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#check-organization-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsCheckMembershipForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsCheckMembershipForUserRequest();
    $request->org = 'quas';
    $request->username = 'Turner_Douglas';

    $response = $sdk->orgs->orgsCheckMembershipForUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsCheckPublicMembershipForUser

Check public organization membership for a user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#check-public-organization-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsCheckPublicMembershipForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsCheckPublicMembershipForUserRequest();
    $request->org = 'pariatur';
    $request->username = 'Josianne_Weimann';

    $response = $sdk->orgs->orgsCheckPublicMembershipForUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsConvertMemberToOutsideCollaborator

When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsConvertMemberToOutsideCollaboratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsConvertMemberToOutsideCollaboratorRequest();
    $request->org = 'sit';
    $request->username = 'Maximus.Cormier99';

    $response = $sdk->orgs->orgsConvertMemberToOutsideCollaborator($request);

    if ($response->orgsConvertMemberToOutsideCollaborator202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsCreateWebhook

Here's how you can create a hook that posts payloads in JSON format:

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#create-an-organization-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsCreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgsCreateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgsCreateWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsCreateWebhookRequest();
    $request->requestBody = new OrgsCreateWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->config = new OrgsCreateWebhookRequestBodyConfig();
    $request->requestBody->config->contentType = '"json"';
    $request->requestBody->config->insecureSsl = 4518.22;
    $request->requestBody->config->password = '"password"';
    $request->requestBody->config->secret = '"********"';
    $request->requestBody->config->url = 'https://example.com/webhook';
    $request->requestBody->config->username = '"kdaigle"';
    $request->requestBody->events = [
        'ab',
        'iste',
        'dolore',
    ];
    $request->requestBody->name = 'Aaron King';
    $request->org = 'explicabo';

    $response = $sdk->orgs->orgsCreateWebhook($request);

    if ($response->orgHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsDeleteWebhook

Delete an organization webhook

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#delete-an-organization-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsDeleteWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsDeleteWebhookRequest();
    $request->hookId = 378326;
    $request->org = 'unde';

    $response = $sdk->orgs->orgsDeleteWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsGet

To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).

GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below."

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#get-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsGetRequest();
    $request->org = 'architecto';

    $response = $sdk->orgs->orgsGet($request);

    if ($response->organizationFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsGetMembershipForAuthenticatedUser

Get an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsGetMembershipForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsGetMembershipForAuthenticatedUserRequest();
    $request->org = 'suscipit';

    $response = $sdk->orgs->orgsGetMembershipForAuthenticatedUser($request);

    if ($response->orgMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsGetMembershipForUser

In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#get-organization-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsGetMembershipForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsGetMembershipForUserRequest();
    $request->org = 'sapiente';
    $request->username = 'Sonia.Bins54';

    $response = $sdk->orgs->orgsGetMembershipForUser($request);

    if ($response->orgMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsGetWebhook

Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#get-an-organization-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsGetWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsGetWebhookRequest();
    $request->hookId = 979574;
    $request->org = 'incidunt';

    $response = $sdk->orgs->orgsGetWebhook($request);

    if ($response->orgHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsList

Lists all organizations, in the order that they were created on GitHub Enterprise Server.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-organizations>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListRequest();
    $request->perPage = 148478;
    $request->since = 592231;

    $response = $sdk->orgs->orgsList($request);

    if ($response->organizationSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsListAppInstallations

Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-app-installations-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListAppInstallationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListAppInstallationsRequest();
    $request->accept = 'eius';
    $request->org = 'necessitatibus';
    $request->page = 215529;
    $request->perPage = 406733;

    $response = $sdk->orgs->orgsListAppInstallations($request);

    if ($response->orgsListAppInstallations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsListForAuthenticatedUser

List organizations for the authenticated user.

**OAuth scope requirements**

This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-organizations-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListForAuthenticatedUserRequest();
    $request->page = 579912;
    $request->perPage = 552078;

    $response = $sdk->orgs->orgsListForAuthenticatedUser($request);

    if ($response->organizationSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsListForUser

List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.

This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-organizations-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListForUserRequest();
    $request->page = 975752;
    $request->perPage = 271653;
    $request->username = 'Dora.Klocko2';

    $response = $sdk->orgs->orgsListForUser($request);

    if ($response->organizationSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsListMembers

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-organization-members>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListMembersFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListMembersRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListMembersRequest();
    $request->filter = OrgsListMembersFilterEnum::TWOFA_DISABLED;
    $request->org = 'officiis';
    $request->page = 505866;
    $request->perPage = 708609;
    $request->role = OrgsListMembersRoleEnum::ALL;

    $response = $sdk->orgs->orgsListMembers($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsListMembershipsForAuthenticatedUser

List organization memberships for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListMembershipsForAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListMembershipsForAuthenticatedUserStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListMembershipsForAuthenticatedUserRequest();
    $request->page = 277773;
    $request->perPage = 373035;
    $request->state = OrgsListMembershipsForAuthenticatedUserStateEnum::PENDING;

    $response = $sdk->orgs->orgsListMembershipsForAuthenticatedUser($request);

    if ($response->orgMemberships !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsListOutsideCollaborators

List all users who are outside collaborators of an organization.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-outside-collaborators-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListOutsideCollaboratorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListOutsideCollaboratorsFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListOutsideCollaboratorsRequest();
    $request->filter = OrgsListOutsideCollaboratorsFilterEnum::ALL;
    $request->org = 'sit';
    $request->page = 750595;
    $request->perPage = 625637;

    $response = $sdk->orgs->orgsListOutsideCollaborators($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsListPublicMembers

Members of an organization can choose to have their membership publicized or not.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-public-organization-members>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListPublicMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListPublicMembersRequest();
    $request->org = 'veniam';
    $request->page = 329543;
    $request->perPage = 924159;

    $response = $sdk->orgs->orgsListPublicMembers($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsListWebhooks

List organization webhooks

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-organization-webhooks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsListWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsListWebhooksRequest();
    $request->org = 'reiciendis';
    $request->page = 862319;
    $request->perPage = 168576;

    $response = $sdk->orgs->orgsListWebhooks($request);

    if ($response->orgHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@2.21/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#ping-an-organization-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsPingWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsPingWebhookRequest();
    $request->hookId = 48690;
    $request->org = 'saepe';

    $response = $sdk->orgs->orgsPingWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsRemoveMember

Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#remove-an-organization-member>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsRemoveMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsRemoveMemberRequest();
    $request->org = 'numquam';
    $request->username = 'Ernesto.King51';

    $response = $sdk->orgs->orgsRemoveMember($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsRemoveMembershipForUser

In order to remove a user's membership with an organization, the authenticated user must be an organization owner.

If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#remove-organization-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsRemoveMembershipForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsRemoveMembershipForUserRequest();
    $request->org = 'exercitationem';
    $request->username = 'Johnnie_Robel';

    $response = $sdk->orgs->orgsRemoveMembershipForUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsRemoveOutsideCollaborator

Removing a user from this list will remove them from all the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#remove-outside-collaborator-from-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsRemoveOutsideCollaboratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsRemoveOutsideCollaboratorRequest();
    $request->org = 'voluptatum';
    $request->username = 'Lilyan_Welch20';

    $response = $sdk->orgs->orgsRemoveOutsideCollaborator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsRemovePublicMembershipForAuthenticatedUser

Remove public organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsRemovePublicMembershipForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsRemovePublicMembershipForAuthenticatedUserRequest();
    $request->org = 'dolorum';
    $request->username = 'Evangeline_Nikolaus87';

    $response = $sdk->orgs->orgsRemovePublicMembershipForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsSetMembershipForUser

Only authenticated organization owners can add a member to the organization or update the member's role.

*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
    
*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.

**Rate limits**

To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#set-organization-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsSetMembershipForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgsSetMembershipForUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgsSetMembershipForUserRequestBodyRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsSetMembershipForUserRequest();
    $request->requestBody = new OrgsSetMembershipForUserRequestBody();
    $request->requestBody->role = OrgsSetMembershipForUserRequestBodyRoleEnum::ADMIN;
    $request->org = 'atque';
    $request->username = 'Caleigh.Grady63';

    $response = $sdk->orgs->orgsSetMembershipForUser($request);

    if ($response->orgMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsSetPublicMembershipForAuthenticatedUser

The user can publicize their own membership. (A user cannot publicize the membership for another user.)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsSetPublicMembershipForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsSetPublicMembershipForAuthenticatedUserRequest();
    $request->org = 'expedita';
    $request->username = 'Elinor.Adams';

    $response = $sdk->orgs->orgsSetPublicMembershipForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsUpdate

**Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs/#update-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsUpdateRequest();
    $request->requestBody = new OrgsUpdateRequestBody();
    $request->requestBody->billingEmail = 'sit';
    $request->requestBody->blog = '"http://github.blog"';
    $request->requestBody->company = 'Lynch - Walker';
    $request->requestBody->defaultRepositoryPermission = OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum::WRITE;
    $request->requestBody->description = 'et';
    $request->requestBody->email = 'Gust42@yahoo.com';
    $request->requestBody->hasOrganizationProjects = false;
    $request->requestBody->hasRepositoryProjects = false;
    $request->requestBody->location = 'nostrum';
    $request->requestBody->membersAllowedRepositoryCreationType = OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum::NONE;
    $request->requestBody->membersCanCreateInternalRepositories = false;
    $request->requestBody->membersCanCreatePrivateRepositories = false;
    $request->requestBody->membersCanCreatePublicRepositories = false;
    $request->requestBody->membersCanCreateRepositories = false;
    $request->requestBody->name = 'William Gottlieb';
    $request->requestBody->twitterUsername = 'harum';
    $request->org = 'dicta';

    $response = $sdk->orgs->orgsUpdate($request);

    if ($response->organizationFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsUpdateMembershipForAuthenticatedUser

Update an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateMembershipForAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateMembershipForAuthenticatedUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsUpdateMembershipForAuthenticatedUserRequest();
    $request->requestBody = new OrgsUpdateMembershipForAuthenticatedUserRequestBody();
    $request->requestBody->state = OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum::ACTIVE;
    $request->org = 'architecto';

    $response = $sdk->orgs->orgsUpdateMembershipForAuthenticatedUser($request);

    if ($response->orgMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgsUpdateWebhook

Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#update-an-organization-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OrgsUpdateWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgsUpdateWebhookRequest();
    $request->requestBody = new OrgsUpdateWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->config = new OrgsUpdateWebhookRequestBodyConfig();
    $request->requestBody->config->contentType = '"json"';
    $request->requestBody->config->insecureSsl = 2897.76;
    $request->requestBody->config->secret = '"********"';
    $request->requestBody->config->url = 'https://example.com/webhook';
    $request->requestBody->events = [
        'atque',
        'laborum',
        'nam',
    ];
    $request->requestBody->name = '"web"';
    $request->hookId = 948861;
    $request->org = 'laboriosam';

    $response = $sdk->orgs->orgsUpdateWebhook($request);

    if ($response->orgHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

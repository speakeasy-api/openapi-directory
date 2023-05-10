# apps

## Overview

Information for integrations and installations.

### Available Operations

* [appsAddRepoToInstallation](#appsaddrepotoinstallation) - Add a repository to an app installation
* [~~appsCheckAuthorization~~](#appscheckauthorization) - Check an authorization :warning: **Deprecated**
* [appsCheckToken](#appschecktoken) - Check a token
* [appsCreateContentAttachment](#appscreatecontentattachment) - Create a content attachment
* [appsCreateFromManifest](#appscreatefrommanifest) - Create a GitHub App from a manifest
* [appsCreateInstallationAccessToken](#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [appsDeleteAuthorization](#appsdeleteauthorization) - Delete an app authorization
* [appsDeleteInstallation](#appsdeleteinstallation) - Delete an installation for the authenticated app
* [appsDeleteToken](#appsdeletetoken) - Delete an app token
* [appsGetAuthenticated](#appsgetauthenticated) - Get the authenticated app
* [appsGetBySlug](#appsgetbyslug) - Get an app
* [appsGetInstallation](#appsgetinstallation) - Get an installation for the authenticated app
* [appsGetOrgInstallation](#appsgetorginstallation) - Get an organization installation for the authenticated app
* [appsGetRepoInstallation](#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [appsGetUserInstallation](#appsgetuserinstallation) - Get a user installation for the authenticated app
* [appsListInstallationReposForAuthenticatedUser](#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [appsListInstallations](#appslistinstallations) - List installations for the authenticated app
* [appsListInstallationsForAuthenticatedUser](#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [appsListReposAccessibleToInstallation](#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [appsRemoveRepoFromInstallation](#appsremoverepofrominstallation) - Remove a repository from an app installation
* [~~appsResetAuthorization~~](#appsresetauthorization) - Reset an authorization :warning: **Deprecated**
* [appsResetToken](#appsresettoken) - Reset a token
* [~~appsRevokeAuthorizationForApplication~~](#appsrevokeauthorizationforapplication) - Revoke an authorization for an application :warning: **Deprecated**
* [~~appsRevokeGrantForApplication~~](#appsrevokegrantforapplication) - Revoke a grant for an application :warning: **Deprecated**
* [appsRevokeInstallationAccessToken](#appsrevokeinstallationaccesstoken) - Revoke an installation access token

## appsAddRepoToInstallation

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.20/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#add-a-repository-to-an-app-installation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsAddRepoToInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsAddRepoToInstallationRequest();
    $request->installationId = 653108;
    $request->repositoryId = 581850;

    $response = $sdk->apps->appsAddRepoToInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appsCheckAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#check-an-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCheckAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCheckAuthorizationRequest();
    $request->accessToken = 'numquam';
    $request->clientId = 'commodi';

    $response = $sdk->apps->appsCheckAuthorization($request);

    if ($response->nullableAuthorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCheckToken

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#check-a-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCheckTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsCheckTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCheckTokenRequest();
    $request->requestBody = new AppsCheckTokenRequestBody();
    $request->requestBody->accessToken = 'quam';
    $request->clientId = 'molestiae';

    $response = $sdk->apps->appsCheckToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateContentAttachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.20/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@2.20/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#create-a-content-attachment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateContentAttachmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateContentAttachmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCreateContentAttachmentRequest();
    $request->requestBody = new AppsCreateContentAttachmentRequestBody();
    $request->requestBody->body = 'Body of the attachment';
    $request->requestBody->title = 'Title of the attachment';
    $request->contentReferenceId = 244425;
    $request->owner = 'error';
    $request->repo = 'quia';

    $response = $sdk->apps->appsCreateContentAttachment($request);

    if ($response->contentReferenceAttachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#create-a-github-app-from-a-manifest>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateFromManifestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCreateFromManifestRequest();
    $request->requestBody = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->code = 'odit';

    $response = $sdk->apps->appsCreateFromManifest($request);

    if ($response->gitHubApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateInstallationAccessToken

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps/#create-an-installation-access-token-for-an-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateInstallationAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateInstallationAccessTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissions;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsAdministrationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsChecksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsContentReferencesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsContentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsDeploymentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsEnvironmentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsIssuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsMembersEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationAdministrationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationHooksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationPackagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationProjectsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationSecretsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationSelfHostedRunnersEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationUserBlockingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPackagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPullRequestsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsRepositoryHooksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsRepositoryProjectsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecretScanningAlertsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecretsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecurityEventsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSingleFileEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsStatusesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsTeamDiscussionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsVulnerabilityAlertsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsWorkflowsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCreateInstallationAccessTokenRequest();
    $request->requestBody = new AppsCreateInstallationAccessTokenRequestBody();
    $request->requestBody->permissions = new AppPermissions();
    $request->requestBody->permissions->actions = AppPermissionsActionsEnum::WRITE;
    $request->requestBody->permissions->administration = AppPermissionsAdministrationEnum::READ;
    $request->requestBody->permissions->checks = AppPermissionsChecksEnum::WRITE;
    $request->requestBody->permissions->contentReferences = AppPermissionsContentReferencesEnum::READ;
    $request->requestBody->permissions->contents = AppPermissionsContentsEnum::WRITE;
    $request->requestBody->permissions->deployments = AppPermissionsDeploymentsEnum::WRITE;
    $request->requestBody->permissions->environments = AppPermissionsEnvironmentsEnum::READ;
    $request->requestBody->permissions->issues = AppPermissionsIssuesEnum::READ;
    $request->requestBody->permissions->members = AppPermissionsMembersEnum::WRITE;
    $request->requestBody->permissions->metadata = AppPermissionsMetadataEnum::WRITE;
    $request->requestBody->permissions->organizationAdministration = AppPermissionsOrganizationAdministrationEnum::WRITE;
    $request->requestBody->permissions->organizationHooks = AppPermissionsOrganizationHooksEnum::READ;
    $request->requestBody->permissions->organizationPackages = AppPermissionsOrganizationPackagesEnum::WRITE;
    $request->requestBody->permissions->organizationPlan = AppPermissionsOrganizationPlanEnum::READ;
    $request->requestBody->permissions->organizationProjects = AppPermissionsOrganizationProjectsEnum::ADMIN;
    $request->requestBody->permissions->organizationSecrets = AppPermissionsOrganizationSecretsEnum::WRITE;
    $request->requestBody->permissions->organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum::READ;
    $request->requestBody->permissions->organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum::WRITE;
    $request->requestBody->permissions->packages = AppPermissionsPackagesEnum::WRITE;
    $request->requestBody->permissions->pages = AppPermissionsPagesEnum::READ;
    $request->requestBody->permissions->pullRequests = AppPermissionsPullRequestsEnum::WRITE;
    $request->requestBody->permissions->repositoryHooks = AppPermissionsRepositoryHooksEnum::READ;
    $request->requestBody->permissions->repositoryProjects = AppPermissionsRepositoryProjectsEnum::ADMIN;
    $request->requestBody->permissions->secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum::READ;
    $request->requestBody->permissions->secrets = AppPermissionsSecretsEnum::READ;
    $request->requestBody->permissions->securityEvents = AppPermissionsSecurityEventsEnum::READ;
    $request->requestBody->permissions->singleFile = AppPermissionsSingleFileEnum::READ;
    $request->requestBody->permissions->statuses = AppPermissionsStatusesEnum::WRITE;
    $request->requestBody->permissions->teamDiscussions = AppPermissionsTeamDiscussionsEnum::READ;
    $request->requestBody->permissions->vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum::READ;
    $request->requestBody->permissions->workflows = AppPermissionsWorkflowsEnum::WRITE;
    $request->requestBody->repositories = [
        'rails',
        'rails',
    ];
    $request->requestBody->repositoryIds = [
        480894,
        118727,
    ];
    $request->accept = 'harum';
    $request->installationId = 317983;

    $response = $sdk->apps->appsCreateInstallationAccessToken($request);

    if ($response->installationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteAuthorization

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#delete-an-app-authorization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteAuthorizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsDeleteAuthorizationRequest();
    $request->requestBody = new AppsDeleteAuthorizationRequestBody();
    $request->requestBody->accessToken = 'accusamus';
    $request->clientId = 'commodi';

    $response = $sdk->apps->appsDeleteAuthorization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. You must use a [JWT](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsDeleteInstallationRequest();
    $request->accept = 'repudiandae';
    $request->installationId = 64147;

    $response = $sdk->apps->appsDeleteInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteToken

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#delete-an-app-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsDeleteTokenRequest();
    $request->requestBody = new AppsDeleteTokenRequestBody();
    $request->requestBody->accessToken = 'ipsum';
    $request->clientId = 'quidem';

    $response = $sdk->apps->appsDeleteToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetAuthenticated

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.20/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#get-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apps->appsGetAuthenticated();

    if ($response->integration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetBySlug

**Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps/#get-an-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetBySlugRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetBySlugRequest();
    $request->appSlug = 'molestias';

    $response = $sdk->apps->appsGetBySlug($request);

    if ($response->integration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetInstallation

Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#get-an-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetInstallationRequest();
    $request->accept = 'excepturi';
    $request->installationId = 865103;

    $response = $sdk->apps->appsGetInstallation($request);

    if ($response->installationGhes2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetOrgInstallation

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetOrgInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetOrgInstallationRequest();
    $request->accept = 'modi';
    $request->org = 'praesentium';

    $response = $sdk->apps->appsGetOrgInstallation($request);

    if ($response->installationGhes2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetRepoInstallation

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetRepoInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetRepoInstallationRequest();
    $request->accept = 'rem';
    $request->owner = 'voluptates';
    $request->repo = 'quasi';

    $response = $sdk->apps->appsGetRepoInstallation($request);

    if ($response->installationGhes2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetUserInstallation

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetUserInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetUserInstallationRequest();
    $request->accept = 'repudiandae';
    $request->username = 'Kira.Boehm31';

    $response = $sdk->apps->appsGetUserInstallation($request);

    if ($response->installationGhes2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListInstallationReposForAuthenticatedUser

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListInstallationReposForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListInstallationReposForAuthenticatedUserRequest();
    $request->accept = 'consequatur';
    $request->installationId = 667411;
    $request->page = 842342;
    $request->perPage = 131797;

    $response = $sdk->apps->appsListInstallationReposForAuthenticatedUser($request);

    if ($response->appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListInstallations

You must use a [JWT](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#list-installations-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListInstallationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListInstallationsRequest();
    $request->accept = 'deserunt';
    $request->page = 716327;
    $request->perPage = 841386;

    $response = $sdk->apps->appsListInstallations($request);

    if ($response->installationGhes2s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListInstallationsForAuthenticatedUser

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListInstallationsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListInstallationsForAuthenticatedUserRequest();
    $request->accept = 'labore';
    $request->page = 264730;
    $request->perPage = 183191;

    $response = $sdk->apps->appsListInstallationsForAuthenticatedUser($request);

    if ($response->appsListInstallationsForAuthenticatedUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListReposAccessibleToInstallation

List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListReposAccessibleToInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListReposAccessibleToInstallationRequest();
    $request->accept = 'aliquid';
    $request->page = 586513;
    $request->perPage = 552822;

    $response = $sdk->apps->appsListReposAccessibleToInstallation($request);

    if ($response->appsListReposAccessibleToInstallation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsRemoveRepoFromInstallation

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.20/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#remove-a-repository-from-an-app-installation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsRemoveRepoFromInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsRemoveRepoFromInstallationRequest();
    $request->installationId = 20107;
    $request->repositoryId = 164940;

    $response = $sdk->apps->appsRemoveRepoFromInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appsResetAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#reset-an-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsResetAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsResetAuthorizationRequest();
    $request->accessToken = 'assumenda';
    $request->clientId = 'ipsam';

    $response = $sdk->apps->appsResetAuthorization($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsResetToken

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#reset-a-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsResetTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsResetTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsResetTokenRequest();
    $request->requestBody = new AppsResetTokenRequestBody();
    $request->requestBody->accessToken = 'alias';
    $request->clientId = 'fugit';

    $response = $sdk->apps->appsResetToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appsRevokeAuthorizationForApplication~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#revoke-an-authorization-for-an-application>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsRevokeAuthorizationForApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsRevokeAuthorizationForApplicationRequest();
    $request->accessToken = 'dolorum';
    $request->clientId = 'excepturi';

    $response = $sdk->apps->appsRevokeAuthorizationForApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appsRevokeGrantForApplication~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub Enterprise Server](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#revoke-a-grant-for-an-application>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsRevokeGrantForApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsRevokeGrantForApplicationRequest();
    $request->accessToken = 'tempora';
    $request->clientId = 'facilis';

    $response = $sdk->apps->appsRevokeGrantForApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsRevokeInstallationAccessToken

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@2.20/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/apps#revoke-an-installation-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apps->appsRevokeInstallationAccessToken();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

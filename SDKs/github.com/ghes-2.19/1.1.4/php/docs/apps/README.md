# apps

## Overview

Information for integrations and installations.

### Available Operations

* [appsAddRepoToInstallation](#appsaddrepotoinstallation) - Add a repository to an app installation
* [appsCreateContentAttachment](#appscreatecontentattachment) - Create a content attachment
* [appsCreateFromManifest](#appscreatefrommanifest) - Create a GitHub App from a manifest
* [appsCreateInstallationAccessToken](#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [appsDeleteInstallation](#appsdeleteinstallation) - Delete an installation for the authenticated app
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

## appsAddRepoToInstallation

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.19/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#add-a-repository-to-an-app-installation>

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

## appsCreateContentAttachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.19/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@2.19/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#create-a-content-attachment>

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
    $request->contentReferenceId = 253291;
    $request->owner = 'commodi';
    $request->repo = 'quam';

    $response = $sdk->apps->appsCreateContentAttachment($request);

    if ($response->contentReferenceAttachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#create-a-github-app-from-a-manifest>

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
        'velit' => 'error',
        'quia' => 'quis',
    ];
    $request->code = 'vitae';

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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps/#create-an-installation-access-token-for-an-app>

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
    $request->requestBody->permissions->administration = AppPermissionsAdministrationEnum::WRITE;
    $request->requestBody->permissions->checks = AppPermissionsChecksEnum::READ;
    $request->requestBody->permissions->contentReferences = AppPermissionsContentReferencesEnum::READ;
    $request->requestBody->permissions->contents = AppPermissionsContentsEnum::WRITE;
    $request->requestBody->permissions->deployments = AppPermissionsDeploymentsEnum::READ;
    $request->requestBody->permissions->environments = AppPermissionsEnvironmentsEnum::WRITE;
    $request->requestBody->permissions->issues = AppPermissionsIssuesEnum::READ;
    $request->requestBody->permissions->members = AppPermissionsMembersEnum::WRITE;
    $request->requestBody->permissions->metadata = AppPermissionsMetadataEnum::WRITE;
    $request->requestBody->permissions->organizationAdministration = AppPermissionsOrganizationAdministrationEnum::READ;
    $request->requestBody->permissions->organizationHooks = AppPermissionsOrganizationHooksEnum::READ;
    $request->requestBody->permissions->organizationPackages = AppPermissionsOrganizationPackagesEnum::WRITE;
    $request->requestBody->permissions->organizationPlan = AppPermissionsOrganizationPlanEnum::READ;
    $request->requestBody->permissions->organizationProjects = AppPermissionsOrganizationProjectsEnum::ADMIN;
    $request->requestBody->permissions->organizationSecrets = AppPermissionsOrganizationSecretsEnum::WRITE;
    $request->requestBody->permissions->organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum::READ;
    $request->requestBody->permissions->organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum::WRITE;
    $request->requestBody->permissions->packages = AppPermissionsPackagesEnum::WRITE;
    $request->requestBody->permissions->pages = AppPermissionsPagesEnum::WRITE;
    $request->requestBody->permissions->pullRequests = AppPermissionsPullRequestsEnum::READ;
    $request->requestBody->permissions->repositoryHooks = AppPermissionsRepositoryHooksEnum::WRITE;
    $request->requestBody->permissions->repositoryProjects = AppPermissionsRepositoryProjectsEnum::ADMIN;
    $request->requestBody->permissions->secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum::READ;
    $request->requestBody->permissions->secrets = AppPermissionsSecretsEnum::WRITE;
    $request->requestBody->permissions->securityEvents = AppPermissionsSecurityEventsEnum::READ;
    $request->requestBody->permissions->singleFile = AppPermissionsSingleFileEnum::WRITE;
    $request->requestBody->permissions->statuses = AppPermissionsStatusesEnum::READ;
    $request->requestBody->permissions->teamDiscussions = AppPermissionsTeamDiscussionsEnum::READ;
    $request->requestBody->permissions->vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum::READ;
    $request->requestBody->permissions->workflows = AppPermissionsWorkflowsEnum::WRITE;
    $request->requestBody->repositories = [
        'rails',
        'rails',
    ];
    $request->requestBody->repositoryIds = [
        979587,
        120196,
    ];
    $request->accept = 'corporis';
    $request->installationId = 296140;

    $response = $sdk->apps->appsCreateInstallationAccessToken($request);

    if ($response->installationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

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
    $request->accept = 'iusto';
    $request->installationId = 118727;

    $response = $sdk->apps->appsDeleteInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetAuthenticated

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-the-authenticated-app>

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

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps/#get-an-app>

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
    $request->appSlug = 'harum';

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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-an-installation-for-the-authenticated-app>

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
    $request->accept = 'enim';
    $request->installationId = 880476;

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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

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
    $request->accept = 'commodi';
    $request->org = 'repudiandae';

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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

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
    $request->accept = 'quae';
    $request->owner = 'ipsum';
    $request->repo = 'quidem';

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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

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
    $request->accept = 'molestias';
    $request->username = 'Kenny50';

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

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

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
    $request->accept = 'rem';
    $request->installationId = 916723;
    $request->page = 93940;
    $request->perPage = 921158;

    $response = $sdk->apps->appsListInstallationReposForAuthenticatedUser($request);

    if ($response->appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListInstallations

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-installations-for-the-authenticated-app>

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
    $request->accept = 'sint';
    $request->page = 83112;
    $request->perPage = 929297;

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

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

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
    $request->accept = 'incidunt';
    $request->page = 318569;
    $request->perPage = 9356;

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

You must use an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

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
    $request->accept = 'est';
    $request->page = 842342;
    $request->perPage = 131797;

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

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.19/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#remove-a-repository-from-an-app-installation>

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
    $request->installationId = 647174;
    $request->repositoryId = 716327;

    $response = $sdk->apps->appsRemoveRepoFromInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

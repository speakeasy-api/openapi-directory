# teams

## Overview

Interact with GitHub Teams.

### Available Operations

* [~~teamsAddMemberLegacy~~](#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateMembershipForUserInOrg](#teamsaddorupdatemembershipforuserinorg) - Add or update team membership for a user
* [~~teamsAddOrUpdateMembershipForUserLegacy~~](#teamsaddorupdatemembershipforuserlegacy) - Add or update team membership for a user (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateProjectPermissionsInOrg](#teamsaddorupdateprojectpermissionsinorg) - Add or update team project permissions
* [~~teamsAddOrUpdateProjectPermissionsLegacy~~](#teamsaddorupdateprojectpermissionslegacy) - Add or update team project permissions (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateRepoPermissionsInOrg](#teamsaddorupdaterepopermissionsinorg) - Add or update team repository permissions
* [~~teamsAddOrUpdateRepoPermissionsLegacy~~](#teamsaddorupdaterepopermissionslegacy) - Add or update team repository permissions (Legacy) :warning: **Deprecated**
* [teamsCheckPermissionsForProjectInOrg](#teamscheckpermissionsforprojectinorg) - Check team permissions for a project
* [~~teamsCheckPermissionsForProjectLegacy~~](#teamscheckpermissionsforprojectlegacy) - Check team permissions for a project (Legacy) :warning: **Deprecated**
* [teamsCheckPermissionsForRepoInOrg](#teamscheckpermissionsforrepoinorg) - Check team permissions for a repository
* [~~teamsCheckPermissionsForRepoLegacy~~](#teamscheckpermissionsforrepolegacy) - Check team permissions for a repository (Legacy) :warning: **Deprecated**
* [teamsCreate](#teamscreate) - Create a team
* [teamsCreateDiscussionCommentInOrg](#teamscreatediscussioncommentinorg) - Create a discussion comment
* [~~teamsCreateDiscussionCommentLegacy~~](#teamscreatediscussioncommentlegacy) - Create a discussion comment (Legacy) :warning: **Deprecated**
* [teamsCreateDiscussionInOrg](#teamscreatediscussioninorg) - Create a discussion
* [~~teamsCreateDiscussionLegacy~~](#teamscreatediscussionlegacy) - Create a discussion (Legacy) :warning: **Deprecated**
* [teamsDeleteDiscussionCommentInOrg](#teamsdeletediscussioncommentinorg) - Delete a discussion comment
* [~~teamsDeleteDiscussionCommentLegacy~~](#teamsdeletediscussioncommentlegacy) - Delete a discussion comment (Legacy) :warning: **Deprecated**
* [teamsDeleteDiscussionInOrg](#teamsdeletediscussioninorg) - Delete a discussion
* [~~teamsDeleteDiscussionLegacy~~](#teamsdeletediscussionlegacy) - Delete a discussion (Legacy) :warning: **Deprecated**
* [teamsDeleteInOrg](#teamsdeleteinorg) - Delete a team
* [~~teamsDeleteLegacy~~](#teamsdeletelegacy) - Delete a team (Legacy) :warning: **Deprecated**
* [teamsGetByName](#teamsgetbyname) - Get a team by name
* [teamsGetDiscussionCommentInOrg](#teamsgetdiscussioncommentinorg) - Get a discussion comment
* [~~teamsGetDiscussionCommentLegacy~~](#teamsgetdiscussioncommentlegacy) - Get a discussion comment (Legacy) :warning: **Deprecated**
* [teamsGetDiscussionInOrg](#teamsgetdiscussioninorg) - Get a discussion
* [~~teamsGetDiscussionLegacy~~](#teamsgetdiscussionlegacy) - Get a discussion (Legacy) :warning: **Deprecated**
* [~~teamsGetLegacy~~](#teamsgetlegacy) - Get a team (Legacy) :warning: **Deprecated**
* [~~teamsGetMemberLegacy~~](#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [teamsGetMembershipForUserInOrg](#teamsgetmembershipforuserinorg) - Get team membership for a user
* [~~teamsGetMembershipForUserLegacy~~](#teamsgetmembershipforuserlegacy) - Get team membership for a user (Legacy) :warning: **Deprecated**
* [teamsList](#teamslist) - List teams
* [teamsListChildInOrg](#teamslistchildinorg) - List child teams
* [~~teamsListChildLegacy~~](#teamslistchildlegacy) - List child teams (Legacy) :warning: **Deprecated**
* [teamsListDiscussionCommentsInOrg](#teamslistdiscussioncommentsinorg) - List discussion comments
* [~~teamsListDiscussionCommentsLegacy~~](#teamslistdiscussioncommentslegacy) - List discussion comments (Legacy) :warning: **Deprecated**
* [teamsListDiscussionsInOrg](#teamslistdiscussionsinorg) - List discussions
* [~~teamsListDiscussionsLegacy~~](#teamslistdiscussionslegacy) - List discussions (Legacy) :warning: **Deprecated**
* [teamsListForAuthenticatedUser](#teamslistforauthenticateduser) - List teams for the authenticated user
* [teamsListMembersInOrg](#teamslistmembersinorg) - List team members
* [~~teamsListMembersLegacy~~](#teamslistmemberslegacy) - List team members (Legacy) :warning: **Deprecated**
* [teamsListProjectsInOrg](#teamslistprojectsinorg) - List team projects
* [~~teamsListProjectsLegacy~~](#teamslistprojectslegacy) - List team projects (Legacy) :warning: **Deprecated**
* [teamsListReposInOrg](#teamslistreposinorg) - List team repositories
* [~~teamsListReposLegacy~~](#teamslistreposlegacy) - List team repositories (Legacy) :warning: **Deprecated**
* [~~teamsRemoveMemberLegacy~~](#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [teamsRemoveMembershipForUserInOrg](#teamsremovemembershipforuserinorg) - Remove team membership for a user
* [~~teamsRemoveMembershipForUserLegacy~~](#teamsremovemembershipforuserlegacy) - Remove team membership for a user (Legacy) :warning: **Deprecated**
* [teamsRemoveProjectInOrg](#teamsremoveprojectinorg) - Remove a project from a team
* [~~teamsRemoveProjectLegacy~~](#teamsremoveprojectlegacy) - Remove a project from a team (Legacy) :warning: **Deprecated**
* [teamsRemoveRepoInOrg](#teamsremoverepoinorg) - Remove a repository from a team
* [~~teamsRemoveRepoLegacy~~](#teamsremoverepolegacy) - Remove a repository from a team (Legacy) :warning: **Deprecated**
* [teamsUpdateDiscussionCommentInOrg](#teamsupdatediscussioncommentinorg) - Update a discussion comment
* [~~teamsUpdateDiscussionCommentLegacy~~](#teamsupdatediscussioncommentlegacy) - Update a discussion comment (Legacy) :warning: **Deprecated**
* [teamsUpdateDiscussionInOrg](#teamsupdatediscussioninorg) - Update a discussion
* [~~teamsUpdateDiscussionLegacy~~](#teamsupdatediscussionlegacy) - Update a discussion (Legacy) :warning: **Deprecated**
* [teamsUpdateInOrg](#teamsupdateinorg) - Update a team
* [~~teamsUpdateLegacy~~](#teamsupdatelegacy) - Update a team (Legacy) :warning: **Deprecated**

## ~~teamsAddMemberLegacy~~

The "Add team member" endpoint (described below) is deprecated.

We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddMemberLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddMemberLegacyRequest();
    $request->teamId = 609537;
    $request->username = 'Camren.Douglas58';

    $response = $sdk->teams->teamsAddMemberLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAddOrUpdateMembershipForUserInOrg

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserInOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateMembershipForUserInOrgRequest();
    $request->requestBody = new TeamsAddOrUpdateMembershipForUserInOrgRequestBody();
    $request->requestBody->role = TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum::MEMBER;
    $request->org = 'excepturi';
    $request->teamSlug = 'maiores';
    $request->username = 'Jolie.Frami36';

    $response = $sdk->teams->teamsAddOrUpdateMembershipForUserInOrg($request);

    if ($response->teamMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsAddOrUpdateMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateMembershipForUserLegacyRequest();
    $request->requestBody = new TeamsAddOrUpdateMembershipForUserLegacyRequestBody();
    $request->requestBody->role = TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum::MEMBER;
    $request->teamId = 787916;
    $request->username = 'Uriah.Luettgen';

    $response = $sdk->teams->teamsAddOrUpdateMembershipForUserLegacy($request);

    if ($response->teamMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAddOrUpdateProjectPermissionsInOrg

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-project-permissions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsInOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateProjectPermissionsInOrgRequest();
    $request->requestBody = new TeamsAddOrUpdateProjectPermissionsInOrgRequestBody();
    $request->requestBody->permission = TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum::ADMIN;
    $request->org = 'a';
    $request->projectId = 749702;
    $request->teamSlug = 'perspiciatis';

    $response = $sdk->teams->teamsAddOrUpdateProjectPermissionsInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsAddOrUpdateProjectPermissionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-project-permissions) endpoint.

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-project-permissions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsLegacyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateProjectPermissionsLegacyRequest();
    $request->requestBody = new TeamsAddOrUpdateProjectPermissionsLegacyRequestBody();
    $request->requestBody->permission = TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum::READ;
    $request->projectId = 118917;
    $request->teamId = 795546;

    $response = $sdk->teams->teamsAddOrUpdateProjectPermissionsLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAddOrUpdateRepoPermissionsInOrg

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-repository-permissions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateRepoPermissionsInOrgRequest();
    $request->requestBody = new TeamsAddOrUpdateRepoPermissionsInOrgRequestBody();
    $request->requestBody->permission = TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum::ADMIN;
    $request->org = 'eveniet';
    $request->owner = 'porro';
    $request->repo = 'tempore';
    $request->teamSlug = 'quidem';

    $response = $sdk->teams->teamsAddOrUpdateRepoPermissionsInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsAddOrUpdateRepoPermissionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-repository-permissions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateRepoPermissionsLegacyRequest();
    $request->requestBody = new TeamsAddOrUpdateRepoPermissionsLegacyRequestBody();
    $request->requestBody->permission = TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum::PULL;
    $request->owner = 'voluptates';
    $request->repo = 'fugit';
    $request->teamId = 259377;

    $response = $sdk->teams->teamsAddOrUpdateRepoPermissionsLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCheckPermissionsForProjectInOrg

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-project>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCheckPermissionsForProjectInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCheckPermissionsForProjectInOrgRequest();
    $request->org = 'sequi';
    $request->projectId = 758194;
    $request->teamSlug = 'asperiores';

    $response = $sdk->teams->teamsCheckPermissionsForProjectInOrg($request);

    if ($response->teamProject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsCheckPermissionsForProjectLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-project) endpoint.

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-project-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCheckPermissionsForProjectLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCheckPermissionsForProjectLegacyRequest();
    $request->projectId = 459875;
    $request->teamId = 500021;

    $response = $sdk->teams->teamsCheckPermissionsForProjectLegacy($request);

    if ($response->teamProject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCheckPermissionsForRepoInOrg

Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.

If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCheckPermissionsForRepoInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCheckPermissionsForRepoInOrgRequest();
    $request->org = 'sint';
    $request->owner = 'repellat';
    $request->repo = 'a';
    $request->teamSlug = 'animi';

    $response = $sdk->teams->teamsCheckPermissionsForRepoInOrg($request);

    if ($response->teamRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsCheckPermissionsForRepoLegacy~~

**Note**: Repositories inherited through a parent team will also be checked.

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-repository-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCheckPermissionsForRepoLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCheckPermissionsForRepoLegacyRequest();
    $request->owner = 'maiores';
    $request->repo = 'itaque';
    $request->teamId = 861591;

    $response = $sdk->teams->teamsCheckPermissionsForRepoLegacy($request);

    if ($response->teamRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCreate

To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateRequestBodyPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateRequestBodyPrivacyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateRequest();
    $request->requestBody = new TeamsCreateRequestBody();
    $request->requestBody->description = 'deserunt';
    $request->requestBody->maintainers = [
        'velit',
        'officiis',
    ];
    $request->requestBody->name = 'Brandi Turner';
    $request->requestBody->parentTeamId = 35742;
    $request->requestBody->permission = TeamsCreateRequestBodyPermissionEnum::PUSH;
    $request->requestBody->privacy = TeamsCreateRequestBodyPrivacyEnum::CLOSED;
    $request->requestBody->repoNames = [
        'blanditiis',
    ];
    $request->org = 'eius';

    $response = $sdk->teams->teamsCreate($request);

    if ($response->teamFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCreateDiscussionCommentInOrg

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionCommentInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionCommentInOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateDiscussionCommentInOrgRequest();
    $request->requestBody = new TeamsCreateDiscussionCommentInOrgRequestBody();
    $request->requestBody->body = 'quisquam';
    $request->discussionNumber = 177929;
    $request->org = 'nobis';
    $request->teamSlug = 'natus';

    $response = $sdk->teams->teamsCreateDiscussionCommentInOrg($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsCreateDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment) endpoint.

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionCommentLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionCommentLegacyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateDiscussionCommentLegacyRequest();
    $request->requestBody = new TeamsCreateDiscussionCommentLegacyRequestBody();
    $request->requestBody->body = 'minus';
    $request->discussionNumber = 154389;
    $request->teamId = 300651;

    $response = $sdk->teams->teamsCreateDiscussionCommentLegacy($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCreateDiscussionInOrg

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionInOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateDiscussionInOrgRequest();
    $request->requestBody = new TeamsCreateDiscussionInOrgRequestBody();
    $request->requestBody->body = 'reprehenderit';
    $request->requestBody->private = false;
    $request->requestBody->title = 'Dr.';
    $request->org = 'quos';
    $request->teamSlug = 'corrupti';

    $response = $sdk->teams->teamsCreateDiscussionInOrg($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsCreateDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion) endpoint.

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionLegacyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateDiscussionLegacyRequest();
    $request->requestBody = new TeamsCreateDiscussionLegacyRequestBody();
    $request->requestBody->body = 'amet';
    $request->requestBody->private = false;
    $request->requestBody->title = 'Ms.';
    $request->teamId = 227156;

    $response = $sdk->teams->teamsCreateDiscussionLegacy($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDeleteDiscussionCommentInOrg

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteDiscussionCommentInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteDiscussionCommentInOrgRequest();
    $request->commentNumber = 675126;
    $request->discussionNumber = 266946;
    $request->org = 'perferendis';
    $request->teamSlug = 'necessitatibus';

    $response = $sdk->teams->teamsDeleteDiscussionCommentInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsDeleteDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment) endpoint.

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteDiscussionCommentLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteDiscussionCommentLegacyRequest();
    $request->commentNumber = 102316;
    $request->discussionNumber = 564627;
    $request->teamId = 292177;

    $response = $sdk->teams->teamsDeleteDiscussionCommentLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDeleteDiscussionInOrg

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteDiscussionInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteDiscussionInOrgRequest();
    $request->discussionNumber = 125811;
    $request->org = 'maiores';
    $request->teamSlug = 'neque';

    $response = $sdk->teams->teamsDeleteDiscussionInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsDeleteDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion) endpoint.

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteDiscussionLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteDiscussionLegacyRequest();
    $request->discussionNumber = 139745;
    $request->teamId = 936845;

    $response = $sdk->teams->teamsDeleteDiscussionLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDeleteInOrg

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteInOrgRequest();
    $request->org = 'veniam';
    $request->teamSlug = 'ipsam';

    $response = $sdk->teams->teamsDeleteInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsDeleteLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-team) endpoint.

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#delete-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteLegacyRequest();
    $request->teamId = 51053;

    $response = $sdk->teams->teamsDeleteLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetByName

Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-team-by-name>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetByNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetByNameRequest();
    $request->org = 'exercitationem';
    $request->teamSlug = 'veniam';

    $response = $sdk->teams->teamsGetByName($request);

    if ($response->teamFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetDiscussionCommentInOrg

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetDiscussionCommentInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetDiscussionCommentInOrgRequest();
    $request->commentNumber = 469994;
    $request->discussionNumber = 320326;
    $request->org = 'nisi';
    $request->teamSlug = 'tenetur';

    $response = $sdk->teams->teamsGetDiscussionCommentInOrg($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsGetDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment) endpoint.

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetDiscussionCommentLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetDiscussionCommentLegacyRequest();
    $request->commentNumber = 338281;
    $request->discussionNumber = 845154;
    $request->teamId = 366480;

    $response = $sdk->teams->teamsGetDiscussionCommentLegacy($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetDiscussionInOrg

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetDiscussionInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetDiscussionInOrgRequest();
    $request->discussionNumber = 382764;
    $request->org = 'pariatur';
    $request->teamSlug = 'sit';

    $response = $sdk->teams->teamsGetDiscussionInOrg($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsGetDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion) endpoint.

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetDiscussionLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetDiscussionLegacyRequest();
    $request->discussionNumber = 694728;
    $request->teamId = 831031;

    $response = $sdk->teams->teamsGetDiscussionLegacy($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsGetLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-team-by-name) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#get-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetLegacyRequest();
    $request->teamId = 17768;

    $response = $sdk->teams->teamsGetLegacy($request);

    if ($response->teamFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsGetMemberLegacy~~

The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetMemberLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetMemberLegacyRequest();
    $request->teamId = 660536;
    $request->username = 'Vernon_Cremin92';

    $response = $sdk->teams->teamsGetMemberLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetMembershipForUserInOrg

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetMembershipForUserInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetMembershipForUserInOrgRequest();
    $request->org = 'architecto';
    $request->teamSlug = 'adipisci';
    $request->username = 'Sandra97';

    $response = $sdk->teams->teamsGetMembershipForUserInOrg($request);

    if ($response->teamMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsGetMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user) endpoint.

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetMembershipForUserLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetMembershipForUserLegacyRequest();
    $request->teamId = 435353;
    $request->username = 'Brandt_Schinner24';

    $response = $sdk->teams->teamsGetMembershipForUserLegacy($request);

    if ($response->teamMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsList

Lists all teams in an organization that are visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-teams>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListRequest();
    $request->org = 'earum';
    $request->page = 510020;
    $request->perPage = 621140;

    $response = $sdk->teams->teamsList($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListChildInOrg

Lists the child teams of the team specified by `{team_slug}`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-child-teams>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListChildInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListChildInOrgRequest();
    $request->org = 'non';
    $request->page = 97810;
    $request->perPage = 649032;
    $request->teamSlug = 'accusamus';

    $response = $sdk->teams->teamsListChildInOrg($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsListChildLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-child-teams) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-child-teams-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListChildLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListChildLegacyRequest();
    $request->page = 687589;
    $request->perPage = 769156;
    $request->teamId = 42615;

    $response = $sdk->teams->teamsListChildLegacy($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListDiscussionCommentsInOrg

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListDiscussionCommentsInOrgRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListDiscussionCommentsInOrgRequest();
    $request->direction = DirectionEnum::DESC;
    $request->discussionNumber = 549237;
    $request->org = 'eaque';
    $request->page = 643199;
    $request->perPage = 396223;
    $request->teamSlug = 'excepturi';

    $response = $sdk->teams->teamsListDiscussionCommentsInOrg($request);

    if ($response->teamDiscussionComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsListDiscussionCommentsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments) endpoint.

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListDiscussionCommentsLegacyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListDiscussionCommentsLegacyRequest();
    $request->direction = DirectionEnum::ASC;
    $request->discussionNumber = 273677;
    $request->page = 821904;
    $request->perPage = 220824;
    $request->teamId = 700529;

    $response = $sdk->teams->teamsListDiscussionCommentsLegacy($request);

    if ($response->teamDiscussionComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListDiscussionsInOrg

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListDiscussionsInOrgRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListDiscussionsInOrgRequest();
    $request->direction = DirectionEnum::ASC;
    $request->org = 'accusamus';
    $request->page = 759874;
    $request->perPage = 966576;
    $request->pinned = 'minus';
    $request->teamSlug = 'quo';

    $response = $sdk->teams->teamsListDiscussionsInOrg($request);

    if ($response->teamDiscussions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsListDiscussionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions) endpoint.

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListDiscussionsLegacyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListDiscussionsLegacyRequest();
    $request->direction = DirectionEnum::DESC;
    $request->page = 994234;
    $request->perPage = 532326;
    $request->teamId = 614770;

    $response = $sdk->teams->teamsListDiscussionsLegacy($request);

    if ($response->teamDiscussions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListForAuthenticatedUser

List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-teams-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListForAuthenticatedUserRequest();
    $request->page = 361106;
    $request->perPage = 37129;

    $response = $sdk->teams->teamsListForAuthenticatedUser($request);

    if ($response->teamFulls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListMembersInOrg

Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListMembersInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListMembersInOrgRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListMembersInOrgRequest();
    $request->org = 'illo';
    $request->page = 14251;
    $request->perPage = 984031;
    $request->role = TeamsListMembersInOrgRoleEnum::MAINTAINER;
    $request->teamSlug = 'at';

    $response = $sdk->teams->teamsListMembersInOrg($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsListMembersLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members) endpoint.

Team members will include the members of child teams.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListMembersLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListMembersLegacyRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListMembersLegacyRequest();
    $request->page = 823472;
    $request->perPage = 205499;
    $request->role = TeamsListMembersLegacyRoleEnum::ALL;
    $request->teamId = 424853;

    $response = $sdk->teams->teamsListMembersLegacy($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListProjectsInOrg

Lists the organization projects for a team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-projects>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListProjectsInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListProjectsInOrgRequest();
    $request->org = 'sapiente';
    $request->page = 652515;
    $request->perPage = 65121;
    $request->teamSlug = 'quos';

    $response = $sdk->teams->teamsListProjectsInOrg($request);

    if ($response->teamProjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsListProjectsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-projects) endpoint.

Lists the organization projects for a team.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-team-projects-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListProjectsLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListProjectsLegacyRequest();
    $request->page = 44571;
    $request->perPage = 251200;
    $request->teamId = 913284;

    $response = $sdk->teams->teamsListProjectsLegacy($request);

    if ($response->teamProjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListReposInOrg

Lists a team's repositories visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListReposInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListReposInOrgRequest();
    $request->org = 'ad';
    $request->page = 305047;
    $request->perPage = 788165;
    $request->teamSlug = 'quas';

    $response = $sdk->teams->teamsListReposInOrg($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsListReposLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-repositories) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-team-repositories-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListReposLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListReposLegacyRequest();
    $request->page = 162450;
    $request->perPage = 982445;
    $request->teamId = 81581;

    $response = $sdk->teams->teamsListReposLegacy($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsRemoveMemberLegacy~~

The "Remove team member" endpoint (described below) is deprecated.

We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveMemberLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveMemberLegacyRequest();
    $request->teamId = 400448;
    $request->username = 'Jonathan40';

    $response = $sdk->teams->teamsRemoveMemberLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsRemoveMembershipForUserInOrg

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveMembershipForUserInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveMembershipForUserInOrgRequest();
    $request->org = 'consectetur';
    $request->teamSlug = 'cumque';
    $request->username = 'Julian.Legros';

    $response = $sdk->teams->teamsRemoveMembershipForUserInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsRemoveMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveMembershipForUserLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveMembershipForUserLegacyRequest();
    $request->teamId = 927959;
    $request->username = 'Donavon19';

    $response = $sdk->teams->teamsRemoveMembershipForUserLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsRemoveProjectInOrg

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-project-from-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveProjectInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveProjectInOrgRequest();
    $request->org = 'voluptatum';
    $request->projectId = 27078;
    $request->teamSlug = 'rerum';

    $response = $sdk->teams->teamsRemoveProjectInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsRemoveProjectLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-project-from-a-team) endpoint.

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-project-from-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveProjectLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveProjectLegacyRequest();
    $request->projectId = 84178;
    $request->teamId = 949280;

    $response = $sdk->teams->teamsRemoveProjectLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsRemoveRepoInOrg

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-repository-from-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveRepoInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveRepoInOrgRequest();
    $request->org = 'autem';
    $request->owner = 'quidem';
    $request->repo = 'totam';
    $request->teamSlug = 'porro';

    $response = $sdk->teams->teamsRemoveRepoInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsRemoveRepoLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-repository-from-a-team) endpoint.

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-repository-from-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveRepoLegacyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveRepoLegacyRequest();
    $request->owner = 'deserunt';
    $request->repo = 'magni';
    $request->teamId = 471207;

    $response = $sdk->teams->teamsRemoveRepoLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdateDiscussionCommentInOrg

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionCommentInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionCommentInOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateDiscussionCommentInOrgRequest();
    $request->requestBody = new TeamsUpdateDiscussionCommentInOrgRequestBody();
    $request->requestBody->body = 'voluptas';
    $request->commentNumber = 658199;
    $request->discussionNumber = 413780;
    $request->org = 'alias';
    $request->teamSlug = 'fuga';

    $response = $sdk->teams->teamsUpdateDiscussionCommentInOrg($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsUpdateDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment) endpoint.

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionCommentLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionCommentLegacyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateDiscussionCommentLegacyRequest();
    $request->requestBody = new TeamsUpdateDiscussionCommentLegacyRequestBody();
    $request->requestBody->body = 'aut';
    $request->commentNumber = 295892;
    $request->discussionNumber = 802734;
    $request->teamId = 303292;

    $response = $sdk->teams->teamsUpdateDiscussionCommentLegacy($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdateDiscussionInOrg

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionInOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateDiscussionInOrgRequest();
    $request->requestBody = new TeamsUpdateDiscussionInOrgRequestBody();
    $request->requestBody->body = 'iste';
    $request->requestBody->title = 'Mrs.';
    $request->discussionNumber = 755738;
    $request->org = 'placeat';
    $request->teamSlug = 'voluptas';

    $response = $sdk->teams->teamsUpdateDiscussionInOrg($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsUpdateDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion) endpoint.

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionLegacyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateDiscussionLegacyRequest();
    $request->requestBody = new TeamsUpdateDiscussionLegacyRequestBody();
    $request->requestBody->body = 'occaecati';
    $request->requestBody->title = 'Miss';
    $request->discussionNumber = 75277;
    $request->teamId = 469170;

    $response = $sdk->teams->teamsUpdateDiscussionLegacy($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdateInOrg

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateInOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateInOrgRequestBodyPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateInOrgRequestBodyPrivacyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateInOrgRequest();
    $request->requestBody = new TeamsUpdateInOrgRequestBody();
    $request->requestBody->description = 'inventore';
    $request->requestBody->name = 'Roberto Boyle MD';
    $request->requestBody->parentTeamId = 813224;
    $request->requestBody->permission = TeamsUpdateInOrgRequestBodyPermissionEnum::ADMIN;
    $request->requestBody->privacy = TeamsUpdateInOrgRequestBodyPrivacyEnum::SECRET;
    $request->org = 'cumque';
    $request->teamSlug = 'delectus';

    $response = $sdk->teams->teamsUpdateInOrg($request);

    if ($response->teamFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsUpdateLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-team) endpoint.

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#update-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateLegacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateLegacyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateLegacyRequestBodyPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateLegacyRequestBodyPrivacyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateLegacyRequest();
    $request->requestBody = new TeamsUpdateLegacyRequestBody();
    $request->requestBody->description = 'labore';
    $request->requestBody->name = 'Byron Ledner';
    $request->requestBody->parentTeamId = 739633;
    $request->requestBody->permission = TeamsUpdateLegacyRequestBodyPermissionEnum::ADMIN;
    $request->requestBody->privacy = TeamsUpdateLegacyRequestBodyPrivacyEnum::CLOSED;
    $request->teamId = 775427;

    $response = $sdk->teams->teamsUpdateLegacy($request);

    if ($response->teamFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# teams

## Overview

Interact with GitHub Teams.

### Available Operations

* [~~teamsAddMemberLegacy~~](#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [teamsAddOrUpdateMembershipForUser](#teamsaddorupdatemembershipforuser) - Add or update team membership for a user
* [teamsAddOrUpdateProjectPermissions](#teamsaddorupdateprojectpermissions) - Add or update team project permissions
* [teamsAddOrUpdateRepoPermissions](#teamsaddorupdaterepopermissions) - Add or update team repository permissions
* [teamsCheckPermissionsForProject](#teamscheckpermissionsforproject) - Check team permissions for a project
* [teamsCheckPermissionsForRepo](#teamscheckpermissionsforrepo) - Check team permissions for a repository
* [teamsCreate](#teamscreate) - Create a team
* [teamsCreateDiscussion](#teamscreatediscussion) - Create a discussion
* [teamsCreateDiscussionComment](#teamscreatediscussioncomment) - Create a discussion comment
* [teamsDelete](#teamsdelete) - Delete a team
* [teamsDeleteDiscussion](#teamsdeletediscussion) - Delete a discussion
* [teamsDeleteDiscussionComment](#teamsdeletediscussioncomment) - Delete a discussion comment
* [teamsGet](#teamsget) - Get a team
* [teamsGetByName](#teamsgetbyname) - Get a team by name
* [teamsGetDiscussion](#teamsgetdiscussion) - Get a discussion
* [teamsGetDiscussionComment](#teamsgetdiscussioncomment) - Get a discussion comment
* [~~teamsGetMemberLegacy~~](#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [teamsGetMembershipForUser](#teamsgetmembershipforuser) - Get team membership for a user
* [teamsList](#teamslist) - List teams
* [teamsListChild](#teamslistchild) - List child teams
* [teamsListDiscussionComments](#teamslistdiscussioncomments) - List discussion comments
* [teamsListDiscussions](#teamslistdiscussions) - List discussions
* [teamsListForAuthenticatedUser](#teamslistforauthenticateduser) - List teams for the authenticated user
* [teamsListMembers](#teamslistmembers) - List team members
* [teamsListProjects](#teamslistprojects) - List team projects
* [teamsListRepos](#teamslistrepos) - List team repositories
* [~~teamsRemoveMemberLegacy~~](#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [teamsRemoveMembershipForUser](#teamsremovemembershipforuser) - Remove team membership for a user
* [teamsRemoveProject](#teamsremoveproject) - Remove a project from a team
* [teamsRemoveRepo](#teamsremoverepo) - Remove a repository from a team
* [teamsUpdate](#teamsupdate) - Update a team
* [teamsUpdateDiscussion](#teamsupdatediscussion) - Update a discussion
* [teamsUpdateDiscussionComment](#teamsupdatediscussioncomment) - Update a discussion comment

## ~~teamsAddMemberLegacy~~

The "Add team member" endpoint (described below) is deprecated.

We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#add-team-member-legacy>

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
    $request->teamId = 511222;
    $request->username = 'Rigoberto5';

    $response = $sdk->teams->teamsAddMemberLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAddOrUpdateMembershipForUser

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#add-or-update-team-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateMembershipForUserRequest();
    $request->requestBody = new TeamsAddOrUpdateMembershipForUserRequestBody();
    $request->requestBody->role = TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum::MAINTAINER;
    $request->teamId = 965517;
    $request->username = 'Macey.Stokes';

    $response = $sdk->teams->teamsAddOrUpdateMembershipForUser($request);

    if ($response->teamMembership !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAddOrUpdateProjectPermissions

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#add-or-update-team-project-permissions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateProjectPermissionsRequest();
    $request->requestBody = new TeamsAddOrUpdateProjectPermissionsRequestBody();
    $request->requestBody->permission = TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum::READ;
    $request->accept = 'alias';
    $request->projectId = 910073;
    $request->teamId = 941668;

    $response = $sdk->teams->teamsAddOrUpdateProjectPermissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsAddOrUpdateRepoPermissions

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#add-or-update-team-repository-permissions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsAddOrUpdateRepoPermissionsRequest();
    $request->requestBody = new TeamsAddOrUpdateRepoPermissionsRequestBody();
    $request->requestBody->permission = TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum::PULL;
    $request->owner = 'incidunt';
    $request->repo = 'qui';
    $request->teamId = 185897;

    $response = $sdk->teams->teamsAddOrUpdateRepoPermissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCheckPermissionsForProject

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#check-team-permissions-for-a-project>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCheckPermissionsForProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCheckPermissionsForProjectRequest();
    $request->accept = 'necessitatibus';
    $request->projectId = 691508;
    $request->teamId = 126727;

    $response = $sdk->teams->teamsCheckPermissionsForProject($request);

    if ($response->teamProject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCheckPermissionsForRepo

**Note**: Repositories inherited through a parent team will also be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#check-team-permissions-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCheckPermissionsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCheckPermissionsForRepoRequest();
    $request->owner = 'beatae';
    $request->repo = 'aliquid';
    $request->teamId = 264649;

    $response = $sdk->teams->teamsCheckPermissionsForRepo($request);

    if ($response->minimalRepository !== null) {
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
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-team>

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
    $request->requestBody->description = 'optio';
    $request->requestBody->maintainers = [
        'molestias',
        'officia',
        'libero',
        'totam',
    ];
    $request->requestBody->name = 'Beth Jenkins';
    $request->requestBody->parentTeamId = 140957;
    $request->requestBody->permission = TeamsCreateRequestBodyPermissionEnum::PULL;
    $request->requestBody->privacy = TeamsCreateRequestBodyPrivacyEnum::CLOSED;
    $request->requestBody->repoNames = [
        'nulla',
        'laborum',
        'natus',
        'accusamus',
    ];
    $request->org = 'doloremque';

    $response = $sdk->teams->teamsCreate($request);

    if ($response->teamFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCreateDiscussion

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateDiscussionRequest();
    $request->requestBody = new TeamsCreateDiscussionRequestBody();
    $request->requestBody->body = 'nisi';
    $request->requestBody->private = false;
    $request->requestBody->title = 'Miss';
    $request->teamId = 924840;

    $response = $sdk->teams->teamsCreateDiscussion($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsCreateDiscussionComment

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsCreateDiscussionCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsCreateDiscussionCommentRequest();
    $request->requestBody = new TeamsCreateDiscussionCommentRequestBody();
    $request->requestBody->body = 'voluptates';
    $request->discussionNumber = 251627;
    $request->teamId = 524577;

    $response = $sdk->teams->teamsCreateDiscussionComment($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDelete

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#delete-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteRequest();
    $request->teamId = 157884;

    $response = $sdk->teams->teamsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDeleteDiscussion

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#delete-a-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteDiscussionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteDiscussionRequest();
    $request->discussionNumber = 354225;
    $request->teamId = 786860;

    $response = $sdk->teams->teamsDeleteDiscussion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsDeleteDiscussionComment

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#delete-a-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsDeleteDiscussionCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsDeleteDiscussionCommentRequest();
    $request->commentNumber = 120277;
    $request->discussionNumber = 973017;
    $request->teamId = 754901;

    $response = $sdk->teams->teamsDeleteDiscussionComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGet

Get a team

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#get-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetRequest();
    $request->teamId = 62035;

    $response = $sdk->teams->teamsGet($request);

    if ($response->teamFull !== null) {
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
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-team-by-name>

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
    $request->org = 'officiis';
    $request->teamSlug = 'architecto';

    $response = $sdk->teams->teamsGetByName($request);

    if ($response->teamFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetDiscussion

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetDiscussionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetDiscussionRequest();
    $request->discussionNumber = 100251;
    $request->teamId = 317898;

    $response = $sdk->teams->teamsGetDiscussion($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetDiscussionComment

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetDiscussionCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetDiscussionCommentRequest();
    $request->commentNumber = 758985;
    $request->discussionNumber = 525951;
    $request->teamId = 17060;

    $response = $sdk->teams->teamsGetDiscussionComment($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsGetMemberLegacy~~

The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-member-legacy>

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
    $request->teamId = 704271;
    $request->username = 'Viva.Wilkinson';

    $response = $sdk->teams->teamsGetMemberLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsGetMembershipForUser

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsGetMembershipForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsGetMembershipForUserRequest();
    $request->teamId = 552439;
    $request->username = 'Flavio92';

    $response = $sdk->teams->teamsGetMembershipForUser($request);

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
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-teams>

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
    $request->org = 'maxime';
    $request->page = 265905;
    $request->perPage = 163558;

    $response = $sdk->teams->teamsList($request);

    if ($response->teams !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListChild

List child teams

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-child-teams>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListChildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListChildRequest();
    $request->page = 828147;
    $request->perPage = 876840;
    $request->teamId = 985109;

    $response = $sdk->teams->teamsListChild($request);

    if ($response->team2s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListDiscussionComments

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-discussion-comments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListDiscussionCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListDiscussionCommentsDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListDiscussionCommentsRequest();
    $request->direction = TeamsListDiscussionCommentsDirectionEnum::DESC;
    $request->discussionNumber = 783397;
    $request->page = 883819;
    $request->perPage = 518990;
    $request->teamId = 969168;

    $response = $sdk->teams->teamsListDiscussionComments($request);

    if ($response->teamDiscussionComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListDiscussions

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-discussions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListDiscussionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListDiscussionsDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListDiscussionsRequest();
    $request->direction = TeamsListDiscussionsDirectionEnum::ASC;
    $request->page = 573444;
    $request->perPage = 472414;
    $request->teamId = 458412;

    $response = $sdk->teams->teamsListDiscussions($request);

    if ($response->teamDiscussions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListForAuthenticatedUser

List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-teams-for-the-authenticated-user>

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
    $request->page = 438256;
    $request->perPage = 485031;

    $response = $sdk->teams->teamsListForAuthenticatedUser($request);

    if ($response->teamFulls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListMembers

Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-team-members>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListMembersRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListMembersRequest();
    $request->page = 202796;
    $request->perPage = 895513;
    $request->role = TeamsListMembersRoleEnum::MAINTAINER;
    $request->teamId = 208683;

    $response = $sdk->teams->teamsListMembers($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListProjects

Lists the organization projects for a team. If you are an [authenticated](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all projects for the team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-team-projects>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListProjectsRequest();
    $request->accept = 'corporis';
    $request->page = 375350;
    $request->perPage = 163684;
    $request->teamId = 641133;

    $response = $sdk->teams->teamsListProjects($request);

    if ($response->teamProjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsListRepos

If you are an [authenticated](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all repositories for the team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-team-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsListReposRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsListReposRequest();
    $request->page = 441374;
    $request->perPage = 716033;
    $request->teamId = 262800;

    $response = $sdk->teams->teamsListRepos($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~teamsRemoveMemberLegacy~~

The "Remove team member" endpoint (described below) is deprecated.

We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-member-legacy>

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
    $request->teamId = 56372;
    $request->username = 'Joy33';

    $response = $sdk->teams->teamsRemoveMemberLegacy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsRemoveMembershipForUser

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-membership-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveMembershipForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveMembershipForUserRequest();
    $request->teamId = 906232;
    $request->username = 'Consuelo55';

    $response = $sdk->teams->teamsRemoveMembershipForUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsRemoveProject

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#remove-a-project-from-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveProjectRequest();
    $request->projectId = 984773;
    $request->teamId = 851809;

    $response = $sdk->teams->teamsRemoveProject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsRemoveRepo

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#remove-a-repository-from-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsRemoveRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsRemoveRepoRequest();
    $request->owner = 'est';
    $request->repo = 'delectus';
    $request->teamId = 245278;

    $response = $sdk->teams->teamsRemoveRepo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdate

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#update-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateRequestBodyPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateRequestBodyPrivacyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateRequest();
    $request->requestBody = new TeamsUpdateRequestBody();
    $request->requestBody->description = 'vitae';
    $request->requestBody->name = 'Harriet Blanda';
    $request->requestBody->parentTeamId = 987890;
    $request->requestBody->permission = TeamsUpdateRequestBodyPermissionEnum::ADMIN;
    $request->requestBody->privacy = TeamsUpdateRequestBodyPrivacyEnum::CLOSED;
    $request->teamId = 275425;

    $response = $sdk->teams->teamsUpdate($request);

    if ($response->teamFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdateDiscussion

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#update-a-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateDiscussionRequest();
    $request->requestBody = new TeamsUpdateDiscussionRequestBody();
    $request->requestBody->body = 'explicabo';
    $request->requestBody->title = 'Mrs.';
    $request->discussionNumber = 583193;
    $request->teamId = 761437;

    $response = $sdk->teams->teamsUpdateDiscussion($request);

    if ($response->teamDiscussion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## teamsUpdateDiscussionComment

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#update-a-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\TeamsUpdateDiscussionCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TeamsUpdateDiscussionCommentRequest();
    $request->requestBody = new TeamsUpdateDiscussionCommentRequestBody();
    $request->requestBody->body = 'alias';
    $request->commentNumber = 695947;
    $request->discussionNumber = 198911;
    $request->teamId = 412433;

    $response = $sdk->teams->teamsUpdateDiscussionComment($request);

    if ($response->teamDiscussionComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# Teams

## Overview

Interact with GitHub Teams.

### Available Operations

* [~~TeamsAddMemberLegacy~~](#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateMembershipForUserInOrg](#teamsaddorupdatemembershipforuserinorg) - Add or update team membership for a user
* [~~TeamsAddOrUpdateMembershipForUserLegacy~~](#teamsaddorupdatemembershipforuserlegacy) - Add or update team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateProjectPermissionsInOrg](#teamsaddorupdateprojectpermissionsinorg) - Add or update team project permissions
* [~~TeamsAddOrUpdateProjectPermissionsLegacy~~](#teamsaddorupdateprojectpermissionslegacy) - Add or update team project permissions (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateRepoPermissionsInOrg](#teamsaddorupdaterepopermissionsinorg) - Add or update team repository permissions
* [~~TeamsAddOrUpdateRepoPermissionsLegacy~~](#teamsaddorupdaterepopermissionslegacy) - Add or update team repository permissions (Legacy) :warning: **Deprecated**
* [TeamsCheckPermissionsForProjectInOrg](#teamscheckpermissionsforprojectinorg) - Check team permissions for a project
* [~~TeamsCheckPermissionsForProjectLegacy~~](#teamscheckpermissionsforprojectlegacy) - Check team permissions for a project (Legacy) :warning: **Deprecated**
* [TeamsCheckPermissionsForRepoInOrg](#teamscheckpermissionsforrepoinorg) - Check team permissions for a repository
* [~~TeamsCheckPermissionsForRepoLegacy~~](#teamscheckpermissionsforrepolegacy) - Check team permissions for a repository (Legacy) :warning: **Deprecated**
* [TeamsCreate](#teamscreate) - Create a team
* [TeamsCreateDiscussionCommentInOrg](#teamscreatediscussioncommentinorg) - Create a discussion comment
* [~~TeamsCreateDiscussionCommentLegacy~~](#teamscreatediscussioncommentlegacy) - Create a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsCreateDiscussionInOrg](#teamscreatediscussioninorg) - Create a discussion
* [~~TeamsCreateDiscussionLegacy~~](#teamscreatediscussionlegacy) - Create a discussion (Legacy) :warning: **Deprecated**
* [TeamsCreateOrUpdateIdpGroupConnectionsInOrg](#teamscreateorupdateidpgroupconnectionsinorg) - Create or update IdP group connections
* [~~TeamsCreateOrUpdateIdpGroupConnectionsLegacy~~](#teamscreateorupdateidpgroupconnectionslegacy) - Create or update IdP group connections (Legacy) :warning: **Deprecated**
* [TeamsDeleteDiscussionCommentInOrg](#teamsdeletediscussioncommentinorg) - Delete a discussion comment
* [~~TeamsDeleteDiscussionCommentLegacy~~](#teamsdeletediscussioncommentlegacy) - Delete a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsDeleteDiscussionInOrg](#teamsdeletediscussioninorg) - Delete a discussion
* [~~TeamsDeleteDiscussionLegacy~~](#teamsdeletediscussionlegacy) - Delete a discussion (Legacy) :warning: **Deprecated**
* [TeamsDeleteInOrg](#teamsdeleteinorg) - Delete a team
* [~~TeamsDeleteLegacy~~](#teamsdeletelegacy) - Delete a team (Legacy) :warning: **Deprecated**
* [TeamsExternalIdpGroupInfoForOrg](#teamsexternalidpgroupinfofororg) - Get an external group
* [TeamsGetByName](#teamsgetbyname) - Get a team by name
* [TeamsGetDiscussionCommentInOrg](#teamsgetdiscussioncommentinorg) - Get a discussion comment
* [~~TeamsGetDiscussionCommentLegacy~~](#teamsgetdiscussioncommentlegacy) - Get a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsGetDiscussionInOrg](#teamsgetdiscussioninorg) - Get a discussion
* [~~TeamsGetDiscussionLegacy~~](#teamsgetdiscussionlegacy) - Get a discussion (Legacy) :warning: **Deprecated**
* [~~TeamsGetLegacy~~](#teamsgetlegacy) - Get a team (Legacy) :warning: **Deprecated**
* [~~TeamsGetMemberLegacy~~](#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [TeamsGetMembershipForUserInOrg](#teamsgetmembershipforuserinorg) - Get team membership for a user
* [~~TeamsGetMembershipForUserLegacy~~](#teamsgetmembershipforuserlegacy) - Get team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsLinkExternalIdpGroupToTeamForOrg](#teamslinkexternalidpgrouptoteamfororg) - Update the connection between an external group and a team
* [TeamsList](#teamslist) - List teams
* [TeamsListChildInOrg](#teamslistchildinorg) - List child teams
* [~~TeamsListChildLegacy~~](#teamslistchildlegacy) - List child teams (Legacy) :warning: **Deprecated**
* [TeamsListDiscussionCommentsInOrg](#teamslistdiscussioncommentsinorg) - List discussion comments
* [~~TeamsListDiscussionCommentsLegacy~~](#teamslistdiscussioncommentslegacy) - List discussion comments (Legacy) :warning: **Deprecated**
* [TeamsListDiscussionsInOrg](#teamslistdiscussionsinorg) - List discussions
* [~~TeamsListDiscussionsLegacy~~](#teamslistdiscussionslegacy) - List discussions (Legacy) :warning: **Deprecated**
* [TeamsListExternalIdpGroupsForOrg](#teamslistexternalidpgroupsfororg) - List external groups in an organization
* [TeamsListForAuthenticatedUser](#teamslistforauthenticateduser) - List teams for the authenticated user
* [~~TeamsListIdpGroupsForLegacy~~](#teamslistidpgroupsforlegacy) - List IdP groups for a team (Legacy) :warning: **Deprecated**
* [TeamsListIdpGroupsForOrg](#teamslistidpgroupsfororg) - List IdP groups for an organization
* [TeamsListIdpGroupsInOrg](#teamslistidpgroupsinorg) - List IdP groups for a team
* [TeamsListLinkedExternalIdpGroupsToTeamForOrg](#teamslistlinkedexternalidpgroupstoteamfororg) - List a connection between an external group and a team
* [TeamsListMembersInOrg](#teamslistmembersinorg) - List team members
* [~~TeamsListMembersLegacy~~](#teamslistmemberslegacy) - List team members (Legacy) :warning: **Deprecated**
* [TeamsListPendingInvitationsInOrg](#teamslistpendinginvitationsinorg) - List pending team invitations
* [~~TeamsListPendingInvitationsLegacy~~](#teamslistpendinginvitationslegacy) - List pending team invitations (Legacy) :warning: **Deprecated**
* [TeamsListProjectsInOrg](#teamslistprojectsinorg) - List team projects
* [~~TeamsListProjectsLegacy~~](#teamslistprojectslegacy) - List team projects (Legacy) :warning: **Deprecated**
* [TeamsListReposInOrg](#teamslistreposinorg) - List team repositories
* [~~TeamsListReposLegacy~~](#teamslistreposlegacy) - List team repositories (Legacy) :warning: **Deprecated**
* [~~TeamsRemoveMemberLegacy~~](#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [TeamsRemoveMembershipForUserInOrg](#teamsremovemembershipforuserinorg) - Remove team membership for a user
* [~~TeamsRemoveMembershipForUserLegacy~~](#teamsremovemembershipforuserlegacy) - Remove team membership for a user (Legacy) :warning: **Deprecated**
* [TeamsRemoveProjectInOrg](#teamsremoveprojectinorg) - Remove a project from a team
* [~~TeamsRemoveProjectLegacy~~](#teamsremoveprojectlegacy) - Remove a project from a team (Legacy) :warning: **Deprecated**
* [TeamsRemoveRepoInOrg](#teamsremoverepoinorg) - Remove a repository from a team
* [~~TeamsRemoveRepoLegacy~~](#teamsremoverepolegacy) - Remove a repository from a team (Legacy) :warning: **Deprecated**
* [TeamsUnlinkExternalIdpGroupFromTeamForOrg](#teamsunlinkexternalidpgroupfromteamfororg) - Remove the connection between an external group and a team
* [TeamsUpdateDiscussionCommentInOrg](#teamsupdatediscussioncommentinorg) - Update a discussion comment
* [~~TeamsUpdateDiscussionCommentLegacy~~](#teamsupdatediscussioncommentlegacy) - Update a discussion comment (Legacy) :warning: **Deprecated**
* [TeamsUpdateDiscussionInOrg](#teamsupdatediscussioninorg) - Update a discussion
* [~~TeamsUpdateDiscussionLegacy~~](#teamsupdatediscussionlegacy) - Update a discussion (Legacy) :warning: **Deprecated**
* [TeamsUpdateInOrg](#teamsupdateinorg) - Update a team
* [~~TeamsUpdateLegacy~~](#teamsupdatelegacy) - Update a team (Legacy) :warning: **Deprecated**

## ~~TeamsAddMemberLegacy~~

The "Add team member" endpoint (described below) is deprecated.

We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Cloud team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Cloud](https://docs.github.com/enterprise-cloud@latest//articles/synchronizing-teams-between-your-identity-provider-and-github/)."

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsAddMemberLegacy(ctx, operations.TeamsAddMemberLegacyRequest{
        TeamID: 865212,
        Username: "Pauline_Wilkinson58",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsAddOrUpdateMembershipForUserInOrg

Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Cloud team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Cloud](https://docs.github.com/enterprise-cloud@latest//articles/synchronizing-teams-between-your-identity-provider-and-github/)."

An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-or-update-team-membership-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsAddOrUpdateMembershipForUserInOrg(ctx, operations.TeamsAddOrUpdateMembershipForUserInOrgRequest{
        RequestBody: &operations.TeamsAddOrUpdateMembershipForUserInOrgRequestBody{
            Role: operations.TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnumMaintainer.ToPointer(),
        },
        Org: "doloribus",
        TeamSlug: "omnis",
        Username: "Jamaal.Heller33",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## ~~TeamsAddOrUpdateMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Cloud team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Cloud](https://docs.github.com/enterprise-cloud@latest//articles/synchronizing-teams-between-your-identity-provider-and-github/)."

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-or-update-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsAddOrUpdateMembershipForUserLegacy(ctx, operations.TeamsAddOrUpdateMembershipForUserLegacyRequest{
        RequestBody: &operations.TeamsAddOrUpdateMembershipForUserLegacyRequestBody{
            Role: operations.TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnumMember.ToPointer(),
        },
        TeamID: 426481,
        Username: "Juanita59",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## TeamsAddOrUpdateProjectPermissionsInOrg

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-or-update-team-project-permissions>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsAddOrUpdateProjectPermissionsInOrg(ctx, operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest{
        RequestBody: &operations.TeamsAddOrUpdateProjectPermissionsInOrgRequestBody{
            Permission: operations.TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnumRead.ToPointer(),
        },
        Org: "itaque",
        ProjectID: 600185,
        TeamSlug: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsAddOrUpdateProjectPermissionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-or-update-team-project-permissions) endpoint.

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#add-or-update-team-project-permissions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsAddOrUpdateProjectPermissionsLegacy(ctx, operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest{
        RequestBody: &operations.TeamsAddOrUpdateProjectPermissionsLegacyRequestBody{
            Permission: operations.TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnumRead.ToPointer(),
        },
        ProjectID: 833946,
        TeamID: 837327,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsAddOrUpdateRepoPermissionsInOrg

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#http-verbs)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

For more information about the permission levels, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#add-or-update-team-repository-permissions>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsAddOrUpdateRepoPermissionsInOrg(ctx, operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest{
        RequestBody: &operations.TeamsAddOrUpdateRepoPermissionsInOrgRequestBody{
            Permission: sdk.String("minus"),
        },
        Org: "minima",
        Owner: "a",
        Repo: "beatae",
        TeamSlug: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsAddOrUpdateRepoPermissionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#add-or-update-team-repository-permissions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsAddOrUpdateRepoPermissionsLegacy(ctx, operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest{
        RequestBody: &operations.TeamsAddOrUpdateRepoPermissionsLegacyRequestBody{
            Permission: operations.TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnumPull.ToPointer(),
        },
        Owner: "facere",
        Repo: "earum",
        TeamID: 672273,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsCheckPermissionsForProjectInOrg

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#check-team-permissions-for-a-project>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCheckPermissionsForProjectInOrg(ctx, operations.TeamsCheckPermissionsForProjectInOrgRequest{
        Org: "dicta",
        ProjectID: 32737,
        TeamSlug: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProject != nil {
        // handle response
    }
}
```

## ~~TeamsCheckPermissionsForProjectLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#check-team-permissions-for-a-project) endpoint.

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#check-team-permissions-for-a-project-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCheckPermissionsForProjectLegacy(ctx, operations.TeamsCheckPermissionsForProjectLegacyRequest{
        ProjectID: 398847,
        TeamID: 862666,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProject != nil {
        // handle response
    }
}
```

## TeamsCheckPermissionsForRepoInOrg

Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-cloud@latest//rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.

If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#check-team-permissions-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCheckPermissionsForRepoInOrg(ctx, operations.TeamsCheckPermissionsForRepoInOrgRequest{
        Org: "enim",
        Owner: "numquam",
        Repo: "architecto",
        TeamSlug: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamRepository != nil {
        // handle response
    }
}
```

## ~~TeamsCheckPermissionsForRepoLegacy~~

**Note**: Repositories inherited through a parent team will also be checked.

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#check-team-permissions-for-a-repository) endpoint.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-cloud@latest//rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#check-team-permissions-for-a-repository-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCheckPermissionsForRepoLegacy(ctx, operations.TeamsCheckPermissionsForRepoLegacyRequest{
        Owner: "quaerat",
        Repo: "facere",
        TeamID: 112391,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamRepository != nil {
        // handle response
    }
}
```

## TeamsCreate

To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/enterprise-cloud@latest//articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-organizations-and-teams/about-teams)".

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-team>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCreate(ctx, operations.TeamsCreateRequest{
        RequestBody: operations.TeamsCreateRequestBody{
            Description: sdk.String("omnis"),
            Maintainers: []string{
                "sapiente",
            },
            Name: "Ms. Malcolm Crona",
            ParentTeamID: sdk.Int64(55407),
            Permission: operations.TeamsCreateRequestBodyPermissionEnumPush.ToPointer(),
            Privacy: operations.TeamsCreateRequestBodyPrivacyEnumClosed.ToPointer(),
            RepoNames: []string{
                "eligendi",
                "sit",
                "possimus",
                "distinctio",
            },
        },
        Org: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## TeamsCreateDiscussionCommentInOrg

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-discussion-comment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCreateDiscussionCommentInOrg(ctx, operations.TeamsCreateDiscussionCommentInOrgRequest{
        RequestBody: operations.TeamsCreateDiscussionCommentInOrgRequestBody{
            Body: "assumenda",
        },
        DiscussionNumber: 850406,
        Org: "soluta",
        TeamSlug: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## ~~TeamsCreateDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-discussion-comment) endpoint.

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCreateDiscussionCommentLegacy(ctx, operations.TeamsCreateDiscussionCommentLegacyRequest{
        RequestBody: operations.TeamsCreateDiscussionCommentLegacyRequestBody{
            Body: "laudantium",
        },
        DiscussionNumber: 272635,
        TeamID: 458021,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## TeamsCreateDiscussionInOrg

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-discussion>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCreateDiscussionInOrg(ctx, operations.TeamsCreateDiscussionInOrgRequest{
        RequestBody: operations.TeamsCreateDiscussionInOrgRequestBody{
            Body: "doloremque",
            Private: sdk.Bool(false),
            Title: "Ms.",
        },
        Org: "reiciendis",
        TeamSlug: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## ~~TeamsCreateDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-discussion) endpoint.

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCreateDiscussionLegacy(ctx, operations.TeamsCreateDiscussionLegacyRequest{
        RequestBody: operations.TeamsCreateDiscussionLegacyRequestBody{
            Body: "aliquam",
            Private: sdk.Bool(false),
            Title: "Dr.",
        },
        TeamID: 227424,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## TeamsCreateOrUpdateIdpGroupConnectionsInOrg

Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-or-update-idp-group-connections>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCreateOrUpdateIdpGroupConnectionsInOrg(ctx, operations.TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest{
        RequestBody: operations.TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody{
            Groups: []TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups{
                operations.TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups{
                    GroupDescription: "ab",
                    GroupID: "officiis",
                    GroupName: "eum",
                },
                operations.TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups{
                    GroupDescription: "rerum",
                    GroupID: "placeat",
                    GroupName: "ab",
                },
                operations.TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups{
                    GroupDescription: "ad",
                    GroupID: "blanditiis",
                    GroupName: "porro",
                },
            },
        },
        Org: "labore",
        TeamSlug: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupMapping != nil {
        // handle response
    }
}
```

## ~~TeamsCreateOrUpdateIdpGroupConnectionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create or update IdP group connections`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-or-update-idp-group-connections) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-or-update-idp-group-connections-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsCreateOrUpdateIdpGroupConnectionsLegacy(ctx, operations.TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest{
        RequestBody: operations.TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody{
            Groups: []TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups{
                operations.TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups{
                    Description: sdk.String(""moar cheese pleese""),
                    GroupDescription: "earum",
                    GroupID: "ullam",
                    GroupName: "numquam",
                    ID: sdk.String(""caceab43fc9ffa20081c""),
                    Name: sdk.String(""external-team-6c13e7288ef7""),
                },
                operations.TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups{
                    Description: sdk.String(""moar cheese pleese""),
                    GroupDescription: "enim",
                    GroupID: "cupiditate",
                    GroupName: "occaecati",
                    ID: sdk.String(""caceab43fc9ffa20081c""),
                    Name: sdk.String(""external-team-6c13e7288ef7""),
                },
            },
            SyncedAt: sdk.String(""I am not a timestamp""),
        },
        TeamID: 929443,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupMapping != nil {
        // handle response
    }
}
```

## TeamsDeleteDiscussionCommentInOrg

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#delete-a-discussion-comment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsDeleteDiscussionCommentInOrg(ctx, operations.TeamsDeleteDiscussionCommentInOrgRequest{
        CommentNumber: 683602,
        DiscussionNumber: 234845,
        Org: "modi",
        TeamSlug: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsDeleteDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#delete-a-discussion-comment) endpoint.

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#delete-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsDeleteDiscussionCommentLegacy(ctx, operations.TeamsDeleteDiscussionCommentLegacyRequest{
        CommentNumber: 129762,
        DiscussionNumber: 380450,
        TeamID: 58808,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsDeleteDiscussionInOrg

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#delete-a-discussion>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsDeleteDiscussionInOrg(ctx, operations.TeamsDeleteDiscussionInOrgRequest{
        DiscussionNumber: 910410,
        Org: "sint",
        TeamSlug: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsDeleteDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#delete-a-discussion) endpoint.

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#delete-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsDeleteDiscussionLegacy(ctx, operations.TeamsDeleteDiscussionLegacyRequest{
        DiscussionNumber: 186130,
        TeamID: 37477,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsDeleteInOrg

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#delete-a-team>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsDeleteInOrg(ctx, operations.TeamsDeleteInOrgRequest{
        Org: "consequatur",
        TeamSlug: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsDeleteLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#delete-a-team) endpoint.

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#delete-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsDeleteLegacy(ctx, operations.TeamsDeleteLegacyRequest{
        TeamID: 927754,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsExternalIdpGroupInfoForOrg

Displays information about the specific group's usage.  Provides a list of the group's external members as well as a list of teams that this group is connected to.

You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#external-idp-group-info-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsExternalIdpGroupInfoForOrg(ctx, operations.TeamsExternalIdpGroupInfoForOrgRequest{
        GroupID: 451831,
        Org: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalGroup != nil {
        // handle response
    }
}
```

## TeamsGetByName

Gets a team using the team's `slug`. To create the `slug`, GitHub Enterprise Cloud replaces special characters in the `name` string, changes all words to lowercase, and replaces spaces with a `-` separator. For example, `"My TEam Näme"` would become `my-team-name`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-a-team-by-name>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetByName(ctx, operations.TeamsGetByNameRequest{
        Org: "est",
        TeamSlug: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## TeamsGetDiscussionCommentInOrg

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-a-discussion-comment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetDiscussionCommentInOrg(ctx, operations.TeamsGetDiscussionCommentInOrgRequest{
        CommentNumber: 710483,
        DiscussionNumber: 842921,
        Org: "quos",
        TeamSlug: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## ~~TeamsGetDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-a-discussion-comment) endpoint.

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetDiscussionCommentLegacy(ctx, operations.TeamsGetDiscussionCommentLegacyRequest{
        CommentNumber: 696678,
        DiscussionNumber: 448601,
        TeamID: 635314,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## TeamsGetDiscussionInOrg

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-a-discussion>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetDiscussionInOrg(ctx, operations.TeamsGetDiscussionInOrgRequest{
        DiscussionNumber: 42489,
        Org: "fuga",
        TeamSlug: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## ~~TeamsGetDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-a-discussion) endpoint.

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetDiscussionLegacy(ctx, operations.TeamsGetDiscussionLegacyRequest{
        DiscussionNumber: 103901,
        TeamID: 381654,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## ~~TeamsGetLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-a-team-by-name) endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#get-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetLegacy(ctx, operations.TeamsGetLegacyRequest{
        TeamID: 757438,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## ~~TeamsGetMemberLegacy~~

The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetMemberLegacy(ctx, operations.TeamsGetMemberLegacyRequest{
        TeamID: 885523,
        Username: "Jennyfer82",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsGetMembershipForUserInOrg

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-team-membership-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetMembershipForUserInOrg(ctx, operations.TeamsGetMembershipForUserInOrgRequest{
        Org: "quaerat",
        TeamSlug: "aut",
        Username: "Lilla_Koch18",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## ~~TeamsGetMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-team-membership-for-a-user) endpoint.

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#get-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsGetMembershipForUserLegacy(ctx, operations.TeamsGetMembershipForUserLegacyRequest{
        TeamID: 60379,
        Username: "Sonia_Morar",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## TeamsLinkExternalIdpGroupToTeamForOrg

Creates a connection between a team and an external group.  Only one external group can be linked to a team.

You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#link-external-idp-group-team-connection>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsLinkExternalIdpGroupToTeamForOrg(ctx, operations.TeamsLinkExternalIdpGroupToTeamForOrgRequest{
        RequestBody: operations.TeamsLinkExternalIdpGroupToTeamForOrgRequestBody{
            GroupID: 1,
        },
        Org: "ducimus",
        TeamSlug: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalGroup != nil {
        // handle response
    }
}
```

## TeamsList

Lists all teams in an organization that are visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-teams>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsList(ctx, operations.TeamsListRequest{
        Org: "ipsam",
        Page: sdk.Int64(729612),
        PerPage: sdk.Int64(153942),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## TeamsListChildInOrg

Lists the child teams of the team specified by `{team_slug}`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-child-teams>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListChildInOrg(ctx, operations.TeamsListChildInOrgRequest{
        Org: "omnis",
        Page: sdk.Int64(120646),
        PerPage: sdk.Int64(185116),
        TeamSlug: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## ~~TeamsListChildLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-child-teams) endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#list-child-teams-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListChildLegacy(ctx, operations.TeamsListChildLegacyRequest{
        Page: sdk.Int64(6203),
        PerPage: sdk.Int64(228133),
        TeamID: 9284,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## TeamsListDiscussionCommentsInOrg

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-discussion-comments>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListDiscussionCommentsInOrg(ctx, operations.TeamsListDiscussionCommentsInOrgRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        DiscussionNumber: 532092,
        Org: "velit",
        Page: sdk.Int64(942780),
        PerPage: sdk.Int64(356485),
        TeamSlug: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComments != nil {
        // handle response
    }
}
```

## ~~TeamsListDiscussionCommentsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-discussion-comments) endpoint.

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-discussion-comments-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListDiscussionCommentsLegacy(ctx, operations.TeamsListDiscussionCommentsLegacyRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        DiscussionNumber: 714300,
        Page: sdk.Int64(480295),
        PerPage: sdk.Int64(493865),
        TeamID: 592088,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComments != nil {
        // handle response
    }
}
```

## TeamsListDiscussionsInOrg

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-discussions>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListDiscussionsInOrg(ctx, operations.TeamsListDiscussionsInOrgRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Org: "assumenda",
        Page: sdk.Int64(126367),
        PerPage: sdk.Int64(142856),
        Pinned: sdk.String("vero"),
        TeamSlug: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussions != nil {
        // handle response
    }
}
```

## ~~TeamsListDiscussionsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-discussions) endpoint.

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-discussions-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListDiscussionsLegacy(ctx, operations.TeamsListDiscussionsLegacyRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(98805),
        PerPage: sdk.Int64(998199),
        TeamID: 542783,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussions != nil {
        // handle response
    }
}
```

## TeamsListExternalIdpGroupsForOrg

Lists external groups available in an organization. You can query the groups using the `display_name` parameter, only groups with a `group_name` containing the text provided in the `display_name` parameter will be returned.  You can also limit your page results using the `per_page` parameter. GitHub Enterprise Cloud generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see "[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89)."

You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-external-idp-groups-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListExternalIdpGroupsForOrg(ctx, operations.TeamsListExternalIdpGroupsForOrgRequest{
        DisplayName: sdk.String("magnam"),
        Org: "perspiciatis",
        Page: sdk.Int64(227017),
        PerPage: sdk.Int64(546089),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalGroups != nil {
        // handle response
    }
}
```

## TeamsListForAuthenticatedUser

List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-teams-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListForAuthenticatedUser(ctx, operations.TeamsListForAuthenticatedUserRequest{
        Page: sdk.Int64(125161),
        PerPage: sdk.Int64(364284),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFulls != nil {
        // handle response
    }
}
```

## ~~TeamsListIdpGroupsForLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List IdP groups for a team`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-idp-groups-for-a-team) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

List IdP groups connected to a team on GitHub Enterprise Cloud.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-idp-groups-for-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListIdpGroupsForLegacy(ctx, operations.TeamsListIdpGroupsForLegacyRequest{
        TeamID: 964210,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupMapping != nil {
        // handle response
    }
}
```

## TeamsListIdpGroupsForOrg

Lists IdP groups available in an organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-idp-groups-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListIdpGroupsForOrg(ctx, operations.TeamsListIdpGroupsForOrgRequest{
        Org: "illum",
        Page: sdk.String("porro"),
        PerPage: sdk.Int64(309634),
        Q: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupMapping != nil {
        // handle response
    }
}
```

## TeamsListIdpGroupsInOrg

List IdP groups connected to a team on GitHub Enterprise Cloud.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-idp-groups-for-a-team>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListIdpGroupsInOrg(ctx, operations.TeamsListIdpGroupsInOrgRequest{
        Org: "cumque",
        TeamSlug: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupMapping != nil {
        // handle response
    }
}
```

## TeamsListLinkedExternalIdpGroupsToTeamForOrg

Lists a connection between a team and an external group.

You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-external-idp-group-team-connection>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListLinkedExternalIdpGroupsToTeamForOrg(ctx, operations.TeamsListLinkedExternalIdpGroupsToTeamForOrgRequest{
        Org: "in",
        TeamSlug: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalGroups != nil {
        // handle response
    }
}
```

## TeamsListMembersInOrg

Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-team-members>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListMembersInOrg(ctx, operations.TeamsListMembersInOrgRequest{
        Org: "maxime",
        Page: sdk.Int64(151486),
        PerPage: sdk.Int64(791538),
        Role: operations.TeamsListMembersInOrgRoleEnumMember.ToPointer(),
        TeamSlug: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## ~~TeamsListMembersLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-team-members) endpoint.

Team members will include the members of child teams.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-team-members-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListMembersLegacy(ctx, operations.TeamsListMembersLegacyRequest{
        Page: sdk.Int64(963470),
        PerPage: sdk.Int64(690871),
        Role: operations.TeamsListMembersLegacyRoleEnumMember.ToPointer(),
        TeamID: 757962,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## TeamsListPendingInvitationsInOrg

The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub Enterprise Cloud member, the `login` field in the return hash will be `null`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/invitations`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-pending-team-invitations>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListPendingInvitationsInOrg(ctx, operations.TeamsListPendingInvitationsInOrgRequest{
        Org: "hic",
        Page: sdk.Int64(779748),
        PerPage: sdk.Int64(75610),
        TeamSlug: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationInvitations != nil {
        // handle response
    }
}
```

## ~~TeamsListPendingInvitationsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List pending team invitations`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-pending-team-invitations) endpoint.

The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub Enterprise Cloud member, the `login` field in the return hash will be `null`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-pending-team-invitations-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListPendingInvitationsLegacy(ctx, operations.TeamsListPendingInvitationsLegacyRequest{
        Page: sdk.Int64(460803),
        PerPage: sdk.Int64(392080),
        TeamID: 129619,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationInvitations != nil {
        // handle response
    }
}
```

## TeamsListProjectsInOrg

Lists the organization projects for a team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-team-projects>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListProjectsInOrg(ctx, operations.TeamsListProjectsInOrgRequest{
        Org: "sequi",
        Page: sdk.Int64(4787),
        PerPage: sdk.Int64(970131),
        TeamSlug: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProjects != nil {
        // handle response
    }
}
```

## ~~TeamsListProjectsLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-team-projects) endpoint.

Lists the organization projects for a team.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#list-team-projects-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListProjectsLegacy(ctx, operations.TeamsListProjectsLegacyRequest{
        Page: sdk.Int64(256310),
        PerPage: sdk.Int64(113894),
        TeamID: 980376,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProjects != nil {
        // handle response
    }
}
```

## TeamsListReposInOrg

Lists a team's repositories visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-team-repositories>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListReposInOrg(ctx, operations.TeamsListReposInOrgRequest{
        Org: "nam",
        Page: sdk.Int64(102184),
        PerPage: sdk.Int64(698117),
        TeamSlug: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ~~TeamsListReposLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#list-team-repositories) endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#list-team-repositories-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsListReposLegacy(ctx, operations.TeamsListReposLegacyRequest{
        Page: sdk.Int64(176333),
        PerPage: sdk.Int64(211518),
        TeamID: 941743,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## ~~TeamsRemoveMemberLegacy~~

The "Remove team member" endpoint (described below) is deprecated.

We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Cloud team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Cloud](https://docs.github.com/enterprise-cloud@latest//articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#remove-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsRemoveMemberLegacy(ctx, operations.TeamsRemoveMemberLegacyRequest{
        TeamID: 830948,
        Username: "Minnie86",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveMembershipForUserInOrg

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Cloud team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Cloud](https://docs.github.com/enterprise-cloud@latest//articles/synchronizing-teams-between-your-identity-provider-and-github/)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#remove-team-membership-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsRemoveMembershipForUserInOrg(ctx, operations.TeamsRemoveMembershipForUserInOrgRequest{
        Org: "expedita",
        TeamSlug: "autem",
        Username: "Moses_Walsh",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsRemoveMembershipForUserLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#remove-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Cloud team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Cloud](https://docs.github.com/enterprise-cloud@latest//articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#remove-team-membership-for-a-user-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsRemoveMembershipForUserLegacy(ctx, operations.TeamsRemoveMembershipForUserLegacyRequest{
        TeamID: 375588,
        Username: "Jose_Herzog",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveProjectInOrg

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#remove-a-project-from-a-team>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsRemoveProjectInOrg(ctx, operations.TeamsRemoveProjectInOrgRequest{
        Org: "deleniti",
        ProjectID: 900411,
        TeamSlug: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsRemoveProjectLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#remove-a-project-from-a-team) endpoint.

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#remove-a-project-from-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsRemoveProjectLegacy(ctx, operations.TeamsRemoveProjectLegacyRequest{
        ProjectID: 173193,
        TeamID: 671568,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveRepoInOrg

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#remove-a-repository-from-a-team>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsRemoveRepoInOrg(ctx, operations.TeamsRemoveRepoInOrgRequest{
        Org: "vero",
        Owner: "eos",
        Repo: "voluptatem",
        TeamSlug: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TeamsRemoveRepoLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#remove-a-repository-from-a-team) endpoint.

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#remove-a-repository-from-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsRemoveRepoLegacy(ctx, operations.TeamsRemoveRepoLegacyRequest{
        Owner: "id",
        Repo: "quae",
        TeamID: 414439,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsUnlinkExternalIdpGroupFromTeamForOrg

Deletes a connection between a team and an external group.

You can manage team membership with your IdP using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#unlink-external-idp-group-team-connection>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsUnlinkExternalIdpGroupFromTeamForOrg(ctx, operations.TeamsUnlinkExternalIdpGroupFromTeamForOrgRequest{
        Org: "a",
        TeamSlug: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsUpdateDiscussionCommentInOrg

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#update-a-discussion-comment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsUpdateDiscussionCommentInOrg(ctx, operations.TeamsUpdateDiscussionCommentInOrgRequest{
        RequestBody: operations.TeamsUpdateDiscussionCommentInOrgRequestBody{
            Body: "sed",
        },
        CommentNumber: 721198,
        DiscussionNumber: 155473,
        Org: "iusto",
        TeamSlug: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## ~~TeamsUpdateDiscussionCommentLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#update-a-discussion-comment) endpoint.

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#update-a-discussion-comment-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsUpdateDiscussionCommentLegacy(ctx, operations.TeamsUpdateDiscussionCommentLegacyRequest{
        RequestBody: operations.TeamsUpdateDiscussionCommentLegacyRequestBody{
            Body: "deserunt",
        },
        CommentNumber: 149815,
        DiscussionNumber: 501773,
        TeamID: 573994,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## TeamsUpdateDiscussionInOrg

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#update-a-discussion>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsUpdateDiscussionInOrg(ctx, operations.TeamsUpdateDiscussionInOrgRequest{
        RequestBody: &operations.TeamsUpdateDiscussionInOrgRequestBody{
            Body: sdk.String("placeat"),
            Title: sdk.String("Mrs."),
        },
        DiscussionNumber: 476084,
        Org: "itaque",
        TeamSlug: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## ~~TeamsUpdateDiscussionLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#update-a-discussion) endpoint.

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#update-a-discussion-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsUpdateDiscussionLegacy(ctx, operations.TeamsUpdateDiscussionLegacyRequest{
        RequestBody: &operations.TeamsUpdateDiscussionLegacyRequestBody{
            Body: sdk.String("nemo"),
            Title: sdk.String("Mrs."),
        },
        DiscussionNumber: 926142,
        TeamID: 605043,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## TeamsUpdateInOrg

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#update-a-team>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsUpdateInOrg(ctx, operations.TeamsUpdateInOrgRequest{
        RequestBody: &operations.TeamsUpdateInOrgRequestBody{
            Description: sdk.String("ipsa"),
            Name: sdk.String("Tiffany Mayert"),
            ParentTeamID: sdk.Int64(163673),
            Permission: operations.TeamsUpdateInOrgRequestBodyPermissionEnumPull.ToPointer(),
            Privacy: operations.TeamsUpdateInOrgRequestBodyPrivacyEnumSecret.ToPointer(),
        },
        Org: "commodi",
        TeamSlug: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## ~~TeamsUpdateLegacy~~

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#update-a-team) endpoint.

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/teams/#update-a-team-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Teams.TeamsUpdateLegacy(ctx, operations.TeamsUpdateLegacyRequest{
        RequestBody: operations.TeamsUpdateLegacyRequestBody{
            Description: sdk.String("vel"),
            Name: "Don Huel",
            ParentTeamID: sdk.Int64(39210),
            Permission: operations.TeamsUpdateLegacyRequestBodyPermissionEnumPush.ToPointer(),
            Privacy: operations.TeamsUpdateLegacyRequestBodyPrivacyEnumSecret.ToPointer(),
        },
        TeamID: 531859,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

# Teams

## Overview

Interact with GitHub Teams.

### Available Operations

* [~~TeamsAddMemberLegacy~~](#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateMembershipForUser](#teamsaddorupdatemembershipforuser) - Add or update team membership for a user
* [TeamsAddOrUpdateProjectPermissions](#teamsaddorupdateprojectpermissions) - Add or update team project permissions
* [TeamsAddOrUpdateRepoPermissions](#teamsaddorupdaterepopermissions) - Add or update team repository permissions
* [TeamsCheckPermissionsForProject](#teamscheckpermissionsforproject) - Check team permissions for a project
* [TeamsCheckPermissionsForRepo](#teamscheckpermissionsforrepo) - Check team permissions for a repository
* [TeamsCreate](#teamscreate) - Create a team
* [TeamsCreateDiscussion](#teamscreatediscussion) - Create a discussion
* [TeamsCreateDiscussionComment](#teamscreatediscussioncomment) - Create a discussion comment
* [TeamsDelete](#teamsdelete) - Delete a team
* [TeamsDeleteDiscussion](#teamsdeletediscussion) - Delete a discussion
* [TeamsDeleteDiscussionComment](#teamsdeletediscussioncomment) - Delete a discussion comment
* [TeamsGet](#teamsget) - Get a team
* [TeamsGetByName](#teamsgetbyname) - Get a team by name
* [TeamsGetDiscussion](#teamsgetdiscussion) - Get a discussion
* [TeamsGetDiscussionComment](#teamsgetdiscussioncomment) - Get a discussion comment
* [~~TeamsGetMemberLegacy~~](#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [TeamsGetMembershipForUser](#teamsgetmembershipforuser) - Get team membership for a user
* [TeamsList](#teamslist) - List teams
* [TeamsListChild](#teamslistchild) - List child teams
* [TeamsListDiscussionComments](#teamslistdiscussioncomments) - List discussion comments
* [TeamsListDiscussions](#teamslistdiscussions) - List discussions
* [TeamsListForAuthenticatedUser](#teamslistforauthenticateduser) - List teams for the authenticated user
* [TeamsListMembers](#teamslistmembers) - List team members
* [TeamsListProjects](#teamslistprojects) - List team projects
* [TeamsListRepos](#teamslistrepos) - List team repositories
* [~~TeamsRemoveMemberLegacy~~](#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [TeamsRemoveMembershipForUser](#teamsremovemembershipforuser) - Remove team membership for a user
* [TeamsRemoveProject](#teamsremoveproject) - Remove a project from a team
* [TeamsRemoveRepo](#teamsremoverepo) - Remove a repository from a team
* [TeamsUpdate](#teamsupdate) - Update a team
* [TeamsUpdateDiscussion](#teamsupdatediscussion) - Update a discussion
* [TeamsUpdateDiscussionComment](#teamsupdatediscussioncomment) - Update a discussion comment

## ~~TeamsAddMemberLegacy~~

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
        TeamID: 588639,
        Username: "Darien.Romaguera",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsAddOrUpdateMembershipForUser

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#add-or-update-team-membership-for-a-user>

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
    res, err := s.Teams.TeamsAddOrUpdateMembershipForUser(ctx, operations.TeamsAddOrUpdateMembershipForUserRequest{
        RequestBody: &operations.TeamsAddOrUpdateMembershipForUserRequestBody{
            Role: operations.TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnumMaintainer.ToPointer(),
        },
        TeamID: 620500,
        Username: "Rolando94",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## TeamsAddOrUpdateProjectPermissions

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#add-or-update-team-project-permissions>

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
    res, err := s.Teams.TeamsAddOrUpdateProjectPermissions(ctx, operations.TeamsAddOrUpdateProjectPermissionsRequest{
        RequestBody: &operations.TeamsAddOrUpdateProjectPermissionsRequestBody{
            Permission: operations.TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnumRead.ToPointer(),
        },
        Accept: "quo",
        ProjectID: 931077,
        TeamID: 848346,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsAddOrUpdateRepoPermissions

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#add-or-update-team-repository-permissions>

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
    res, err := s.Teams.TeamsAddOrUpdateRepoPermissions(ctx, operations.TeamsAddOrUpdateRepoPermissionsRequest{
        RequestBody: &operations.TeamsAddOrUpdateRepoPermissionsRequestBody{
            Permission: operations.TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnumAdmin.ToPointer(),
        },
        Owner: "dignissimos",
        Repo: "vero",
        TeamID: 185348,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsCheckPermissionsForProject

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#check-team-permissions-for-a-project>

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
    res, err := s.Teams.TeamsCheckPermissionsForProject(ctx, operations.TeamsCheckPermissionsForProjectRequest{
        Accept: "consectetur",
        ProjectID: 995816,
        TeamID: 128696,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProject != nil {
        // handle response
    }
}
```

## TeamsCheckPermissionsForRepo

**Note**: Repositories inherited through a parent team will also be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#check-team-permissions-for-a-repository>

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
    res, err := s.Teams.TeamsCheckPermissionsForRepo(ctx, operations.TeamsCheckPermissionsForRepoRequest{
        Owner: "explicabo",
        Repo: "exercitationem",
        TeamID: 471457,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepository != nil {
        // handle response
    }
}
```

## TeamsCreate

To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-team>

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
            Description: sdk.String("non"),
            Maintainers: []string{
                "illo",
            },
            Name: "Doug Wintheiser",
            ParentTeamID: sdk.Int64(450224),
            Permission: operations.TeamsCreateRequestBodyPermissionEnumPush.ToPointer(),
            Privacy: operations.TeamsCreateRequestBodyPrivacyEnumSecret.ToPointer(),
            RepoNames: []string{
                "repudiandae",
                "modi",
            },
        },
        Org: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## TeamsCreateDiscussion

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-discussion>

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
    res, err := s.Teams.TeamsCreateDiscussion(ctx, operations.TeamsCreateDiscussionRequest{
        RequestBody: operations.TeamsCreateDiscussionRequestBody{
            Body: "explicabo",
            Private: sdk.Bool(false),
            Title: "Dr.",
        },
        TeamID: 525809,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## TeamsCreateDiscussionComment

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-discussion-comment>

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
    res, err := s.Teams.TeamsCreateDiscussionComment(ctx, operations.TeamsCreateDiscussionCommentRequest{
        RequestBody: operations.TeamsCreateDiscussionCommentRequestBody{
            Body: "aperiam",
        },
        DiscussionNumber: 141817,
        TeamID: 535802,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## TeamsDelete

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#delete-a-team>

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
    res, err := s.Teams.TeamsDelete(ctx, operations.TeamsDeleteRequest{
        TeamID: 316730,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsDeleteDiscussion

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#delete-a-discussion>

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
    res, err := s.Teams.TeamsDeleteDiscussion(ctx, operations.TeamsDeleteDiscussionRequest{
        DiscussionNumber: 452730,
        TeamID: 626707,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsDeleteDiscussionComment

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#delete-a-discussion-comment>

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
    res, err := s.Teams.TeamsDeleteDiscussionComment(ctx, operations.TeamsDeleteDiscussionCommentRequest{
        CommentNumber: 326118,
        DiscussionNumber: 727544,
        TeamID: 300189,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsGet

Get a team

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#get-a-team>

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
    res, err := s.Teams.TeamsGet(ctx, operations.TeamsGetRequest{
        TeamID: 24272,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## TeamsGetByName

Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-team-by-name>

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
        Org: "modi",
        TeamSlug: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## TeamsGetDiscussion

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-discussion>

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
    res, err := s.Teams.TeamsGetDiscussion(ctx, operations.TeamsGetDiscussionRequest{
        DiscussionNumber: 199529,
        TeamID: 652125,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## TeamsGetDiscussionComment

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-discussion-comment>

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
    res, err := s.Teams.TeamsGetDiscussionComment(ctx, operations.TeamsGetDiscussionCommentRequest{
        CommentNumber: 492632,
        DiscussionNumber: 853246,
        TeamID: 345138,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

## ~~TeamsGetMemberLegacy~~

The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-member-legacy>

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
        TeamID: 475325,
        Username: "Ervin26",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsGetMembershipForUser

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-membership-for-a-user>

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
    res, err := s.Teams.TeamsGetMembershipForUser(ctx, operations.TeamsGetMembershipForUserRequest{
        TeamID: 13865,
        Username: "Adrain.Veum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamMembership != nil {
        // handle response
    }
}
```

## TeamsList

Lists all teams in an organization that are visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-teams>

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
        Org: "numquam",
        Page: sdk.Int64(677045),
        PerPage: sdk.Int64(823718),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## TeamsListChild

List child teams

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-child-teams>

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
    res, err := s.Teams.TeamsListChild(ctx, operations.TeamsListChildRequest{
        Page: sdk.Int64(452399),
        PerPage: sdk.Int64(232772),
        TeamID: 200637,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Team2s != nil {
        // handle response
    }
}
```

## TeamsListDiscussionComments

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-discussion-comments>

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
    res, err := s.Teams.TeamsListDiscussionComments(ctx, operations.TeamsListDiscussionCommentsRequest{
        Direction: operations.TeamsListDiscussionCommentsDirectionEnumAsc.ToPointer(),
        DiscussionNumber: 929476,
        Page: sdk.Int64(791228),
        PerPage: sdk.Int64(122662),
        TeamID: 715143,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComments != nil {
        // handle response
    }
}
```

## TeamsListDiscussions

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-discussions>

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
    res, err := s.Teams.TeamsListDiscussions(ctx, operations.TeamsListDiscussionsRequest{
        Direction: operations.TeamsListDiscussionsDirectionEnumAsc.ToPointer(),
        Page: sdk.Int64(558051),
        PerPage: sdk.Int64(91728),
        TeamID: 704948,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussions != nil {
        // handle response
    }
}
```

## TeamsListForAuthenticatedUser

List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-teams-for-the-authenticated-user>

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
        Page: sdk.Int64(229276),
        PerPage: sdk.Int64(418637),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFulls != nil {
        // handle response
    }
}
```

## TeamsListMembers

Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-team-members>

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
    res, err := s.Teams.TeamsListMembers(ctx, operations.TeamsListMembersRequest{
        Page: sdk.Int64(685415),
        PerPage: sdk.Int64(5310),
        Role: operations.TeamsListMembersRoleEnumMaintainer.ToPointer(),
        TeamID: 11355,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## TeamsListProjects

Lists the organization projects for a team. If you are an [authenticated](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all projects for the team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-team-projects>

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
    res, err := s.Teams.TeamsListProjects(ctx, operations.TeamsListProjectsRequest{
        Accept: "quos",
        Page: sdk.Int64(511222),
        PerPage: sdk.Int64(832239),
        TeamID: 83291,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamProjects != nil {
        // handle response
    }
}
```

## TeamsListRepos

If you are an [authenticated](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all repositories for the team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-team-repositories>

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
    res, err := s.Teams.TeamsListRepos(ctx, operations.TeamsListReposRequest{
        Page: sdk.Int64(60778),
        PerPage: sdk.Int64(51075),
        TeamID: 904827,
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

We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-member-legacy>

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
        TeamID: 965517,
        Username: "Macey.Stokes",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveMembershipForUser

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-membership-for-a-user>

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
    res, err := s.Teams.TeamsRemoveMembershipForUser(ctx, operations.TeamsRemoveMembershipForUserRequest{
        TeamID: 30208,
        Username: "Aaron.Vandervort27",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveProject

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#remove-a-project-from-a-team>

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
    res, err := s.Teams.TeamsRemoveProject(ctx, operations.TeamsRemoveProjectRequest{
        ProjectID: 185448,
        TeamID: 185897,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveRepo

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#remove-a-repository-from-a-team>

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
    res, err := s.Teams.TeamsRemoveRepo(ctx, operations.TeamsRemoveRepoRequest{
        Owner: "necessitatibus",
        Repo: "harum",
        TeamID: 126727,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsUpdate

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#update-a-team>

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
    res, err := s.Teams.TeamsUpdate(ctx, operations.TeamsUpdateRequest{
        RequestBody: &operations.TeamsUpdateRequestBody{
            Description: sdk.String("beatae"),
            Name: sdk.String("Pauline Rowe"),
            ParentTeamID: sdk.Int64(639463),
            Permission: operations.TeamsUpdateRequestBodyPermissionEnumAdmin.ToPointer(),
            Privacy: operations.TeamsUpdateRequestBodyPrivacyEnumClosed.ToPointer(),
        },
        TeamID: 192846,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamFull != nil {
        // handle response
    }
}
```

## TeamsUpdateDiscussion

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#update-a-discussion>

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
    res, err := s.Teams.TeamsUpdateDiscussion(ctx, operations.TeamsUpdateDiscussionRequest{
        RequestBody: &operations.TeamsUpdateDiscussionRequestBody{
            Body: sdk.String("aliquid"),
            Title: sdk.String("Ms."),
        },
        DiscussionNumber: 774501,
        TeamID: 498388,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussion != nil {
        // handle response
    }
}
```

## TeamsUpdateDiscussionComment

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/teams#update-a-discussion-comment>

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
    res, err := s.Teams.TeamsUpdateDiscussionComment(ctx, operations.TeamsUpdateDiscussionCommentRequest{
        RequestBody: operations.TeamsUpdateDiscussionCommentRequestBody{
            Body: "odit",
        },
        CommentNumber: 243623,
        DiscussionNumber: 967338,
        TeamID: 997918,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDiscussionComment != nil {
        // handle response
    }
}
```

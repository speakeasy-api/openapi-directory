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

We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddMemberLegacyRequest;
import org.openapis.openapi.models.operations.TeamsAddMemberLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddMemberLegacyRequest req = new TeamsAddMemberLegacyRequest(176499L, "reiciendis");            

            TeamsAddMemberLegacyResponse res = sdk.teams.teamsAddMemberLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAddOrUpdateMembershipForUser

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-or-update-team-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateMembershipForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateMembershipForUserRequest req = new TeamsAddOrUpdateMembershipForUserRequest(939161L, "reprehenderit") {{
                requestBody = new TeamsAddOrUpdateMembershipForUserRequestBody() {{
                    role = TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum.MAINTAINER;
                }};;
            }};            

            TeamsAddOrUpdateMembershipForUserResponse res = sdk.teams.teamsAddOrUpdateMembershipForUser(req);

            if (res.teamMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAddOrUpdateProjectPermissions

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#add-or-update-team-project-permissions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateProjectPermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateProjectPermissionsRequest req = new TeamsAddOrUpdateProjectPermissionsRequest("nemo", 999809L, 789770L) {{
                requestBody = new TeamsAddOrUpdateProjectPermissionsRequestBody() {{
                    permission = TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum.READ;
                }};;
            }};            

            TeamsAddOrUpdateProjectPermissionsResponse res = sdk.teams.teamsAddOrUpdateProjectPermissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAddOrUpdateRepoPermissions

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#add-or-update-team-repository-permissions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsRequest;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsRequestBody;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsAddOrUpdateRepoPermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddOrUpdateRepoPermissionsRequest req = new TeamsAddOrUpdateRepoPermissionsRequest("nihil", "deleniti", 75566L) {{
                requestBody = new TeamsAddOrUpdateRepoPermissionsRequestBody() {{
                    permission = TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum.PULL;
                }};;
            }};            

            TeamsAddOrUpdateRepoPermissionsResponse res = sdk.teams.teamsAddOrUpdateRepoPermissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCheckPermissionsForProject

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#check-team-permissions-for-a-project>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForProjectRequest;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCheckPermissionsForProjectRequest req = new TeamsCheckPermissionsForProjectRequest("assumenda", 304173L, 790463L);            

            TeamsCheckPermissionsForProjectResponse res = sdk.teams.teamsCheckPermissionsForProject(req);

            if (res.teamProject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCheckPermissionsForRepo

**Note**: If you pass the `hellcat-preview` media type, repositories inherited through a parent team will be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.19/rest/overview/media-types/) via the `Accept` header:

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#check-team-permissions-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForRepoRequest;
import org.openapis.openapi.models.operations.TeamsCheckPermissionsForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCheckPermissionsForRepoRequest req = new TeamsCheckPermissionsForRepoRequest("provident", "laudantium", 921719L);            

            TeamsCheckPermissionsForRepoResponse res = sdk.teams.teamsCheckPermissionsForRepo(req);

            if (res.minimalRepository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCreate

To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateRequest;
import org.openapis.openapi.models.operations.TeamsCreateRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsCreateRequestBodyPrivacyEnum;
import org.openapis.openapi.models.operations.TeamsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateRequest req = new TeamsCreateRequest(                new TeamsCreateRequestBody("consequatur") {{
                                description = "maxime";
                                maintainers = new String[]{{
                                    add("nam"),
                                }};
                                parentTeamId = 711991L;
                                permission = TeamsCreateRequestBodyPermissionEnum.PUSH;
                                privacy = TeamsCreateRequestBodyPrivacyEnum.CLOSED;
                                repoNames = new String[]{{
                                    add("rerum"),
                                    add("dignissimos"),
                                    add("corporis"),
                                    add("vero"),
                                }};
                            }};, "similique");            

            TeamsCreateResponse res = sdk.teams.teamsCreate(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCreateDiscussion

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionRequest;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateDiscussionRequest req = new TeamsCreateDiscussionRequest(                new TeamsCreateDiscussionRequestBody("repellendus", "iure") {{
                                private_ = false;
                            }};, 213835L);            

            TeamsCreateDiscussionResponse res = sdk.teams.teamsCreateDiscussion(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCreateDiscussionComment

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentRequest;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateDiscussionCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateDiscussionCommentRequest req = new TeamsCreateDiscussionCommentRequest(                new TeamsCreateDiscussionCommentRequestBody("commodi");, 771226L, 415033L);            

            TeamsCreateDiscussionCommentResponse res = sdk.teams.teamsCreateDiscussionComment(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsDelete

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner and you pass the `hellcat-preview` media type, deleting a parent team will delete all of its child teams as well.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#delete-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteRequest;
import org.openapis.openapi.models.operations.TeamsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteRequest req = new TeamsDeleteRequest(12171L);            

            TeamsDeleteResponse res = sdk.teams.teamsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsDeleteDiscussion

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#delete-a-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionRequest;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteDiscussionRequest req = new TeamsDeleteDiscussionRequest(32055L, 322829L);            

            TeamsDeleteDiscussionResponse res = sdk.teams.teamsDeleteDiscussion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsDeleteDiscussionComment

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#delete-a-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionCommentRequest;
import org.openapis.openapi.models.operations.TeamsDeleteDiscussionCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteDiscussionCommentRequest req = new TeamsDeleteDiscussionCommentRequest(60995L, 229567L, 849320L);            

            TeamsDeleteDiscussionCommentResponse res = sdk.teams.teamsDeleteDiscussionComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGet

Get a team

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#get-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetRequest;
import org.openapis.openapi.models.operations.TeamsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetRequest req = new TeamsGetRequest(506863L);            

            TeamsGetResponse res = sdk.teams.teamsGet(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetByName

Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-team-by-name>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetByNameRequest;
import org.openapis.openapi.models.operations.TeamsGetByNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetByNameRequest req = new TeamsGetByNameRequest("quidem", "cum");            

            TeamsGetByNameResponse res = sdk.teams.teamsGetByName(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetDiscussion

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetDiscussionRequest;
import org.openapis.openapi.models.operations.TeamsGetDiscussionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetDiscussionRequest req = new TeamsGetDiscussionRequest(230411L, 97676L);            

            TeamsGetDiscussionResponse res = sdk.teams.teamsGetDiscussion(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetDiscussionComment

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetDiscussionCommentRequest;
import org.openapis.openapi.models.operations.TeamsGetDiscussionCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetDiscussionCommentRequest req = new TeamsGetDiscussionCommentRequest(118126L, 514922L, 40710L);            

            TeamsGetDiscussionCommentResponse res = sdk.teams.teamsGetDiscussionComment(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsGetMemberLegacy~~

The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetMemberLegacyRequest;
import org.openapis.openapi.models.operations.TeamsGetMemberLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetMemberLegacyRequest req = new TeamsGetMemberLegacyRequest(938412L, "iusto");            

            TeamsGetMemberLegacyResponse res = sdk.teams.teamsGetMemberLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetMembershipForUser

If you pass the `hellcat-preview` media type, team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-team).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetMembershipForUserRequest;
import org.openapis.openapi.models.operations.TeamsGetMembershipForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetMembershipForUserRequest req = new TeamsGetMembershipForUserRequest(228646L, "provident");            

            TeamsGetMembershipForUserResponse res = sdk.teams.teamsGetMembershipForUser(req);

            if (res.teamMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsList

Lists all teams in an organization that are visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-teams>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListRequest;
import org.openapis.openapi.models.operations.TeamsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListRequest req = new TeamsListRequest("dolorum") {{
                page = 897956L;
                perPage = 592880L;
            }};            

            TeamsListResponse res = sdk.teams.teamsList(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListChild

You must use the `hellcat-preview` media type to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-child-teams>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListChildRequest;
import org.openapis.openapi.models.operations.TeamsListChildResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListChildRequest req = new TeamsListChildRequest(920272L) {{
                page = 10063L;
                perPage = 366244L;
            }};            

            TeamsListChildResponse res = sdk.teams.teamsListChild(req);

            if (res.team2s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListDiscussionComments

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-discussion-comments>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListDiscussionCommentsDirectionEnum;
import org.openapis.openapi.models.operations.TeamsListDiscussionCommentsRequest;
import org.openapis.openapi.models.operations.TeamsListDiscussionCommentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListDiscussionCommentsRequest req = new TeamsListDiscussionCommentsRequest(475826L, 930840L) {{
                direction = TeamsListDiscussionCommentsDirectionEnum.DESC;
                page = 545779L;
                perPage = 43975L;
            }};            

            TeamsListDiscussionCommentsResponse res = sdk.teams.teamsListDiscussionComments(req);

            if (res.teamDiscussionComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListDiscussions

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-discussions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListDiscussionsDirectionEnum;
import org.openapis.openapi.models.operations.TeamsListDiscussionsRequest;
import org.openapis.openapi.models.operations.TeamsListDiscussionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListDiscussionsRequest req = new TeamsListDiscussionsRequest(574092L) {{
                direction = TeamsListDiscussionsDirectionEnum.DESC;
                page = 178635L;
                perPage = 520081L;
            }};            

            TeamsListDiscussionsResponse res = sdk.teams.teamsListDiscussions(req);

            if (res.teamDiscussions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListForAuthenticatedUser

List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-teams-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.TeamsListForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListForAuthenticatedUserRequest req = new TeamsListForAuthenticatedUserRequest() {{
                page = 115861L;
                perPage = 30661L;
            }};            

            TeamsListForAuthenticatedUserResponse res = sdk.teams.teamsListForAuthenticatedUser(req);

            if (res.teamFulls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListMembers

If you pass the `hellcat-preview` media type, team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-team-members>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListMembersRequest;
import org.openapis.openapi.models.operations.TeamsListMembersResponse;
import org.openapis.openapi.models.operations.TeamsListMembersRoleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListMembersRequest req = new TeamsListMembersRequest(244376L) {{
                page = 224413L;
                perPage = 124289L;
                role = TeamsListMembersRoleEnum.ALL;
            }};            

            TeamsListMembersResponse res = sdk.teams.teamsListMembers(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListProjects

Lists the organization projects for a team. If you are an [authenticated](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all projects for the team. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-team-projects>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListProjectsRequest;
import org.openapis.openapi.models.operations.TeamsListProjectsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListProjectsRequest req = new TeamsListProjectsRequest("dolor", 582320L) {{
                page = 539813L;
                perPage = 107472L;
            }};            

            TeamsListProjectsResponse res = sdk.teams.teamsListProjects(req);

            if (res.teamProjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListRepos

**Note**: If you pass the `hellcat-preview` media type, the response will include any repositories inherited through a parent team.

If you are an [authenticated](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all repositories for the team.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-team-repositories>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListReposRequest;
import org.openapis.openapi.models.operations.TeamsListReposResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListReposRequest req = new TeamsListReposRequest(868255L) {{
                page = 287544L;
                perPage = 794988L;
            }};            

            TeamsListReposResponse res = sdk.teams.teamsListRepos(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~teamsRemoveMemberLegacy~~

The "Remove team member" endpoint (described below) is deprecated.

We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-member-legacy>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveMemberLegacyRequest;
import org.openapis.openapi.models.operations.TeamsRemoveMemberLegacyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveMemberLegacyRequest req = new TeamsRemoveMemberLegacyRequest(456704L, "voluptatem");            

            TeamsRemoveMemberLegacyResponse res = sdk.teams.teamsRemoveMemberLegacy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsRemoveMembershipForUser

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveMembershipForUserRequest;
import org.openapis.openapi.models.operations.TeamsRemoveMembershipForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveMembershipForUserRequest req = new TeamsRemoveMembershipForUserRequest(20950L, "rerum");            

            TeamsRemoveMembershipForUserResponse res = sdk.teams.teamsRemoveMembershipForUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsRemoveProject

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#remove-a-project-from-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveProjectRequest;
import org.openapis.openapi.models.operations.TeamsRemoveProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveProjectRequest req = new TeamsRemoveProjectRequest(411615L, 46791L);            

            TeamsRemoveProjectResponse res = sdk.teams.teamsRemoveProject(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsRemoveRepo

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#remove-a-repository-from-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveRepoRequest;
import org.openapis.openapi.models.operations.TeamsRemoveRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveRepoRequest req = new TeamsRemoveRepoRequest("dignissimos", "repellat", 243678L);            

            TeamsRemoveRepoResponse res = sdk.teams.teamsRemoveRepo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdate

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#update-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateRequest;
import org.openapis.openapi.models.operations.TeamsUpdateRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateRequestBodyPermissionEnum;
import org.openapis.openapi.models.operations.TeamsUpdateRequestBodyPrivacyEnum;
import org.openapis.openapi.models.operations.TeamsUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateRequest req = new TeamsUpdateRequest(784115L) {{
                requestBody = new TeamsUpdateRequestBody() {{
                    description = "provident";
                    name = "Vicky Kuhn";
                    parentTeamId = 620500L;
                    permission = TeamsUpdateRequestBodyPermissionEnum.ADMIN;
                    privacy = TeamsUpdateRequestBodyPrivacyEnum.CLOSED;
                }};;
            }};            

            TeamsUpdateResponse res = sdk.teams.teamsUpdate(req);

            if (res.teamFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdateDiscussion

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#update-a-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionRequest;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateDiscussionRequest req = new TeamsUpdateDiscussionRequest(228857L, 948541L) {{
                requestBody = new TeamsUpdateDiscussionRequestBody() {{
                    body = "aspernatur";
                    title = "Miss";
                }};;
            }};            

            TeamsUpdateDiscussionResponse res = sdk.teams.teamsUpdateDiscussion(req);

            if (res.teamDiscussion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdateDiscussionComment

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/teams#update-a-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentRequest;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateDiscussionCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateDiscussionCommentRequest req = new TeamsUpdateDiscussionCommentRequest(                new TeamsUpdateDiscussionCommentRequestBody("itaque");, 848346L, 670762L, 490420L);            

            TeamsUpdateDiscussionCommentResponse res = sdk.teams.teamsUpdateDiscussionComment(req);

            if (res.teamDiscussionComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

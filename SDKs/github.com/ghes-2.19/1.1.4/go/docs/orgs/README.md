# Orgs

## Overview

Interact with GitHub Orgs.

### Available Operations

* [OrgsCheckMembershipForUser](#orgscheckmembershipforuser) - Check organization membership for a user
* [OrgsCheckPublicMembershipForUser](#orgscheckpublicmembershipforuser) - Check public organization membership for a user
* [OrgsConvertMemberToOutsideCollaborator](#orgsconvertmembertooutsidecollaborator) - Convert an organization member to outside collaborator
* [OrgsCreateWebhook](#orgscreatewebhook) - Create an organization webhook
* [OrgsDeleteWebhook](#orgsdeletewebhook) - Delete an organization webhook
* [OrgsGet](#orgsget) - Get an organization
* [OrgsGetMembershipForAuthenticatedUser](#orgsgetmembershipforauthenticateduser) - Get an organization membership for the authenticated user
* [OrgsGetMembershipForUser](#orgsgetmembershipforuser) - Get organization membership for a user
* [OrgsGetWebhook](#orgsgetwebhook) - Get an organization webhook
* [OrgsList](#orgslist) - List organizations
* [OrgsListAppInstallations](#orgslistappinstallations) - List app installations for an organization
* [OrgsListForAuthenticatedUser](#orgslistforauthenticateduser) - List organizations for the authenticated user
* [OrgsListForUser](#orgslistforuser) - List organizations for a user
* [OrgsListMembers](#orgslistmembers) - List organization members
* [OrgsListMembershipsForAuthenticatedUser](#orgslistmembershipsforauthenticateduser) - List organization memberships for the authenticated user
* [OrgsListOutsideCollaborators](#orgslistoutsidecollaborators) - List outside collaborators for an organization
* [OrgsListPublicMembers](#orgslistpublicmembers) - List public organization members
* [OrgsListWebhooks](#orgslistwebhooks) - List organization webhooks
* [OrgsPingWebhook](#orgspingwebhook) - Ping an organization webhook
* [OrgsRemoveMember](#orgsremovemember) - Remove an organization member
* [OrgsRemoveMembershipForUser](#orgsremovemembershipforuser) - Remove organization membership for a user
* [OrgsRemoveOutsideCollaborator](#orgsremoveoutsidecollaborator) - Remove outside collaborator from an organization
* [OrgsRemovePublicMembershipForAuthenticatedUser](#orgsremovepublicmembershipforauthenticateduser) - Remove public organization membership for the authenticated user
* [OrgsSetMembershipForUser](#orgssetmembershipforuser) - Set organization membership for a user
* [OrgsSetPublicMembershipForAuthenticatedUser](#orgssetpublicmembershipforauthenticateduser) - Set public organization membership for the authenticated user
* [OrgsUpdate](#orgsupdate) - Update an organization
* [OrgsUpdateMembershipForAuthenticatedUser](#orgsupdatemembershipforauthenticateduser) - Update an organization membership for the authenticated user
* [OrgsUpdateWebhook](#orgsupdatewebhook) - Update an organization webhook

## OrgsCheckMembershipForUser

Check if a user is, publicly or privately, a member of the organization.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#check-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsCheckMembershipForUser(ctx, operations.OrgsCheckMembershipForUserRequest{
        Org: "dolorum",
        Username: "David50",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsCheckPublicMembershipForUser

Check public organization membership for a user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#check-public-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsCheckPublicMembershipForUser(ctx, operations.OrgsCheckPublicMembershipForUserRequest{
        Org: "in",
        Username: "Elenor_Haag35",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsConvertMemberToOutsideCollaborator

When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator>

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
    res, err := s.Orgs.OrgsConvertMemberToOutsideCollaborator(ctx, operations.OrgsConvertMemberToOutsideCollaboratorRequest{
        Org: "adipisci",
        Username: "Myron_Kuvalis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsConvertMemberToOutsideCollaborator202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsCreateWebhook

Here's how you can create a hook that posts payloads in JSON format:

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#create-an-organization-webhook>

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
    res, err := s.Orgs.OrgsCreateWebhook(ctx, operations.OrgsCreateWebhookRequest{
        RequestBody: operations.OrgsCreateWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: operations.OrgsCreateWebhookRequestBodyConfig{
                ContentType: sdk.String(""json""),
                InsecureSsl: &shared.WebhookConfigInsecureSsl{},
                Password: sdk.String(""password""),
                Secret: sdk.String(""********""),
                URL: "https://example.com/webhook",
                Username: sdk.String(""kdaigle""),
            },
            Events: []string{
                "culpa",
            },
            Name: "Dewey Leannon",
        },
        Org: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

## OrgsDeleteWebhook

Delete an organization webhook

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#delete-an-organization-webhook>

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
    res, err := s.Orgs.OrgsDeleteWebhook(ctx, operations.OrgsDeleteWebhookRequest{
        HookID: 24619,
        Org: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsGet

To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).

GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-an-organization>

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
    res, err := s.Orgs.OrgsGet(ctx, operations.OrgsGetRequest{
        Org: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationFull != nil {
        // handle response
    }
}
```

## OrgsGetMembershipForAuthenticatedUser

Get an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsGetMembershipForAuthenticatedUser(ctx, operations.OrgsGetMembershipForAuthenticatedUserRequest{
        Org: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMembership != nil {
        // handle response
    }
}
```

## OrgsGetMembershipForUser

In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsGetMembershipForUser(ctx, operations.OrgsGetMembershipForUserRequest{
        Org: "explicabo",
        Username: "Zane_Quigley",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMembership != nil {
        // handle response
    }
}
```

## OrgsGetWebhook

Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-an-organization-webhook>

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
    res, err := s.Orgs.OrgsGetWebhook(ctx, operations.OrgsGetWebhookRequest{
        HookID: 70869,
        Org: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

## OrgsList

Lists all organizations, in the order that they were created on GitHub Enterprise Server.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organizations>

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
    res, err := s.Orgs.OrgsList(ctx, operations.OrgsListRequest{
        PerPage: sdk.Int64(292794),
        Since: sdk.Int64(671907),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimples != nil {
        // handle response
    }
}
```

## OrgsListAppInstallations

Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-app-installations-for-an-organization>

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
    res, err := s.Orgs.OrgsListAppInstallations(ctx, operations.OrgsListAppInstallationsRequest{
        Accept: "sed",
        Org: "in",
        Page: sdk.Int64(417486),
        PerPage: sdk.Int64(696077),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsListAppInstallations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsListForAuthenticatedUser

List organizations for the authenticated user.

**OAuth scope requirements**

This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organizations-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsListForAuthenticatedUser(ctx, operations.OrgsListForAuthenticatedUserRequest{
        Page: sdk.Int64(131289),
        PerPage: sdk.Int64(378326),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimples != nil {
        // handle response
    }
}
```

## OrgsListForUser

List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.

This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organizations-for-a-user>

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
    res, err := s.Orgs.OrgsListForUser(ctx, operations.OrgsListForUserRequest{
        Page: sdk.Int64(604118),
        PerPage: sdk.Int64(100032),
        Username: "Geovany.Willms96",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimples != nil {
        // handle response
    }
}
```

## OrgsListMembers

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organization-members>

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
    res, err := s.Orgs.OrgsListMembers(ctx, operations.OrgsListMembersRequest{
        Filter: operations.OrgsListMembersFilterEnumTwofaDisabled.ToPointer(),
        Org: "corrupti",
        Page: sdk.Int64(979574),
        PerPage: sdk.Int64(274823),
        Role: operations.OrgsListMembersRoleEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListMembershipsForAuthenticatedUser

List organization memberships for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsListMembershipsForAuthenticatedUser(ctx, operations.OrgsListMembershipsForAuthenticatedUserRequest{
        Page: sdk.Int64(592231),
        PerPage: sdk.Int64(258702),
        State: operations.OrgsListMembershipsForAuthenticatedUserStateEnumPending.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMemberships != nil {
        // handle response
    }
}
```

## OrgsListOutsideCollaborators

List all users who are outside collaborators of an organization.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-outside-collaborators-for-an-organization>

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
    res, err := s.Orgs.OrgsListOutsideCollaborators(ctx, operations.OrgsListOutsideCollaboratorsRequest{
        Filter: operations.OrgsListOutsideCollaboratorsFilterEnumTwofaDisabled.ToPointer(),
        Org: "ea",
        Page: sdk.Int64(579912),
        PerPage: sdk.Int64(552078),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListPublicMembers

Members of an organization can choose to have their membership publicized or not.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-public-organization-members>

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
    res, err := s.Orgs.OrgsListPublicMembers(ctx, operations.OrgsListPublicMembersRequest{
        Org: "voluptatibus",
        Page: sdk.Int64(271653),
        PerPage: sdk.Int64(273009),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListWebhooks

List organization webhooks

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organization-webhooks>

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
    res, err := s.Orgs.OrgsListWebhooks(ctx, operations.OrgsListWebhooksRequest{
        Org: "voluptate",
        Page: sdk.Int64(970076),
        PerPage: sdk.Int64(401713),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHooks != nil {
        // handle response
    }
}
```

## OrgsPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@2.19/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#ping-an-organization-webhook>

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
    res, err := s.Orgs.OrgsPingWebhook(ctx, operations.OrgsPingWebhookRequest{
        HookID: 25497,
        Org: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemoveMember

Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#remove-an-organization-member>

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
    res, err := s.Orgs.OrgsRemoveMember(ctx, operations.OrgsRemoveMemberRequest{
        Org: "officiis",
        Username: "Jodie27",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemoveMembershipForUser

In order to remove a user's membership with an organization, the authenticated user must be an organization owner.

If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#remove-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsRemoveMembershipForUser(ctx, operations.OrgsRemoveMembershipForUserRequest{
        Org: "ipsam",
        Username: "Solon75",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemoveOutsideCollaborator

Removing a user from this list will remove them from all the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#remove-outside-collaborator-from-an-organization>

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
    res, err := s.Orgs.OrgsRemoveOutsideCollaborator(ctx, operations.OrgsRemoveOutsideCollaboratorRequest{
        Org: "error",
        Username: "Estell_Harber86",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemovePublicMembershipForAuthenticatedUser

Remove public organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsRemovePublicMembershipForAuthenticatedUser(ctx, operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest{
        Org: "magni",
        Username: "Amanda32",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsSetMembershipForUser

Only authenticated organization owners can add a member to the organization or update the member's role.

*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
    
*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.

**Rate limits**

To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#set-organization-membership-for-a-user>

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
    res, err := s.Orgs.OrgsSetMembershipForUser(ctx, operations.OrgsSetMembershipForUserRequest{
        RequestBody: &operations.OrgsSetMembershipForUserRequestBody{
            Role: operations.OrgsSetMembershipForUserRequestBodyRoleEnumAdmin.ToPointer(),
        },
        Org: "officiis",
        Username: "Bella_Langworth",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMembership != nil {
        // handle response
    }
}
```

## OrgsSetPublicMembershipForAuthenticatedUser

The user can publicize their own membership. (A user cannot publicize the membership for another user.)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsSetPublicMembershipForAuthenticatedUser(ctx, operations.OrgsSetPublicMembershipForAuthenticatedUserRequest{
        Org: "cum",
        Username: "Gia_Parisian",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsUpdate

**Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs/#update-an-organization>

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
    res, err := s.Orgs.OrgsUpdate(ctx, operations.OrgsUpdateRequest{
        RequestBody: &operations.OrgsUpdateRequestBody{
            BillingEmail: sdk.String("hic"),
            Blog: sdk.String(""http://github.blog""),
            Company: sdk.String("Trantow, Doyle and Pagac"),
            DefaultRepositoryPermission: operations.OrgsUpdateRequestBodyDefaultRepositoryPermissionEnumWrite.ToPointer(),
            Description: sdk.String("officia"),
            Email: sdk.String("Katelyn54@hotmail.com"),
            HasOrganizationProjects: sdk.Bool(false),
            HasRepositoryProjects: sdk.Bool(false),
            Location: sdk.String("fugit"),
            MembersAllowedRepositoryCreationType: operations.OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnumAll.ToPointer(),
            MembersCanCreateInternalRepositories: sdk.Bool(false),
            MembersCanCreatePrivateRepositories: sdk.Bool(false),
            MembersCanCreatePublicRepositories: sdk.Bool(false),
            MembersCanCreateRepositories: sdk.Bool(false),
            Name: sdk.String("George Nicolas"),
            TwitterUsername: sdk.String("consequatur"),
        },
        Org: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationFull != nil {
        // handle response
    }
}
```

## OrgsUpdateMembershipForAuthenticatedUser

Update an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user>

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
    res, err := s.Orgs.OrgsUpdateMembershipForAuthenticatedUser(ctx, operations.OrgsUpdateMembershipForAuthenticatedUserRequest{
        RequestBody: operations.OrgsUpdateMembershipForAuthenticatedUserRequestBody{
            State: operations.OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnumActive,
        },
        Org: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgMembership != nil {
        // handle response
    }
}
```

## OrgsUpdateWebhook

Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-an-organization-webhook>

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
    res, err := s.Orgs.OrgsUpdateWebhook(ctx, operations.OrgsUpdateWebhookRequest{
        RequestBody: &operations.OrgsUpdateWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: &operations.OrgsUpdateWebhookRequestBodyConfig{
                ContentType: sdk.String(""json""),
                InsecureSsl: &shared.WebhookConfigInsecureSsl{},
                Secret: sdk.String(""********""),
                URL: "https://example.com/webhook",
            },
            Events: []string{
                "voluptatum",
            },
            Name: sdk.String(""web""),
        },
        HookID: 558065,
        Org: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

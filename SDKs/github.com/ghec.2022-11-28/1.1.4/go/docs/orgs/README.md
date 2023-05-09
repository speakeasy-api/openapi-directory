# Orgs

## Overview

Interact with GitHub Orgs.

### Available Operations

* [AnnouncementBannersGetAnnouncementBannerForOrg](#announcementbannersgetannouncementbannerfororg) - Get announcement banner for organization
* [AnnouncementBannersRemoveAnnouncementBannerForOrg](#announcementbannersremoveannouncementbannerfororg) - Remove announcement banner from organization
* [AnnouncementBannersSetAnnouncementBannerForOrg](#announcementbannerssetannouncementbannerfororg) - Set announcement banner for organization
* [OrgsAddSecurityManagerTeam](#orgsaddsecuritymanagerteam) - Add a security manager team
* [OrgsBlockUser](#orgsblockuser) - Block a user from an organization
* [OrgsCancelInvitation](#orgscancelinvitation) - Cancel an organization invitation
* [OrgsCheckBlockedUser](#orgscheckblockeduser) - Check if a user is blocked by an organization
* [OrgsCheckMembershipForUser](#orgscheckmembershipforuser) - Check organization membership for a user
* [OrgsCheckPublicMembershipForUser](#orgscheckpublicmembershipforuser) - Check public organization membership for a user
* [OrgsConvertMemberToOutsideCollaborator](#orgsconvertmembertooutsidecollaborator) - Convert an organization member to outside collaborator
* [OrgsCreateCustomRole](#orgscreatecustomrole) - Create a custom role
* [OrgsCreateInvitation](#orgscreateinvitation) - Create an organization invitation
* [OrgsCreateWebhook](#orgscreatewebhook) - Create an organization webhook
* [OrgsDeleteCustomRole](#orgsdeletecustomrole) - Delete a custom role
* [OrgsDeleteWebhook](#orgsdeletewebhook) - Delete an organization webhook
* [OrgsEnableOrDisableSecurityProductOnAllOrgRepos](#orgsenableordisablesecurityproductonallorgrepos) - Enable or disable a security feature for an organization
* [OrgsGet](#orgsget) - Get an organization
* [OrgsGetAuditLog](#orgsgetauditlog) - Get the audit log for an organization
* [OrgsGetCustomRole](#orgsgetcustomrole) - Get a custom role
* [OrgsGetMembershipForAuthenticatedUser](#orgsgetmembershipforauthenticateduser) - Get an organization membership for the authenticated user
* [OrgsGetMembershipForUser](#orgsgetmembershipforuser) - Get organization membership for a user
* [OrgsGetWebhook](#orgsgetwebhook) - Get an organization webhook
* [OrgsGetWebhookConfigForOrg](#orgsgetwebhookconfigfororg) - Get a webhook configuration for an organization
* [OrgsGetWebhookDelivery](#orgsgetwebhookdelivery) - Get a webhook delivery for an organization webhook
* [OrgsList](#orgslist) - List organizations
* [OrgsListAppInstallations](#orgslistappinstallations) - List app installations for an organization
* [OrgsListBlockedUsers](#orgslistblockedusers) - List users blocked by an organization
* [OrgsListCustomRoles](#orgslistcustomroles) - List custom repository roles in an organization
* [OrgsListFailedInvitations](#orgslistfailedinvitations) - List failed organization invitations
* [OrgsListFineGrainedPermissions](#orgslistfinegrainedpermissions) - List repository fine-grained permissions for an organization
* [OrgsListForAuthenticatedUser](#orgslistforauthenticateduser) - List organizations for the authenticated user
* [OrgsListForUser](#orgslistforuser) - List organizations for a user
* [OrgsListInvitationTeams](#orgslistinvitationteams) - List organization invitation teams
* [OrgsListMembers](#orgslistmembers) - List organization members
* [OrgsListMembershipsForAuthenticatedUser](#orgslistmembershipsforauthenticateduser) - List organization memberships for the authenticated user
* [OrgsListOutsideCollaborators](#orgslistoutsidecollaborators) - List outside collaborators for an organization
* [OrgsListPendingInvitations](#orgslistpendinginvitations) - List pending organization invitations
* [OrgsListPublicMembers](#orgslistpublicmembers) - List public organization members
* [OrgsListSamlSsoAuthorizations](#orgslistsamlssoauthorizations) - List SAML SSO authorizations for an organization
* [OrgsListSecurityManagerTeams](#orgslistsecuritymanagerteams) - List security manager teams
* [OrgsListWebhookDeliveries](#orgslistwebhookdeliveries) - List deliveries for an organization webhook
* [OrgsListWebhooks](#orgslistwebhooks) - List organization webhooks
* [OrgsPingWebhook](#orgspingwebhook) - Ping an organization webhook
* [OrgsRedeliverWebhookDelivery](#orgsredeliverwebhookdelivery) - Redeliver a delivery for an organization webhook
* [OrgsRemoveMember](#orgsremovemember) - Remove an organization member
* [OrgsRemoveMembershipForUser](#orgsremovemembershipforuser) - Remove organization membership for a user
* [OrgsRemoveOutsideCollaborator](#orgsremoveoutsidecollaborator) - Remove outside collaborator from an organization
* [OrgsRemovePublicMembershipForAuthenticatedUser](#orgsremovepublicmembershipforauthenticateduser) - Remove public organization membership for the authenticated user
* [OrgsRemoveSamlSsoAuthorization](#orgsremovesamlssoauthorization) - Remove a SAML SSO authorization for an organization
* [OrgsRemoveSecurityManagerTeam](#orgsremovesecuritymanagerteam) - Remove a security manager team
* [OrgsSetMembershipForUser](#orgssetmembershipforuser) - Set organization membership for a user
* [OrgsSetPublicMembershipForAuthenticatedUser](#orgssetpublicmembershipforauthenticateduser) - Set public organization membership for the authenticated user
* [OrgsUnblockUser](#orgsunblockuser) - Unblock a user from an organization
* [OrgsUpdate](#orgsupdate) - Update an organization
* [OrgsUpdateCustomRole](#orgsupdatecustomrole) - Update a custom role
* [OrgsUpdateMembershipForAuthenticatedUser](#orgsupdatemembershipforauthenticateduser) - Update an organization membership for the authenticated user
* [OrgsUpdateWebhook](#orgsupdatewebhook) - Update an organization webhook
* [OrgsUpdateWebhookConfigForOrg](#orgsupdatewebhookconfigfororg) - Update a webhook configuration for an organization

## AnnouncementBannersGetAnnouncementBannerForOrg

Gets the announcement banner currently set for the organization. Only returns the announcement banner set at the
organization level. Organization members may also see an enterprise-level announcement banner. To get an
announcement banner displayed at the enterprise level, use the enterprise-level endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/announcement-banners#get-enterprise-announcement-banner-for-org>

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
    res, err := s.Orgs.AnnouncementBannersGetAnnouncementBannerForOrg(ctx, operations.AnnouncementBannersGetAnnouncementBannerForOrgRequest{
        Org: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnnouncementBanner != nil {
        // handle response
    }
}
```

## AnnouncementBannersRemoveAnnouncementBannerForOrg

Removes the announcement banner currently set for the organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/announcement-banners/organizations#remove-announcement-banner-from-organization>

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
    res, err := s.Orgs.AnnouncementBannersRemoveAnnouncementBannerForOrg(ctx, operations.AnnouncementBannersRemoveAnnouncementBannerForOrgRequest{
        Org: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnnouncementBannersSetAnnouncementBannerForOrg

Sets the announcement banner to display for the organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/announcement-banners/organizations#set-announcement-banner-for-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orgs.AnnouncementBannersSetAnnouncementBannerForOrg(ctx, operations.AnnouncementBannersSetAnnouncementBannerForOrgRequest{
        Announcement: shared.Announcement{
            Announcement: "Very **important** announcement about _something_.",
            ExpiresAt: types.MustTimeFromString(""2021-01-01T00:00:00.000-07:00""),
        },
        Org: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnnouncementBanner != nil {
        // handle response
    }
}
```

## OrgsAddSecurityManagerTeam

Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."

To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `write:org` scope.

GitHub Apps must have the `administration` organization read-write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#add-a-security-manager-team>

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
    res, err := s.Orgs.OrgsAddSecurityManagerTeam(ctx, operations.OrgsAddSecurityManagerTeamRequest{
        Org: "officia",
        TeamSlug: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsBlockUser

Block a user from an organization

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#block-a-user-from-an-organization>

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
    res, err := s.Orgs.OrgsBlockUser(ctx, operations.OrgsBlockUserRequest{
        Org: "tenetur",
        Username: "Brett_Satterfield67",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsCancelInvitation

Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#cancel-an-organization-invitation>

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
    res, err := s.Orgs.OrgsCancelInvitation(ctx, operations.OrgsCancelInvitationRequest{
        InvitationID: 490420,
        Org: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsCheckBlockedUser

Check if a user is blocked by an organization

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization>

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
    res, err := s.Orgs.OrgsCheckBlockedUser(ctx, operations.OrgsCheckBlockedUserRequest{
        Org: "qui",
        Username: "Darius12",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsCheckMembershipForUser

Check if a user is, publicly or privately, a member of the organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#check-organization-membership-for-a-user>

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
        Org: "exercitationem",
        Username: "Janiya7",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#check-public-organization-membership-for-a-user>

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
        Org: "hic",
        Username: "Luisa71",
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

When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/enterprise-cloud@latest//articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/enterprise-cloud@latest//admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#convert-an-organization-member-to-outside-collaborator>

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
        RequestBody: &operations.OrgsConvertMemberToOutsideCollaboratorRequestBody{
            Async: sdk.Bool(false),
        },
        Org: "in",
        Username: "Faye92",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsConvertMemberToOutsideCollaborator202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsCreateCustomRole

**Note**: This operation is in beta and is subject to change.

Creates a custom repository role that can be used by all repositories owned by the organization.

To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.

For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#create-a-custom-role>

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
    res, err := s.Orgs.OrgsCreateCustomRole(ctx, operations.OrgsCreateCustomRoleRequest{
        RequestBody: operations.OrgsCreateCustomRoleRequestBody{
            BaseRole: operations.OrgsCreateCustomRoleRequestBodyBaseRoleEnumTriage,
            Description: sdk.String("in"),
            Name: "Mr. Meghan Leffler",
            Permissions: []string{
                "voluptate",
                "similique",
            },
        },
        Org: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationCustomRepositoryRole != nil {
        // handle response
    }
}
```

## OrgsCreateInvitation

Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#create-an-organization-invitation>

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
    res, err := s.Orgs.OrgsCreateInvitation(ctx, operations.OrgsCreateInvitationRequest{
        RequestBody: &operations.OrgsCreateInvitationRequestBody{
            Email: sdk.String("Elisa43@hotmail.com"),
            InviteeID: sdk.Int64(199529),
            Role: operations.OrgsCreateInvitationRequestBodyRoleEnumDirectMember.ToPointer(),
            TeamIds: []int64{
                853246,
                345138,
            },
        },
        Org: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationInvitation != nil {
        // handle response
    }
}
```

## OrgsCreateWebhook

Here's how you can create a hook that posts payloads in JSON format:

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#create-an-organization-webhook>

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
                "reiciendis",
                "ab",
            },
            Name: "Maria Ankunding",
        },
        Org: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

## OrgsDeleteCustomRole

**Note**: This operation is in beta and is subject to change.

Deletes a custom role from an organization. Once the custom role has been deleted, any
user, team, or invitation with the deleted custom role will be reassigned the inherited role.

To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.

For more information about custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#delete-a-custom-role>

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
    res, err := s.Orgs.OrgsDeleteCustomRole(ctx, operations.OrgsDeleteCustomRoleRequest{
        Org: "numquam",
        RoleID: 677045,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsDeleteWebhook

Delete an organization webhook

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#delete-an-organization-webhook>

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
        HookID: 823718,
        Org: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsEnableOrDisableSecurityProductOnAllOrgRepos

Enables or disables the specified security feature for all repositories in an organization.

To use this endpoint, you must be an organization owner or be member of a team with the security manager role.
A token with the 'write:org' scope is also required.

GitHub Apps must have the `organization_administration:write` permission to use this endpoint.

For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#enable-or-disable-security-product-on-all-org-repos>

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
    res, err := s.Orgs.OrgsEnableOrDisableSecurityProductOnAllOrgRepos(ctx, operations.OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest{
        Enablement: shared.OrgSecurityProductEnablementEnumEnableAll,
        Org: "nesciunt",
        SecurityProduct: shared.SecurityProductEnumDependabotAlerts,
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

To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/enterprise-cloud@latest//articles/securing-your-account-with-two-factor-authentication-2fa/).

GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Cloud plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Cloud plan information' below."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-an-organization>

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
        Org: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationFull != nil {
        // handle response
    }
}
```

## OrgsGetAuditLog

Gets the audit log for an organization. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization)."

To use this endpoint, you must be an organization owner, and you must use an access token with the `read:audit_log` scope. GitHub Apps must have the `organization_administration` read permission to use this endpoint.

By default, the response includes up to 30 events from the past three months. Use the `phrase` parameter to filter results and retrieve older events. For example, use the `phrase` parameter with the `created` qualifier to filter events based on when the events occurred. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/enterprise-cloud@latest//organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)."

Use pagination to retrieve fewer or more than 30 events. For more information, see "[Resources in the REST API](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-audit-log>

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
    res, err := s.Orgs.OrgsGetAuditLog(ctx, operations.OrgsGetAuditLogRequest{
        After: sdk.String("minus"),
        Before: sdk.String("sunt"),
        Include: shared.AuditLogIncludeEnumAll.ToPointer(),
        Order: shared.AuditLogOrderEnumDesc.ToPointer(),
        Org: "quas",
        PerPage: sdk.Int64(91728),
        Phrase: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogEvents != nil {
        // handle response
    }
}
```

## OrgsGetCustomRole

**Note**: This operation is in beta and is subject to change.

Gets a custom repository role that is available to all repositories owned by the organization.

To use this operation, the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.

For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs/#get-a-custom-role>

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
    res, err := s.Orgs.OrgsGetCustomRole(ctx, operations.OrgsGetCustomRoleRequest{
        Org: "amet",
        RoleID: 418637,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationCustomRepositoryRole != nil {
        // handle response
    }
}
```

## OrgsGetMembershipForAuthenticatedUser

Get an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user>

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
        Org: "fuga",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-organization-membership-for-a-user>

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
        Org: "alias",
        Username: "Juliana_Anderson",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-an-organization-webhook>

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
        HookID: 832239,
        Org: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

## OrgsGetWebhookConfigForOrg

Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-a-webhook-configuration-for-an-organization>

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
    res, err := s.Orgs.OrgsGetWebhookConfigForOrg(ctx, operations.OrgsGetWebhookConfigForOrgRequest{
        HookID: 60778,
        Org: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

## OrgsGetWebhookDelivery

Returns a delivery for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook>

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
    res, err := s.Orgs.OrgsGetWebhookDelivery(ctx, operations.OrgsGetWebhookDeliveryRequest{
        DeliveryID: 904827,
        HookID: 965517,
        Org: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookDelivery != nil {
        // handle response
    }
}
```

## OrgsList

Lists all organizations, in the order that they were created on GitHub Enterprise Cloud.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organizations>

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
        PerPage: sdk.Int64(859003),
        Since: sdk.Int64(640907),
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-app-installations-for-an-organization>

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
        Org: "sed",
        Page: sdk.Int64(30208),
        PerPage: sdk.Int64(664),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsListAppInstallations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsListBlockedUsers

List the users blocked by an organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-users-blocked-by-an-organization>

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
    res, err := s.Orgs.OrgsListBlockedUsers(ctx, operations.OrgsListBlockedUsersRequest{
        Org: "eveniet",
        Page: sdk.Int64(941668),
        PerPage: sdk.Int64(27982),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListCustomRoles

List the custom repository roles available in this organization. In order to see custom
repository roles in an organization, the authenticated user must be an organization owner.

To use this endpoint the authenticated user must be an administrator for the organization or of an repository of the organization and must use an access token with `admin:org repo` scope.
GitHub Apps must have the `organization_custom_roles:read` organization permission to use this endpoint.

For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-custom-repository-roles-in-an-organization>

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
    res, err := s.Orgs.OrgsListCustomRoles(ctx, operations.OrgsListCustomRolesRequest{
        OrganizationID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsListCustomRoles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsListFailedInvitations

The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-failed-organization-invitations>

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
    res, err := s.Orgs.OrgsListFailedInvitations(ctx, operations.OrgsListFailedInvitationsRequest{
        Org: "qui",
        Page: sdk.Int64(185897),
        PerPage: sdk.Int64(895912),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationInvitations != nil {
        // handle response
    }
}
```

## OrgsListFineGrainedPermissions

**Note**: This operation is in beta and subject to change.

Lists the fine-grained permissions that can be used in custom repository roles for an organization. For more information, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

To use this endpoint the authenticated user must be an administrator for the organization or of an repository of the organization and must use an access token with `admin:org repo` scope.
GitHub Apps must have the `organization_custom_roles:read` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-repository-fine-grained-permissions-for-an-organization>

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
    res, err := s.Orgs.OrgsListFineGrainedPermissions(ctx, operations.OrgsListFineGrainedPermissionsRequest{
        Org: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryFineGrainedPermissions != nil {
        // handle response
    }
}
```

## OrgsListForAuthenticatedUser

List organizations for the authenticated user.

**OAuth scope requirements**

This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organizations-for-the-authenticated-user>

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
        Page: sdk.Int64(126727),
        PerPage: sdk.Int64(108903),
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

List [public organization memberships](https://docs.github.com/enterprise-cloud@latest//articles/publicizing-or-concealing-organization-membership) for the specified user.

This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organizations-for-a-user>

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
        Page: sdk.Int64(397988),
        PerPage: sdk.Int64(264649),
        Username: "Noel_Wolf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimples != nil {
        // handle response
    }
}
```

## OrgsListInvitationTeams

List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organization-invitation-teams>

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
    res, err := s.Orgs.OrgsListInvitationTeams(ctx, operations.OrgsListInvitationTeamsRequest{
        InvitationID: 730478,
        Org: "totam",
        Page: sdk.Int64(192846),
        PerPage: sdk.Int64(397919),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## OrgsListMembers

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organization-members>

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
        Org: "impedit",
        Page: sdk.Int64(498388),
        PerPage: sdk.Int64(140957),
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organization-memberships-for-the-authenticated-user>

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
        Page: sdk.Int64(967338),
        PerPage: sdk.Int64(997918),
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-outside-collaborators-for-an-organization>

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
        Filter: operations.OrgsListOutsideCollaboratorsFilterEnumAll.ToPointer(),
        Org: "natus",
        Page: sdk.Int64(883780),
        PerPage: sdk.Int64(42906),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListPendingInvitations

The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, or `hiring_manager`. If the invitee is not a GitHub Enterprise Cloud member, the `login` field in the return hash will be `null`.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-pending-organization-invitations>

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
    res, err := s.Orgs.OrgsListPendingInvitations(ctx, operations.OrgsListPendingInvitationsRequest{
        InvitationSource: operations.OrgsListPendingInvitationsInvitationSourceEnumMember.ToPointer(),
        Org: "rerum",
        Page: sdk.Int64(924840),
        PerPage: sdk.Int64(913285),
        Role: operations.OrgsListPendingInvitationsRoleEnumAdmin.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationInvitations != nil {
        // handle response
    }
}
```

## OrgsListPublicMembers

Members of an organization can choose to have their membership publicized or not.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-public-organization-members>

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
        Org: "rem",
        Page: sdk.Int64(157884),
        PerPage: sdk.Int64(354225),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## OrgsListSamlSsoAuthorizations

Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products).

An authenticated organization owner with the `read:org` scope can list all credential authorizations for an organization that uses SAML single sign-on (SSO). The credentials are either personal access tokens or SSH keys that organization members have authorized for the organization. For more information, see [About authentication with SAML single sign-on](https://docs.github.com/enterprise-cloud@latest//articles/about-authentication-with-saml-single-sign-on).

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-saml-sso-authorizations-for-an-organization>

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
    res, err := s.Orgs.OrgsListSamlSsoAuthorizations(ctx, operations.OrgsListSamlSsoAuthorizationsRequest{
        Login: sdk.String("quisquam"),
        Org: "dicta",
        Page: sdk.Int64(973017),
        PerPage: sdk.Int64(754901),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CredentialAuthorizations != nil {
        // handle response
    }
}
```

## OrgsListSecurityManagerTeams

Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `read:org` scope.

GitHub Apps must have the `administration` organization read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-security-manager-teams>

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
    res, err := s.Orgs.OrgsListSecurityManagerTeams(ctx, operations.OrgsListSecurityManagerTeamsRequest{
        Org: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSimples != nil {
        // handle response
    }
}
```

## OrgsListWebhookDeliveries

Returns a list of webhook deliveries for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-deliveries-for-an-organization-webhook>

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
    res, err := s.Orgs.OrgsListWebhookDeliveries(ctx, operations.OrgsListWebhookDeliveriesRequest{
        Cursor: sdk.String("officiis"),
        HookID: 100002,
        Org: "architecto",
        PerPage: sdk.Int64(317898),
        Redelivery: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookDeliveryItems != nil {
        // handle response
    }
}
```

## OrgsListWebhooks

List organization webhooks

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-organization-webhooks>

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
        Org: "optio",
        Page: sdk.Int64(525951),
        PerPage: sdk.Int64(17060),
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

This will trigger a [ping event](https://docs.github.com/enterprise-cloud@latest//webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#ping-an-organization-webhook>

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
        HookID: 704271,
        Org: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRedeliverWebhookDelivery

Redeliver a delivery for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook>

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
    res, err := s.Orgs.OrgsRedeliverWebhookDelivery(ctx, operations.OrgsRedeliverWebhookDeliveryRequest{
        DeliveryID: 955551,
        HookID: 615058,
        Org: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgsRedeliverWebhookDelivery202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrgsRemoveMember

Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-an-organization-member>

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
        Org: "quos",
        Username: "Flavio92",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-organization-membership-for-a-user>

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
        Org: "maxime",
        Username: "Dino_Cruickshank98",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-outside-collaborator-from-an-organization>

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
        Org: "impedit",
        Username: "Ottilie_Torp",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user>

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
        Org: "ab",
        Username: "Kiera.Kozey",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemoveSamlSsoAuthorization

Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products).

An authenticated organization owner with the `admin:org` scope can remove a credential authorization for an organization that uses SAML SSO. Once you remove someone's credential authorization, they will need to create a new personal access token or SSH key and authorize it for the organization they want to access.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-a-saml-sso-authorization-for-an-organization>

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
    res, err := s.Orgs.OrgsRemoveSamlSsoAuthorization(ctx, operations.OrgsRemoveSamlSsoAuthorizationRequest{
        CredentialID: 485031,
        Org: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsRemoveSecurityManagerTeam

Removes the security manager role from a team for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) team from an organization."

To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `admin:org` scope.

GitHub Apps must have the `administration` organization read-write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-a-security-manager-team>

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
    res, err := s.Orgs.OrgsRemoveSecurityManagerTeam(ctx, operations.OrgsRemoveSecurityManagerTeamRequest{
        Org: "debitis",
        TeamSlug: "vel",
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

*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
    
*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.

**Rate limits**

To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#set-organization-membership-for-a-user>

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
        Org: "corporis",
        Username: "Garret.Cruickshank",
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

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user>

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
        Org: "distinctio",
        Username: "Dewitt_Bednar",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgsUnblockUser

Unblock a user from an organization

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#unblock-a-user-from-an-organization>

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
    res, err := s.Orgs.OrgsUnblockUser(ctx, operations.OrgsUnblockUserRequest{
        Org: "accusantium",
        Username: "Esmeralda81",
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

**Parameter Deprecation Notice:** GitHub Enterprise Cloud will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-an-organization>

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
            AdvancedSecurityEnabledForNewRepositories: sdk.Bool(false),
            BillingEmail: sdk.String("aliquam"),
            Blog: sdk.String(""http://github.blog""),
            Company: sdk.String("Wyman - Stark"),
            DefaultRepositoryPermission: operations.OrgsUpdateRequestBodyDefaultRepositoryPermissionEnumAdmin.ToPointer(),
            DependabotAlertsEnabledForNewRepositories: sdk.Bool(false),
            DependabotSecurityUpdatesEnabledForNewRepositories: sdk.Bool(false),
            DependencyGraphEnabledForNewRepositories: sdk.Bool(false),
            Description: sdk.String("delectus"),
            Email: sdk.String("Berniece.Douglas@gmail.com"),
            HasOrganizationProjects: sdk.Bool(false),
            HasRepositoryProjects: sdk.Bool(false),
            Location: sdk.String("repellat"),
            MembersAllowedRepositoryCreationType: operations.OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnumPrivate.ToPointer(),
            MembersCanCreateInternalRepositories: sdk.Bool(false),
            MembersCanCreatePages: sdk.Bool(false),
            MembersCanCreatePrivatePages: sdk.Bool(false),
            MembersCanCreatePrivateRepositories: sdk.Bool(false),
            MembersCanCreatePublicPages: sdk.Bool(false),
            MembersCanCreatePublicRepositories: sdk.Bool(false),
            MembersCanCreateRepositories: sdk.Bool(false),
            MembersCanForkPrivateRepositories: sdk.Bool(false),
            Name: sdk.String("Woodrow Mitchell III"),
            SecretScanningEnabledForNewRepositories: sdk.Bool(false),
            SecretScanningPushProtectionCustomLink: sdk.String("cupiditate"),
            SecretScanningPushProtectionCustomLinkEnabled: sdk.Bool(false),
            SecretScanningPushProtectionEnabledForNewRepositories: sdk.Bool(false),
            TwitterUsername: sdk.String("optio"),
            WebCommitSignoffRequired: sdk.Bool(false),
        },
        Org: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationFull != nil {
        // handle response
    }
}
```

## OrgsUpdateCustomRole

**Note**: This operation is in beta and subject to change.

Updates a custom repository role that can be used by all repositories owned by the organization.

To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.

For more information about custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-a-custom-role>

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
    res, err := s.Orgs.OrgsUpdateCustomRole(ctx, operations.OrgsUpdateCustomRoleRequest{
        RequestBody: operations.OrgsUpdateCustomRoleRequestBody{
            BaseRole: operations.OrgsUpdateCustomRoleRequestBodyBaseRoleEnumWrite.ToPointer(),
            Description: sdk.String("nesciunt"),
            Name: sdk.String("Jeannie Cruickshank"),
            Permissions: []string{
                "sint",
                "ut",
                "numquam",
            },
        },
        Org: "tenetur",
        RoleID: 236790,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationCustomRepositoryRole != nil {
        // handle response
    }
}
```

## OrgsUpdateMembershipForAuthenticatedUser

Update an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user>

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
        Org: "libero",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-an-organization-webhook>

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
                "minima",
                "ex",
            },
            Name: sdk.String(""web""),
        },
        HookID: 791762,
        Org: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgHook != nil {
        // handle response
    }
}
```

## OrgsUpdateWebhookConfigForOrg

Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-a-webhook-configuration-for-an-organization>

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
    res, err := s.Orgs.OrgsUpdateWebhookConfigForOrg(ctx, operations.OrgsUpdateWebhookConfigForOrgRequest{
        RequestBody: &operations.OrgsUpdateWebhookConfigForOrgRequestBody{
            ContentType: sdk.String(""json""),
            InsecureSsl: &shared.WebhookConfigInsecureSsl{},
            Secret: sdk.String(""********""),
            URL: sdk.String("https://example.com/webhook"),
        },
        HookID: 108165,
        Org: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

# Apps

## Overview

Information for integrations and installations.

### Available Operations

* [AppsAddRepoToInstallationForAuthenticatedUser](#appsaddrepotoinstallationforauthenticateduser) - Add a repository to an app installation
* [AppsCheckToken](#appschecktoken) - Check a token
* [AppsCreateFromManifest](#appscreatefrommanifest) - Create a GitHub App from a manifest
* [AppsCreateInstallationAccessToken](#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [AppsDeleteAuthorization](#appsdeleteauthorization) - Delete an app authorization
* [AppsDeleteInstallation](#appsdeleteinstallation) - Delete an installation for the authenticated app
* [AppsDeleteToken](#appsdeletetoken) - Delete an app token
* [AppsGetAuthenticated](#appsgetauthenticated) - Get the authenticated app
* [AppsGetBySlug](#appsgetbyslug) - Get an app
* [AppsGetInstallation](#appsgetinstallation) - Get an installation for the authenticated app
* [AppsGetOrgInstallation](#appsgetorginstallation) - Get an organization installation for the authenticated app
* [AppsGetRepoInstallation](#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [AppsGetSubscriptionPlanForAccount](#appsgetsubscriptionplanforaccount) - Get a subscription plan for an account
* [AppsGetSubscriptionPlanForAccountStubbed](#appsgetsubscriptionplanforaccountstubbed) - Get a subscription plan for an account (stubbed)
* [AppsGetUserInstallation](#appsgetuserinstallation) - Get a user installation for the authenticated app
* [AppsGetWebhookConfigForApp](#appsgetwebhookconfigforapp) - Get a webhook configuration for an app
* [AppsGetWebhookDelivery](#appsgetwebhookdelivery) - Get a delivery for an app webhook
* [AppsListAccountsForPlan](#appslistaccountsforplan) - List accounts for a plan
* [AppsListAccountsForPlanStubbed](#appslistaccountsforplanstubbed) - List accounts for a plan (stubbed)
* [AppsListInstallationReposForAuthenticatedUser](#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [AppsListInstallations](#appslistinstallations) - List installations for the authenticated app
* [AppsListInstallationsForAuthenticatedUser](#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [AppsListPlans](#appslistplans) - List plans
* [AppsListPlansStubbed](#appslistplansstubbed) - List plans (stubbed)
* [AppsListReposAccessibleToInstallation](#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [AppsListSubscriptionsForAuthenticatedUser](#appslistsubscriptionsforauthenticateduser) - List subscriptions for the authenticated user
* [AppsListSubscriptionsForAuthenticatedUserStubbed](#appslistsubscriptionsforauthenticateduserstubbed) - List subscriptions for the authenticated user (stubbed)
* [AppsListWebhookDeliveries](#appslistwebhookdeliveries) - List deliveries for an app webhook
* [AppsRedeliverWebhookDelivery](#appsredeliverwebhookdelivery) - Redeliver a delivery for an app webhook
* [AppsRemoveRepoFromInstallationForAuthenticatedUser](#appsremoverepofrominstallationforauthenticateduser) - Remove a repository from an app installation
* [AppsResetToken](#appsresettoken) - Reset a token
* [AppsRevokeInstallationAccessToken](#appsrevokeinstallationaccesstoken) - Revoke an installation access token
* [AppsScopeToken](#appsscopetoken) - Create a scoped access token
* [AppsSuspendInstallation](#appssuspendinstallation) - Suspend an app installation
* [AppsUnsuspendInstallation](#appsunsuspendinstallation) - Unsuspend an app installation
* [AppsUpdateWebhookConfigForApp](#appsupdatewebhookconfigforapp) - Update a webhook configuration for an app

## AppsAddRepoToInstallationForAuthenticatedUser

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#add-a-repository-to-an-app-installation>

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
    res, err := s.Apps.AppsAddRepoToInstallationForAuthenticatedUser(ctx, operations.AppsAddRepoToInstallationForAuthenticatedUserRequest{
        InstallationID: 69859,
        RepositoryID: 587600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsCheckToken

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/rest/reference/apps#check-a-token>

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
    res, err := s.Apps.AppsCheckToken(ctx, operations.AppsCheckTokenRequest{
        RequestBody: operations.AppsCheckTokenRequestBody{
            AccessToken: "consequatur",
        },
        ClientID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## AppsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/rest/reference/apps#create-a-github-app-from-a-manifest>

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
    res, err := s.Apps.AppsCreateFromManifest(ctx, operations.AppsCreateFromManifestRequest{
        Code: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitHubApp != nil {
        // handle response
    }
}
```

## AppsCreateInstallationAccessToken

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps/#create-an-installation-access-token-for-an-app>

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
    res, err := s.Apps.AppsCreateInstallationAccessToken(ctx, operations.AppsCreateInstallationAccessTokenRequest{
        RequestBody: &operations.AppsCreateInstallationAccessTokenRequestBody{
            Permissions: &shared.AppPermissions{
                Actions: shared.AppPermissionsActionsEnumRead.ToPointer(),
                Administration: shared.AppPermissionsAdministrationEnumRead.ToPointer(),
                Checks: shared.AppPermissionsChecksEnumRead.ToPointer(),
                Contents: shared.AppPermissionsContentsEnumWrite.ToPointer(),
                Deployments: shared.AppPermissionsDeploymentsEnumRead.ToPointer(),
                Environments: shared.AppPermissionsEnvironmentsEnumWrite.ToPointer(),
                Issues: shared.AppPermissionsIssuesEnumRead.ToPointer(),
                Members: shared.AppPermissionsMembersEnumWrite.ToPointer(),
                Metadata: shared.AppPermissionsMetadataEnumWrite.ToPointer(),
                OrganizationAdministration: shared.AppPermissionsOrganizationAdministrationEnumRead.ToPointer(),
                OrganizationAnnouncementBanners: shared.AppPermissionsOrganizationAnnouncementBannersEnumRead.ToPointer(),
                OrganizationCustomRoles: shared.AppPermissionsOrganizationCustomRolesEnumRead.ToPointer(),
                OrganizationHooks: shared.AppPermissionsOrganizationHooksEnumWrite.ToPointer(),
                OrganizationPackages: shared.AppPermissionsOrganizationPackagesEnumWrite.ToPointer(),
                OrganizationPlan: shared.AppPermissionsOrganizationPlanEnumRead.ToPointer(),
                OrganizationProjects: shared.AppPermissionsOrganizationProjectsEnumRead.ToPointer(),
                OrganizationSecrets: shared.AppPermissionsOrganizationSecretsEnumRead.ToPointer(),
                OrganizationSelfHostedRunners: shared.AppPermissionsOrganizationSelfHostedRunnersEnumWrite.ToPointer(),
                OrganizationUserBlocking: shared.AppPermissionsOrganizationUserBlockingEnumRead.ToPointer(),
                Packages: shared.AppPermissionsPackagesEnumWrite.ToPointer(),
                Pages: shared.AppPermissionsPagesEnumRead.ToPointer(),
                PullRequests: shared.AppPermissionsPullRequestsEnumWrite.ToPointer(),
                RepositoryAnnouncementBanners: shared.AppPermissionsRepositoryAnnouncementBannersEnumRead.ToPointer(),
                RepositoryHooks: shared.AppPermissionsRepositoryHooksEnumRead.ToPointer(),
                RepositoryProjects: shared.AppPermissionsRepositoryProjectsEnumAdmin.ToPointer(),
                SecretScanningAlerts: shared.AppPermissionsSecretScanningAlertsEnumRead.ToPointer(),
                Secrets: shared.AppPermissionsSecretsEnumWrite.ToPointer(),
                SecurityEvents: shared.AppPermissionsSecurityEventsEnumWrite.ToPointer(),
                SingleFile: shared.AppPermissionsSingleFileEnumRead.ToPointer(),
                Statuses: shared.AppPermissionsStatusesEnumWrite.ToPointer(),
                TeamDiscussions: shared.AppPermissionsTeamDiscussionsEnumRead.ToPointer(),
                VulnerabilityAlerts: shared.AppPermissionsVulnerabilityAlertsEnumWrite.ToPointer(),
                Workflows: shared.AppPermissionsWorkflowsEnumWrite.ToPointer(),
            },
            Repositories: []string{
                "rails",
                "rails",
                "rails",
            },
            RepositoryIds: []int64{
                539224,
                128860,
            },
        },
        InstallationID: 325685,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallationToken != nil {
        // handle response
    }
}
```

## AppsDeleteAuthorization

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/rest/reference/apps#delete-an-app-authorization>

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
    res, err := s.Apps.AppsDeleteAuthorization(ctx, operations.AppsDeleteAuthorizationRequest{
        RequestBody: operations.AppsDeleteAuthorizationRequestBody{
            AccessToken: "nisi",
        },
        ClientID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/rest/reference/apps/#suspend-an-app-installation)" endpoint.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsDeleteInstallation(ctx, operations.AppsDeleteInstallationRequest{
        InstallationID: 956406,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsDeleteToken

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/rest/reference/apps#delete-an-app-token>

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
    res, err := s.Apps.AppsDeleteToken(ctx, operations.AppsDeleteTokenRequest{
        RequestBody: operations.AppsDeleteTokenRequestBody{
            AccessToken: "consequuntur",
        },
        ClientID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsGetAuthenticated

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-the-authenticated-app>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsGetAuthenticated(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Integration != nil {
        // handle response
    }
}
```

## AppsGetBySlug

**Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps/#get-an-app>

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
    res, err := s.Apps.AppsGetBySlug(ctx, operations.AppsGetBySlugRequest{
        AppSlug: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Integration != nil {
        // handle response
    }
}
```

## AppsGetInstallation

Enables an authenticated GitHub App to find an installation's information using the installation id.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-an-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsGetInstallation(ctx, operations.AppsGetInstallationRequest{
        InstallationID: 903984,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installation != nil {
        // handle response
    }
}
```

## AppsGetOrgInstallation

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsGetOrgInstallation(ctx, operations.AppsGetOrgInstallationRequest{
        Org: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installation != nil {
        // handle response
    }
}
```

## AppsGetRepoInstallation

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsGetRepoInstallation(ctx, operations.AppsGetRepoInstallationRequest{
        Owner: "atque",
        Repo: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installation != nil {
        // handle response
    }
}
```

## AppsGetSubscriptionPlanForAccount

Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account>

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
    res, err := s.Apps.AppsGetSubscriptionPlanForAccount(ctx, operations.AppsGetSubscriptionPlanForAccountRequest{
        AccountID: 456911,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketplacePurchase != nil {
        // handle response
    }
}
```

## AppsGetSubscriptionPlanForAccountStubbed

Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account-stubbed>

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
    res, err := s.Apps.AppsGetSubscriptionPlanForAccountStubbed(ctx, operations.AppsGetSubscriptionPlanForAccountStubbedRequest{
        AccountID: 910545,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketplacePurchase != nil {
        // handle response
    }
}
```

## AppsGetUserInstallation

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

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
    res, err := s.Apps.AppsGetUserInstallation(ctx, operations.AppsGetUserInstallationRequest{
        Username: "Shanny_Boehm",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installation != nil {
        // handle response
    }
}
```

## AppsGetWebhookConfigForApp

Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-a-webhook-configuration-for-an-app>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsGetWebhookConfigForApp(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

## AppsGetWebhookDelivery

Returns a delivery for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#get-a-delivery-for-an-app-webhook>

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
    res, err := s.Apps.AppsGetWebhookDelivery(ctx, operations.AppsGetWebhookDeliveryRequest{
        DeliveryID: 724168,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookDelivery != nil {
        // handle response
    }
}
```

## AppsListAccountsForPlan

Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan>

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
    res, err := s.Apps.AppsListAccountsForPlan(ctx, operations.AppsListAccountsForPlanRequest{
        Direction: operations.AppsListAccountsForPlanDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(399025),
        PerPage: sdk.Int64(93459),
        PlanID: 904045,
        Sort: shared.SortEnumCreated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketplacePurchases != nil {
        // handle response
    }
}
```

## AppsListAccountsForPlanStubbed

Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan-stubbed>

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
    res, err := s.Apps.AppsListAccountsForPlanStubbed(ctx, operations.AppsListAccountsForPlanStubbedRequest{
        Direction: operations.AppsListAccountsForPlanStubbedDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(473221),
        PerPage: sdk.Int64(699622),
        PlanID: 580197,
        Sort: shared.SortEnumCreated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketplacePurchases != nil {
        // handle response
    }
}
```

## AppsListInstallationReposForAuthenticatedUser

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

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
    res, err := s.Apps.AppsListInstallationReposForAuthenticatedUser(ctx, operations.AppsListInstallationReposForAuthenticatedUserRequest{
        InstallationID: 716244,
        Page: sdk.Int64(756779),
        PerPage: sdk.Int64(27069),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListInstallationReposForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsListInstallations

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsListInstallations(ctx, operations.AppsListInstallationsRequest{
        Outdated: sdk.String("culpa"),
        Page: sdk.Int64(731398),
        PerPage: sdk.Int64(240020),
        Since: types.MustTimeFromString("2022-07-09T05:02:22.250Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Installations != nil {
        // handle response
    }
}
```

## AppsListInstallationsForAuthenticatedUser

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

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
    res, err := s.Apps.AppsListInstallationsForAuthenticatedUser(ctx, operations.AppsListInstallationsForAuthenticatedUserRequest{
        Page: sdk.Int64(9766),
        PerPage: sdk.Int64(796392),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListInstallationsForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsListPlans

Lists all plans that are part of your GitHub Marketplace listing.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#list-plans>

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
    res, err := s.Apps.AppsListPlans(ctx, operations.AppsListPlansRequest{
        Page: sdk.Int64(308286),
        PerPage: sdk.Int64(959167),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketplaceListingPlans != nil {
        // handle response
    }
}
```

## AppsListPlansStubbed

Lists all plans that are part of your GitHub Marketplace listing.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#list-plans-stubbed>

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
    res, err := s.Apps.AppsListPlansStubbed(ctx, operations.AppsListPlansStubbedRequest{
        Page: sdk.Int64(232865),
        PerPage: sdk.Int64(458139),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarketplaceListingPlans != nil {
        // handle response
    }
}
```

## AppsListReposAccessibleToInstallation

List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

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
    res, err := s.Apps.AppsListReposAccessibleToInstallation(ctx, operations.AppsListReposAccessibleToInstallationRequest{
        Page: sdk.Int64(503427),
        PerPage: sdk.Int64(590984),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListReposAccessibleToInstallation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsListSubscriptionsForAuthenticatedUser

Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).

API method documentation
<https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user>

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
    res, err := s.Apps.AppsListSubscriptionsForAuthenticatedUser(ctx, operations.AppsListSubscriptionsForAuthenticatedUserRequest{
        Page: sdk.Int64(953722),
        PerPage: sdk.Int64(857723),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserMarketplacePurchases != nil {
        // handle response
    }
}
```

## AppsListSubscriptionsForAuthenticatedUserStubbed

Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).

API method documentation
<https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user-stubbed>

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
    res, err := s.Apps.AppsListSubscriptionsForAuthenticatedUserStubbed(ctx, operations.AppsListSubscriptionsForAuthenticatedUserStubbedRequest{
        Page: sdk.Int64(557811),
        PerPage: sdk.Int64(457223),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserMarketplacePurchases != nil {
        // handle response
    }
}
```

## AppsListWebhookDeliveries

Returns a list of webhook deliveries for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#list-deliveries-for-an-app-webhook>

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
    res, err := s.Apps.AppsListWebhookDeliveries(ctx, operations.AppsListWebhookDeliveriesRequest{
        Cursor: sdk.String("quasi"),
        PerPage: sdk.Int64(951875),
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

## AppsRedeliverWebhookDelivery

Redeliver a delivery for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#redeliver-a-delivery-for-an-app-webhook>

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
    res, err := s.Apps.AppsRedeliverWebhookDelivery(ctx, operations.AppsRedeliverWebhookDeliveryRequest{
        DeliveryID: 621679,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsRedeliverWebhookDelivery202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsRemoveRepoFromInstallationForAuthenticatedUser

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#remove-a-repository-from-an-app-installation>

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
    res, err := s.Apps.AppsRemoveRepoFromInstallationForAuthenticatedUser(ctx, operations.AppsRemoveRepoFromInstallationForAuthenticatedUserRequest{
        InstallationID: 575751,
        RepositoryID: 863023,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsResetToken

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/rest/reference/apps#reset-a-token>

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
    res, err := s.Apps.AppsResetToken(ctx, operations.AppsResetTokenRequest{
        RequestBody: operations.AppsResetTokenRequestBody{
            AccessToken: "possimus",
        },
        ClientID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## AppsRevokeInstallationAccessToken

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#revoke-an-installation-access-token>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppsRevokeInstallationAccessToken(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsScopeToken

Use a non-scoped user-to-server access token to create a repository scoped and/or permission scoped user-to-server access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the `client_id` and `client_secret` of the GitHub App as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/rest/apps/apps#create-a-scoped-access-token>

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
    res, err := s.Apps.AppsScopeToken(ctx, operations.AppsScopeTokenRequest{
        RequestBody: operations.AppsScopeTokenRequestBody{
            AccessToken: "e72e16c7e42f292c6912e7710c838347ae178b4a",
            Permissions: &shared.AppPermissions{
                Actions: shared.AppPermissionsActionsEnumWrite.ToPointer(),
                Administration: shared.AppPermissionsAdministrationEnumWrite.ToPointer(),
                Checks: shared.AppPermissionsChecksEnumWrite.ToPointer(),
                Contents: shared.AppPermissionsContentsEnumRead.ToPointer(),
                Deployments: shared.AppPermissionsDeploymentsEnumRead.ToPointer(),
                Environments: shared.AppPermissionsEnvironmentsEnumRead.ToPointer(),
                Issues: shared.AppPermissionsIssuesEnumWrite.ToPointer(),
                Members: shared.AppPermissionsMembersEnumWrite.ToPointer(),
                Metadata: shared.AppPermissionsMetadataEnumRead.ToPointer(),
                OrganizationAdministration: shared.AppPermissionsOrganizationAdministrationEnumWrite.ToPointer(),
                OrganizationAnnouncementBanners: shared.AppPermissionsOrganizationAnnouncementBannersEnumRead.ToPointer(),
                OrganizationCustomRoles: shared.AppPermissionsOrganizationCustomRolesEnumWrite.ToPointer(),
                OrganizationHooks: shared.AppPermissionsOrganizationHooksEnumRead.ToPointer(),
                OrganizationPackages: shared.AppPermissionsOrganizationPackagesEnumRead.ToPointer(),
                OrganizationPlan: shared.AppPermissionsOrganizationPlanEnumRead.ToPointer(),
                OrganizationProjects: shared.AppPermissionsOrganizationProjectsEnumRead.ToPointer(),
                OrganizationSecrets: shared.AppPermissionsOrganizationSecretsEnumWrite.ToPointer(),
                OrganizationSelfHostedRunners: shared.AppPermissionsOrganizationSelfHostedRunnersEnumWrite.ToPointer(),
                OrganizationUserBlocking: shared.AppPermissionsOrganizationUserBlockingEnumWrite.ToPointer(),
                Packages: shared.AppPermissionsPackagesEnumRead.ToPointer(),
                Pages: shared.AppPermissionsPagesEnumRead.ToPointer(),
                PullRequests: shared.AppPermissionsPullRequestsEnumWrite.ToPointer(),
                RepositoryAnnouncementBanners: shared.AppPermissionsRepositoryAnnouncementBannersEnumRead.ToPointer(),
                RepositoryHooks: shared.AppPermissionsRepositoryHooksEnumRead.ToPointer(),
                RepositoryProjects: shared.AppPermissionsRepositoryProjectsEnumWrite.ToPointer(),
                SecretScanningAlerts: shared.AppPermissionsSecretScanningAlertsEnumRead.ToPointer(),
                Secrets: shared.AppPermissionsSecretsEnumRead.ToPointer(),
                SecurityEvents: shared.AppPermissionsSecurityEventsEnumRead.ToPointer(),
                SingleFile: shared.AppPermissionsSingleFileEnumWrite.ToPointer(),
                Statuses: shared.AppPermissionsStatusesEnumRead.ToPointer(),
                TeamDiscussions: shared.AppPermissionsTeamDiscussionsEnumWrite.ToPointer(),
                VulnerabilityAlerts: shared.AppPermissionsVulnerabilityAlertsEnumRead.ToPointer(),
                Workflows: shared.AppPermissionsWorkflowsEnumWrite.ToPointer(),
            },
            Repositories: []string{
                "rails",
                "rails",
                "rails",
            },
            RepositoryIds: []int64{
                680270,
                99615,
                609178,
                945302,
            },
            Target: sdk.String("octocat"),
            TargetID: sdk.Int64(1),
        },
        ClientID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## AppsSuspendInstallation

Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#suspend-an-app-installation>

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
    res, err := s.Apps.AppsSuspendInstallation(ctx, operations.AppsSuspendInstallationRequest{
        InstallationID: 869489,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsUnsuspendInstallation

Removes a GitHub App installation suspension.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#unsuspend-an-app-installation>

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
    res, err := s.Apps.AppsUnsuspendInstallation(ctx, operations.AppsUnsuspendInstallationRequest{
        InstallationID: 92027,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsUpdateWebhookConfigForApp

Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/rest/reference/apps#update-a-webhook-configuration-for-an-app>

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
    res, err := s.Apps.AppsUpdateWebhookConfigForApp(ctx, operations.AppsUpdateWebhookConfigForAppRequestBody{
        ContentType: sdk.String(""json""),
        InsecureSsl: &shared.WebhookConfigInsecureSsl{},
        Secret: sdk.String(""********""),
        URL: sdk.String("https://example.com/webhook"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookConfig != nil {
        // handle response
    }
}
```

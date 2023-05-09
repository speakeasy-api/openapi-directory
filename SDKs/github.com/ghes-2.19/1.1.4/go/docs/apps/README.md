# Apps

## Overview

Information for integrations and installations.

### Available Operations

* [AppsAddRepoToInstallation](#appsaddrepotoinstallation) - Add a repository to an app installation
* [AppsCreateContentAttachment](#appscreatecontentattachment) - Create a content attachment
* [AppsCreateFromManifest](#appscreatefrommanifest) - Create a GitHub App from a manifest
* [AppsCreateInstallationAccessToken](#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [AppsDeleteInstallation](#appsdeleteinstallation) - Delete an installation for the authenticated app
* [AppsGetAuthenticated](#appsgetauthenticated) - Get the authenticated app
* [AppsGetBySlug](#appsgetbyslug) - Get an app
* [AppsGetInstallation](#appsgetinstallation) - Get an installation for the authenticated app
* [AppsGetOrgInstallation](#appsgetorginstallation) - Get an organization installation for the authenticated app
* [AppsGetRepoInstallation](#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [AppsGetUserInstallation](#appsgetuserinstallation) - Get a user installation for the authenticated app
* [AppsListInstallationReposForAuthenticatedUser](#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [AppsListInstallations](#appslistinstallations) - List installations for the authenticated app
* [AppsListInstallationsForAuthenticatedUser](#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [AppsListReposAccessibleToInstallation](#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [AppsRemoveRepoFromInstallation](#appsremoverepofrominstallation) - Remove a repository from an app installation

## AppsAddRepoToInstallation

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.19/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#add-a-repository-to-an-app-installation>

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
    res, err := s.Apps.AppsAddRepoToInstallation(ctx, operations.AppsAddRepoToInstallationRequest{
        InstallationID: 653108,
        RepositoryID: 581850,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsCreateContentAttachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.19/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@2.19/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#create-a-content-attachment>

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
    res, err := s.Apps.AppsCreateContentAttachment(ctx, operations.AppsCreateContentAttachmentRequest{
        RequestBody: operations.AppsCreateContentAttachmentRequestBody{
            Body: "Body of the attachment",
            Title: "Title of the attachment",
        },
        ContentReferenceID: 253291,
        Owner: "commodi",
        Repo: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentReferenceAttachment != nil {
        // handle response
    }
}
```

## AppsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#create-a-github-app-from-a-manifest>

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
        RequestBody: map[string]interface{}{
            "velit": "error",
            "quia": "quis",
        },
        Code: "vitae",
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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps/#create-an-installation-access-token-for-an-app>

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
                Actions: shared.AppPermissionsActionsEnumWrite.ToPointer(),
                Administration: shared.AppPermissionsAdministrationEnumWrite.ToPointer(),
                Checks: shared.AppPermissionsChecksEnumRead.ToPointer(),
                ContentReferences: shared.AppPermissionsContentReferencesEnumRead.ToPointer(),
                Contents: shared.AppPermissionsContentsEnumWrite.ToPointer(),
                Deployments: shared.AppPermissionsDeploymentsEnumRead.ToPointer(),
                Environments: shared.AppPermissionsEnvironmentsEnumWrite.ToPointer(),
                Issues: shared.AppPermissionsIssuesEnumRead.ToPointer(),
                Members: shared.AppPermissionsMembersEnumWrite.ToPointer(),
                Metadata: shared.AppPermissionsMetadataEnumWrite.ToPointer(),
                OrganizationAdministration: shared.AppPermissionsOrganizationAdministrationEnumRead.ToPointer(),
                OrganizationHooks: shared.AppPermissionsOrganizationHooksEnumRead.ToPointer(),
                OrganizationPackages: shared.AppPermissionsOrganizationPackagesEnumWrite.ToPointer(),
                OrganizationPlan: shared.AppPermissionsOrganizationPlanEnumRead.ToPointer(),
                OrganizationProjects: shared.AppPermissionsOrganizationProjectsEnumAdmin.ToPointer(),
                OrganizationSecrets: shared.AppPermissionsOrganizationSecretsEnumWrite.ToPointer(),
                OrganizationSelfHostedRunners: shared.AppPermissionsOrganizationSelfHostedRunnersEnumRead.ToPointer(),
                OrganizationUserBlocking: shared.AppPermissionsOrganizationUserBlockingEnumWrite.ToPointer(),
                Packages: shared.AppPermissionsPackagesEnumWrite.ToPointer(),
                Pages: shared.AppPermissionsPagesEnumWrite.ToPointer(),
                PullRequests: shared.AppPermissionsPullRequestsEnumRead.ToPointer(),
                RepositoryHooks: shared.AppPermissionsRepositoryHooksEnumWrite.ToPointer(),
                RepositoryProjects: shared.AppPermissionsRepositoryProjectsEnumAdmin.ToPointer(),
                SecretScanningAlerts: shared.AppPermissionsSecretScanningAlertsEnumRead.ToPointer(),
                Secrets: shared.AppPermissionsSecretsEnumWrite.ToPointer(),
                SecurityEvents: shared.AppPermissionsSecurityEventsEnumRead.ToPointer(),
                SingleFile: shared.AppPermissionsSingleFileEnumWrite.ToPointer(),
                Statuses: shared.AppPermissionsStatusesEnumRead.ToPointer(),
                TeamDiscussions: shared.AppPermissionsTeamDiscussionsEnumRead.ToPointer(),
                VulnerabilityAlerts: shared.AppPermissionsVulnerabilityAlertsEnumRead.ToPointer(),
                Workflows: shared.AppPermissionsWorkflowsEnumWrite.ToPointer(),
            },
            Repositories: []string{
                "rails",
                "rails",
            },
            RepositoryIds: []int64{
                979587,
                120196,
            },
        },
        Accept: "corporis",
        InstallationID: 296140,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallationToken != nil {
        // handle response
    }
}
```

## AppsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

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
        Accept: "iusto",
        InstallationID: 118727,
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

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-the-authenticated-app>

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

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps/#get-an-app>

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
        AppSlug: "harum",
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

Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-an-installation-for-the-authenticated-app>

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
        Accept: "enim",
        InstallationID: 880476,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallationGhes2 != nil {
        // handle response
    }
}
```

## AppsGetOrgInstallation

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

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
        Accept: "commodi",
        Org: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallationGhes2 != nil {
        // handle response
    }
}
```

## AppsGetRepoInstallation

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

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
        Accept: "quae",
        Owner: "ipsum",
        Repo: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallationGhes2 != nil {
        // handle response
    }
}
```

## AppsGetUserInstallation

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

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
        Accept: "molestias",
        Username: "Kenny50",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallationGhes2 != nil {
        // handle response
    }
}
```

## AppsListInstallationReposForAuthenticatedUser

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

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
        Accept: "rem",
        InstallationID: 916723,
        Page: sdk.Int64(93940),
        PerPage: sdk.Int64(921158),
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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-installations-for-the-authenticated-app>

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
    res, err := s.Apps.AppsListInstallations(ctx, operations.AppsListInstallationsRequest{
        Accept: "sint",
        Page: sdk.Int64(83112),
        PerPage: sdk.Int64(929297),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallationGhes2s != nil {
        // handle response
    }
}
```

## AppsListInstallationsForAuthenticatedUser

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

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
        Accept: "incidunt",
        Page: sdk.Int64(318569),
        PerPage: sdk.Int64(9356),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListInstallationsForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsListReposAccessibleToInstallation

List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

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
        Accept: "est",
        Page: sdk.Int64(842342),
        PerPage: sdk.Int64(131797),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListReposAccessibleToInstallation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsRemoveRepoFromInstallation

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.19/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#remove-a-repository-from-an-app-installation>

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
    res, err := s.Apps.AppsRemoveRepoFromInstallation(ctx, operations.AppsRemoveRepoFromInstallationRequest{
        InstallationID: 647174,
        RepositoryID: 716327,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

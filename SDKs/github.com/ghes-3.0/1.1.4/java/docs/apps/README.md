# apps

## Overview

Information for integrations and installations.

### Available Operations

* [appsAddRepoToInstallationForAuthenticatedUser](#appsaddrepotoinstallationforauthenticateduser) - Add a repository to an app installation
* [~~appsCheckAuthorization~~](#appscheckauthorization) - Check an authorization :warning: **Deprecated**
* [appsCheckToken](#appschecktoken) - Check a token
* [appsCreateContentAttachment](#appscreatecontentattachment) - Create a content attachment
* [appsCreateFromManifest](#appscreatefrommanifest) - Create a GitHub App from a manifest
* [appsCreateInstallationAccessToken](#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [appsDeleteAuthorization](#appsdeleteauthorization) - Delete an app authorization
* [appsDeleteInstallation](#appsdeleteinstallation) - Delete an installation for the authenticated app
* [appsDeleteToken](#appsdeletetoken) - Delete an app token
* [appsGetAuthenticated](#appsgetauthenticated) - Get the authenticated app
* [appsGetBySlug](#appsgetbyslug) - Get an app
* [appsGetInstallation](#appsgetinstallation) - Get an installation for the authenticated app
* [appsGetOrgInstallation](#appsgetorginstallation) - Get an organization installation for the authenticated app
* [appsGetRepoInstallation](#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [appsGetUserInstallation](#appsgetuserinstallation) - Get a user installation for the authenticated app
* [appsGetWebhookConfigForApp](#appsgetwebhookconfigforapp) - Get a webhook configuration for an app
* [appsListInstallationReposForAuthenticatedUser](#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [appsListInstallations](#appslistinstallations) - List installations for the authenticated app
* [appsListInstallationsForAuthenticatedUser](#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [appsListReposAccessibleToInstallation](#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [appsRemoveRepoFromInstallationForAuthenticatedUser](#appsremoverepofrominstallationforauthenticateduser) - Remove a repository from an app installation
* [~~appsResetAuthorization~~](#appsresetauthorization) - Reset an authorization :warning: **Deprecated**
* [appsResetToken](#appsresettoken) - Reset a token
* [~~appsRevokeAuthorizationForApplication~~](#appsrevokeauthorizationforapplication) - Revoke an authorization for an application :warning: **Deprecated**
* [~~appsRevokeGrantForApplication~~](#appsrevokegrantforapplication) - Revoke a grant for an application :warning: **Deprecated**
* [appsRevokeInstallationAccessToken](#appsrevokeinstallationaccesstoken) - Revoke an installation access token
* [appsScopeToken](#appsscopetoken) - Create a scoped access token
* [appsSuspendInstallation](#appssuspendinstallation) - Suspend an app installation
* [appsUnsuspendInstallation](#appsunsuspendinstallation) - Unsuspend an app installation
* [appsUpdateWebhookConfigForApp](#appsupdatewebhookconfigforapp) - Update a webhook configuration for an app

## appsAddRepoToInstallationForAuthenticatedUser

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.0/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#add-a-repository-to-an-app-installation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsAddRepoToInstallationForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.AppsAddRepoToInstallationForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsAddRepoToInstallationForAuthenticatedUserRequest req = new AppsAddRepoToInstallationForAuthenticatedUserRequest(793698L, 463451L);            

            AppsAddRepoToInstallationForAuthenticatedUserResponse res = sdk.apps.appsAddRepoToInstallationForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~appsCheckAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#check-an-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsCheckAuthorizationRequest;
import org.openapis.openapi.models.operations.AppsCheckAuthorizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsCheckAuthorizationRequest req = new AppsCheckAuthorizationRequest("dolor", "vero");            

            AppsCheckAuthorizationResponse res = sdk.apps.appsCheckAuthorization(req);

            if (res.nullableAuthorization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsCheckToken

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#check-a-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsCheckTokenRequest;
import org.openapis.openapi.models.operations.AppsCheckTokenRequestBody;
import org.openapis.openapi.models.operations.AppsCheckTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsCheckTokenRequest req = new AppsCheckTokenRequest(                new AppsCheckTokenRequestBody("nostrum");, "hic");            

            AppsCheckTokenResponse res = sdk.apps.appsCheckToken(req);

            if (res.authorization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsCreateContentAttachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@3.0/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-a-content-attachment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsCreateContentAttachmentRequest;
import org.openapis.openapi.models.operations.AppsCreateContentAttachmentRequestBody;
import org.openapis.openapi.models.operations.AppsCreateContentAttachmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsCreateContentAttachmentRequest req = new AppsCreateContentAttachmentRequest(                new AppsCreateContentAttachmentRequestBody("Body of the attachment", "Title of the attachment");, 928082L, "omnis", "facilis");            

            AppsCreateContentAttachmentResponse res = sdk.apps.appsCreateContentAttachment(req);

            if (res.contentReferenceAttachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-a-github-app-from-a-manifest>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsCreateFromManifestRequest;
import org.openapis.openapi.models.operations.AppsCreateFromManifestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsCreateFromManifestRequest req = new AppsCreateFromManifestRequest("perspiciatis") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("porro", "consequuntur");
                }};
            }};            

            AppsCreateFromManifestResponse res = sdk.apps.appsCreateFromManifest(req);

            if (res.gitHubApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsCreateInstallationAccessToken

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps/#create-an-installation-access-token-for-an-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsCreateInstallationAccessTokenRequest;
import org.openapis.openapi.models.operations.AppsCreateInstallationAccessTokenRequestBody;
import org.openapis.openapi.models.operations.AppsCreateInstallationAccessTokenResponse;
import org.openapis.openapi.models.shared.AppPermissions;
import org.openapis.openapi.models.shared.AppPermissionsActionsEnum;
import org.openapis.openapi.models.shared.AppPermissionsAdministrationEnum;
import org.openapis.openapi.models.shared.AppPermissionsChecksEnum;
import org.openapis.openapi.models.shared.AppPermissionsContentReferencesEnum;
import org.openapis.openapi.models.shared.AppPermissionsContentsEnum;
import org.openapis.openapi.models.shared.AppPermissionsDeploymentsEnum;
import org.openapis.openapi.models.shared.AppPermissionsEnvironmentsEnum;
import org.openapis.openapi.models.shared.AppPermissionsIssuesEnum;
import org.openapis.openapi.models.shared.AppPermissionsMembersEnum;
import org.openapis.openapi.models.shared.AppPermissionsMetadataEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationAdministrationEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationHooksEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationPackagesEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationPlanEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationProjectsEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationSecretsEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationSelfHostedRunnersEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationUserBlockingEnum;
import org.openapis.openapi.models.shared.AppPermissionsPackagesEnum;
import org.openapis.openapi.models.shared.AppPermissionsPagesEnum;
import org.openapis.openapi.models.shared.AppPermissionsPullRequestsEnum;
import org.openapis.openapi.models.shared.AppPermissionsRepositoryHooksEnum;
import org.openapis.openapi.models.shared.AppPermissionsRepositoryProjectsEnum;
import org.openapis.openapi.models.shared.AppPermissionsSecretScanningAlertsEnum;
import org.openapis.openapi.models.shared.AppPermissionsSecretsEnum;
import org.openapis.openapi.models.shared.AppPermissionsSecurityEventsEnum;
import org.openapis.openapi.models.shared.AppPermissionsSingleFileEnum;
import org.openapis.openapi.models.shared.AppPermissionsStatusesEnum;
import org.openapis.openapi.models.shared.AppPermissionsTeamDiscussionsEnum;
import org.openapis.openapi.models.shared.AppPermissionsVulnerabilityAlertsEnum;
import org.openapis.openapi.models.shared.AppPermissionsWorkflowsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsCreateInstallationAccessTokenRequest req = new AppsCreateInstallationAccessTokenRequest(500026L) {{
                requestBody = new AppsCreateInstallationAccessTokenRequestBody() {{
                    permissions = new AppPermissions() {{
                        actions = AppPermissionsActionsEnum.WRITE;
                        administration = AppPermissionsAdministrationEnum.READ;
                        checks = AppPermissionsChecksEnum.WRITE;
                        contentReferences = AppPermissionsContentReferencesEnum.WRITE;
                        contents = AppPermissionsContentsEnum.READ;
                        deployments = AppPermissionsDeploymentsEnum.WRITE;
                        environments = AppPermissionsEnvironmentsEnum.WRITE;
                        issues = AppPermissionsIssuesEnum.READ;
                        members = AppPermissionsMembersEnum.WRITE;
                        metadata = AppPermissionsMetadataEnum.WRITE;
                        organizationAdministration = AppPermissionsOrganizationAdministrationEnum.WRITE;
                        organizationHooks = AppPermissionsOrganizationHooksEnum.WRITE;
                        organizationPackages = AppPermissionsOrganizationPackagesEnum.WRITE;
                        organizationPlan = AppPermissionsOrganizationPlanEnum.READ;
                        organizationProjects = AppPermissionsOrganizationProjectsEnum.ADMIN;
                        organizationSecrets = AppPermissionsOrganizationSecretsEnum.WRITE;
                        organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum.WRITE;
                        organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum.READ;
                        packages = AppPermissionsPackagesEnum.WRITE;
                        pages = AppPermissionsPagesEnum.READ;
                        pullRequests = AppPermissionsPullRequestsEnum.READ;
                        repositoryHooks = AppPermissionsRepositoryHooksEnum.READ;
                        repositoryProjects = AppPermissionsRepositoryProjectsEnum.READ;
                        secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum.READ;
                        secrets = AppPermissionsSecretsEnum.READ;
                        securityEvents = AppPermissionsSecurityEventsEnum.WRITE;
                        singleFile = AppPermissionsSingleFileEnum.WRITE;
                        statuses = AppPermissionsStatusesEnum.WRITE;
                        teamDiscussions = AppPermissionsTeamDiscussionsEnum.READ;
                        vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum.READ;
                        workflows = AppPermissionsWorkflowsEnum.WRITE;
                    }};;
                    repositories = new String[]{{
                        add("rails"),
                        add("rails"),
                        add("rails"),
                        add("rails"),
                    }};
                    repositoryIds = new Long[]{{
                        add(680545L),
                    }};
                }};;
            }};            

            AppsCreateInstallationAccessTokenResponse res = sdk.apps.appsCreateInstallationAccessToken(req);

            if (res.installationToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsDeleteAuthorization

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#delete-an-app-authorization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsDeleteAuthorizationRequest;
import org.openapis.openapi.models.operations.AppsDeleteAuthorizationRequestBody;
import org.openapis.openapi.models.operations.AppsDeleteAuthorizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsDeleteAuthorizationRequest req = new AppsDeleteAuthorizationRequest(                new AppsDeleteAuthorizationRequestBody("numquam");, "veritatis");            

            AppsDeleteAuthorizationResponse res = sdk.apps.appsDeleteAuthorization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@3.0/rest/reference/apps/#suspend-an-app-installation)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsDeleteInstallationRequest;
import org.openapis.openapi.models.operations.AppsDeleteInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsDeleteInstallationRequest req = new AppsDeleteInstallationRequest(58029L);            

            AppsDeleteInstallationResponse res = sdk.apps.appsDeleteInstallation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsDeleteToken

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#delete-an-app-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsDeleteTokenRequest;
import org.openapis.openapi.models.operations.AppsDeleteTokenRequestBody;
import org.openapis.openapi.models.operations.AppsDeleteTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsDeleteTokenRequest req = new AppsDeleteTokenRequest(                new AppsDeleteTokenRequestBody("ipsa");, "iure");            

            AppsDeleteTokenResponse res = sdk.apps.appsDeleteToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetAuthenticated

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-the-authenticated-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetAuthenticatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetAuthenticatedResponse res = sdk.apps.appsGetAuthenticated();

            if (res.integration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetBySlug

**Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps/#get-an-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetBySlugRequest;
import org.openapis.openapi.models.operations.AppsGetBySlugResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetBySlugRequest req = new AppsGetBySlugRequest("odio");            

            AppsGetBySlugResponse res = sdk.apps.appsGetBySlug(req);

            if (res.integration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetInstallation

Enables an authenticated GitHub App to find an installation's information using the installation id.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-an-installation-for-the-authenticated-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetInstallationRequest;
import org.openapis.openapi.models.operations.AppsGetInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetInstallationRequest req = new AppsGetInstallationRequest(311796L);            

            AppsGetInstallationResponse res = sdk.apps.appsGetInstallation(req);

            if (res.installation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetOrgInstallation

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetOrgInstallationRequest;
import org.openapis.openapi.models.operations.AppsGetOrgInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetOrgInstallationRequest req = new AppsGetOrgInstallationRequest("accusamus");            

            AppsGetOrgInstallationResponse res = sdk.apps.appsGetOrgInstallation(req);

            if (res.installation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetRepoInstallation

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetRepoInstallationRequest;
import org.openapis.openapi.models.operations.AppsGetRepoInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetRepoInstallationRequest req = new AppsGetRepoInstallationRequest("quidem", "voluptatibus");            

            AppsGetRepoInstallationResponse res = sdk.apps.appsGetRepoInstallation(req);

            if (res.installation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetUserInstallation

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetUserInstallationRequest;
import org.openapis.openapi.models.operations.AppsGetUserInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetUserInstallationRequest req = new AppsGetUserInstallationRequest("voluptas");            

            AppsGetUserInstallationResponse res = sdk.apps.appsGetUserInstallation(req);

            if (res.installation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetWebhookConfigForApp

Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#get-a-webhook-configuration-for-an-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetWebhookConfigForAppResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetWebhookConfigForAppResponse res = sdk.apps.appsGetWebhookConfigForApp();

            if (res.webhookConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsListInstallationReposForAuthenticatedUser

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsListInstallationReposForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.AppsListInstallationReposForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsListInstallationReposForAuthenticatedUserRequest req = new AppsListInstallationReposForAuthenticatedUserRequest(617658L) {{
                page = 179603L;
                perPage = 542499L;
            }};            

            AppsListInstallationReposForAuthenticatedUserResponse res = sdk.apps.appsListInstallationReposForAuthenticatedUser(req);

            if (res.appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsListInstallations

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-installations-for-the-authenticated-app>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsListInstallationsRequest;
import org.openapis.openapi.models.operations.AppsListInstallationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsListInstallationsRequest req = new AppsListInstallationsRequest() {{
                outdated = "sit";
                page = 854614L;
                perPage = 67249L;
                since = OffsetDateTime.parse("2021-08-23T01:02:18.527Z");
            }};            

            AppsListInstallationsResponse res = sdk.apps.appsListInstallations(req);

            if (res.installations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsListInstallationsForAuthenticatedUser

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsListInstallationsForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.AppsListInstallationsForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsListInstallationsForAuthenticatedUserRequest req = new AppsListInstallationsForAuthenticatedUserRequest() {{
                page = 478596L;
                perPage = 453697L;
            }};            

            AppsListInstallationsForAuthenticatedUserResponse res = sdk.apps.appsListInstallationsForAuthenticatedUser(req);

            if (res.appsListInstallationsForAuthenticatedUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsListReposAccessibleToInstallation

List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsListReposAccessibleToInstallationRequest;
import org.openapis.openapi.models.operations.AppsListReposAccessibleToInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsListReposAccessibleToInstallationRequest req = new AppsListReposAccessibleToInstallationRequest() {{
                page = 677082L;
                perPage = 536579L;
            }};            

            AppsListReposAccessibleToInstallationResponse res = sdk.apps.appsListReposAccessibleToInstallation(req);

            if (res.appsListReposAccessibleToInstallation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsRemoveRepoFromInstallationForAuthenticatedUser

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.0/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#remove-a-repository-from-an-app-installation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsRemoveRepoFromInstallationForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.AppsRemoveRepoFromInstallationForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsRemoveRepoFromInstallationForAuthenticatedUserRequest req = new AppsRemoveRepoFromInstallationForAuthenticatedUserRequest(607045L, 896672L);            

            AppsRemoveRepoFromInstallationForAuthenticatedUserResponse res = sdk.apps.appsRemoveRepoFromInstallationForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~appsResetAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#reset-an-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsResetAuthorizationRequest;
import org.openapis.openapi.models.operations.AppsResetAuthorizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsResetAuthorizationRequest req = new AppsResetAuthorizationRequest("distinctio", "asperiores");            

            AppsResetAuthorizationResponse res = sdk.apps.appsResetAuthorization(req);

            if (res.authorization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsResetToken

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#reset-a-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsResetTokenRequest;
import org.openapis.openapi.models.operations.AppsResetTokenRequestBody;
import org.openapis.openapi.models.operations.AppsResetTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsResetTokenRequest req = new AppsResetTokenRequest(                new AppsResetTokenRequestBody("nihil");, "ipsum");            

            AppsResetTokenResponse res = sdk.apps.appsResetToken(req);

            if (res.authorization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~appsRevokeAuthorizationForApplication~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#revoke-an-authorization-for-an-application>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsRevokeAuthorizationForApplicationRequest;
import org.openapis.openapi.models.operations.AppsRevokeAuthorizationForApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsRevokeAuthorizationForApplicationRequest req = new AppsRevokeAuthorizationForApplicationRequest("voluptate", "id");            

            AppsRevokeAuthorizationForApplicationResponse res = sdk.apps.appsRevokeAuthorizationForApplication(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~appsRevokeGrantForApplication~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub Enterprise Server](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#revoke-a-grant-for-an-application>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsRevokeGrantForApplicationRequest;
import org.openapis.openapi.models.operations.AppsRevokeGrantForApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsRevokeGrantForApplicationRequest req = new AppsRevokeGrantForApplicationRequest("saepe", "eius");            

            AppsRevokeGrantForApplicationResponse res = sdk.apps.appsRevokeGrantForApplication(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsRevokeInstallationAccessToken

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#revoke-an-installation-access-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsRevokeInstallationAccessTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsRevokeInstallationAccessTokenResponse res = sdk.apps.appsRevokeInstallationAccessToken();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsScopeToken

Use a non-scoped user-to-server OAuth access token to create a repository scoped and/or permission scoped user-to-server OAuth access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-a-scoped-access-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsScopeTokenRequest;
import org.openapis.openapi.models.operations.AppsScopeTokenRequestBody;
import org.openapis.openapi.models.operations.AppsScopeTokenResponse;
import org.openapis.openapi.models.shared.AppPermissions;
import org.openapis.openapi.models.shared.AppPermissionsActionsEnum;
import org.openapis.openapi.models.shared.AppPermissionsAdministrationEnum;
import org.openapis.openapi.models.shared.AppPermissionsChecksEnum;
import org.openapis.openapi.models.shared.AppPermissionsContentReferencesEnum;
import org.openapis.openapi.models.shared.AppPermissionsContentsEnum;
import org.openapis.openapi.models.shared.AppPermissionsDeploymentsEnum;
import org.openapis.openapi.models.shared.AppPermissionsEnvironmentsEnum;
import org.openapis.openapi.models.shared.AppPermissionsIssuesEnum;
import org.openapis.openapi.models.shared.AppPermissionsMembersEnum;
import org.openapis.openapi.models.shared.AppPermissionsMetadataEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationAdministrationEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationHooksEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationPackagesEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationPlanEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationProjectsEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationSecretsEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationSelfHostedRunnersEnum;
import org.openapis.openapi.models.shared.AppPermissionsOrganizationUserBlockingEnum;
import org.openapis.openapi.models.shared.AppPermissionsPackagesEnum;
import org.openapis.openapi.models.shared.AppPermissionsPagesEnum;
import org.openapis.openapi.models.shared.AppPermissionsPullRequestsEnum;
import org.openapis.openapi.models.shared.AppPermissionsRepositoryHooksEnum;
import org.openapis.openapi.models.shared.AppPermissionsRepositoryProjectsEnum;
import org.openapis.openapi.models.shared.AppPermissionsSecretScanningAlertsEnum;
import org.openapis.openapi.models.shared.AppPermissionsSecretsEnum;
import org.openapis.openapi.models.shared.AppPermissionsSecurityEventsEnum;
import org.openapis.openapi.models.shared.AppPermissionsSingleFileEnum;
import org.openapis.openapi.models.shared.AppPermissionsStatusesEnum;
import org.openapis.openapi.models.shared.AppPermissionsTeamDiscussionsEnum;
import org.openapis.openapi.models.shared.AppPermissionsVulnerabilityAlertsEnum;
import org.openapis.openapi.models.shared.AppPermissionsWorkflowsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsScopeTokenRequest req = new AppsScopeTokenRequest(                new AppsScopeTokenRequestBody("e72e16c7e42f292c6912e7710c838347ae178b4a") {{
                                permissions = new AppPermissions() {{
                                    actions = AppPermissionsActionsEnum.READ;
                                    administration = AppPermissionsAdministrationEnum.READ;
                                    checks = AppPermissionsChecksEnum.READ;
                                    contentReferences = AppPermissionsContentReferencesEnum.WRITE;
                                    contents = AppPermissionsContentsEnum.WRITE;
                                    deployments = AppPermissionsDeploymentsEnum.READ;
                                    environments = AppPermissionsEnvironmentsEnum.WRITE;
                                    issues = AppPermissionsIssuesEnum.READ;
                                    members = AppPermissionsMembersEnum.WRITE;
                                    metadata = AppPermissionsMetadataEnum.WRITE;
                                    organizationAdministration = AppPermissionsOrganizationAdministrationEnum.READ;
                                    organizationHooks = AppPermissionsOrganizationHooksEnum.WRITE;
                                    organizationPackages = AppPermissionsOrganizationPackagesEnum.WRITE;
                                    organizationPlan = AppPermissionsOrganizationPlanEnum.READ;
                                    organizationProjects = AppPermissionsOrganizationProjectsEnum.WRITE;
                                    organizationSecrets = AppPermissionsOrganizationSecretsEnum.READ;
                                    organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum.WRITE;
                                    organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum.READ;
                                    packages = AppPermissionsPackagesEnum.READ;
                                    pages = AppPermissionsPagesEnum.READ;
                                    pullRequests = AppPermissionsPullRequestsEnum.WRITE;
                                    repositoryHooks = AppPermissionsRepositoryHooksEnum.WRITE;
                                    repositoryProjects = AppPermissionsRepositoryProjectsEnum.READ;
                                    secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum.WRITE;
                                    secrets = AppPermissionsSecretsEnum.WRITE;
                                    securityEvents = AppPermissionsSecurityEventsEnum.READ;
                                    singleFile = AppPermissionsSingleFileEnum.WRITE;
                                    statuses = AppPermissionsStatusesEnum.READ;
                                    teamDiscussions = AppPermissionsTeamDiscussionsEnum.READ;
                                    vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum.WRITE;
                                    workflows = AppPermissionsWorkflowsEnum.WRITE;
                                }};;
                                repositories = new String[]{{
                                    add("rails"),
                                    add("rails"),
                                    add("rails"),
                                    add("rails"),
                                }};
                                repositoryIds = new Long[]{{
                                    add(730856L),
                                }};
                                target = "octocat";
                                targetId = 1L;
                            }};, "accusamus");            

            AppsScopeTokenResponse res = sdk.apps.appsScopeToken(req);

            if (res.authorization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsSuspendInstallation

Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Server API or webhook events is blocked for that account.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#suspend-an-app-installation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsSuspendInstallationRequest;
import org.openapis.openapi.models.operations.AppsSuspendInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsSuspendInstallationRequest req = new AppsSuspendInstallationRequest(253941L);            

            AppsSuspendInstallationResponse res = sdk.apps.appsSuspendInstallation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsUnsuspendInstallation

Removes a GitHub App installation suspension.

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#unsuspend-an-app-installation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsUnsuspendInstallationRequest;
import org.openapis.openapi.models.operations.AppsUnsuspendInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsUnsuspendInstallationRequest req = new AppsUnsuspendInstallationRequest(313692L);            

            AppsUnsuspendInstallationResponse res = sdk.apps.appsUnsuspendInstallation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsUpdateWebhookConfigForApp

Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/apps#update-a-webhook-configuration-for-an-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsUpdateWebhookConfigForAppRequestBody;
import org.openapis.openapi.models.operations.AppsUpdateWebhookConfigForAppResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsUpdateWebhookConfigForAppRequestBody req = new AppsUpdateWebhookConfigForAppRequestBody() {{
                contentType = ""json"";
                insecureSsl = ""0"";
                secret = ""********"";
                url = "https://example.com/webhook";
            }};            

            AppsUpdateWebhookConfigForAppResponse res = sdk.apps.appsUpdateWebhookConfigForApp(req);

            if (res.webhookConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

# apps

## Overview

Information for integrations and installations.

### Available Operations

* [appsAddRepoToInstallation](#appsaddrepotoinstallation) - Add a repository to an app installation
* [appsCreateContentAttachment](#appscreatecontentattachment) - Create a content attachment
* [appsCreateFromManifest](#appscreatefrommanifest) - Create a GitHub App from a manifest
* [appsCreateInstallationAccessToken](#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [appsDeleteInstallation](#appsdeleteinstallation) - Delete an installation for the authenticated app
* [appsGetAuthenticated](#appsgetauthenticated) - Get the authenticated app
* [appsGetBySlug](#appsgetbyslug) - Get an app
* [appsGetInstallation](#appsgetinstallation) - Get an installation for the authenticated app
* [appsGetOrgInstallation](#appsgetorginstallation) - Get an organization installation for the authenticated app
* [appsGetRepoInstallation](#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [appsGetUserInstallation](#appsgetuserinstallation) - Get a user installation for the authenticated app
* [appsListInstallationReposForAuthenticatedUser](#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [appsListInstallations](#appslistinstallations) - List installations for the authenticated app
* [appsListInstallationsForAuthenticatedUser](#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [appsListReposAccessibleToInstallation](#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [appsRemoveRepoFromInstallation](#appsremoverepofrominstallation) - Remove a repository from an app installation

## appsAddRepoToInstallation

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.19/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#add-a-repository-to-an-app-installation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsAddRepoToInstallationRequest;
import org.openapis.openapi.models.operations.AppsAddRepoToInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsAddRepoToInstallationRequest req = new AppsAddRepoToInstallationRequest(670638L, 170909L);            

            AppsAddRepoToInstallationResponse res = sdk.apps.appsAddRepoToInstallation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsCreateContentAttachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.19/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@2.19/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#create-a-content-attachment>

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

            AppsCreateContentAttachmentRequest req = new AppsCreateContentAttachmentRequest(                new AppsCreateContentAttachmentRequestBody("Body of the attachment", "Title of the attachment");, 210382L, "corporis", "explicabo");            

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

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#create-a-github-app-from-a-manifest>

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

            AppsCreateFromManifestRequest req = new AppsCreateFromManifestRequest("nobis") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("omnis", "nemo");
                    put("minima", "excepturi");
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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps/#create-an-installation-access-token-for-an-app>

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

            AppsCreateInstallationAccessTokenRequest req = new AppsCreateInstallationAccessTokenRequest("accusantium", 438601L) {{
                requestBody = new AppsCreateInstallationAccessTokenRequestBody() {{
                    permissions = new AppPermissions() {{
                        actions = AppPermissionsActionsEnum.WRITE;
                        administration = AppPermissionsAdministrationEnum.WRITE;
                        checks = AppPermissionsChecksEnum.WRITE;
                        contentReferences = AppPermissionsContentReferencesEnum.READ;
                        contents = AppPermissionsContentsEnum.WRITE;
                        deployments = AppPermissionsDeploymentsEnum.READ;
                        environments = AppPermissionsEnvironmentsEnum.WRITE;
                        issues = AppPermissionsIssuesEnum.READ;
                        members = AppPermissionsMembersEnum.WRITE;
                        metadata = AppPermissionsMetadataEnum.WRITE;
                        organizationAdministration = AppPermissionsOrganizationAdministrationEnum.WRITE;
                        organizationHooks = AppPermissionsOrganizationHooksEnum.READ;
                        organizationPackages = AppPermissionsOrganizationPackagesEnum.READ;
                        organizationPlan = AppPermissionsOrganizationPlanEnum.READ;
                        organizationProjects = AppPermissionsOrganizationProjectsEnum.WRITE;
                        organizationSecrets = AppPermissionsOrganizationSecretsEnum.READ;
                        organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum.READ;
                        organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum.WRITE;
                        packages = AppPermissionsPackagesEnum.READ;
                        pages = AppPermissionsPagesEnum.READ;
                        pullRequests = AppPermissionsPullRequestsEnum.READ;
                        repositoryHooks = AppPermissionsRepositoryHooksEnum.WRITE;
                        repositoryProjects = AppPermissionsRepositoryProjectsEnum.WRITE;
                        secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum.READ;
                        secrets = AppPermissionsSecretsEnum.READ;
                        securityEvents = AppPermissionsSecurityEventsEnum.WRITE;
                        singleFile = AppPermissionsSingleFileEnum.READ;
                        statuses = AppPermissionsStatusesEnum.WRITE;
                        teamDiscussions = AppPermissionsTeamDiscussionsEnum.READ;
                        vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum.READ;
                        workflows = AppPermissionsWorkflowsEnum.WRITE;
                    }};;
                    repositories = new String[]{{
                        add("rails"),
                        add("rails"),
                        add("rails"),
                    }};
                    repositoryIds = new Long[]{{
                        add(13571L),
                        add(97101L),
                        add(622846L),
                        add(837945L),
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

## appsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

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

            AppsDeleteInstallationRequest req = new AppsDeleteInstallationRequest("laborum", 96098L);            

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

## appsGetAuthenticated

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-the-authenticated-app>

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

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps/#get-an-app>

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

            AppsGetBySlugRequest req = new AppsGetBySlugRequest("reiciendis");            

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

Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-an-installation-for-the-authenticated-app>

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

            AppsGetInstallationRequest req = new AppsGetInstallationRequest("voluptatibus", 878194L);            

            AppsGetInstallationResponse res = sdk.apps.appsGetInstallation(req);

            if (res.installationGhes2 != null) {
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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

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

            AppsGetOrgInstallationRequest req = new AppsGetOrgInstallationRequest("nihil", "praesentium");            

            AppsGetOrgInstallationResponse res = sdk.apps.appsGetOrgInstallation(req);

            if (res.installationGhes2 != null) {
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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

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

            AppsGetRepoInstallationRequest req = new AppsGetRepoInstallationRequest("voluptatibus", "ipsa", "omnis");            

            AppsGetRepoInstallationResponse res = sdk.apps.appsGetRepoInstallation(req);

            if (res.installationGhes2 != null) {
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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

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

            AppsGetUserInstallationRequest req = new AppsGetUserInstallationRequest("voluptate", "cum");            

            AppsGetUserInstallationResponse res = sdk.apps.appsGetUserInstallation(req);

            if (res.installationGhes2 != null) {
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

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

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

            AppsListInstallationReposForAuthenticatedUserRequest req = new AppsListInstallationReposForAuthenticatedUserRequest("perferendis", 39187L) {{
                page = 441711L;
                perPage = 282807L;
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

You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-installations-for-the-authenticated-app>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsListInstallationsRequest;
import org.openapis.openapi.models.operations.AppsListInstallationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsListInstallationsRequest req = new AppsListInstallationsRequest("maiores") {{
                page = 120196L;
                perPage = 359444L;
            }};            

            AppsListInstallationsResponse res = sdk.apps.appsListInstallations(req);

            if (res.installationGhes2s != null) {
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

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

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

            AppsListInstallationsForAuthenticatedUserRequest req = new AppsListInstallationsForAuthenticatedUserRequest("dolore") {{
                page = 480894L;
                perPage = 118727L;
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

You must use an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

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

            AppsListReposAccessibleToInstallationRequest req = new AppsListReposAccessibleToInstallationRequest("harum") {{
                page = 317983L;
                perPage = 880476L;
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

## appsRemoveRepoFromInstallation

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.19/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/apps#remove-a-repository-from-an-app-installation>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsRemoveRepoFromInstallationRequest;
import org.openapis.openapi.models.operations.AppsRemoveRepoFromInstallationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsRemoveRepoFromInstallationRequest req = new AppsRemoveRepoFromInstallationRequest(414263L, 918236L);            

            AppsRemoveRepoFromInstallationResponse res = sdk.apps.appsRemoveRepoFromInstallation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

# EnterpriseAdmin

## Overview

Administer a GitHub enterprise.

### Available Operations

* [EnterpriseAdminAddAuthorizedSSHKey](#enterpriseadminaddauthorizedsshkey) - Add an authorized SSH key
* [EnterpriseAdminCreateEnterpriseServerLicense](#enterpriseadmincreateenterpriseserverlicense) - Create a GitHub license
* [EnterpriseAdminCreateGlobalWebhook](#enterpriseadmincreateglobalwebhook) - Create a global webhook
* [EnterpriseAdminCreateImpersonationOAuthToken](#enterpriseadmincreateimpersonationoauthtoken) - Create an impersonation OAuth token
* [EnterpriseAdminCreateOrg](#enterpriseadmincreateorg) - Create an organization
* [EnterpriseAdminCreatePreReceiveEnvironment](#enterpriseadmincreateprereceiveenvironment) - Create a pre-receive environment
* [EnterpriseAdminCreatePreReceiveHook](#enterpriseadmincreateprereceivehook) - Create a pre-receive hook
* [EnterpriseAdminCreateUser](#enterpriseadmincreateuser) - Create a user
* [EnterpriseAdminDeleteGlobalWebhook](#enterpriseadmindeleteglobalwebhook) - Delete a global webhook
* [EnterpriseAdminDeleteImpersonationOAuthToken](#enterpriseadmindeleteimpersonationoauthtoken) - Delete an impersonation OAuth token
* [EnterpriseAdminDeletePersonalAccessToken](#enterpriseadmindeletepersonalaccesstoken) - Delete a personal access token
* [EnterpriseAdminDeletePreReceiveEnvironment](#enterpriseadmindeleteprereceiveenvironment) - Delete a pre-receive environment
* [EnterpriseAdminDeletePreReceiveHook](#enterpriseadmindeleteprereceivehook) - Delete a pre-receive hook
* [EnterpriseAdminDeletePublicKey](#enterpriseadmindeletepublickey) - Delete a public key
* [EnterpriseAdminDeleteUser](#enterpriseadmindeleteuser) - Delete a user
* [EnterpriseAdminDemoteSiteAdministrator](#enterpriseadmindemotesiteadministrator) - Demote a site administrator
* [EnterpriseAdminEnableOrDisableMaintenanceMode](#enterpriseadminenableordisablemaintenancemode) - Enable or disable maintenance mode
* [EnterpriseAdminGetAllAuthorizedSSHKeys](#enterpriseadmingetallauthorizedsshkeys) - Get all authorized SSH keys
* [EnterpriseAdminGetAllStats](#enterpriseadmingetallstats) - Get all statistics
* [EnterpriseAdminGetCommentStats](#enterpriseadmingetcommentstats) - Get comment statistics
* [EnterpriseAdminGetConfigurationStatus](#enterpriseadmingetconfigurationstatus) - Get the configuration status
* [EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment](#enterpriseadmingetdownloadstatusforprereceiveenvironment) - Get the download status for a pre-receive environment
* [EnterpriseAdminGetGlobalWebhook](#enterpriseadmingetglobalwebhook) - Get a global webhook
* [EnterpriseAdminGetHooksStats](#enterpriseadmingethooksstats) - Get hooks statistics
* [EnterpriseAdminGetIssueStats](#enterpriseadmingetissuestats) - Get issue statistics
* [EnterpriseAdminGetLicenseInformation](#enterpriseadmingetlicenseinformation) - Get license information
* [EnterpriseAdminGetMaintenanceStatus](#enterpriseadmingetmaintenancestatus) - Get the maintenance status
* [EnterpriseAdminGetMilestoneStats](#enterpriseadmingetmilestonestats) - Get milestone statistics
* [EnterpriseAdminGetOrgStats](#enterpriseadmingetorgstats) - Get organization statistics
* [EnterpriseAdminGetPagesStats](#enterpriseadmingetpagesstats) - Get pages statistics
* [EnterpriseAdminGetPreReceiveEnvironment](#enterpriseadmingetprereceiveenvironment) - Get a pre-receive environment
* [EnterpriseAdminGetPreReceiveHook](#enterpriseadmingetprereceivehook) - Get a pre-receive hook
* [EnterpriseAdminGetPreReceiveHookForOrg](#enterpriseadmingetprereceivehookfororg) - Get a pre-receive hook for an organization
* [EnterpriseAdminGetPreReceiveHookForRepo](#enterpriseadmingetprereceivehookforrepo) - Get a pre-receive hook for a repository
* [EnterpriseAdminGetPullRequestStats](#enterpriseadmingetpullrequeststats) - Get pull request statistics
* [EnterpriseAdminGetRepoStats](#enterpriseadmingetrepostats) - Get repository statistics
* [EnterpriseAdminGetSettings](#enterpriseadmingetsettings) - Get settings
* [EnterpriseAdminGetUserStats](#enterpriseadmingetuserstats) - Get users statistics
* [EnterpriseAdminListGlobalWebhooks](#enterpriseadminlistglobalwebhooks) - List global webhooks
* [EnterpriseAdminListPersonalAccessTokens](#enterpriseadminlistpersonalaccesstokens) - List personal access tokens
* [EnterpriseAdminListPreReceiveEnvironments](#enterpriseadminlistprereceiveenvironments) - List pre-receive environments
* [EnterpriseAdminListPreReceiveHooks](#enterpriseadminlistprereceivehooks) - List pre-receive hooks
* [EnterpriseAdminListPreReceiveHooksForOrg](#enterpriseadminlistprereceivehooksfororg) - List pre-receive hooks for an organization
* [EnterpriseAdminListPreReceiveHooksForRepo](#enterpriseadminlistprereceivehooksforrepo) - List pre-receive hooks for a repository
* [EnterpriseAdminListPublicKeys](#enterpriseadminlistpublickeys) - List public keys
* [EnterpriseAdminPingGlobalWebhook](#enterpriseadminpingglobalwebhook) - Ping a global webhook
* [EnterpriseAdminPromoteUserToBeSiteAdministrator](#enterpriseadminpromoteusertobesiteadministrator) - Promote a user to be a site administrator
* [EnterpriseAdminRemoveAuthorizedSSHKey](#enterpriseadminremoveauthorizedsshkey) - Remove an authorized SSH key
* [EnterpriseAdminRemovePreReceiveHookEnforcementForOrg](#enterpriseadminremoveprereceivehookenforcementfororg) - Remove pre-receive hook enforcement for an organization
* [EnterpriseAdminRemovePreReceiveHookEnforcementForRepo](#enterpriseadminremoveprereceivehookenforcementforrepo) - Remove pre-receive hook enforcement for a repository
* [EnterpriseAdminSetSettings](#enterpriseadminsetsettings) - Set settings
* [EnterpriseAdminStartConfigurationProcess](#enterpriseadminstartconfigurationprocess) - Start a configuration process
* [EnterpriseAdminStartPreReceiveEnvironmentDownload](#enterpriseadminstartprereceiveenvironmentdownload) - Start a pre-receive environment download
* [EnterpriseAdminSuspendUser](#enterpriseadminsuspenduser) - Suspend a user
* [EnterpriseAdminSyncLdapMappingForTeam](#enterpriseadminsyncldapmappingforteam) - Sync LDAP mapping for a team
* [EnterpriseAdminSyncLdapMappingForUser](#enterpriseadminsyncldapmappingforuser) - Sync LDAP mapping for a user
* [EnterpriseAdminUnsuspendUser](#enterpriseadminunsuspenduser) - Unsuspend a user
* [EnterpriseAdminUpdateGlobalWebhook](#enterpriseadminupdateglobalwebhook) - Update a global webhook
* [EnterpriseAdminUpdateLdapMappingForTeam](#enterpriseadminupdateldapmappingforteam) - Update LDAP mapping for a team
* [EnterpriseAdminUpdateLdapMappingForUser](#enterpriseadminupdateldapmappingforuser) - Update LDAP mapping for a user
* [EnterpriseAdminUpdateOrgName](#enterpriseadminupdateorgname) - Update an organization name
* [EnterpriseAdminUpdatePreReceiveEnvironment](#enterpriseadminupdateprereceiveenvironment) - Update a pre-receive environment
* [EnterpriseAdminUpdatePreReceiveHook](#enterpriseadminupdateprereceivehook) - Update a pre-receive hook
* [EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg](#enterpriseadminupdateprereceivehookenforcementfororg) - Update pre-receive hook enforcement for an organization
* [EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo](#enterpriseadminupdateprereceivehookenforcementforrepo) - Update pre-receive hook enforcement for a repository
* [EnterpriseAdminUpdateUsernameForUser](#enterpriseadminupdateusernameforuser) - Update the username for a user
* [EnterpriseAdminUpgradeLicense](#enterpriseadminupgradelicense) - Upgrade a license
* [GetEnterpriseStatsGists](#getenterprisestatsgists) - Get gist statistics

## EnterpriseAdminAddAuthorizedSSHKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#add-an-authorized-ssh-key>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminAddAuthorizedSSHKey(ctx, operations.EnterpriseAdminAddAuthorizedSSHKeyRequestBody{
        AuthorizedKey: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeys != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateEnterpriseServerLicense

When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license.

Note that you need to `POST` to [`/setup/api/configure`](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.

When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:

1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-github-enterprise-server-license>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateEnterpriseServerLicense(ctx, operations.EnterpriseAdminCreateEnterpriseServerLicenseRequestBody{
        License: "labore",
        Password: sdk.String("suscipit"),
        Settings: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminCreateGlobalWebhook

Create a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-global-webhook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateGlobalWebhook(ctx, operations.EnterpriseAdminCreateGlobalWebhookRequest{
        RequestBody: operations.EnterpriseAdminCreateGlobalWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: operations.EnterpriseAdminCreateGlobalWebhookRequestBodyConfig{
                ContentType: sdk.String("nobis"),
                InsecureSsl: sdk.String("eum"),
                Secret: sdk.String("vero"),
                URL: "aspernatur",
            },
            Events: []string{
                "magnam",
            },
            Name: "Miriam Hermann",
        },
        Accept: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateImpersonationOAuthToken

Create an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-an-impersonation-oauth-token>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateImpersonationOAuthToken(ctx, operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest{
        RequestBody: &operations.EnterpriseAdminCreateImpersonationOAuthTokenRequestBody{
            Scopes: []string{
                "mollitia",
            },
        },
        Username: "Vivienne43",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateOrg

Create an organization

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-an-organization>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateOrg(ctx, operations.EnterpriseAdminCreateOrgRequestBody{
        Admin: "dolor",
        Login: "necessitatibus",
        ProfileName: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimple != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreatePreReceiveEnvironment

Create a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-pre-receive-environment>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreatePreReceiveEnvironment(ctx, operations.EnterpriseAdminCreatePreReceiveEnvironmentRequestBody{
        ImageURL: "nemo",
        Name: "Vera Wyman",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironment != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreatePreReceiveHook

Create a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-pre-receive-hook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreatePreReceiveHook(ctx, operations.EnterpriseAdminCreatePreReceiveHookRequestBody{
        AllowDownstreamConfiguration: sdk.Bool(false),
        Enforcement: sdk.String("maxime"),
        Environment: map[string]interface{}{
            "facilis": "in",
            "architecto": "architecto",
            "repudiandae": "ullam",
        },
        Name: "Jessie Zulauf",
        Script: "saepe",
        ScriptRepository: map[string]interface{}{
            "accusantium": "consequuntur",
            "praesentium": "natus",
            "magni": "sunt",
            "quo": "illum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateUser

If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.

The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.

If the login name or email address is already associated with an account, the server will return a `422` response.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-user>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateUser(ctx, operations.EnterpriseAdminCreateUserRequestBody{
        Email: sdk.String("Raegan.Jenkins@hotmail.com"),
        Login: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUser != nil {
        // handle response
    }
}
```

## EnterpriseAdminDeleteGlobalWebhook

Delete a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-global-webhook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteGlobalWebhook(ctx, operations.EnterpriseAdminDeleteGlobalWebhookRequest{
        Accept: "accusantium",
        HookID: 69167,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteImpersonationOAuthToken

Delete an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteImpersonationOAuthToken(ctx, operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest{
        Username: "Willow.Predovic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeletePersonalAccessToken

Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-personal-access-token>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeletePersonalAccessToken(ctx, operations.EnterpriseAdminDeletePersonalAccessTokenRequest{
        TokenID: 420075,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeletePreReceiveEnvironment

If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

*   _Cannot modify or delete the default environment_
*   _Cannot delete environment that has hooks_
*   _Cannot delete environment when download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-pre-receive-environment>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeletePreReceiveEnvironment(ctx, operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest{
        PreReceiveEnvironmentID: 722056,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeletePreReceiveHook

Delete a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-pre-receive-hook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeletePreReceiveHook(ctx, operations.EnterpriseAdminDeletePreReceiveHookRequest{
        PreReceiveHookID: 50588,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeletePublicKey

Delete a public key

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-public-key>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeletePublicKey(ctx, operations.EnterpriseAdminDeletePublicKeyRequest{
        KeyIds: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteUser

Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#suspend-a-user) is often a better option.

You can delete any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-user>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteUser(ctx, operations.EnterpriseAdminDeleteUserRequest{
        Username: "Freddie85",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDemoteSiteAdministrator

You can demote any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#demote-a-site-administrator>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminDemoteSiteAdministrator(ctx, operations.EnterpriseAdminDemoteSiteAdministratorRequest{
        Username: "Darian.Anderson94",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminEnableOrDisableMaintenanceMode

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminEnableOrDisableMaintenanceMode(ctx, operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody{
        Maintenance: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MaintenanceStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetAllAuthorizedSSHKeys

Get all authorized SSH keys

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-all-authorized-ssh-keys>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAllAuthorizedSSHKeys(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeys != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetAllStats

Get all statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAllStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetCommentStats

Get comment statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-comment-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetCommentStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseCommentOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetConfigurationStatus

This endpoint allows you to check the status of the most recent configuration process:

Note that you may need to wait several seconds after you start a process before you can check its status.

The different statuses are:

| Status        | Description                       |
| ------------- | --------------------------------- |
| `PENDING`     | The job has not started yet       |
| `CONFIGURING` | The job is running                |
| `DONE`        | The job has finished correctly    |
| `FAILED`      | The job has finished unexpectedly |

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-the-configuration-status>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetConfigurationStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigurationStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment

In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment(ctx, operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest{
        PreReceiveEnvironmentID: 749999,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironmentDownloadStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetGlobalWebhook

Get a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-global-webhook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetGlobalWebhook(ctx, operations.EnterpriseAdminGetGlobalWebhookRequest{
        Accept: "dolores",
        HookID: 339404,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetHooksStats

Get hooks statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-hooks-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetHooksStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseHookOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetIssueStats

Get issue statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-issues-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetIssueStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseIssueOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetLicenseInformation

Get license information

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-license-information>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetLicenseInformation(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseInfo != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetMaintenanceStatus

Check your installation's maintenance status:

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-the-maintenance-status>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetMaintenanceStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MaintenanceStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetMilestoneStats

Get milestone statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-milestone-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetMilestoneStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseMilestoneOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetOrgStats

Get organization statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-organization-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetOrgStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseOrganizationOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPagesStats

Get pages statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-pages-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPagesStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterprisePageOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPreReceiveEnvironment

Get a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-pre-receive-environment>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPreReceiveEnvironment(ctx, operations.EnterpriseAdminGetPreReceiveEnvironmentRequest{
        PreReceiveEnvironmentID: 521037,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironment != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPreReceiveHook

Get a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-pre-receive-hook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPreReceiveHook(ctx, operations.EnterpriseAdminGetPreReceiveHookRequest{
        PreReceiveHookID: 489549,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPreReceiveHookForOrg

Get a pre-receive hook for an organization

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPreReceiveHookForOrg(ctx, operations.EnterpriseAdminGetPreReceiveHookForOrgRequest{
        Org: "eaque",
        PreReceiveHookID: 338985,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPreReceiveHookForRepo

Get a pre-receive hook for a repository

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPreReceiveHookForRepo(ctx, operations.EnterpriseAdminGetPreReceiveHookForRepoRequest{
        Owner: "nesciunt",
        PreReceiveHookID: 179490,
        Repo: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPullRequestStats

Get pull request statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-pull-requests-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPullRequestStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterprisePullRequestOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetRepoStats

Get repository statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-repository-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetRepoStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseRepositoryOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetSettings

Get settings

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-settings>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseSettings != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetUserStats

Get users statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-users-statistics>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetUserStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseUserOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminListGlobalWebhooks

List global webhooks

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-global-webhooks>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminListGlobalWebhooks(ctx, operations.EnterpriseAdminListGlobalWebhooksRequest{
        Accept: "dolores",
        Page: sdk.Int64(793698),
        PerPage: sdk.Int64(463451),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalHooks != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPersonalAccessTokens

Lists personal access tokens for all users, including admin users.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-personal-access-tokens>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPersonalAccessTokens(ctx, operations.EnterpriseAdminListPersonalAccessTokensRequest{
        Page: sdk.Int64(223924),
        PerPage: sdk.Int64(874573),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorizations != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPreReceiveEnvironments

List pre-receive environments

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-pre-receive-environments>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPreReceiveEnvironments(ctx, operations.EnterpriseAdminListPreReceiveEnvironmentsRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Page: sdk.Int64(944120),
        PerPage: sdk.Int64(928082),
        Sort: operations.EnterpriseAdminListPreReceiveEnvironmentsSortEnumUpdated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironments != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPreReceiveHooks

List pre-receive hooks

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-pre-receive-hooks>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPreReceiveHooks(ctx, operations.EnterpriseAdminListPreReceiveHooksRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(596656),
        PerPage: sdk.Int64(31838),
        Sort: operations.EnterpriseAdminListPreReceiveHooksSortEnumName.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveHooks != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPreReceiveHooksForOrg

List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPreReceiveHooksForOrg(ctx, operations.EnterpriseAdminListPreReceiveHooksForOrgRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Org: "blanditiis",
        Page: sdk.Int64(621479),
        PerPage: sdk.Int64(50370),
        Sort: operations.EnterpriseAdminListPreReceiveHooksForOrgSortEnumUpdated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPreReceiveHooks != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPreReceiveHooksForRepo

List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPreReceiveHooksForRepo(ctx, operations.EnterpriseAdminListPreReceiveHooksForRepoRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Owner: "adipisci",
        Page: sdk.Int64(992397),
        PerPage: sdk.Int64(934214),
        Repo: "modi",
        Sort: operations.EnterpriseAdminListPreReceiveHooksForRepoSortEnumUpdated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryPreReceiveHooks != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPublicKeys

List public keys

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-public-keys>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPublicKeys(ctx, operations.EnterpriseAdminListPublicKeysRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(535633),
        PerPage: sdk.Int64(864282),
        Since: sdk.String("provident"),
        Sort: operations.EnterpriseAdminListPublicKeysSortEnumAccessed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyFulls != nil {
        // handle response
    }
}
```

## EnterpriseAdminPingGlobalWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@2.19/webhooks/#ping-event) to be sent to the webhook.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#ping-a-global-webhook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminPingGlobalWebhook(ctx, operations.EnterpriseAdminPingGlobalWebhookRequest{
        Accept: "libero",
        HookID: 964490,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminPromoteUserToBeSiteAdministrator

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminPromoteUserToBeSiteAdministrator(ctx, operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest{
        Username: "Elvis.Luettgen",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminRemoveAuthorizedSSHKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#remove-an-authorized-ssh-key>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveAuthorizedSSHKey(ctx, operations.EnterpriseAdminRemoveAuthorizedSSHKeyRequestBody{
        AuthorizedKey: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeys != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemovePreReceiveHookEnforcementForOrg

Removes any overrides for this hook at the org level for this org.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemovePreReceiveHookEnforcementForOrg(ctx, operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest{
        Org: "dolor",
        PreReceiveHookID: 186193,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemovePreReceiveHookEnforcementForRepo

Deletes any overridden enforcement on this repository for the specified hook.

Responds with effective values inherited from owner and/or global level.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemovePreReceiveHookEnforcementForRepo(ctx, operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest{
        Owner: "ipsum",
        PreReceiveHookID: 944373,
        Repo: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminSetSettings

For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-settings).

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#set-settings>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetSettings(ctx, operations.EnterpriseAdminSetSettingsRequestBody{
        Settings: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminStartConfigurationProcess

This endpoint allows you to start a configuration process at any time for your updated settings to take effect:

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#start-a-configuration-process>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminStartConfigurationProcess(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminStartPreReceiveEnvironmentDownload

Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.

If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

* _Cannot modify or delete the default environment_
* _Can not start a new download when a download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#start-a-pre-receive-environment-download>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminStartPreReceiveEnvironmentDownload(ctx, operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest{
        PreReceiveEnvironmentID: 452109,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironmentDownloadStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminSuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.

You can suspend any user account except your own.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#suspend-a-user>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminSuspendUser(ctx, operations.EnterpriseAdminSuspendUserRequest{
        RequestBody: &operations.EnterpriseAdminSuspendUserRequestBody{
            Reason: sdk.String("dignissimos"),
        },
        Username: "Waldo.Farrell8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSyncLdapMappingForTeam

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminSyncLdapMappingForTeam(ctx, operations.EnterpriseAdminSyncLdapMappingForTeamRequest{
        TeamID: 58029,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminSyncLdapMappingForUser

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminSyncLdapMappingForUser(ctx, operations.EnterpriseAdminSyncLdapMappingForUserRequest{
        Username: "Anabelle.Kerluke",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminUnsuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#unsuspend-a-user>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUnsuspendUser(ctx, operations.EnterpriseAdminUnsuspendUserRequest{
        RequestBody: &operations.EnterpriseAdminUnsuspendUserRequestBody{
            Reason: sdk.String("accusamus"),
        },
        Username: "Maurine_Wolf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminUpdateGlobalWebhook

Parameters that are not provided will be overwritten with the default value or removed if no default exists.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-a-global-webhook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateGlobalWebhook(ctx, operations.EnterpriseAdminUpdateGlobalWebhookRequest{
        RequestBody: &operations.EnterpriseAdminUpdateGlobalWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: &operations.EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig{
                ContentType: sdk.String("eos"),
                InsecureSsl: sdk.String("atque"),
                Secret: sdk.String("sit"),
                URL: "fugiat",
            },
            Events: []string{
                "soluta",
            },
        },
        Accept: "dolorum",
        HookID: 478596,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalHook2 != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateLdapMappingForTeam

Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.

If you pass the `hellcat-preview` media type, you can also update the LDAP mapping of a child team.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateLdapMappingForTeam(ctx, operations.EnterpriseAdminUpdateLdapMappingForTeamRequest{
        RequestBody: &operations.EnterpriseAdminUpdateLdapMappingForTeamRequestBody{
            LdapDn: sdk.String("voluptate"),
        },
        TeamID: 677082,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapMappingTeam != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateLdapMappingForUser

Update LDAP mapping for a user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateLdapMappingForUser(ctx, operations.EnterpriseAdminUpdateLdapMappingForUserRequest{
        RequestBody: &operations.EnterpriseAdminUpdateLdapMappingForUserRequestBody{
            LdapDn: sdk.String("deleniti"),
        },
        Username: "Lenny_Treutel46",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapMappingUser != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateOrgName

Update an organization name

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-an-organization-name>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateOrgName(ctx, operations.EnterpriseAdminUpdateOrgNameRequest{
        RequestBody: operations.EnterpriseAdminUpdateOrgNameRequestBody{
            Login: "ipsum",
        },
        Org: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminUpdateOrgName202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdatePreReceiveEnvironment

You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-a-pre-receive-environment>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdatePreReceiveEnvironment(ctx, operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest{
        RequestBody: &operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody{
            ImageURL: sdk.String("id"),
            Name: sdk.String("Mrs. Ray Collins"),
        },
        PreReceiveEnvironmentID: 881586,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironment != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdatePreReceiveHook

Update a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-a-pre-receive-hook>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdatePreReceiveHook(ctx, operations.EnterpriseAdminUpdatePreReceiveHookRequest{
        RequestBody: &operations.EnterpriseAdminUpdatePreReceiveHookRequestBody{
            AllowDownstreamConfiguration: sdk.Bool(false),
            Enforcement: sdk.String("ad"),
            Environment: map[string]interface{}{
                "suscipit": "deserunt",
                "provident": "minima",
                "repellendus": "totam",
                "similique": "alias",
            },
            Name: sdk.String("Alex Goodwin"),
            Script: sdk.String("officiis"),
            ScriptRepository: map[string]interface{}{
                "dolorum": "a",
            },
        },
        PreReceiveHookID: 456130,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg

For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg(ctx, operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest{
        RequestBody: &operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody{
            AllowDownstreamConfiguration: sdk.Bool(false),
            Enforcement: sdk.String("harum"),
        },
        Org: "iusto",
        PreReceiveHookID: 215507,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo

For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo(ctx, operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest{
        RequestBody: &operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody{
            Enforcement: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnumTesting.ToPointer(),
        },
        Owner: "tenetur",
        PreReceiveHookID: 229442,
        Repo: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateUsernameForUser

Update the username for a user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-the-username-for-a-user>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateUsernameForUser(ctx, operations.EnterpriseAdminUpdateUsernameForUserRequest{
        RequestBody: operations.EnterpriseAdminUpdateUsernameForUserRequestBody{
            Login: "accusamus",
        },
        Username: "Deontae95",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminUpdateUsernameForUser202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpgradeLicense

This API upgrades your license and also triggers the configuration process.

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#upgrade-a-license>

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
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpgradeLicense(ctx, operations.EnterpriseAdminUpgradeLicenseRequestBody{
        License: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEnterpriseStatsGists

Get gist statistics

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-gist-statistics>

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
    res, err := s.EnterpriseAdmin.GetEnterpriseStatsGists(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseGistOverview != nil {
        // handle response
    }
}
```

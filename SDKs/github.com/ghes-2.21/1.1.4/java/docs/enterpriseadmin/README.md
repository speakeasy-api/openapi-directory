# enterpriseAdmin

## Overview

Administer a GitHub enterprise.

### Available Operations

* [enterpriseAdminAddAuthorizedSshKey](#enterpriseadminaddauthorizedsshkey) - Add an authorized SSH key
* [enterpriseAdminCreateEnterpriseServerLicense](#enterpriseadmincreateenterpriseserverlicense) - Create a GitHub license
* [enterpriseAdminCreateGlobalWebhook](#enterpriseadmincreateglobalwebhook) - Create a global webhook
* [enterpriseAdminCreateImpersonationOAuthToken](#enterpriseadmincreateimpersonationoauthtoken) - Create an impersonation OAuth token
* [enterpriseAdminCreateOrg](#enterpriseadmincreateorg) - Create an organization
* [enterpriseAdminCreatePreReceiveEnvironment](#enterpriseadmincreateprereceiveenvironment) - Create a pre-receive environment
* [enterpriseAdminCreatePreReceiveHook](#enterpriseadmincreateprereceivehook) - Create a pre-receive hook
* [enterpriseAdminCreateUser](#enterpriseadmincreateuser) - Create a user
* [enterpriseAdminDeleteGlobalWebhook](#enterpriseadmindeleteglobalwebhook) - Delete a global webhook
* [enterpriseAdminDeleteImpersonationOAuthToken](#enterpriseadmindeleteimpersonationoauthtoken) - Delete an impersonation OAuth token
* [enterpriseAdminDeletePersonalAccessToken](#enterpriseadmindeletepersonalaccesstoken) - Delete a personal access token
* [enterpriseAdminDeletePreReceiveEnvironment](#enterpriseadmindeleteprereceiveenvironment) - Delete a pre-receive environment
* [enterpriseAdminDeletePreReceiveHook](#enterpriseadmindeleteprereceivehook) - Delete a pre-receive hook
* [enterpriseAdminDeletePublicKey](#enterpriseadmindeletepublickey) - Delete a public key
* [enterpriseAdminDeleteUser](#enterpriseadmindeleteuser) - Delete a user
* [enterpriseAdminDemoteSiteAdministrator](#enterpriseadmindemotesiteadministrator) - Demote a site administrator
* [enterpriseAdminEnableOrDisableMaintenanceMode](#enterpriseadminenableordisablemaintenancemode) - Enable or disable maintenance mode
* [enterpriseAdminGetAllAuthorizedSshKeys](#enterpriseadmingetallauthorizedsshkeys) - Get all authorized SSH keys
* [enterpriseAdminGetAllStats](#enterpriseadmingetallstats) - Get all statistics
* [enterpriseAdminGetCommentStats](#enterpriseadmingetcommentstats) - Get comment statistics
* [enterpriseAdminGetConfigurationStatus](#enterpriseadmingetconfigurationstatus) - Get the configuration status
* [enterpriseAdminGetDownloadStatusForPreReceiveEnvironment](#enterpriseadmingetdownloadstatusforprereceiveenvironment) - Get the download status for a pre-receive environment
* [enterpriseAdminGetGlobalWebhook](#enterpriseadmingetglobalwebhook) - Get a global webhook
* [enterpriseAdminGetHooksStats](#enterpriseadmingethooksstats) - Get hooks statistics
* [enterpriseAdminGetIssueStats](#enterpriseadmingetissuestats) - Get issue statistics
* [enterpriseAdminGetLicenseInformation](#enterpriseadmingetlicenseinformation) - Get license information
* [enterpriseAdminGetMaintenanceStatus](#enterpriseadmingetmaintenancestatus) - Get the maintenance status
* [enterpriseAdminGetMilestoneStats](#enterpriseadmingetmilestonestats) - Get milestone statistics
* [enterpriseAdminGetOrgStats](#enterpriseadmingetorgstats) - Get organization statistics
* [enterpriseAdminGetPagesStats](#enterpriseadmingetpagesstats) - Get pages statistics
* [enterpriseAdminGetPreReceiveEnvironment](#enterpriseadmingetprereceiveenvironment) - Get a pre-receive environment
* [enterpriseAdminGetPreReceiveHook](#enterpriseadmingetprereceivehook) - Get a pre-receive hook
* [enterpriseAdminGetPreReceiveHookForOrg](#enterpriseadmingetprereceivehookfororg) - Get a pre-receive hook for an organization
* [enterpriseAdminGetPreReceiveHookForRepo](#enterpriseadmingetprereceivehookforrepo) - Get a pre-receive hook for a repository
* [enterpriseAdminGetPullRequestStats](#enterpriseadmingetpullrequeststats) - Get pull request statistics
* [enterpriseAdminGetRepoStats](#enterpriseadmingetrepostats) - Get repository statistics
* [enterpriseAdminGetSettings](#enterpriseadmingetsettings) - Get settings
* [enterpriseAdminGetUserStats](#enterpriseadmingetuserstats) - Get users statistics
* [enterpriseAdminListGlobalWebhooks](#enterpriseadminlistglobalwebhooks) - List global webhooks
* [enterpriseAdminListPersonalAccessTokens](#enterpriseadminlistpersonalaccesstokens) - List personal access tokens
* [enterpriseAdminListPreReceiveEnvironments](#enterpriseadminlistprereceiveenvironments) - List pre-receive environments
* [enterpriseAdminListPreReceiveHooks](#enterpriseadminlistprereceivehooks) - List pre-receive hooks
* [enterpriseAdminListPreReceiveHooksForOrg](#enterpriseadminlistprereceivehooksfororg) - List pre-receive hooks for an organization
* [enterpriseAdminListPreReceiveHooksForRepo](#enterpriseadminlistprereceivehooksforrepo) - List pre-receive hooks for a repository
* [enterpriseAdminListPublicKeys](#enterpriseadminlistpublickeys) - List public keys
* [enterpriseAdminPingGlobalWebhook](#enterpriseadminpingglobalwebhook) - Ping a global webhook
* [enterpriseAdminPromoteUserToBeSiteAdministrator](#enterpriseadminpromoteusertobesiteadministrator) - Promote a user to be a site administrator
* [enterpriseAdminRemoveAuthorizedSshKey](#enterpriseadminremoveauthorizedsshkey) - Remove an authorized SSH key
* [enterpriseAdminRemovePreReceiveHookEnforcementForOrg](#enterpriseadminremoveprereceivehookenforcementfororg) - Remove pre-receive hook enforcement for an organization
* [enterpriseAdminRemovePreReceiveHookEnforcementForRepo](#enterpriseadminremoveprereceivehookenforcementforrepo) - Remove pre-receive hook enforcement for a repository
* [enterpriseAdminSetSettings](#enterpriseadminsetsettings) - Set settings
* [enterpriseAdminStartConfigurationProcess](#enterpriseadminstartconfigurationprocess) - Start a configuration process
* [enterpriseAdminStartPreReceiveEnvironmentDownload](#enterpriseadminstartprereceiveenvironmentdownload) - Start a pre-receive environment download
* [enterpriseAdminSuspendUser](#enterpriseadminsuspenduser) - Suspend a user
* [enterpriseAdminSyncLdapMappingForTeam](#enterpriseadminsyncldapmappingforteam) - Sync LDAP mapping for a team
* [enterpriseAdminSyncLdapMappingForUser](#enterpriseadminsyncldapmappingforuser) - Sync LDAP mapping for a user
* [enterpriseAdminUnsuspendUser](#enterpriseadminunsuspenduser) - Unsuspend a user
* [enterpriseAdminUpdateGlobalWebhook](#enterpriseadminupdateglobalwebhook) - Update a global webhook
* [enterpriseAdminUpdateLdapMappingForTeam](#enterpriseadminupdateldapmappingforteam) - Update LDAP mapping for a team
* [enterpriseAdminUpdateLdapMappingForUser](#enterpriseadminupdateldapmappingforuser) - Update LDAP mapping for a user
* [enterpriseAdminUpdateOrgName](#enterpriseadminupdateorgname) - Update an organization name
* [enterpriseAdminUpdatePreReceiveEnvironment](#enterpriseadminupdateprereceiveenvironment) - Update a pre-receive environment
* [enterpriseAdminUpdatePreReceiveHook](#enterpriseadminupdateprereceivehook) - Update a pre-receive hook
* [enterpriseAdminUpdatePreReceiveHookEnforcementForOrg](#enterpriseadminupdateprereceivehookenforcementfororg) - Update pre-receive hook enforcement for an organization
* [enterpriseAdminUpdatePreReceiveHookEnforcementForRepo](#enterpriseadminupdateprereceivehookenforcementforrepo) - Update pre-receive hook enforcement for a repository
* [enterpriseAdminUpdateUsernameForUser](#enterpriseadminupdateusernameforuser) - Update the username for a user
* [enterpriseAdminUpgradeLicense](#enterpriseadminupgradelicense) - Upgrade a license
* [getEnterpriseStatsGists](#getenterprisestatsgists) - Get gist statistics

## enterpriseAdminAddAuthorizedSshKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#add-an-authorized-ssh-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminAddAuthorizedSshKeyRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminAddAuthorizedSshKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminAddAuthorizedSshKeyRequestBody req = new EnterpriseAdminAddAuthorizedSshKeyRequestBody("molestiae");            

            EnterpriseAdminAddAuthorizedSshKeyResponse res = sdk.enterpriseAdmin.enterpriseAdminAddAuthorizedSshKey(req);

            if (res.sshKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminCreateEnterpriseServerLicense

When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license.

Note that you need to `POST` to [`/setup/api/configure`](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.

When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:

1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-github-enterprise-server-license>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateEnterpriseServerLicenseRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminCreateEnterpriseServerLicenseRequestBody req = new EnterpriseAdminCreateEnterpriseServerLicenseRequestBody("perferendis") {{
                password = "nihil";
                settings = "magnam";
            }};            

            EnterpriseAdminCreateEnterpriseServerLicenseResponse res = sdk.enterpriseAdmin.enterpriseAdminCreateEnterpriseServerLicense(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminCreateGlobalWebhook

Create a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-global-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateGlobalWebhookRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateGlobalWebhookRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateGlobalWebhookRequestBodyConfig;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateGlobalWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminCreateGlobalWebhookRequest req = new EnterpriseAdminCreateGlobalWebhookRequest(                new EnterpriseAdminCreateGlobalWebhookRequestBody(                new EnterpriseAdminCreateGlobalWebhookRequestBodyConfig("distinctio") {{
                                                contentType = "id";
                                                insecureSsl = "labore";
                                                secret = "labore";
                                            }};, "suscipit") {{
                                active = false;
                                events = new String[]{{
                                    add("nobis"),
                                    add("eum"),
                                    add("vero"),
                                }};
                            }};, "aspernatur");            

            EnterpriseAdminCreateGlobalWebhookResponse res = sdk.enterpriseAdmin.enterpriseAdminCreateGlobalWebhook(req);

            if (res.globalHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminCreateImpersonationOAuthToken

Create an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-an-impersonation-oauth-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminCreateImpersonationOAuthTokenRequest req = new EnterpriseAdminCreateImpersonationOAuthTokenRequest("architecto") {{
                requestBody = new EnterpriseAdminCreateImpersonationOAuthTokenRequestBody() {{
                    scopes = new String[]{{
                        add("et"),
                        add("excepturi"),
                    }};
                }};;
            }};            

            EnterpriseAdminCreateImpersonationOAuthTokenResponse res = sdk.enterpriseAdmin.enterpriseAdminCreateImpersonationOAuthToken(req);

            if (res.authorization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminCreateOrg

Create an organization

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateOrgRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminCreateOrgRequestBody req = new EnterpriseAdminCreateOrgRequestBody("ullam", "provident") {{
                profileName = "quos";
            }};            

            EnterpriseAdminCreateOrgResponse res = sdk.enterpriseAdmin.enterpriseAdminCreateOrg(req);

            if (res.organizationSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminCreatePreReceiveEnvironment

Create a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-pre-receive-environment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminCreatePreReceiveEnvironmentRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminCreatePreReceiveEnvironmentRequestBody req = new EnterpriseAdminCreatePreReceiveEnvironmentRequestBody("sint", "accusantium");            

            EnterpriseAdminCreatePreReceiveEnvironmentResponse res = sdk.enterpriseAdmin.enterpriseAdminCreatePreReceiveEnvironment(req);

            if (res.preReceiveEnvironment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminCreatePreReceiveHook

Create a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-pre-receive-hook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminCreatePreReceiveHookRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminCreatePreReceiveHookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminCreatePreReceiveHookRequestBody req = new EnterpriseAdminCreatePreReceiveHookRequestBody(                new java.util.HashMap<String, Object>() {{
                                put("reiciendis", "mollitia");
                                put("ad", "eum");
                                put("dolor", "necessitatibus");
                            }}, "odit", "nemo",                 new java.util.HashMap<String, Object>() {{
                                put("iure", "doloribus");
                            }}) {{
                allowDownstreamConfiguration = false;
                enforcement = "debitis";
            }};            

            EnterpriseAdminCreatePreReceiveHookResponse res = sdk.enterpriseAdmin.enterpriseAdminCreatePreReceiveHook(req);

            if (res.preReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminCreateUser

If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.

The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.

If the login name or email address is already associated with an account, the server will return a `422` response.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateUserRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminCreateUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminCreateUserRequestBody req = new EnterpriseAdminCreateUserRequestBody("eius") {{
                email = "Kaitlyn.Prosacco@hotmail.com";
            }};            

            EnterpriseAdminCreateUserResponse res = sdk.enterpriseAdmin.enterpriseAdminCreateUser(req);

            if (res.simpleUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminDeleteGlobalWebhook

Delete a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-global-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminDeleteGlobalWebhookRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminDeleteGlobalWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminDeleteGlobalWebhookRequest req = new EnterpriseAdminDeleteGlobalWebhookRequest("architecto", 919483L);            

            EnterpriseAdminDeleteGlobalWebhookResponse res = sdk.enterpriseAdmin.enterpriseAdminDeleteGlobalWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminDeleteImpersonationOAuthToken

Delete an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminDeleteImpersonationOAuthTokenRequest req = new EnterpriseAdminDeleteImpersonationOAuthTokenRequest("ullam");            

            EnterpriseAdminDeleteImpersonationOAuthTokenResponse res = sdk.enterpriseAdmin.enterpriseAdminDeleteImpersonationOAuthToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminDeletePersonalAccessToken

Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-personal-access-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminDeletePersonalAccessTokenRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminDeletePersonalAccessTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminDeletePersonalAccessTokenRequest req = new EnterpriseAdminDeletePersonalAccessTokenRequest(714242L);            

            EnterpriseAdminDeletePersonalAccessTokenResponse res = sdk.enterpriseAdmin.enterpriseAdminDeletePersonalAccessToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminDeletePreReceiveEnvironment

If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

*   _Cannot modify or delete the default environment_
*   _Cannot delete environment that has hooks_
*   _Cannot delete environment when download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-pre-receive-environment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminDeletePreReceiveEnvironmentRequest req = new EnterpriseAdminDeletePreReceiveEnvironmentRequest(469249L);            

            EnterpriseAdminDeletePreReceiveEnvironmentResponse res = sdk.enterpriseAdmin.enterpriseAdminDeletePreReceiveEnvironment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminDeletePreReceiveHook

Delete a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-pre-receive-hook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminDeletePreReceiveHookRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminDeletePreReceiveHookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminDeletePreReceiveHookRequest req = new EnterpriseAdminDeletePreReceiveHookRequest(998848L);            

            EnterpriseAdminDeletePreReceiveHookResponse res = sdk.enterpriseAdmin.enterpriseAdminDeletePreReceiveHook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminDeletePublicKey

Delete a public key

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-public-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminDeletePublicKeyRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminDeletePublicKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminDeletePublicKeyRequest req = new EnterpriseAdminDeletePublicKeyRequest("quibusdam");            

            EnterpriseAdminDeletePublicKeyResponse res = sdk.enterpriseAdmin.enterpriseAdminDeletePublicKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminDeleteUser

Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#suspend-a-user) is often a better option.

You can delete any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminDeleteUserRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminDeleteUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminDeleteUserRequest req = new EnterpriseAdminDeleteUserRequest("sed");            

            EnterpriseAdminDeleteUserResponse res = sdk.enterpriseAdmin.enterpriseAdminDeleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminDemoteSiteAdministrator

You can demote any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#demote-a-site-administrator>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminDemoteSiteAdministratorRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminDemoteSiteAdministratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminDemoteSiteAdministratorRequest req = new EnterpriseAdminDemoteSiteAdministratorRequest("saepe");            

            EnterpriseAdminDemoteSiteAdministratorResponse res = sdk.enterpriseAdmin.enterpriseAdminDemoteSiteAdministrator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminEnableOrDisableMaintenanceMode

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody req = new EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody("pariatur");            

            EnterpriseAdminEnableOrDisableMaintenanceModeResponse res = sdk.enterpriseAdmin.enterpriseAdminEnableOrDisableMaintenanceMode(req);

            if (res.maintenanceStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetAllAuthorizedSshKeys

Get all authorized SSH keys

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-all-authorized-ssh-keys>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetAllAuthorizedSshKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetAllAuthorizedSshKeysResponse res = sdk.enterpriseAdmin.enterpriseAdminGetAllAuthorizedSshKeys();

            if (res.sshKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetAllStats

Get all statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetAllStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetAllStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetAllStats();

            if (res.enterpriseOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetCommentStats

Get comment statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-comment-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetCommentStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetCommentStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetCommentStats();

            if (res.enterpriseCommentOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetConfigurationStatus

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-the-configuration-status>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetConfigurationStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetConfigurationStatusResponse res = sdk.enterpriseAdmin.enterpriseAdminGetConfigurationStatus();

            if (res.configurationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetDownloadStatusForPreReceiveEnvironment

In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest req = new EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest(37559L);            

            EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse res = sdk.enterpriseAdmin.enterpriseAdminGetDownloadStatusForPreReceiveEnvironment(req);

            if (res.preReceiveEnvironmentDownloadStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetGlobalWebhook

Get a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-global-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetGlobalWebhookRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminGetGlobalWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetGlobalWebhookRequest req = new EnterpriseAdminGetGlobalWebhookRequest("consequuntur", 508315L);            

            EnterpriseAdminGetGlobalWebhookResponse res = sdk.enterpriseAdmin.enterpriseAdminGetGlobalWebhook(req);

            if (res.globalHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetHooksStats

Get hooks statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-hooks-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetHooksStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetHooksStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetHooksStats();

            if (res.enterpriseHookOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetIssueStats

Get issue statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-issues-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetIssueStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetIssueStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetIssueStats();

            if (res.enterpriseIssueOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetLicenseInformation

Get license information

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-license-information>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetLicenseInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetLicenseInformationResponse res = sdk.enterpriseAdmin.enterpriseAdminGetLicenseInformation();

            if (res.licenseInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetMaintenanceStatus

Check your installation's maintenance status:

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-the-maintenance-status>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetMaintenanceStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetMaintenanceStatusResponse res = sdk.enterpriseAdmin.enterpriseAdminGetMaintenanceStatus();

            if (res.maintenanceStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetMilestoneStats

Get milestone statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-milestone-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetMilestoneStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetMilestoneStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetMilestoneStats();

            if (res.enterpriseMilestoneOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetOrgStats

Get organization statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-organization-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetOrgStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetOrgStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetOrgStats();

            if (res.enterpriseOrganizationOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetPagesStats

Get pages statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-pages-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPagesStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetPagesStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetPagesStats();

            if (res.enterprisePageOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetPreReceiveEnvironment

Get a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-pre-receive-environment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPreReceiveEnvironmentRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPreReceiveEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetPreReceiveEnvironmentRequest req = new EnterpriseAdminGetPreReceiveEnvironmentRequest(615560L);            

            EnterpriseAdminGetPreReceiveEnvironmentResponse res = sdk.enterpriseAdmin.enterpriseAdminGetPreReceiveEnvironment(req);

            if (res.preReceiveEnvironment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetPreReceiveHook

Get a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-pre-receive-hook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPreReceiveHookRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPreReceiveHookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetPreReceiveHookRequest req = new EnterpriseAdminGetPreReceiveHookRequest(166847L);            

            EnterpriseAdminGetPreReceiveHookResponse res = sdk.enterpriseAdmin.enterpriseAdminGetPreReceiveHook(req);

            if (res.preReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetPreReceiveHookForOrg

Get a pre-receive hook for an organization

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPreReceiveHookForOrgRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPreReceiveHookForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetPreReceiveHookForOrgRequest req = new EnterpriseAdminGetPreReceiveHookForOrgRequest("sunt", 779051L);            

            EnterpriseAdminGetPreReceiveHookForOrgResponse res = sdk.enterpriseAdmin.enterpriseAdminGetPreReceiveHookForOrg(req);

            if (res.orgPreReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetPreReceiveHookForRepo

Get a pre-receive hook for a repository

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPreReceiveHookForRepoRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPreReceiveHookForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetPreReceiveHookForRepoRequest req = new EnterpriseAdminGetPreReceiveHookForRepoRequest("illum", 864934L, "maxime");            

            EnterpriseAdminGetPreReceiveHookForRepoResponse res = sdk.enterpriseAdmin.enterpriseAdminGetPreReceiveHookForRepo(req);

            if (res.repositoryPreReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetPullRequestStats

Get pull request statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-pull-requests-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetPullRequestStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetPullRequestStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetPullRequestStats();

            if (res.enterprisePullRequestOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetRepoStats

Get repository statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-repository-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetRepoStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetRepoStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetRepoStats();

            if (res.enterpriseRepositoryOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetSettings

Get settings

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-settings>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetSettingsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetSettings();

            if (res.enterpriseSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminGetUserStats

Get users statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-users-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminGetUserStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminGetUserStatsResponse res = sdk.enterpriseAdmin.enterpriseAdminGetUserStats();

            if (res.enterpriseUserOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminListGlobalWebhooks

List global webhooks

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-global-webhooks>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminListGlobalWebhooksRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminListGlobalWebhooksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminListGlobalWebhooksRequest req = new EnterpriseAdminListGlobalWebhooksRequest("ea") {{
                page = 569101L;
                perPage = 139972L;
            }};            

            EnterpriseAdminListGlobalWebhooksResponse res = sdk.enterpriseAdmin.enterpriseAdminListGlobalWebhooks(req);

            if (res.globalHooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminListPersonalAccessTokens

Lists personal access tokens for all users, including admin users.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-personal-access-tokens>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminListPersonalAccessTokensRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminListPersonalAccessTokensResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminListPersonalAccessTokensRequest req = new EnterpriseAdminListPersonalAccessTokensRequest() {{
                page = 407183L;
                perPage = 33222L;
            }};            

            EnterpriseAdminListPersonalAccessTokensResponse res = sdk.enterpriseAdmin.enterpriseAdminListPersonalAccessTokens(req);

            if (res.authorizations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminListPreReceiveEnvironments

List pre-receive environments

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-pre-receive-environments>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveEnvironmentsRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveEnvironmentsResponse;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveEnvironmentsSortEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminListPreReceiveEnvironmentsRequest req = new EnterpriseAdminListPreReceiveEnvironmentsRequest() {{
                direction = DirectionEnum.ASC;
                page = 982575L;
                perPage = 697429L;
                sort = EnterpriseAdminListPreReceiveEnvironmentsSortEnum.UPDATED;
            }};            

            EnterpriseAdminListPreReceiveEnvironmentsResponse res = sdk.enterpriseAdmin.enterpriseAdminListPreReceiveEnvironments(req);

            if (res.preReceiveEnvironments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminListPreReceiveHooks

List pre-receive hooks

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-pre-receive-hooks>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksResponse;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksSortEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminListPreReceiveHooksRequest req = new EnterpriseAdminListPreReceiveHooksRequest() {{
                direction = DirectionEnum.ASC;
                page = 420075L;
                perPage = 722056L;
                sort = EnterpriseAdminListPreReceiveHooksSortEnum.CREATED;
            }};            

            EnterpriseAdminListPreReceiveHooksResponse res = sdk.enterpriseAdmin.enterpriseAdminListPreReceiveHooks(req);

            if (res.preReceiveHooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminListPreReceiveHooksForOrg

List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksForOrgRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksForOrgResponse;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksForOrgSortEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminListPreReceiveHooksForOrgRequest req = new EnterpriseAdminListPreReceiveHooksForOrgRequest("pariatur") {{
                direction = DirectionEnum.ASC;
                page = 975522L;
                perPage = 16627L;
                sort = EnterpriseAdminListPreReceiveHooksForOrgSortEnum.NAME;
            }};            

            EnterpriseAdminListPreReceiveHooksForOrgResponse res = sdk.enterpriseAdmin.enterpriseAdminListPreReceiveHooksForOrg(req);

            if (res.orgPreReceiveHooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminListPreReceiveHooksForRepo

List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksForRepoRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksForRepoResponse;
import org.openapis.openapi.models.operations.EnterpriseAdminListPreReceiveHooksForRepoSortEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminListPreReceiveHooksForRepoRequest req = new EnterpriseAdminListPreReceiveHooksForRepoRequest("amet", "aut") {{
                direction = DirectionEnum.DESC;
                page = 359978L;
                perPage = 944124L;
                sort = EnterpriseAdminListPreReceiveHooksForRepoSortEnum.NAME;
            }};            

            EnterpriseAdminListPreReceiveHooksForRepoResponse res = sdk.enterpriseAdmin.enterpriseAdminListPreReceiveHooksForRepo(req);

            if (res.repositoryPreReceiveHooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminListPublicKeys

List public keys

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-public-keys>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminListPublicKeysRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminListPublicKeysResponse;
import org.openapis.openapi.models.operations.EnterpriseAdminListPublicKeysSortEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminListPublicKeysRequest req = new EnterpriseAdminListPublicKeysRequest() {{
                direction = DirectionEnum.DESC;
                page = 171629L;
                perPage = 339404L;
                since = "totam";
                sort = EnterpriseAdminListPublicKeysSortEnum.UPDATED;
            }};            

            EnterpriseAdminListPublicKeysResponse res = sdk.enterpriseAdmin.enterpriseAdminListPublicKeys(req);

            if (res.publicKeyFulls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminPingGlobalWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@2.21/webhooks/#ping-event) to be sent to the webhook.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#ping-a-global-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminPingGlobalWebhookRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminPingGlobalWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminPingGlobalWebhookRequest req = new EnterpriseAdminPingGlobalWebhookRequest("eaque", 338985L);            

            EnterpriseAdminPingGlobalWebhookResponse res = sdk.enterpriseAdmin.enterpriseAdminPingGlobalWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminPromoteUserToBeSiteAdministrator

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminPromoteUserToBeSiteAdministratorRequest req = new EnterpriseAdminPromoteUserToBeSiteAdministratorRequest("nesciunt");            

            EnterpriseAdminPromoteUserToBeSiteAdministratorResponse res = sdk.enterpriseAdmin.enterpriseAdminPromoteUserToBeSiteAdministrator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminRemoveAuthorizedSshKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#remove-an-authorized-ssh-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminRemoveAuthorizedSshKeyRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminRemoveAuthorizedSshKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminRemoveAuthorizedSshKeyRequestBody req = new EnterpriseAdminRemoveAuthorizedSshKeyRequestBody("eos");            

            EnterpriseAdminRemoveAuthorizedSshKeyResponse res = sdk.enterpriseAdmin.enterpriseAdminRemoveAuthorizedSshKey(req);

            if (res.sshKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminRemovePreReceiveHookEnforcementForOrg

Removes any overrides for this hook at the org level for this org.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest req = new EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest("perferendis", 170986L);            

            EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse res = sdk.enterpriseAdmin.enterpriseAdminRemovePreReceiveHookEnforcementForOrg(req);

            if (res.orgPreReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminRemovePreReceiveHookEnforcementForRepo

Deletes any overridden enforcement on this repository for the specified hook.

Responds with effective values inherited from owner and/or global level.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest req = new EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest("minus", 463451L, "dolor");            

            EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse res = sdk.enterpriseAdmin.enterpriseAdminRemovePreReceiveHookEnforcementForRepo(req);

            if (res.repositoryPreReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminSetSettings

For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-settings).

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#set-settings>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminSetSettingsRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminSetSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminSetSettingsRequestBody req = new EnterpriseAdminSetSettingsRequestBody("vero");            

            EnterpriseAdminSetSettingsResponse res = sdk.enterpriseAdmin.enterpriseAdminSetSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminStartConfigurationProcess

This endpoint allows you to start a configuration process at any time for your updated settings to take effect:

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#start-a-configuration-process>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminStartConfigurationProcessResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminStartConfigurationProcessResponse res = sdk.enterpriseAdmin.enterpriseAdminStartConfigurationProcess();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminStartPreReceiveEnvironmentDownload

Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.

If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

* _Cannot modify or delete the default environment_
* _Can not start a new download when a download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#start-a-pre-receive-environment-download>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest req = new EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest(345352L);            

            EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse res = sdk.enterpriseAdmin.enterpriseAdminStartPreReceiveEnvironmentDownload(req);

            if (res.preReceiveEnvironmentDownloadStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminSuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.

You can suspend any user account except your own.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#suspend-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminSuspendUserRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminSuspendUserRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminSuspendUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminSuspendUserRequest req = new EnterpriseAdminSuspendUserRequest("hic") {{
                requestBody = new EnterpriseAdminSuspendUserRequestBody() {{
                    reason = "recusandae";
                }};;
            }};            

            EnterpriseAdminSuspendUserResponse res = sdk.enterpriseAdmin.enterpriseAdminSuspendUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminSyncLdapMappingForTeam

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminSyncLdapMappingForTeamRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminSyncLdapMappingForTeamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminSyncLdapMappingForTeamRequest req = new EnterpriseAdminSyncLdapMappingForTeamRequest(608253L);            

            EnterpriseAdminSyncLdapMappingForTeamResponse res = sdk.enterpriseAdmin.enterpriseAdminSyncLdapMappingForTeam(req);

            if (res.enterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminSyncLdapMappingForUser

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminSyncLdapMappingForUserRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminSyncLdapMappingForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminSyncLdapMappingForUserRequest req = new EnterpriseAdminSyncLdapMappingForUserRequest("facilis");            

            EnterpriseAdminSyncLdapMappingForUserResponse res = sdk.enterpriseAdmin.enterpriseAdminSyncLdapMappingForUser(req);

            if (res.enterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUnsuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#unsuspend-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUnsuspendUserRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUnsuspendUserRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUnsuspendUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUnsuspendUserRequest req = new EnterpriseAdminUnsuspendUserRequest("perspiciatis") {{
                requestBody = new EnterpriseAdminUnsuspendUserRequestBody() {{
                    reason = "voluptatem";
                }};;
            }};            

            EnterpriseAdminUnsuspendUserResponse res = sdk.enterpriseAdmin.enterpriseAdminUnsuspendUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdateGlobalWebhook

Parameters that are not provided will be overwritten with the default value or removed if no default exists.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-a-global-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateGlobalWebhookRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateGlobalWebhookRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateGlobalWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdateGlobalWebhookRequest req = new EnterpriseAdminUpdateGlobalWebhookRequest("porro", 164694L) {{
                requestBody = new EnterpriseAdminUpdateGlobalWebhookRequestBody() {{
                    active = false;
                    config = new EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig("blanditiis") {{
                        contentType = "error";
                        insecureSsl = "eaque";
                        secret = "occaecati";
                    }};;
                    events = new String[]{{
                        add("adipisci"),
                        add("asperiores"),
                        add("earum"),
                    }};
                }};;
            }};            

            EnterpriseAdminUpdateGlobalWebhookResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdateGlobalWebhook(req);

            if (res.globalHook2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdateLdapMappingForTeam

Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.

You can also update the LDAP mapping of a child team.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateLdapMappingForTeamRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateLdapMappingForTeamRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateLdapMappingForTeamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdateLdapMappingForTeamRequest req = new EnterpriseAdminUpdateLdapMappingForTeamRequest(267262L) {{
                requestBody = new EnterpriseAdminUpdateLdapMappingForTeamRequestBody() {{
                    ldapDn = "iste";
                }};;
            }};            

            EnterpriseAdminUpdateLdapMappingForTeamResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdateLdapMappingForTeam(req);

            if (res.ldapMappingTeam != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdateLdapMappingForUser

Update LDAP mapping for a user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateLdapMappingForUserRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateLdapMappingForUserRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateLdapMappingForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdateLdapMappingForUserRequest req = new EnterpriseAdminUpdateLdapMappingForUserRequest("dolorum") {{
                requestBody = new EnterpriseAdminUpdateLdapMappingForUserRequestBody() {{
                    ldapDn = "deleniti";
                }};;
            }};            

            EnterpriseAdminUpdateLdapMappingForUserResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdateLdapMappingForUser(req);

            if (res.ldapMappingUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdateOrgName

Update an organization name

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-an-organization-name>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateOrgNameRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateOrgNameRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateOrgNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdateOrgNameRequest req = new EnterpriseAdminUpdateOrgNameRequest(                new EnterpriseAdminUpdateOrgNameRequestBody("pariatur");, "provident");            

            EnterpriseAdminUpdateOrgNameResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdateOrgName(req);

            if (res.enterpriseAdminUpdateOrgName202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdatePreReceiveEnvironment

You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-a-pre-receive-environment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdatePreReceiveEnvironmentRequest req = new EnterpriseAdminUpdatePreReceiveEnvironmentRequest(750844L) {{
                requestBody = new EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody() {{
                    imageUrl = "libero";
                    name = "Alex Luettgen";
                }};;
            }};            

            EnterpriseAdminUpdatePreReceiveEnvironmentResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdatePreReceiveEnvironment(req);

            if (res.preReceiveEnvironment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdatePreReceiveHook

Update a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-a-pre-receive-hook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdatePreReceiveHookRequest req = new EnterpriseAdminUpdatePreReceiveHookRequest(209843L) {{
                requestBody = new EnterpriseAdminUpdatePreReceiveHookRequestBody() {{
                    allowDownstreamConfiguration = false;
                    enforcement = "dolor";
                    environment = new java.util.HashMap<String, Object>() {{
                        put("ipsum", "hic");
                    }};
                    name = "Felipe Klein";
                    script = "amet";
                    scriptRepository = new java.util.HashMap<String, Object>() {{
                        put("numquam", "veritatis");
                        put("ipsa", "ipsa");
                        put("iure", "odio");
                    }};
                }};;
            }};            

            EnterpriseAdminUpdatePreReceiveHookResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdatePreReceiveHook(req);

            if (res.preReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdatePreReceiveHookEnforcementForOrg

For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest req = new EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest("quaerat", 881005L) {{
                requestBody = new EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody() {{
                    allowDownstreamConfiguration = false;
                    enforcement = "quidem";
                }};;
            }};            

            EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdatePreReceiveHookEnforcementForOrg(req);

            if (res.orgPreReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdatePreReceiveHookEnforcementForRepo

For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest req = new EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest("voluptatibus", 377752L, "natus") {{
                requestBody = new EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody() {{
                    enforcement = EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum.ENABLED;
                }};;
            }};            

            EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdatePreReceiveHookEnforcementForRepo(req);

            if (res.repositoryPreReceiveHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpdateUsernameForUser

Update the username for a user

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-the-username-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateUsernameForUserRequest;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateUsernameForUserRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpdateUsernameForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpdateUsernameForUserRequest req = new EnterpriseAdminUpdateUsernameForUserRequest(                new EnterpriseAdminUpdateUsernameForUserRequestBody("atque");, "sit");            

            EnterpriseAdminUpdateUsernameForUserResponse res = sdk.enterpriseAdmin.enterpriseAdminUpdateUsernameForUser(req);

            if (res.enterpriseAdminUpdateUsernameForUser202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enterpriseAdminUpgradeLicense

This API upgrades your license and also triggers the configuration process.

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#upgrade-a-license>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnterpriseAdminUpgradeLicenseRequestBody;
import org.openapis.openapi.models.operations.EnterpriseAdminUpgradeLicenseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnterpriseAdminUpgradeLicenseRequestBody req = new EnterpriseAdminUpgradeLicenseRequestBody() {{
                license = "fugiat";
            }};            

            EnterpriseAdminUpgradeLicenseResponse res = sdk.enterpriseAdmin.enterpriseAdminUpgradeLicense(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnterpriseStatsGists

Get gist statistics

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-gist-statistics>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnterpriseStatsGistsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnterpriseStatsGistsResponse res = sdk.enterpriseAdmin.getEnterpriseStatsGists();

            if (res.enterpriseGistOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

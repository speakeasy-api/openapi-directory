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
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#add-an-authorized-ssh-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminAddAuthorizedSshKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminAddAuthorizedSshKeyRequestBody();
    $request->authorizedKey = 'magnam';

    $response = $sdk->enterpriseAdmin->enterpriseAdminAddAuthorizedSshKey($request);

    if ($response->sshKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateEnterpriseServerLicense

When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license.

Note that you need to `POST` to [`/setup/api/configure`](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.

When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:

1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-github-enterprise-server-license>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateEnterpriseServerLicenseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateEnterpriseServerLicenseRequestBody();
    $request->license = 'et';
    $request->password = 'excepturi';
    $request->settings = 'ullam';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateEnterpriseServerLicense($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateGlobalWebhook

Create a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateGlobalWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateGlobalWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateGlobalWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateGlobalWebhookRequest();
    $request->requestBody = new EnterpriseAdminCreateGlobalWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->config = new EnterpriseAdminCreateGlobalWebhookRequestBodyConfig();
    $request->requestBody->config->contentType = 'provident';
    $request->requestBody->config->insecureSsl = 'quos';
    $request->requestBody->config->secret = 'sint';
    $request->requestBody->config->url = 'accusantium';
    $request->requestBody->events = [
        'reiciendis',
        'mollitia',
        'ad',
    ];
    $request->requestBody->name = 'Carmen Treutel';
    $request->accept = 'quasi';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateGlobalWebhook($request);

    if ($response->globalHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateImpersonationOAuthToken

Create an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-an-impersonation-oauth-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateImpersonationOAuthTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateImpersonationOAuthTokenRequest();
    $request->requestBody = new EnterpriseAdminCreateImpersonationOAuthTokenRequestBody();
    $request->requestBody->scopes = [
        'doloribus',
        'debitis',
    ];
    $request->username = 'Devante_Schoen';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateImpersonationOAuthToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateOrg

Create an organization

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateOrgRequestBody();
    $request->admin = 'in';
    $request->login = 'architecto';
    $request->profileName = 'architecto';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateOrg($request);

    if ($response->organizationSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreatePreReceiveEnvironment

Create a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreatePreReceiveEnvironmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreatePreReceiveEnvironmentRequestBody();
    $request->imageUrl = 'repudiandae';
    $request->name = 'Lola Koss';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreatePreReceiveEnvironment($request);

    if ($response->preReceiveEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreatePreReceiveHook

Create a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-pre-receive-hook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreatePreReceiveHookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreatePreReceiveHookRequestBody();
    $request->allowDownstreamConfiguration = false;
    $request->enforcement = 'sed';
    $request->environment = [
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
        'sunt' => 'quo',
    ];
    $request->name = 'Ervin Schoen';
    $request->script = 'odit';
    $request->scriptRepository = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreatePreReceiveHook($request);

    if ($response->preReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateUser

If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.

The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.

If the login name or email address is already associated with an account, the server will return a `422` response.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateUserRequestBody();
    $request->email = 'Jacey.Johnston86@yahoo.com';
    $request->login = 'nemo';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateUser($request);

    if ($response->simpleUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeleteGlobalWebhook

Delete a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeleteGlobalWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeleteGlobalWebhookRequest();
    $request->accept = 'voluptatibus';
    $request->hookId = 16627;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeleteGlobalWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeleteImpersonationOAuthToken

Delete an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeleteImpersonationOAuthTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeleteImpersonationOAuthTokenRequest();
    $request->username = 'Russ76';

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeleteImpersonationOAuthToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeletePersonalAccessToken

Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-personal-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeletePersonalAccessTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeletePersonalAccessTokenRequest();
    $request->tokenId = 359978;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeletePersonalAccessToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeletePreReceiveEnvironment

If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

*   _Cannot modify or delete the default environment_
*   _Cannot delete environment that has hooks_
*   _Cannot delete environment when download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeletePreReceiveEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeletePreReceiveEnvironmentRequest();
    $request->preReceiveEnvironmentId = 944124;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeletePreReceiveEnvironment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeletePreReceiveHook

Delete a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-pre-receive-hook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeletePreReceiveHookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeletePreReceiveHookRequest();
    $request->preReceiveHookId = 729991;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeletePreReceiveHook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeletePublicKey

Delete a public key

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeletePublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeletePublicKeyRequest();
    $request->keyIds = 'nobis';

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeletePublicKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeleteUser

Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#suspend-a-user) is often a better option.

You can delete any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeleteUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeleteUserRequest();
    $request->username = 'Celestine.Hayes';

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDemoteSiteAdministrator

You can demote any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#demote-a-site-administrator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDemoteSiteAdministratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDemoteSiteAdministratorRequest();
    $request->username = 'Amos17';

    $response = $sdk->enterpriseAdmin->enterpriseAdminDemoteSiteAdministrator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminEnableOrDisableMaintenanceMode

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody();
    $request->maintenance = 'perferendis';

    $response = $sdk->enterpriseAdmin->enterpriseAdminEnableOrDisableMaintenanceMode($request);

    if ($response->maintenanceStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetAllAuthorizedSshKeys

Get all authorized SSH keys

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-all-authorized-ssh-keys>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetAllAuthorizedSshKeys();

    if ($response->sshKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetAllStats

Get all statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetAllStats();

    if ($response->enterpriseOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetCommentStats

Get comment statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-comment-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetCommentStats();

    if ($response->enterpriseCommentOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-the-configuration-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetConfigurationStatus();

    if ($response->configurationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetDownloadStatusForPreReceiveEnvironment

In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest();
    $request->preReceiveEnvironmentId = 170986;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetDownloadStatusForPreReceiveEnvironment($request);

    if ($response->preReceiveEnvironmentDownloadStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetGlobalWebhook

Get a global webhook

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetGlobalWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetGlobalWebhookRequest();
    $request->accept = 'minus';
    $request->hookId = 463451;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetGlobalWebhook($request);

    if ($response->globalHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetHooksStats

Get hooks statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-hooks-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetHooksStats();

    if ($response->enterpriseHookOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetIssueStats

Get issue statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-issues-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetIssueStats();

    if ($response->enterpriseIssueOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetLicenseInformation

Get license information

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-license-information>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetLicenseInformation();

    if ($response->licenseInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetMaintenanceStatus

Check your installation's maintenance status:

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-the-maintenance-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetMaintenanceStatus();

    if ($response->maintenanceStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetMilestoneStats

Get milestone statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-milestone-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetMilestoneStats();

    if ($response->enterpriseMilestoneOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetOrgStats

Get organization statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-organization-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetOrgStats();

    if ($response->enterpriseOrganizationOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPagesStats

Get pages statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-pages-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPagesStats();

    if ($response->enterprisePageOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPreReceiveEnvironment

Get a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetPreReceiveEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetPreReceiveEnvironmentRequest();
    $request->preReceiveEnvironmentId = 223924;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPreReceiveEnvironment($request);

    if ($response->preReceiveEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPreReceiveHook

Get a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-pre-receive-hook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetPreReceiveHookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetPreReceiveHookRequest();
    $request->preReceiveHookId = 874573;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPreReceiveHook($request);

    if ($response->preReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPreReceiveHookForOrg

Get a pre-receive hook for an organization

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetPreReceiveHookForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetPreReceiveHookForOrgRequest();
    $request->org = 'nostrum';
    $request->preReceiveHookId = 944120;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPreReceiveHookForOrg($request);

    if ($response->orgPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPreReceiveHookForRepo

Get a pre-receive hook for a repository

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetPreReceiveHookForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetPreReceiveHookForRepoRequest();
    $request->owner = 'recusandae';
    $request->preReceiveHookId = 608253;
    $request->repo = 'facilis';

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPreReceiveHookForRepo($request);

    if ($response->repositoryPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPullRequestStats

Get pull request statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-pull-requests-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPullRequestStats();

    if ($response->enterprisePullRequestOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetRepoStats

Get repository statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-repository-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetRepoStats();

    if ($response->enterpriseRepositoryOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetSettings

Get settings

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-settings>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetSettings();

    if ($response->enterpriseSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetUserStats

Get users statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-users-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetUserStats();

    if ($response->enterpriseUserOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListGlobalWebhooks

List global webhooks

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-global-webhooks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListGlobalWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListGlobalWebhooksRequest();
    $request->accept = 'perspiciatis';
    $request->page = 31838;
    $request->perPage = 783645;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListGlobalWebhooks($request);

    if ($response->globalHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPersonalAccessTokens

Lists personal access tokens for all users, including admin users.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-personal-access-tokens>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPersonalAccessTokensRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPersonalAccessTokensRequest();
    $request->page = 164694;
    $request->perPage = 500026;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPersonalAccessTokens($request);

    if ($response->authorizations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPreReceiveEnvironments

List pre-receive environments

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-pre-receive-environments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveEnvironmentsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPreReceiveEnvironmentsRequest();
    $request->direction = DirectionEnum::DESC;
    $request->page = 50370;
    $request->perPage = 577229;
    $request->sort = EnterpriseAdminListPreReceiveEnvironmentsSortEnum::NAME;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPreReceiveEnvironments($request);

    if ($response->preReceiveEnvironments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPreReceiveHooks

List pre-receive hooks

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-pre-receive-hooks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPreReceiveHooksRequest();
    $request->direction = DirectionEnum::ASC;
    $request->page = 992397;
    $request->perPage = 934214;
    $request->sort = EnterpriseAdminListPreReceiveHooksSortEnum::CREATED;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPreReceiveHooks($request);

    if ($response->preReceiveHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPreReceiveHooksForOrg

List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksForOrgRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksForOrgSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPreReceiveHooksForOrgRequest();
    $request->direction = DirectionEnum::DESC;
    $request->org = 'dolorum';
    $request->page = 535633;
    $request->perPage = 864282;
    $request->sort = EnterpriseAdminListPreReceiveHooksForOrgSortEnum::UPDATED;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPreReceiveHooksForOrg($request);

    if ($response->orgPreReceiveHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPreReceiveHooksForRepo

List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksForRepoRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksForRepoSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPreReceiveHooksForRepoRequest();
    $request->direction = DirectionEnum::DESC;
    $request->owner = 'libero';
    $request->page = 964490;
    $request->perPage = 311945;
    $request->repo = 'quos';
    $request->sort = EnterpriseAdminListPreReceiveHooksForRepoSortEnum::UPDATED;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPreReceiveHooksForRepo($request);

    if ($response->repositoryPreReceiveHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPublicKeys

List public keys

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-public-keys>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPublicKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPublicKeysSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPublicKeysRequest();
    $request->direction = DirectionEnum::ASC;
    $request->page = 209843;
    $request->perPage = 222443;
    $request->since = 'qui';
    $request->sort = EnterpriseAdminListPublicKeysSortEnum::CREATED;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPublicKeys($request);

    if ($response->publicKeyFulls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminPingGlobalWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@2.20/webhooks/#ping-event) to be sent to the webhook.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#ping-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminPingGlobalWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminPingGlobalWebhookRequest();
    $request->accept = 'hic';
    $request->hookId = 569574;

    $response = $sdk->enterpriseAdmin->enterpriseAdminPingGlobalWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminPromoteUserToBeSiteAdministrator

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminPromoteUserToBeSiteAdministratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminPromoteUserToBeSiteAdministratorRequest();
    $request->username = 'Myrtle_Klein';

    $response = $sdk->enterpriseAdmin->enterpriseAdminPromoteUserToBeSiteAdministrator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemoveAuthorizedSshKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#remove-an-authorized-ssh-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemoveAuthorizedSshKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemoveAuthorizedSshKeyRequestBody();
    $request->authorizedKey = 'amet';

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemoveAuthorizedSshKey($request);

    if ($response->sshKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemovePreReceiveHookEnforcementForOrg

Removes any overrides for this hook at the org level for this org.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest();
    $request->org = 'dolorum';
    $request->preReceiveHookId = 254356;

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemovePreReceiveHookEnforcementForOrg($request);

    if ($response->orgPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemovePreReceiveHookEnforcementForRepo

Deletes any overridden enforcement on this repository for the specified hook.

Responds with effective values inherited from owner and/or global level.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest();
    $request->owner = 'veritatis';
    $request->preReceiveHookId = 58029;
    $request->repo = 'ipsa';

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemovePreReceiveHookEnforcementForRepo($request);

    if ($response->repositoryPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetSettings

For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-settings).

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#set-settings>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSetSettingsRequestBody();
    $request->settings = 'iure';

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminStartConfigurationProcess

This endpoint allows you to start a configuration process at any time for your updated settings to take effect:

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#start-a-configuration-process>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminStartConfigurationProcess();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminStartPreReceiveEnvironmentDownload

Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.

If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

* _Cannot modify or delete the default environment_
* _Can not start a new download when a download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#start-a-pre-receive-environment-download>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest();
    $request->preReceiveEnvironmentId = 487838;

    $response = $sdk->enterpriseAdmin->enterpriseAdminStartPreReceiveEnvironmentDownload($request);

    if ($response->preReceiveEnvironmentDownloadStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.

You can suspend any user account except your own.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#suspend-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSuspendUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSuspendUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSuspendUserRequest();
    $request->requestBody = new EnterpriseAdminSuspendUserRequestBody();
    $request->requestBody->reason = 'quaerat';
    $request->username = 'Shaniya.Predovic61';

    $response = $sdk->enterpriseAdmin->enterpriseAdminSuspendUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSyncLdapMappingForTeam

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSyncLdapMappingForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSyncLdapMappingForTeamRequest();
    $request->teamId = 179603;

    $response = $sdk->enterpriseAdmin->enterpriseAdminSyncLdapMappingForTeam($request);

    if ($response->enterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSyncLdapMappingForUser

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSyncLdapMappingForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSyncLdapMappingForUserRequest();
    $request->username = 'Kari.Bailey74';

    $response = $sdk->enterpriseAdmin->enterpriseAdminSyncLdapMappingForUser($request);

    if ($response->enterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUnsuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#unsuspend-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUnsuspendUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUnsuspendUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUnsuspendUserRequest();
    $request->requestBody = new EnterpriseAdminUnsuspendUserRequestBody();
    $request->requestBody->reason = 'dolorum';
    $request->username = 'Javon_Kling60';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUnsuspendUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateGlobalWebhook

Parameters that are not provided will be overwritten with the default value or removed if no default exists.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateGlobalWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateGlobalWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateGlobalWebhookRequest();
    $request->requestBody = new EnterpriseAdminUpdateGlobalWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->config = new EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig();
    $request->requestBody->config->contentType = 'necessitatibus';
    $request->requestBody->config->insecureSsl = 'distinctio';
    $request->requestBody->config->secret = 'asperiores';
    $request->requestBody->config->url = 'nihil';
    $request->requestBody->events = [
        'voluptate',
    ];
    $request->accept = 'id';
    $request->hookId = 906418;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateGlobalWebhook($request);

    if ($response->globalHook2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateLdapMappingForTeam

Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.

You can also update the LDAP mapping of a child team.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateLdapMappingForTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateLdapMappingForTeamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateLdapMappingForTeamRequest();
    $request->requestBody = new EnterpriseAdminUpdateLdapMappingForTeamRequestBody();
    $request->requestBody->ldapDn = 'eius';
    $request->teamId = 137220;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateLdapMappingForTeam($request);

    if ($response->ldapMappingTeam !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateLdapMappingForUser

Update LDAP mapping for a user

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateLdapMappingForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateLdapMappingForUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateLdapMappingForUserRequest();
    $request->requestBody = new EnterpriseAdminUpdateLdapMappingForUserRequestBody();
    $request->requestBody->ldapDn = 'perferendis';
    $request->username = 'Daphne.Rosenbaum90';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateLdapMappingForUser($request);

    if ($response->ldapMappingUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateOrgName

Update an organization name

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-an-organization-name>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateOrgNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateOrgNameRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateOrgNameRequest();
    $request->requestBody = new EnterpriseAdminUpdateOrgNameRequestBody();
    $request->requestBody->login = 'suscipit';
    $request->org = 'deserunt';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateOrgName($request);

    if ($response->enterpriseAdminUpdateOrgName202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdatePreReceiveEnvironment

You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdatePreReceiveEnvironmentRequest();
    $request->requestBody = new EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody();
    $request->requestBody->imageUrl = 'provident';
    $request->requestBody->name = 'Kari Leannon PhD';
    $request->preReceiveEnvironmentId = 311860;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdatePreReceiveEnvironment($request);

    if ($response->preReceiveEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdatePreReceiveHook

Update a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-a-pre-receive-hook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdatePreReceiveHookRequest();
    $request->requestBody = new EnterpriseAdminUpdatePreReceiveHookRequestBody();
    $request->requestBody->allowDownstreamConfiguration = false;
    $request->requestBody->enforcement = 'tempora';
    $request->requestBody->environment = [
        'quod' => 'officiis',
        'qui' => 'dolorum',
    ];
    $request->requestBody->name = 'Cory Pfeffer';
    $request->requestBody->script = 'quisquam';
    $request->requestBody->scriptRepository = [
        'amet' => 'tempore',
        'accusamus' => 'numquam',
        'enim' => 'dolorem',
        'sapiente' => 'totam',
    ];
    $request->preReceiveHookId = 471752;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdatePreReceiveHook($request);

    if ($response->preReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdatePreReceiveHookEnforcementForOrg

For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest();
    $request->requestBody = new EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody();
    $request->requestBody->allowDownstreamConfiguration = false;
    $request->requestBody->enforcement = 'sit';
    $request->org = 'expedita';
    $request->preReceiveHookId = 207470;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdatePreReceiveHookEnforcementForOrg($request);

    if ($response->orgPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdatePreReceiveHookEnforcementForRepo

For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest();
    $request->requestBody = new EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody();
    $request->requestBody->enforcement = EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum::ENABLED;
    $request->owner = 'vel';
    $request->preReceiveHookId = 730442;
    $request->repo = 'voluptas';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdatePreReceiveHookEnforcementForRepo($request);

    if ($response->repositoryPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateUsernameForUser

Update the username for a user

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-the-username-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateUsernameForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateUsernameForUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateUsernameForUserRequest();
    $request->requestBody = new EnterpriseAdminUpdateUsernameForUserRequestBody();
    $request->requestBody->login = 'deserunt';
    $request->username = 'Jamaal18';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateUsernameForUser($request);

    if ($response->enterpriseAdminUpdateUsernameForUser202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpgradeLicense

This API upgrades your license and also triggers the configuration process.

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#upgrade-a-license>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpgradeLicenseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpgradeLicenseRequestBody();
    $request->license = 'cupiditate';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpgradeLicense($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnterpriseStatsGists

Get gist statistics

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-gist-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->getEnterpriseStatsGists();

    if ($response->enterpriseGistOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

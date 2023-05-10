# SDK

## Overview

<p><fullname>Amazon Web Services Support App in Slack</fullname> <p>You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can perform the following tasks directly in your Slack channel:</p> <ul> <li> <p>Create, search, update, and resolve your support cases</p> </li> <li> <p>Request service quota increases for your account</p> </li> <li> <p>Invite Amazon Web Services Support agents to your channel so that you can chat directly about your support cases</p> </li> </ul> <p>For more information about how to perform these actions in Slack, see the following documentation in the <i>Amazon Web Services Support User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html">Amazon Web Services Support App in Slack</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/joining-a-live-chat-session.html">Joining a live chat session with Amazon Web Services Support</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/service-quota-increase.html">Requesting service quota increases</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-commands.html">Amazon Web Services Support App commands in Slack</a> </p> </li> </ul> <p>You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack configurations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace to enable the Amazon Web Services Support App</a>.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API. </p> </li> <li> <p>For more information about the Amazon Web Services Support App endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/awssupport.html#awssupport_app_region">Amazon Web Services Support App in Slack endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> </ul> </note></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/supportapp/>
### Available Operations

* [createSlackChannelConfiguration](#createslackchannelconfiguration) - <p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>
* [deleteAccountAlias](#deleteaccountalias) - Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [deleteSlackChannelConfiguration](#deleteslackchannelconfiguration) - Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.
* [deleteSlackWorkspaceConfiguration](#deleteslackworkspaceconfiguration) - Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.
* [getAccountAlias](#getaccountalias) - Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [listSlackChannelConfigurations](#listslackchannelconfigurations) - Lists the Slack channel configurations for an Amazon Web Services account.
* [listSlackWorkspaceConfigurations](#listslackworkspaceconfigurations) - Lists the Slack workspace configurations for an Amazon Web Services account.
* [putAccountAlias](#putaccountalias) - Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [registerSlackWorkspaceForOrganization](#registerslackworkspacefororganization) - <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>
* [updateSlackChannelConfiguration](#updateslackchannelconfiguration) - Updates the configuration for a Slack channel, such as case update notifications.

## createSlackChannelConfiguration

<p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlackChannelConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlackChannelConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSlackChannelConfigurationRequest();
    $request->requestBody = new CreateSlackChannelConfigurationRequestBody();
    $request->requestBody->channelId = 'iure';
    $request->requestBody->channelName = 'magnam';
    $request->requestBody->channelRoleArn = 'debitis';
    $request->requestBody->notifyOnAddCorrespondenceToCase = false;
    $request->requestBody->notifyOnCaseSeverity = CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum::NONE;
    $request->requestBody->notifyOnCreateOrReopenCase = false;
    $request->requestBody->notifyOnResolveCase = false;
    $request->requestBody->teamId = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->createSlackChannelConfiguration($request);

    if ($response->createSlackChannelConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccountAlias

Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountAliasRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->deleteAccountAlias($request);

    if ($response->deleteAccountAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSlackChannelConfiguration

Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSlackChannelConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSlackChannelConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSlackChannelConfigurationRequest();
    $request->requestBody = new DeleteSlackChannelConfigurationRequestBody();
    $request->requestBody->channelId = 'deserunt';
    $request->requestBody->teamId = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->deleteSlackChannelConfiguration($request);

    if ($response->deleteSlackChannelConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSlackWorkspaceConfiguration

Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSlackWorkspaceConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSlackWorkspaceConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSlackWorkspaceConfigurationRequest();
    $request->requestBody = new DeleteSlackWorkspaceConfigurationRequestBody();
    $request->requestBody->teamId = 'maiores';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->deleteSlackWorkspaceConfiguration($request);

    if ($response->deleteSlackWorkspaceConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountAlias

Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountAliasRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getAccountAlias($request);

    if ($response->getAccountAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSlackChannelConfigurations

Lists the Slack channel configurations for an Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSlackChannelConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSlackChannelConfigurationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSlackChannelConfigurationsRequest();
    $request->requestBody = new ListSlackChannelConfigurationsRequestBody();
    $request->requestBody->nextToken = 'optio';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';
    $request->nextToken = 'cum';

    $response = $sdk->sdk->listSlackChannelConfigurations($request);

    if ($response->listSlackChannelConfigurationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSlackWorkspaceConfigurations

Lists the Slack workspace configurations for an Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSlackWorkspaceConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSlackWorkspaceConfigurationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSlackWorkspaceConfigurationsRequest();
    $request->requestBody = new ListSlackWorkspaceConfigurationsRequestBody();
    $request->requestBody->nextToken = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->nextToken = 'iste';

    $response = $sdk->sdk->listSlackWorkspaceConfigurations($request);

    if ($response->listSlackWorkspaceConfigurationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountAlias

Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountAliasRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountAliasRequest();
    $request->requestBody = new PutAccountAliasRequestBody();
    $request->requestBody->accountAlias = 'dolor';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->putAccountAlias($request);

    if ($response->putAccountAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerSlackWorkspaceForOrganization

<p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterSlackWorkspaceForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterSlackWorkspaceForOrganizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterSlackWorkspaceForOrganizationRequest();
    $request->requestBody = new RegisterSlackWorkspaceForOrganizationRequestBody();
    $request->requestBody->teamId = 'iste';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->registerSlackWorkspaceForOrganization($request);

    if ($response->registerSlackWorkspaceForOrganizationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSlackChannelConfiguration

Updates the configuration for a Slack channel, such as case update notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlackChannelConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlackChannelConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSlackChannelConfigurationRequest();
    $request->requestBody = new UpdateSlackChannelConfigurationRequestBody();
    $request->requestBody->channelId = 'mollitia';
    $request->requestBody->channelName = 'laborum';
    $request->requestBody->channelRoleArn = 'dolores';
    $request->requestBody->notifyOnAddCorrespondenceToCase = false;
    $request->requestBody->notifyOnCaseSeverity = UpdateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum::NONE;
    $request->requestBody->notifyOnCreateOrReopenCase = false;
    $request->requestBody->notifyOnResolveCase = false;
    $request->requestBody->teamId = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->updateSlackChannelConfiguration($request);

    if ($response->updateSlackChannelConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

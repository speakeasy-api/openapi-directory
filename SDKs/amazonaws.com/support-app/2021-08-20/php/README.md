# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->requestBody->channelId = 'corrupti';
    $request->requestBody->channelName = 'provident';
    $request->requestBody->channelRoleArn = 'distinctio';
    $request->requestBody->notifyOnAddCorrespondenceToCase = false;
    $request->requestBody->notifyOnCaseSeverity = CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum::HIGH;
    $request->requestBody->notifyOnCreateOrReopenCase = false;
    $request->requestBody->notifyOnResolveCase = false;
    $request->requestBody->teamId = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->createSlackChannelConfiguration($request);

    if ($response->createSlackChannelConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createSlackChannelConfiguration](docs/sdk/README.md#createslackchannelconfiguration) - <p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>
* [deleteAccountAlias](docs/sdk/README.md#deleteaccountalias) - Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [deleteSlackChannelConfiguration](docs/sdk/README.md#deleteslackchannelconfiguration) - Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.
* [deleteSlackWorkspaceConfiguration](docs/sdk/README.md#deleteslackworkspaceconfiguration) - Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.
* [getAccountAlias](docs/sdk/README.md#getaccountalias) - Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [listSlackChannelConfigurations](docs/sdk/README.md#listslackchannelconfigurations) - Lists the Slack channel configurations for an Amazon Web Services account.
* [listSlackWorkspaceConfigurations](docs/sdk/README.md#listslackworkspaceconfigurations) - Lists the Slack workspace configurations for an Amazon Web Services account.
* [putAccountAlias](docs/sdk/README.md#putaccountalias) - Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [registerSlackWorkspaceForOrganization](docs/sdk/README.md#registerslackworkspacefororganization) - <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>
* [updateSlackChannelConfiguration](docs/sdk/README.md#updateslackchannelconfiguration) - Updates the configuration for a Slack channel, such as case update notifications.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
